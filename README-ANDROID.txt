MIND GURU AI STUDIO — ANDROID INSTALL GUIDE

IMPORTANT: The original HTML dashboard still opens directly from Downloads. The installable app features (home-screen app install and offline cache) require this folder to be hosted on an HTTPS website. A free option is GitHub Pages.

1. Extract this ZIP using your Android Files app.
2. Keep index.html, manifest.webmanifest, service-worker.js and the icons folder together. Do not rename them.
3. Upload the CONTENTS of this folder to a GitHub repository.
4. In GitHub repository: Settings → Pages → Deploy from a branch → choose main and /(root) → Save.
5. Wait for GitHub Pages to publish, then open the published HTTPS website in Chrome on Android.
6. Wait for the page to load. Use Chrome menu (⋮) → Install app or Add to Home screen.
7. Launch Mind Guru AI from the new home-screen icon. After the first successful load, the core dashboard can work offline.

FREE: GitHub Pages is free for public repositories. No API key is needed. The dashboard creates prompts; it does not itself generate videos or images.

If you only want to use it locally without hosting, open index.html in Chrome. The dashboard works, but browser security prevents service-worker-based PWA installation from a file:// address.
