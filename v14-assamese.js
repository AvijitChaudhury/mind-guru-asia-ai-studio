
/* Mind Guru AI Studio V14 — Assamese language pack
   Offline UI and prompt templates. No API calls. */
(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const ui = {
    eyebrow: "সৃষ্টিশীল কমাণ্ড কেন্দ্ৰ",
    hero: "ধাৰণাক ৰূপ দিয়ক<br><span style='color:var(--gold2)'>চিনেমাটিক প্ৰম্পটলৈ।</span>",
    heroDesc: "ভিডিঅ', ছবি আৰু একে ধৰণৰ চৰিত্ৰৰ প্ৰম্পট এটা অফলাইন ষ্টুডিঅ'ত সৃষ্টি কৰক।",
    videoStat: "ভিডিঅ' প্ৰম্পট লাইব্ৰেৰী",
    categoryStat: "প্ৰম্পটৰ শ্ৰেণী",
    languageStat: "ভাষা",
    costStat: "API খৰচ",
    shortTitle: "⚡ ১০,০০০ চুটি টেগ আৰু ট্ৰেণ্ড প্ৰম্পট",
    shortDesc: "ভিডিঅ'ৰ বাবে চুটি টেগ, একচন, কেমেৰা মুভমেণ্ট আৰু ক্ৰিয়েটৰ ট্ৰেণ্ড ব্যৱহাৰ কৰক।",
    browse: "✦ শ্ৰেণীসমূহ চাওক",
    library: "প্ৰম্পট লাইব্ৰেৰী",
    random: "⤨ যিকোনো প্ৰম্পট",
    reset: "পুনৰ ছেট কৰক",
    builder: "✧ প্ৰেজেণ্টাৰ আৰু ব্ৰেণ্ড প্ৰম্পট নিৰ্মাতা",
    image: "✦ ছবি আৰু চৰিত্ৰ প্ৰম্পট ষ্টুডিঅ'",
    character: "চৰিত্ৰ নিৰ্মাতা আৰু পৰিচয় গাইড",
    slash: "⚡ চুটি প্ৰম্পট টেগ নিৰ্মাতা",
    previous: "← আগলৈ",
    next: "পিছলৈ →",
    copyBuild: "প্ৰম্পট কপি কৰক",
    surprise: "মোক আচৰিত কৰক",
    makeImage: "ছবিৰ প্ৰম্পট সৃষ্টি কৰক",
    copyImage: "ছবিৰ প্ৰম্পট কপি কৰক",
    makeChar: "চৰিত্ৰৰ প্ৰম্পট সৃষ্টি কৰক",
    copyChar: "চৰিত্ৰৰ প্ৰম্পট কপি কৰক",
    buildTags: "স্লেছ টেগ সৃষ্টি কৰক",
    copyTags: "টেগ কপি কৰক",
    shortOpen: "⚡ ১০,০০০ চুটি টেগ খোলক ↓",
    premium: "✦ প্ৰিমিয়াম সংস্কৰণ",
    offline: "অফলাইন • API KEY নালাগে",
    role: "প্ৰেজেণ্টাৰৰ ভূমিকা",
    subject: "প্ৰেজেণ্টাৰৰ নাম / বিষয়",
    brandProfile: "ব্ৰেণ্ডৰ পৰিচয়",
    brand: "ব্ৰেণ্ডৰ নাম",
    shot: "শ্বটৰ ধৰণ / কম্পোজিশন",
    lens: "লেন্স আৰু ফ'কাছ",
    transition: "ট্ৰেনজিচনৰ ধৰণ",
    ratio: "ভিডিঅ'ৰ অনুপাত",
    duration: "সময়সীমা",
    platform: "লক্ষ্য ভিডিঅ' প্লেটফৰ্ম",
    output: "আউটপুটৰ ভাষা",
    extra: "অতিৰিক্ত নিৰ্দেশনা (ঐচ্ছিক)",
    imgSubject: "ছবিৰ বিষয়",
    imageTool: "ছবি সৃষ্টি কৰাৰ সঁজুলি",
    imgStyle: "ছবিৰ শৈলী",
    imgRatio: "ছবিৰ অনুপাত",
    lighting: "পোহৰ",
    composition: "কম্পোজিশন",
    imgExtra: "অতিৰিক্ত বিৱৰণ / ব্ৰেণ্ডৰ ৰং / ৰেফাৰেন্স",
    charName: "চৰিত্ৰৰ নাম",
    charType: "চৰিত্ৰৰ ধৰণ",
    charAge: "বয়স / চেহেৰা",
    wardrobe: "পোছাক",
    personality: "ব্যক্তিত্ব",
    charSheet: "চৰিত্ৰৰ শ্বীটৰ ধৰণ",
    charExtra: "পৰিচয় / ৰেফাৰেন্সৰ নিয়ম",
    tagCamera: "কেমেৰা টেগ",
    tagStyle: "দৃশ্যৰ শৈলীৰ টেগ",
    tagAction: "একচন / গতিৰ টেগ",
    tagLight: "পোহৰৰ টেগ",
    tagShot: "শ্বটৰ টেগ",
    tagFormat: "ফৰ্মেটৰ টেগ"
  };

  const fields = {
    presenter:"role", subject:"subject", brandProfile:"brandProfile",
    brand:"brand", shotType:"shot", lens:"lens", transition:"transition",
    ratio:"ratio", duration:"duration", platform:"platform",
    buildlang:"output", extra:"extra", imgSubject:"imgSubject",
    imageTool:"imageTool", imgStyle:"imgStyle", imgRatio:"imgRatio",
    imgLight:"lighting", imgComp:"composition", imgExtra:"imgExtra",
    charName:"charName", charType:"charType", charAge:"charAge",
    charWardrobe:"wardrobe", charPersonality:"personality",
    charSheet:"charSheet", charExtra:"charExtra",
    tagCamera:"tagCamera", tagStyle:"tagStyle", tagAction:"tagAction",
    tagLight:"tagLight", tagShot:"tagShot", tagFormat:"tagFormat"
  };

  const dashboard = $("dashboardLang");
  if (!dashboard) return;

  if (![...dashboard.options].some(o => o.value === "as")) {
    const option = document.createElement("option");
    option.value = "as";
    option.textContent = "অসমীয়া UI";
    dashboard.appendChild(option);
  }

  const originalBuild = window.build;
  const originalImage = window.makeImage;
  const originalCharacter = window.makeCharacter;

  function translateUI() {
    const active = dashboard.value === "as";
    if (!active) return;

    const set = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = value;
    };

    set(".hero .eyebrow", ui.eyebrow);
    const hero = document.querySelector(".hero h2");
    if (hero) hero.innerHTML = ui.hero;
    set(".hero p", ui.heroDesc);

    const stats = document.querySelectorAll(".stats .stat small");
    [ui.videoStat,ui.categoryStat,ui.languageStat,ui.costStat]
      .forEach((v,i) => { if (stats[i]) stats[i].textContent = v; });

    set("#shortLibrary .mainhead h3",ui.shortTitle);
    set("#shortLibrary .notice",ui.shortDesc);
    set(".layout aside h3",ui.browse);
    set(".layout main .mainhead h3",ui.library);
    set("#randomBtn",ui.random);
    set("#resetBtn",ui.reset);
    set(".builder .mainhead h3",ui.builder);
    set("#imageCharacterStudio .mainhead h3",ui.image);
    set("#imageCharacterStudio .divider + h3",ui.character);
    set("#slashTagStudio .mainhead h3",ui.slash);

    Object.entries(fields).forEach(([id,key]) => {
      const el = $(id);
      const label = el && el.parentElement.querySelector("label");
      if (label) label.textContent = ui[key];
    });

    [
      ["copyBuild","copyBuild"],["makeRandom","surprise"],
      ["makeImagePrompt","makeImage"],["copyImagePrompt","copyImage"],
      ["makeCharPrompt","makeChar"],["copyCharPrompt","copyChar"],
      ["refreshSlash","buildTags"],["copySlash","copyTags"],
      ["shortPrev","previous"],["shortNext","next"],
      ["prev","previous"],["next","next"]
    ].forEach(([id,key]) => {
      if ($(id)) $(id).textContent = ui[key];
    });

    const open = document.querySelector('a[href="#shortLibrary"]');
    if (open) open.textContent = ui.shortOpen;

    const pills = document.querySelectorAll(".topright .pill");
    if (pills[0]) pills[0].textContent = ui.premium;
    if (pills[1]) pills[1].textContent = ui.offline;

    const langOption = [...dashboard.options].find(o => o.value === "as");
    if (langOption) langOption.textContent = "অসমীয়া UI";
  }

  const lang = $("buildlang");
  if (lang && ![...lang.options].some(o => o.value === "as")) {
    const option = document.createElement("option");
    option.value = "as";
    option.textContent = "অসমীয়া";
    lang.appendChild(option);
  }

  const get = id => $(id)?.value || "";
  const clean = value => String(value).trim();

  window.build = function () {
    if (lang.value !== "as") return originalBuild();
    const subject = clean(get("subject")) || "মূল বিষয়";
    const brand = clean(get("brand"));
    const extra = clean(get("extra"));
    return `${get("duration")} সময়ৰ ${get("ratio")} ভিডিঅ' ${get("platform")}ৰ বাবে সৃষ্টি কৰক।
মূল বিষয়: ${subject}।
প্ৰেজেণ্টাৰৰ ভূমিকা: ${get("presenter")}।
কাৰ্যকলাপ: ${get("action")}।
শ্বটৰ গঠন: ${get("shotType")}।
লেন্স আৰু ফ'কাছ: ${get("lens")}।
কেমেৰাৰ গতি: ${get("camera")}।
ট্ৰেনজিচন: ${get("transition")}।
দৃশ্যৰ শৈলী: ${get("style")}।
ব্ৰেণ্ডৰ নাম: ${brand}।
প্ৰথম দৃশ্যটো আকৰ্ষণীয় ৰাখক। চৰিত্ৰৰ চেহেৰা আৰু দৃশ্যৰ ধাৰাবাহিকতা বজাই ৰাখক। ফ্লিকাৰ, বিকৃত শৰীৰ, অপ্রয়োজনীয় লেখা, ৱাটাৰমাৰ্ক আৰু হঠাৎ হোৱা অনিচ্ছাকৃত পৰিৱৰ্তন এৰাই চলক।
${extra}`;
  };

  window.makeImage = function () {
    if (lang.value !== "as") return originalImage();
    return `${get("imageTool")} ব্যৱহাৰ কৰি এখন ছবি সৃষ্টি কৰক।
বিষয়: ${get("imgSubject") || "মূল বিষয়"}।
দৃশ্যৰ শৈলী: ${get("imgStyle")}।
ছবিৰ অনুপাত: ${get("imgRatio")}।
পোহৰ: ${get("imgLight")}।
ছবিৰ গঠন: ${get("imgComp")}।
বাস্তৱসন্মত টেক্সচাৰ, সঠিক শৰীৰৰ গঠন আৰু দৃষ্টিকোণ, স্পষ্ট বিৱৰণ আৰু পৰিষ্কাৰ পটভূমি বজাই ৰাখক। ব্ৰেণ্ডৰ ৰং আৰু ৰেফাৰেন্সৰ নিয়ম মানি চলক। বিকৃত হাত, একে বস্তুৰ পুনৰাবৃত্তি, অপ্রয়োজনীয় লেখা আৰু ৱাটাৰমাৰ্ক এৰাই চলক।
${get("imgExtra")}`;
  };

  window.makeCharacter = function () {
    if (lang.value !== "as") return originalCharacter();
    return `এটা মৌলিক ${get("charType")} চৰিত্ৰৰ নক্সা প্ৰস্তুত কৰক।
নাম: ${get("charName") || "মূল চৰিত্ৰ"}।
বয়স আৰু চেহেৰা: ${get("charAge")}।
পোছাক আৰু সামগ্ৰী: ${get("charWardrobe")}।
ব্যক্তিত্ব: ${get("charPersonality")}।
চৰিত্ৰৰ শ্বীট: ${get("charSheet")}।
সন্মুখ, তিনি-চতুৰ্থাংশ, কাষ আৰু পিছফালৰ দৃশ্য দেখুৱাওক। মুখৰ অভিব্যক্তি আৰু স্বাভাৱিক অংগভংগী অন্তৰ্ভুক্ত কৰক। প্ৰতিটো দৃশ্যত মুখ, চকু, চুলি, শৰীৰৰ অনুপাত, ৰং, পোছাক আৰু চিনাক্তকৰণৰ বৈশিষ্ট্য একে ৰাখক। পৰিষ্কাৰ পটভূমি আৰু একে ধৰণৰ পোহৰ ব্যৱহাৰ কৰক।
${get("charExtra")}`;
  };

  dashboard.addEventListener("change", translateUI);
  if (lang) lang.addEventListener("change", () => {
    if ($("preview")) $("preview").textContent = window.build();
  });

  const update = () => {
    if (dashboard.value === "as") translateUI();
  };
  update();

  console.log("Mind Guru Assamese language pack loaded.");
})();
/* Assamese UI Extension — V14 */
(() => {
  "use strict";

  const $ = id => document.getElementById(id);

  const text = {
    quick: "দ্ৰুত একচন লাইব্ৰেৰী",
    shortTitle: "⚡ ১০,০০০ চুটি টেগ আৰু ট্ৰেণ্ড প্ৰম্পট",
    shortDesc: "১০০টা পুনৰ ব্যৱহাৰযোগ্য টেগ পৰিয়াল আৰু ১০,০০০টা নম্বৰযুক্ত ভিন্নতা।",
    families: "১০০টা টেগ পৰিয়াল",
    browse: "✦ শ্ৰেণীসমূহ চাওক",
    selectCategory: "ফিল্টাৰ কৰিবলৈ এটা শ্ৰেণী বাছনি কৰক।",
    library: "প্ৰম্পট লাইব্ৰেৰী",
    random: "⤨ যিকোনো প্ৰম্পট",
    reset: "পুনৰ ছেট কৰক",
    searchShort: "চুটি প্ৰম্পট বা টেগ বিচাৰক…",
    searchMain: "প্ৰম্পট, টেগ আৰু ধাৰণা বিচাৰক…",
    allCategories: "সকলো একচন শ্ৰেণী",
    previous: "← আগলৈ",
    next: "পিছলৈ →",
    loading: "১০,০০০টা চুটি প্ৰম্পট লোড হৈ আছে…",
    page: "পৃষ্ঠা",
    buildTip: "নিজৰ মুখৰ ভিডিঅ'ৰ বাবে ভিডিঅ' জেনেৰেটৰত নিজৰ ফটো আপলোড কৰক আৰু পৰিচয়ৰ ৰেফাৰেন্স হিচাপে ব্যৱহাৰ কৰক।",
    copy: "প্ৰম্পট কপি কৰক",
    generate: "প্ৰম্পট সৃষ্টি কৰক",
    all: "সকলো",
    english: "English",
    bengali: "বাংলা",
    hindi: "हिन्दी",
    assamese: "অসমীয়া"
  };

  function addAssameseOption(id, label) {
    const el = $(id);
    if (!el || [...el.options].some(o => o.value === "as")) return;
    const option = document.createElement("option");
    option.value = "as";
    option.textContent = label;
    el.appendChild(option);
  }

  ["shortLang", "lang"].forEach(id => addAssameseOption(id, "অসমীয়া"));

  function translateOptions(id, map) {
    const el = $(id);
    if (!el) return;
    [...el.options].forEach(option => {
      if (map[option.textContent.trim()]) {
        option.dataset.originalText ||= option.textContent;
        option.textContent = map[option.textContent.trim()];
      }
    });
  }

  const categories = {
    "All action categories": "সকলো একচন শ্ৰেণী",
    "Product Ads": "সামগ্ৰীৰ বিজ্ঞাপন",
    "Talking Avatar": "কথা কোৱা অৱতাৰ",
    "Motivational": "অনুপ্ৰেৰণামূলক",
    "UGC": "ব্যৱহাৰকাৰীৰ সৃষ্টি কৰা সমল",
    "POV": "দৃষ্টিকোণ",
    "ASMR": "এ এছ এম আৰ",
    "Transitions": "দৃশ্য পৰিৱৰ্তন",
    "Camera Moves": "কেমেৰাৰ গতি",
    "Creator Trends": "ক্ৰিয়েটৰ ট্ৰেণ্ড"
  };

  const sortOptions = {
    "ID order": "আইডি অনুসৰি",
    "Tag A–Z": "টেগ ক্ৰম অনুসৰি"
  };

  function translate() {
    const dashboard = $("dashboardLang");
    if (!dashboard || dashboard.value !== "as") return;

    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = value;
    };

    setText("#shortLibrary .eyebrow", text.quick);
    setText("#shortLibrary .mainhead h3", text.shortTitle);
    setText("#shortLibrary .notice", text.shortDesc);
    setText("#shortLibrary .premium", text.families);
    setText(".layout aside h3", text.browse);
    setText(".layout aside .notice", text.selectCategory);
    setText(".layout main .mainhead h3", text.library);

    if ($("shortSearch")) $("shortSearch").placeholder = text.searchShort;
    if ($("search")) $("search").placeholder = text.searchMain;

    const labels = {
      randomBtn: text.random,
      resetBtn: text.reset,
      shortPrev: text.previous,
      shortNext: text.next,
      prev: text.previous,
      next: text.next
    };

    Object.entries(labels).forEach(([id, value]) => {
      if ($(id)) $(id).textContent = value;
    });

    translateOptions("shortCat", categories);
    translateOptions("sort", sortOptions);

    const shortLang = $("shortLang");
    const mainLang = $("lang");

    [shortLang, mainLang].forEach(el => {
      if (!el) return;
      [...el.options].forEach(option => {
        if (option.value === "as") option.textContent = "অসমীয়া";
      });
    });

    const page = $("shortPage");
    if (page && page.textContent.startsWith("Page")) {
      page.textContent = page.textContent.replace("Page", text.page);
    }
    const pageLabel = $("pageLabel");
    if (pageLabel && pageLabel.textContent.startsWith("Page")) {
      pageLabel.textContent = pageLabel.textContent.replace("Page", text.page);
    }

    const dashboardOption = [...dashboard.options].find(o => o.value === "as");
    if (dashboardOption) dashboardOption.textContent = "অসমীয়া UI";
  }

  const observer = new MutationObserver(() => {
    if ($("dashboardLang")?.value === "as") translate();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  ["dashboardLang", "shortLang", "lang"].forEach(id => {
    $(id)?.addEventListener("change", translate);
  });

  if ($("dashboardLang")?.value === "as") translate();

  console.log("Assamese UI extension loaded.");
})();
/* Mind Guru V14 — Assamese Label Fix */
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
    "Search short prompts or tags…": "চুটি প্ৰম্পট বা টেগ বিচাৰক…",
    "Search prompts, tags, ideas…": "প্ৰম্পট, টেগ আৰু ধাৰণা বিচাৰক…",
    "Copy short prompt": "চুটি প্ৰম্পট কপি কৰক",
    "Copy tags": "টেগ কপি কৰক",
    "Copy prompt": "প্ৰম্পট কপি কৰক",
    "Copy tags": "টেগ কপি কৰক"
  };

  function translateLabels() {
    document.querySelectorAll("body *").forEach(el => {
      if (el.children.length === 0) {
        const original = el.textContent.trim();
        if (translations[original] && el.textContent !== translations[original]) {
          el.textContent = translations[original];
        }
      }

      if (el.placeholder && translations[el.placeholder]) {
        el.placeholder = translations[el.placeholder];
      }
    });
  }

  function run() {
    const language = document.getElementById("dashboardLang");
    if (language && language.value === "as") translateLabels();
  }

  run();

  new MutationObserver(run).observe(document.body, {
    childList: true,
    subtree: true
  });

  document.getElementById("dashboardLang")
    ?.addEventListener("change", run);

  console.log("Assamese label fix loaded.");
})();
