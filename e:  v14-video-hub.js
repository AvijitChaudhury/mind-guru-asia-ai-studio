/* Mind Guru AI Studio V14 - Video Generator Hub */
(() => {
  if (document.getElementById("mg-v14-video-hub")) return;

  const css = document.createElement("style");
  css.textContent = `
  #mg-v14-launch {
    position:fixed;right:14px;bottom:16px;z-index:9998;
    border:1px solid #d8b65b;border-radius:30px;
    padding:13px 16px;background:linear-gradient(135deg,#17233d,#080d19);
    color:#f7d77c;font:bold 14px system-ui;cursor:pointer;
    box-shadow:0 8px 28px #0008;
  }
  #mg-v14-video-hub {
    position:fixed;inset:0;z-index:9999;display:none;
    align-items:center;justify-content:center;padding:12px;
    background:#050914eF;color:#fff;font-family:system-ui;
  }
  #mg-v14-video-hub.open {display:flex}
  .mgvh-panel {
    width:min(720px,100%);max-height:88vh;overflow:auto;
    padding:20px;border:1px solid #b9954b;border-radius:18px;
    background:linear-gradient(145deg,#111d33,#090e1b);
  }
  .mgvh-panel h2 {color:#f4d27a;margin-top:0}
  .mgvh-sub,.mgvh-note {color:#c4cad5;font-size:13px;line-height:1.5}
  .mgvh-grid {
    display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;
  }
  .mgvh-card {padding:13px;border:1px solid #39445b;border-radius:13px;background:#ffffff08}
  .mgvh-card h3 {margin:0 0 7px}
  .mgvh-card p {font-size:12px;color:#c4cad5;line-height:1.5}
  #mg-v14-video-hub a,#mg-v14-video-hub button {
    display:inline-block;padding:10px 12px;border:1px solid #c5a454;
    border-radius:9px;background:#e5c36d;color:#101522;
    text-decoration:none;font-weight:bold;font-size:12px;cursor:pointer;
  }
  #mg-v14-video-hub .mgvh-close {
    background:transparent;color:#f2d889;
  }
  @media(max-width:480px) {
    .mgvh-panel {padding:14px}
    #mg-v14-launch {font-size:12px;padding:11px}
  }`;
  document.head.appendChild(css);

  const launch = document.createElement("button");
  launch.id = "mg-v14-launch";
  launch.textContent = "🎬 Free Video Generator";
  document.body.appendChild(launch);

  const hub = document.createElement("div");
  hub.id = "mg-v14-video-hub";
  hub.innerHTML = `
  <section class="mgvh-panel" role="dialog" aria-modal="true">
    <h2>🎬 Free AI Video Generator Hub</h2>
    <p class="mgvh-sub">Create your prompt in Mind Guru AI Studio. Copy it and open a video tool.</p>
    <div class="mgvh-grid">
      <article class="mgvh-card">
        <h3>Google Flow</h3>
        <p>Text-to-video and image-to-video. Free access and limits vary by region and time.</p>
        <a href="https://labs.google/fx/tools/flow" target="_blank" rel="noopener noreferrer">Open Google Flow ↗</a>
      </article>
      <article class="mgvh-card">
        <h3>Krea AI</h3>
        <p>AI video creation. Free access and available models depend on your account.</p>
        <a href="https://www.krea.ai/features/ai-video-generator" target="_blank" rel="noopener noreferrer">Open Krea AI ↗</a>
      </article>
      <article class="mgvh-card">
        <h3>Fliki</h3>
        <p>Script-to-video and AI voice workflow. Free plan has usage limits.</p>
        <a href="https://fliki.ai/" target="_blank" rel="noopener noreferrer">Open Fliki ↗</a>
      </article>
    </div>
    <p style="margin-top:16px">
      <button id="mgvh-copy">Copy Current Prompt</button>
      <button class="mgvh-close" data-close>Close</button>
    </p>
    <p class="mgvh-note">These are external services, not built-in video engines. Sign-in, credits or paid upgrades may be required. Check current provider terms.</p>
  </section>`;
  document.body.appendChild(hub);

  const close = () => hub.classList.remove("open");
  launch.addEventListener("click", () => hub.classList.add("open"));
  hub.querySelector("[data-close]").addEventListener("click", close);
  hub.addEventListener("click", e => {
    if (e.target === hub) close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });

  hub.querySelector("#mgvh-copy").addEventListener("click", async () => {
    const preview = document.getElementById("preview");
    const prompt = (preview?.innerText || preview?.textContent || "").trim();

    if (!prompt || prompt === "Your custom prompt will appear here.") {
      alert("Create a prompt in the Prompt Builder first.");
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      alert("Prompt copied! Paste it into your video generator.");
    } catch {
      alert("Clipboard unavailable. Please copy your prompt manually.");
    }
  });
})();
