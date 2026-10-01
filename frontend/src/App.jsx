// ============================================================
// App.jsx
// OLD: SAHAAYA
// NEW: PENGAL KURAL
// Replace your entire App.jsx with this code.
// ============================================================

import { useEffect, useState } from "react"
import "./App.css"

const BRAND_NAME = "PENGAL KURAL"

const languages = [
  { code: "en-IN", key: "english", native: "English", icon: "EN" },
  { code: "ta-IN", key: "tamil", native: "தமிழ்", icon: "த" },
  { code: "hi-IN", key: "hindi", native: "हिन्दी", icon: "हि" },
  { code: "te-IN", key: "telugu", native: "తెలుగు", icon: "తె" },
  { code: "kn-IN", key: "kannada", native: "ಕನ್ನಡ", icon: "ಕ" },
  { code: "ml-IN", key: "malayalam", native: "മലയാളം", icon: "മ" },
]

const statesAndDistricts = {
  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ],

  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Ananthapuramu",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "Dr. B. R. Ambedkar Konaseema",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Srikakulam",
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa",
  ],

  Karnataka: [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir",
  ],

  Kerala: [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ],

  Telangana: [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hanamkonda",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem Asifabad",
    "Mahabubabad",
    "Mahbubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri",
  ],

  Maharashtra: [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ],

  Delhi: [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],
}

const translations = {
  english: {
    welcome: "Your voice to government services",
    subtitle:
      "Speak naturally. Get simple guidance. Access services independently.",
    start: "Get Started",
    chooseLanguage: "Choose your language",
    languageSubtitle: "You can change this later.",
    continue: "Continue",
    back: "Back",
    yourDetails: "Tell us a little about you",
    detailsSubtitle:
      "This helps us give you more relevant guidance.",
    name: "Your name",
    namePlaceholder: "Enter your name",
    age: "Age",
    agePlaceholder: "Enter your age",
    state: "State",
    statePlaceholder: "Select your state",
    district: "District",
    districtPlaceholder: "Select your district",
    finish: "Continue to Pengal Kural",
    hello: "Hello",
    help: "How can I help you today?",
    speak: "Tap to speak",
    listening: "Listening...",
    typeHere: "Or type your request here",
    send: "Send",
    schemes: "Government Schemes",
    services: "Government Services",
    skills: "Skills & Jobs",
    simple: "Simple guidance",
    voiceFirst: "Voice first",
    languageSupport: "Your language",
  },

  tamil: {
    welcome: "அரசாங்க சேவைகளுக்கான உங்கள் குரல் உதவியாளர்",
    subtitle:
      "இயல்பாகப் பேசுங்கள். எளிய வழிகாட்டுதலைப் பெறுங்கள். சேவைகளை நீங்களே பயன்படுத்துங்கள்.",
    start: "தொடங்குங்கள்",
    chooseLanguage: "உங்கள் மொழியைத் தேர்வு செய்யுங்கள்",
    languageSubtitle: "இதைப் பின்னர் மாற்றலாம்.",
    continue: "தொடரவும்",
    back: "பின்னால்",
    yourDetails: "உங்களைப் பற்றி சிறிது சொல்லுங்கள்",
    detailsSubtitle:
      "உங்களுக்கு ஏற்ற வழிகாட்டுதலை வழங்க இந்தத் தகவல் உதவும்.",
    name: "உங்கள் பெயர்",
    namePlaceholder: "உங்கள் பெயரை உள்ளிடுங்கள்",
    age: "வயது",
    agePlaceholder: "உங்கள் வயதை உள்ளிடுங்கள்",
    state: "மாநிலம்",
    statePlaceholder: "உங்கள் மாநிலத்தைத் தேர்வு செய்யுங்கள்",
    district: "மாவட்டம்",
    districtPlaceholder: "உங்கள் மாவட்டத்தைத் தேர்வு செய்யுங்கள்",
    finish: "Pengal Kural-ஐத் தொடங்குங்கள்",
    hello: "வணக்கம்",
    help: "இன்று நான் உங்களுக்கு எப்படி உதவலாம்?",
    speak: "பேச அழுத்துங்கள்",
    listening: "கேட்டுக்கொண்டிருக்கிறேன்...",
    typeHere: "அல்லது உங்கள் தேவையை எழுதுங்கள்",
    send: "அனுப்பு",
    schemes: "அரசாங்க திட்டங்கள்",
    services: "அரசாங்க சேவைகள்",
    skills: "திறன் & வேலைவாய்ப்பு",
    simple: "எளிய வழிகாட்டுதல்",
    voiceFirst: "குரல் முதலில்",
    languageSupport: "உங்கள் மொழியில்",
  },

  hindi: {
    welcome: "सरकारी सेवाओं तक आपकी आवाज़",
    subtitle:
      "स्वाभाविक रूप से बोलें। आसान मार्गदर्शन पाएं। सेवाओं का उपयोग खुद करें।",
    start: "शुरू करें",
    chooseLanguage: "अपनी भाषा चुनें",
    languageSubtitle: "आप इसे बाद में बदल सकते हैं।",
    continue: "जारी रखें",
    back: "वापस",
    yourDetails: "अपने बारे में थोड़ा बताएं",
    detailsSubtitle:
      "इससे हम आपको बेहतर मार्गदर्शन दे पाएंगे।",
    name: "आपका नाम",
    namePlaceholder: "अपना नाम लिखें",
    age: "उम्र",
    agePlaceholder: "अपनी उम्र लिखें",
    state: "राज्य",
    statePlaceholder: "अपना राज्य चुनें",
    district: "जिला",
    districtPlaceholder: "अपना जिला चुनें",
    finish: "Pengal Kural शुरू करें",
    hello: "नमस्ते",
    help: "आज मैं आपकी कैसे मदद कर सकती हूँ?",
    speak: "बोलने के लिए दबाएं",
    listening: "सुन रही हूँ...",
    typeHere: "या अपनी जरूरत लिखें",
    send: "भेजें",
    schemes: "सरकारी योजनाएं",
    services: "सरकारी सेवाएं",
    skills: "कौशल और नौकरियां",
    simple: "आसान मार्गदर्शन",
    voiceFirst: "आवाज़ पहले",
    languageSupport: "आपकी भाषा में",
  },

  telugu: {
    welcome: "ప్రభుత్వ సేవలకు మీ వాయిస్ సహాయకుడు",
    subtitle:
      "సహజంగా మాట్లాడండి. సులభమైన మార్గదర్శకత్వం పొందండి. సేవలను మీరే ఉపయోగించండి.",
    start: "ప్రారంభించండి",
    chooseLanguage: "మీ భాషను ఎంచుకోండి",
    languageSubtitle: "దీనిని తర్వాత మార్చవచ్చు.",
    continue: "కొనసాగించండి",
    back: "వెనుకకు",
    yourDetails: "మీ గురించి కొంచెం చెప్పండి",
    detailsSubtitle:
      "మీకు సరైన మార్గదర్శకత్వం ఇవ్వడానికి ఇది సహాయపడుతుంది.",
    name: "మీ పేరు",
    namePlaceholder: "మీ పేరును నమోదు చేయండి",
    age: "వయస్సు",
    agePlaceholder: "మీ వయస్సును నమోదు చేయండి",
    state: "రాష్ట్రం",
    statePlaceholder: "మీ రాష్ట్రాన్ని ఎంచుకోండి",
    district: "జిల్లా",
    districtPlaceholder: "మీ జిల్లాను ఎంచుకోండి",
    finish: "Pengal Kural ప్రారంభించండి",
    hello: "నమస్కారం",
    help: "ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    speak: "మాట్లాడటానికి నొక్కండి",
    listening: "వింటున్నాను...",
    typeHere: "లేదా మీ అవసరాన్ని టైప్ చేయండి",
    send: "పంపండి",
    schemes: "ప్రభుత్వ పథకాలు",
    services: "ప్రభుత్వ సేవలు",
    skills: "నైపుణ్యాలు & ఉద్యోగాలు",
    simple: "సులభమైన మార్గదర్శకత్వం",
    voiceFirst: "వాయిస్ మొదట",
    languageSupport: "మీ భాషలో",
  },

  kannada: {
    welcome: "ಸರ್ಕಾರಿ ಸೇವೆಗಳಿಗೆ ನಿಮ್ಮ ಧ್ವನಿ ಸಹಾಯಕ",
    subtitle:
      "ಸಹಜವಾಗಿ ಮಾತನಾಡಿ. ಸರಳ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ. ಸೇವೆಗಳನ್ನು ನೀವೇ ಬಳಸಿ.",
    start: "ಪ್ರಾರಂಭಿಸಿ",
    chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    languageSubtitle: "ಇದನ್ನು ನಂತರ ಬದಲಾಯಿಸಬಹುದು.",
    continue: "ಮುಂದುವರಿಸಿ",
    back: "ಹಿಂದೆ",
    yourDetails: "ನಿಮ್ಮ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ತಿಳಿಸಿ",
    detailsSubtitle:
      "ನಿಮಗೆ ಸೂಕ್ತವಾದ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    name: "ನಿಮ್ಮ ಹೆಸರು",
    namePlaceholder: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    age: "ವಯಸ್ಸು",
    agePlaceholder: "ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ",
    state: "ರಾಜ್ಯ",
    statePlaceholder: "ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    district: "ಜಿಲ್ಲೆ",
    districtPlaceholder: "ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    finish: "Pengal Kural ಪ್ರಾರಂಭಿಸಿ",
    hello: "ನಮಸ್ಕಾರ",
    help: "ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    speak: "ಮಾತನಾಡಲು ಒತ್ತಿರಿ",
    listening: "ಕೇಳುತ್ತಿದ್ದೇನೆ...",
    typeHere: "ಅಥವಾ ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಬರೆಯಿರಿ",
    send: "ಕಳುಹಿಸಿ",
    schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    services: "ಸರ್ಕಾರಿ ಸೇವೆಗಳು",
    skills: "ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಉದ್ಯೋಗಗಳು",
    simple: "ಸರಳ ಮಾರ್ಗದರ್ಶನ",
    voiceFirst: "ಧ್ವನಿ ಮೊದಲು",
    languageSupport: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ",
  },

  malayalam: {
    welcome: "സർക്കാർ സേവനങ്ങളിലേക്കുള്ള നിങ്ങളുടെ ശബ്ദ സഹായി",
    subtitle:
      "സ്വാഭാവികമായി സംസാരിക്കൂ. ലളിതമായ മാർഗനിർദേശം നേടൂ. സേവനങ്ങൾ സ്വയം ഉപയോഗിക്കൂ.",
    start: "ആരംഭിക്കുക",
    chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    languageSubtitle: "ഇത് പിന്നീട് മാറ്റാം.",
    continue: "തുടരുക",
    back: "തിരികെ",
    yourDetails: "നിങ്ങളെക്കുറിച്ച് കുറച്ച് പറയൂ",
    detailsSubtitle:
      "നിങ്ങൾക്ക് അനുയോജ്യമായ മാർഗനിർദേശം നൽകാൻ ഇത് സഹായിക്കും.",
    name: "നിങ്ങളുടെ പേര്",
    namePlaceholder: "പേര് നൽകുക",
    age: "പ്രായം",
    agePlaceholder: "പ്രായം നൽകുക",
    state: "സംസ്ഥാനം",
    statePlaceholder: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    district: "ജില്ല",
    districtPlaceholder: "ജില്ല തിരഞ്ഞെടുക്കുക",
    finish: "Pengal Kural ആരംഭിക്കുക",
    hello: "നമസ്കാരം",
    help: "ഇന്ന് എങ്ങനെ സഹായിക്കാം?",
    speak: "സംസാരിക്കാൻ അമർത്തുക",
    listening: "കേൾക്കുന്നു...",
    typeHere: "അല്ലെങ്കിൽ നിങ്ങളുടെ ആവശ്യം എഴുതുക",
    send: "അയയ്ക്കുക",
    schemes: "സർക്കാർ പദ്ധതികൾ",
    services: "സർക്കാർ സേവനങ്ങൾ",
    skills: "നൈപുണ്യങ്ങളും ജോലികളും",
    simple: "ലളിതമായ മാർഗനിർദേശം",
    voiceFirst: "ശബ്ദം ആദ്യം",
    languageSupport: "നിങ്ങളുടെ ഭാഷയിൽ",
  },
}

function App() {
  const [screen, setScreen] = useState("welcome")
  const [language, setLanguage] = useState(null)

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    state: "",
    district: "",
  })

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")
  const [loading, setLoading] = useState(false)
  const [listening, setListening] = useState(false)

  const t = translations[language?.key || "english"]

  const districts =
    profile.state && statesAndDistricts[profile.state]
      ? statesAndDistricts[profile.state]
      : []

  useEffect(() => {
    if (language) {
      document.documentElement.lang = language.code
    }
  }, [language])

  const selectLanguage = (lang) => {
    setLanguage(lang)
  }

  const goToLanguage = () => {
    setScreen("language")
  }

  const finishDetails = () => {
    if (
      !profile.name ||
      !profile.age ||
      !profile.state ||
      !profile.district
    ) {
      return
    }

    setScreen("home")
  }

  const cleanReply = (text) => {
    if (!text) return ""

    return text
      .replace(/&#x20;/g, " ")
      .replace(/&#32;/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\\([*#-])/g, "$1")
      .replace(/\*\*/g, "")
      .replace(/\\\*/g, "")
      .replace(/\\#/g, "#")
      .replace(/\\-/g, "-")
      .replace(/\\+/g, "")
      .replace(/^\s*---+\s*$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  }

  const sendMessage = async (text = message) => {
    if (!text.trim() || loading) return

    setLoading(true)
    setMessage(text)

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text,
            language: language?.native || "English",
            user: profile,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || `Server error: ${response.status}`
        )
      }

      setReply(
        cleanReply(
          data.reply || "No response received."
        )
      )
    } catch (error) {
      console.error("Pengal Kural error:", error)

      setReply(
        "Something went wrong. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert(
        "Voice recognition is not supported in this browser."
      )
      return
    }

    const recognition = new SpeechRecognition()

    recognition.lang =
      language?.code || "en-IN"

    recognition.interimResults = false
    recognition.continuous = false

    recognition.onstart = () => {
      setListening(true)
    }

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript

      setMessage(transcript)
      sendMessage(transcript)
    }

    recognition.onerror = (event) => {
      console.error(
        "Speech recognition error:",
        event.error
      )

      setListening(false)
    }

    recognition.onend = () => {
      setListening(false)
    }

    recognition.start()
  }

  const speakReply = () => {
    if (!reply || !window.speechSynthesis) {
      return
    }

    window.speechSynthesis.cancel()

    const utterance =
      new SpeechSynthesisUtterance(
        cleanReply(reply)
      )

    utterance.lang =
      language?.code || "en-IN"

    utterance.rate = 0.9

    window.speechSynthesis.speak(
      utterance
    )
  }

  if (screen === "welcome") {
    return (
      <main className="app-shell welcome-screen">
        <div className="hero-card">

          <div className="brand-mark">
            P
          </div>

          <p className="eyebrow">
            {BRAND_NAME}
          </p>

          <h1>
            {t.welcome}
          </h1>

          <p className="hero-text">
            {t.subtitle}
          </p>

          <div className="flow-preview">
            <span>Speak</span>
            <span>→</span>
            <span>Get Guided</span>
            <span>→</span>
            <span>Access</span>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={goToLanguage}
          >
            {t.start}
          </button>

          <button
            type="button"
            className="language-link"
            onClick={goToLanguage}
          >
            🌐 {t.chooseLanguage}
          </button>

        </div>
      </main>
    )
  }

  if (screen === "language") {
    return (
      <main className="app-shell">

        <section className="setup-card">

          <button
            type="button"
            className="back-button"
            onClick={() =>
              setScreen("welcome")
            }
          >
            ← {t.back}
          </button>

          <div className="setup-header">

            <div className="small-brand">
              P
            </div>

            <p className="eyebrow">
              {BRAND_NAME}
            </p>

            <h2>
              {t.chooseLanguage}
            </h2>

            <p>
              {t.languageSubtitle}
            </p>

          </div>

          <div className="language-grid">

            {languages.map((lang) => (
              <button
                key={lang.key}
                type="button"
                className={`language-card ${
                  language?.key === lang.key
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  selectLanguage(lang)
                }
              >

                <span className="language-icon">
                  {lang.icon}
                </span>

                <span>
                  {lang.native}
                </span>

                {language?.key === lang.key && (
                  <span>✓</span>
                )}

              </button>
            ))}

          </div>

          {language && (
            <button
              type="button"
              className="primary-button"
              onClick={() =>
                setScreen("details")
              }
            >
              {t.continue}
            </button>
          )}

        </section>

      </main>
    )
  }

  if (screen === "details") {
    return (
      <main className="app-shell">

        <section className="setup-card details-card">

          <button
            type="button"
            className="back-button"
            onClick={() =>
              setScreen(
                language
                  ? "language"
                  : "welcome"
              )
            }
          >
            ← {t.back}
          </button>

          <div className="setup-header">

            <div className="small-brand">
              P
            </div>

            <p className="eyebrow">
              {BRAND_NAME}
            </p>

            <h2>
              {t.yourDetails}
            </h2>

            <p>
              {t.detailsSubtitle}
            </p>

          </div>

          <div className="form-grid">

            <label>
              {t.name}

              <input
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
                placeholder={
                  t.namePlaceholder
                }
              />
            </label>

            <label>
              {t.age}

              <input
                type="number"
                value={profile.age}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    age: e.target.value,
                  })
                }
                placeholder={
                  t.agePlaceholder
                }
              />
            </label>

            <label>
              {t.state}

              <select
                value={profile.state}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    state: e.target.value,
                    district: "",
                  })
                }
              >
                <option value="">
                  {t.statePlaceholder}
                </option>

                {Object.keys(statesAndDistricts).map(
                  (state) => (
                    <option
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>
                  )
                )}
              </select>
            </label>

            <label>
              {t.district}

              <select
                value={profile.district}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    district: e.target.value,
                  })
                }
                disabled={!profile.state}
              >
                <option value="">
                  {t.districtPlaceholder}
                </option>

                {districts.map((district) => (
                  <option
                    key={district}
                    value={district}
                  >
                    {district}
                  </option>
                ))}
              </select>
            </label>

          </div>

          <button
            type="button"
            className="primary-button"
            onClick={finishDetails}
            disabled={
              !profile.name ||
              !profile.age ||
              !profile.state ||
              !profile.district
            }
          >
            {t.finish}
          </button>

        </section>

      </main>
    )
  }

  return (
    <main className="app-shell dashboard">

      <header className="topbar">

        <div className="brand">

          <div className="small-brand">
            P
          </div>

          <div>
            <strong>
              {BRAND_NAME}
            </strong>

            <span>
              {language?.native}
            </span>
          </div>

        </div>

        <button
          type="button"
          className="change-language"
          onClick={() =>
            setScreen("language")
          }
        >
          🌐 {language?.native}
        </button>

      </header>

      <section className="dashboard-content">

        <div className="welcome-copy">

          <p className="eyebrow">
            {BRAND_NAME}
          </p>

          <h1>
            {t.hello}, {profile.name}
          </h1>

          <p>
            {t.help}
          </p>

        </div>

        <section className="voice-card">

          <div
            className={`voice-orb ${
              listening ? "active" : ""
            }`}
          >

            <button
              type="button"
              onClick={startVoice}
              aria-label={t.speak}
            >
              🎙
            </button>

          </div>

          <h2>
            {listening
              ? t.listening
              : t.speak}
          </h2>

          <p>
            {language?.native} · Voice guidance
          </p>

          {reply && (
            <div className="ai-response">

              <div className="response-header">

                <span>
                  {BRAND_NAME} 🔊
                </span>

                <button
                  type="button"
                  onClick={speakReply}
                  className="listen-response"
                >
                  🔊
                </button>

              </div>

              <p>
                {cleanReply(reply)}
              </p>

            </div>
          )}

        </section>

        <div className="text-input-card">

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage()
              }
            }}
            placeholder={t.typeHere}
          />

          <button
            type="button"
            onClick={() =>
              sendMessage()
            }
            disabled={
              loading ||
              !message.trim()
            }
            aria-label={t.send}
          >
            {loading
              ? "..."
              : "→"}
          </button>

        </div>

        <section className="quick-actions">

          <button
            type="button"
            onClick={() => {
              const text =
                language?.key === "tamil"
                  ? "பெண்களுக்கான அரசு திட்டங்கள் என்ன?"
                  : language?.key === "hindi"
                  ? "महिलाओं के लिए सरकारी योजनाएं क्या हैं?"
                  : language?.key === "telugu"
                  ? "మహిళలకు ప్రభుత్వ పథకాలు ఏమిటి?"
                  : language?.key === "kannada"
                  ? "ಮಹಿಳೆಯರಿಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಯಾವುವು?"
                  : language?.key === "malayalam"
                  ? "സ്ത്രീകൾക്കുള്ള സർക്കാർ പദ്ധതികൾ എന്തൊക്കെയാണ്?"
                  : "What government schemes are available for women?"

              setMessage(text)
              sendMessage(text)
            }}
          >
            <span>◉</span>
            {t.schemes}
          </button>

          <button
            type="button"
            onClick={() => {
              const text =
                language?.key === "tamil"
                  ? "அரசாங்க சேவைகளைப் பெற நான் எப்படி விண்ணப்பிப்பது?"
                  : language?.key === "hindi"
                  ? "सरकारी सेवाओं के लिए मैं कैसे आवेदन करूं?"
                  : language?.key === "telugu"
                  ? "ప్రభుత్వ సేవలకు నేను ఎలా దరఖాస్తు చేసుకోవాలి?"
                  : language?.key === "kannada"
                  ? "ಸರ್ಕಾರಿ ಸೇವೆಗಳಿಗೆ ನಾನು ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?"
                  : language?.key === "malayalam"
                  ? "സർക്കാർ സേവനങ്ങൾക്ക് ഞാൻ എങ്ങനെ അപേക്ഷിക്കണം?"
                  : "How can I apply for government services?"

              setMessage(text)
              sendMessage(text)
            }}
          >
            <span>⌂</span>
            {t.services}
          </button>

          <button
            type="button"
            onClick={() => {
              const text =
                language?.key === "tamil"
                  ? "பெண்களுக்கு திறன் பயிற்சி மற்றும் வேலை வாய்ப்புகள் என்ன?"
                  : language?.key === "hindi"
                  ? "महिलाओं के लिए कौशल प्रशिक्षण और नौकरी के अवसर क्या हैं?"
                  : language?.key === "telugu"
                  ? "మహిళలకు నైపుణ్య శిక్షణ మరియు ఉద్యోగ అవకాశాలు ఏమిటి?"
                  : language?.key === "kannada"
                  ? "ಮಹಿಳೆಯರಿಗೆ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಉದ್ಯೋಗ ಅವಕಾಶಗಳು ಯಾವುವು?"
                  : language?.key === "malayalam"
                  ? "സ്ത്രീകൾക്ക് നൈപുണ്യ പരിശീലനവും തൊഴിൽ അവസരങ്ങളും എന്തൊക്കെയാണ്?"
                  : "What skills training and job opportunities are available for women?"

              setMessage(text)
              sendMessage(text)
            }}
          >
            <span>✦</span>
            {t.skills}
          </button>

        </section>

        <div className="trust-row">

          <span>
            ✓ {t.simple}
          </span>

          <span>
            🎙 {t.voiceFirst}
          </span>

          <span>
            ◎ {t.languageSupport}
          </span>

        </div>

      </section>

    </main>
  )
}

export default App