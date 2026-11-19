
/* Mind Guru AI Studio V14
   Offline multilingual prompt-language support
   No API key or paid translation service required.
*/
(() => {
  "use strict";

  const languages = [
    ["en", "English"],
    ["bn", "বাংলা"],
    ["hi", "हिन्दी"],
    ["as", "অসমীয়া"],
    ["or", "ଓଡ଼ିଆ"],
    ["mr", "मराठी"],
    ["gu", "ગુજરાતી"],
    ["pa", "ਪੰਜਾਬੀ"],
    ["ta", "தமிழ்"],
    ["te", "తెలుగు"],
    ["kn", "ಕನ್ನಡ"],
    ["ml", "മലയാളം"],
    ["ur", "اردو"],
    ["sa", "संस्कृतम्"],
    ["ne", "नेपाली"]
  ];

  const instructions = {
    as: "সম্পূৰ্ণ প্ৰম্পটটো অসমীয়া ভাষাত লিখক।",
    or: "ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରମ୍ପ୍ଟଟିକୁ ଓଡ଼ିଆ ଭାଷାରେ ଲେଖନ୍ତୁ।",
    mr: "संपूर्ण प्रॉम्प्ट मराठी भाषेत लिहा.",
    gu: "આખો પ્રોમ્પ્ટ ગુજરાતીમાં લખો.",
    pa: "ਪੂਰਾ ਪ੍ਰੋਂਪਟ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਲਿਖੋ।",
    ta: "முழு ப்ராம்ப்டையும் தமிழில் எழுதவும்.",
    te: "మొత్తం ప్రాంప్ట్‌ను తెలుగులో రాయండి.",
    kn: "ಸಂಪೂರ್ಣ ಪ್ರಾಂಪ್ಟ್ ಅನ್ನು ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ.",
    ml: "മുഴുവൻ പ്രോംപ്റ്റും മലയാളത്തിൽ എഴുതുക.",
    ur: "پورا پرامپٹ اردو زبان میں لکھیں۔",
    sa: "सम्पूर्णं निर्देशं संस्कृतभाषया लिखत।",
    ne: "सम्पूर्ण प्रम्प्ट नेपाली भाषामा लेख्नुहोस्।"
  };

  const select = document.getElementById("buildlang");

  if (!select || typeof window.build !== "function") {
    console.warn("Mind Guru multilingual: builder not found.");
    return;
  }

  const originalBuild = window.build;

  languages.forEach(([code, label]) => {
    if (![...select.options].some(option => option.value === code)) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = label;
      select.appendChild(option);
    }
  });

  window.build = function () {
    const code = select.value;
    let prompt;
if (["en", "bn", "hi"].includes(code)) {
  prompt = originalBuild();
} else {
  select.value = "en";
  try {
    prompt = originalBuild();
  } finally {
    select.value = code;
  }
}

    if (["en", "bn", "hi"].includes(code)) {
      return prompt;
    }

    const language = languages.find(item => item[0] === code)[1];

    return (
      "OUTPUT LANGUAGE: " + language + "\n" +
      instructions[code] + "\n" +
      "Translate descriptive text into " + language + ". " +
      "Preserve names, brand names, camera terminology, " +
      "numeric settings and technical values.\n\n" +
      prompt
    );
  };

  const preview = document.getElementById("preview");

  if (preview) {
    preview.textContent = window.build();
  }

  select.addEventListener("change", () => {
    if (preview) {
      preview.textContent = window.build();
    }
  });

  console.log("Mind Guru multilingual prompt support loaded.");
})();
/* Mind Guru V14 — Assamese UI Fix 2 */
(() => {
  "use strict";

  const translations = {
    "Quick action library": "দ্ৰুত একচন লাইব্ৰেৰী",
    "100 TAG FAMILIES": "১০০টা টেগ পৰিয়াল",
    "All action categories": "সকলো একচন শ্ৰেণী",
    "Product Ads": "সামগ্ৰীৰ বিজ্ঞাপন",
    "Talking Avatar": "কথা কোৱা অৱতাৰ",
    "Motivational": "অনুপ্ৰেৰণামূলক",
    "Cinematic": "চিনেমাটিক",
    "Camera Motion": "কেমেৰাৰ গতি",
    "360 Orbit": "৩৬০ ডিগ্ৰী পৰিভ্ৰমণ",
    "Talking Cartoon": "কথা কোৱা কাৰ্টুন",
    "Explainer": "ব্যাখ্যামূলক",
    "Podcast": "পডকাষ্ট",
    "Social Reels": "ছ'চিয়েল ৰীলছ",
    "Fashion": "ফেশ্বন",
    "Food": "খাদ্য",
    "Travel": "ভ্ৰমণ",
    "Real Estate": "ৰিয়েল ইষ্টেট",
    "Education": "শিক্ষা",
    "Wellness": "সুস্থতা",
    "Music Visualizer": "সংগীত দৃশ্যায়ন",
    "Logo Reveal": "ল'গ' উন্মোচন",
    "Nature": "প্ৰকৃতি",
    "Business": "ব্যৱসায়",
    "Copy short prompt": "চুটি প্ৰম্পট কপি কৰক",
    "Copy tags": "টেগ কপি কৰক",
    "Copy prompt": "প্ৰম্পট কপি কৰক"
  };

  function translate() {
    const language = document.getElementById("dashboardLang");
    if (!language || language.value !== "as") return;

    const set = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && el.textContent.trim() !== value) {
        el.textContent = value;
      }
    };

    set("#shortLibrary .eyebrow", "দ্ৰুত একচন লাইব্ৰেৰী");
    set("#shortLibrary .premium", "১০০টা টেগ পৰিয়াল");

    const shortSearch = document.getElementById("shortSearch");
    if (shortSearch) {
      shortSearch.placeholder = "চুটি প্ৰম্পট বা টেগ বিচাৰক…";
    }

    const mainSearch = document.getElementById("search");
    if (mainSearch) {
      mainSearch.placeholder = "প্ৰম্পট, টেগ আৰু ধাৰণা বিচাৰক…";
    }

    document.querySelectorAll(
      "#shortCat option, #catlist *, #shortCards button, #cards button"
    ).forEach(el => {
      const original = el.textContent.trim();
      if (translations[original] && el.textContent !== translations[original]) {
        el.textContent = translations[original];
      }
    });

    document.querySelectorAll("button").forEach(button => {
      const original = button.textContent.trim();
      if (translations[original] && button.textContent !== translations[original]) {
        button.textContent = translations[original];
      }
    });
  }

  translate();

  const observer = new MutationObserver(() => {
    translate();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  document.getElementById("dashboardLang")
    ?.addEventListener("change", translate);

  console.log("Assamese UI Fix 2 loaded.");
})();
