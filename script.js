// 🌍 Lista limbilor ISO 639-1 (poți adăuga mai multe dacă vrei)
const isoLanguages = {
    af: "Afrikaans", sq: "Albanian", am: "Amharic", ar: "Arabic", hy: "Armenian", az: "Azerbaijani",
    eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", bg: "Bulgarian", ca: "Catalan",
    ceb: "Cebuano", zh: "Chinese", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch",
    en: "English", eo: "Esperanto", et: "Estonian", fi: "Finnish", fr: "French", gl: "Galician",
    ka: "Georgian", de: "German", el: "Greek", gu: "Gujarati", ht: "Haitian Creole", ha: "Hausa",
    he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", ga: "Irish",
    it: "Italian", ja: "Japanese", jv: "Javanese", kn: "Kannada", kk: "Kazakh", km: "Khmer",
    ko: "Korean", ku: "Kurdish", ky: "Kyrgyz", lo: "Lao", la: "Latin", lv: "Latvian", lt: "Lithuanian",
    mk: "Macedonian", mg: "Malagasy", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori",
    mr: "Marathi", mn: "Mongolian", my: "Myanmar", ne: "Nepali", no: "Norwegian", fa: "Persian",
    pl: "Polish", pt: "Portuguese", pa: "Punjabi", ro: "Romanian", ru: "Russian", sm: "Samoan",
    sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somali", es: "Spanish", sw: "Swahili",
    sv: "Swedish", tl: "Tagalog", ta: "Tamil", te: "Telugu", th: "Thai", tr: "Turkish", uk: "Ukrainian",
    ur: "Urdu", uz: "Uzbek", vi: "Vietnamese", cy: "Welsh", xh: "Xhosa", yi: "Yiddish", zu: "Zulu"
};

// 📰 Lista de știri (10 reale + 7 false)
const newsList = [
    { text: "NASA a descoperit apă înghețată pe Lună.", isReal: true },
    { text: "Google a lansat o nouă versiune a motorului său de căutare bazată pe inteligență artificială.", isReal: true },
    { text: "O echipă de cercetători a reușit să vindece diabetul la șoareci de laborator.", isReal: true },
    { text: "România a exportat vin în peste 40 de țări în 2025.", isReal: true },
    { text: "O eclipsă totală de Soare va fi vizibilă din Europa în 2026.", isReal: true },
    { text: "Un elev de 12 ani din Cluj a inventat un dispozitiv care detectează scurgerile de gaz.", isReal: true },
    { text: "Un studiu arată că mersul pe jos 30 de minute pe zi reduce riscul de boli cardiovasculare.", isReal: true },
    { text: "Un elev din Iași a fost admis la MIT cu bursă completă.", isReal: true },
    { text: "Un sat din Italia oferă case la 1 euro pentru a atrage locuitori noi.", isReal: true },
    { text: "O echipă de elevi români a câștigat locul I la un concurs NASA pentru design de habitat pe Marte.", isReal: true },
    { text: "O companie vinde aer îmbuteliat din Alpi pentru 100 de euro sticla.", isReal: false },
    { text: "O pisică a fost aleasă primar într-un oraș din Canada.", isReal: false },
    { text: "O echipă de fotbal a câștigat un meci fără să atingă mingea.", isReal: false },
    { text: "Un nou tip de cafea face oamenii să vorbească în somn în limbi străine.", isReal: false },
    { text: "Un bărbat a fost amendat pentru că a râs prea tare în metrou.", isReal: false },
    { text: "O aplicație de dating a făcut match între doi roboți.", isReal: false },
    { text: "O școală din Japonia a introdus teleportarea ca mijloc de transport.", isReal: false }
];

let currentNews = null;

// 🔁 Generează dropdown-ul cu toate limbile
function buildLanguageDropdown() {
    const dropdown = document.getElementById("language-dropdown");
    for (const [code, name] of Object.entries(isoLanguages)) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = `${name} (${code})`;
        dropdown.appendChild(option);
    }
}

// 🌐 Redirecționează către Google Translate
function redirectToTranslation(langCode) {
    if (!langCode) return;
    const currentUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?hl=${langCode}&sl=auto&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`;
    window.location.href = translateUrl;
}

// 📰 Generează o știre aleatorie
function generateNews() {
    const index = Math.floor(Math.random() * newsList.length);
    currentNews = newsList[index];
    document.getElementById("news-text").innerText = currentNews.text;
    document.getElementById("result").innerText = "";
}

// ✅ Votează știrea
function vote(choice) {
    if (!currentNews) return;
    const correct = (choice === 'real' && currentNews.isReal) || (choice === 'fake' && !currentNews.isReal);
    document.getElementById("result").innerText = correct ? "Corect!" : "Greșit!";
}

// 🚀 Inițializare
window.onload = () => {
    buildLanguageDropdown();
};
