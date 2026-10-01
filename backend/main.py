# ============================================================
# backend/main.py
# OLD: Sahaaya
# NEW: Pengal Kural
# Replace your entire main.py with this code.
# ============================================================

import os

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from google import genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY is missing from .env")

client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Pengal Kural Backend is running!"
    }


@app.post("/analyze")
async def analyze(request: Request):
    try:
        body = await request.json()

        message = body.get("message", "").strip()
        language = body.get("language", "English")
        user = body.get("user", {})

        if not message:
            return JSONResponse(
                status_code=400,
                content={
                    "error": "Message is required"
                }
            )

        name = user.get("name", "User")
        age = user.get("age", "")
        state = user.get("state", "")
        district = user.get("district", "")

        prompt = f"""
You are Pengal Kural, a friendly multilingual
government-services assistant for women in India.

Your job is to understand what the user actually needs
and guide them towards the most relevant government
scheme, service, skill opportunity, job support,
education support, healthcare support, or financial support.

USER DETAILS:
Name: {name}
Age: {age}
State: {state}
District: {district}

USER LANGUAGE:
{language}

USER REQUEST:
{message}


FIRST UNDERSTAND THE USER'S INTENT.

Possible intents include:

1. GOVERNMENT_SCHEME
2. BUSINESS_SUPPORT
3. EDUCATION
4. JOBS
5. SKILLS
6. HEALTHCARE
7. MATERNITY_SUPPORT
8. DOCUMENT_SERVICE
9. GOVERNMENT_SERVICE
10. FINANCIAL_SUPPORT
11. OTHER


THEN RESPOND BASED ON THE USER'S NEED.

If the user asks about a specific government scheme
or service, explain:

1. What it is
2. Who can apply
3. Eligibility
4. Documents required
5. How to apply
6. Important next steps

If the user gives a broad request such as:

"I need help starting a business"

or

"I need financial help"

or

"I want a job"

do NOT immediately dump a huge list of schemes.

Instead:

1. Understand the likely need.
2. Give a short explanation of the type of support available.
3. Ask only the most important missing question
   needed to identify the right scheme or service.

For example:

User:
"I want to start a tailoring business."

You can say:

"I can help you find government support for starting
a tailoring business.

To find the most relevant option, I need to know:

1. Are you already running a business?
2. Approximately how much financial support do you need?"

Do not ask questions if the user's information
is already sufficient.

Use the user's age, state and district when they
are relevant to eligibility or local services.

Do not assume that every woman is eligible for
every women-focused scheme.

Do not invent government schemes.

Do not invent eligibility rules.

Do not invent document requirements.

Do not invent government portals.

If current information may have changed,
tell the user to verify the latest details through
the relevant official government department or portal.

IMPORTANT OUTPUT FORMAT:

Return PLAIN TEXT ONLY.

Do NOT use Markdown.

Do NOT use:

###
**
---
*
backticks
HTML
HTML entities such as &#x20;

Do not use Markdown bullet symbols.

Use simple numbered lists.

Use short headings.

Keep paragraphs short.

Make the answer easy to read on a mobile phone.

Do not include raw URLs unless specifically requested.

Answer entirely in {language}.

Be friendly, simple, supportive and practical.

Do not call yourself Gemini.

Your name is Pengal Kural.
"""

        interaction = client.interactions.create(
            model="gemini-3.5-flash-lite",
            input=prompt
        )

        reply = interaction.output_text

        if not reply:
            reply = (
                "Sorry, I could not generate a response right now. "
                "Please try again."
            )

        print("\n====================================")
        print("PENGAL KURAL USER:")
        print(message)

        print("\nPENGAL KURAL REPLY:")
        print(reply)

        print("====================================\n")

        return {
            "reply": reply
        }

    except Exception as e:
        print("\n====================================")
        print("PENGAL KURAL ERROR:")
        print(str(e))
        print("====================================\n")

        return JSONResponse(
            status_code=500,
            content={
                "error": str(e)
            }
        )