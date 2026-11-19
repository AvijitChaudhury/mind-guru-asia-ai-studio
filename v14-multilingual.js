
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
