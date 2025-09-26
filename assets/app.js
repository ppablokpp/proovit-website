let translations = {};
let currentLang = "es";

async function loadTranslations(lang) {
  const res = await fetch(`assets/localization/${lang}.json`);
  translations[lang] = await res.json();
}

const mainContent = document.getElementById("main-content");
const footerText = document.getElementById("footer-text");
const langSwitcher = document.getElementById("lang-switcher");
const footerPrivacyLink = document.getElementById("footer-privacy-link");
const footerTermsLink = document.getElementById("footer-terms-link");
const footerChildsafetyLink = document.getElementById(
  "footer-childsafety-link"
);
const footerCopyright = document.getElementById("footer-copyright");
const deleteBtn = document.getElementById("delete-btn");
const footerDeleteLink = document.getElementById("footer-delete-link");

// Detect which nav structure is present (SPA or static)
const navLinks = document.querySelectorAll("nav a[data-page]");
const navHome = document.getElementById("nav-home");
const navPrivacy = document.getElementById("nav-privacy");
const navTerms = document.getElementById("nav-terms");
const navChildsafety = document.getElementById("nav-childsafety");
const navDelete = document.getElementById("nav-delete");

let currentPage = "home";
if (window.location.pathname.includes("privacy")) currentPage = "privacy";
else if (window.location.pathname.includes("terms")) currentPage = "terms";
else if (window.location.pathname.includes("childsafety"))
  currentPage = "childsafety";
else if (window.location.pathname.includes("delete-account"))
  currentPage = "delete";
else if (window.location.hash.replace("#", ""))
  currentPage = window.location.hash.replace("#", "");

// SPA navigation
function renderNav() {
  if (navLinks.length) {
    navLinks.forEach((link) => {
      const page = link.getAttribute("data-page");
      link.textContent = translations[currentLang].nav[page];
      link.classList.toggle("active", page === currentPage);
    });
  } else if (navHome && navPrivacy && navTerms && navChildsafety && navDelete) {
    navHome.textContent = translations[currentLang].nav.home;
    navPrivacy.textContent = translations[currentLang].nav.privacy;
    navTerms.textContent = translations[currentLang].nav.terms;
    navChildsafety.textContent = translations[currentLang].nav.childsafety;
    navDelete.textContent = translations[currentLang].nav.delete;
    // Set active class
    navHome.classList.toggle("active", currentPage === "home");
    navPrivacy.classList.toggle("active", currentPage === "privacy");
    navTerms.classList.toggle("active", currentPage === "terms");
    navDelete.classList.toggle("active", currentPage === "delete");
  }
}

function renderPage(page) {
  currentPage = page;
  let t = translations[currentLang];
  let html = "";

  if (page === "home") {
    html = `
      <section class="hero">
        <div class="hero-text">
          <h1>${t.home.title1 ?? ""}</h1>
          <h1>${t.home.title2 ?? ""}</h1>
          <p class="hero-desc">${t.home.description}</p>
        <div class="download-links">
          <a href="https://apps.apple.com/es/app/proovit/id6744988665" class="appstore-btn" aria-label="Download on the App Store">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
            <span class="btn-text">
              <span class="btn-caption">${"Download on the"}</span>
              <span class="btn-label">App Store</span>
            </span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pablolaparra.proovit" class="playstore-btn" aria-label="Get it on Google Play">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path>
            </svg>
            <span class="btn-text">
              <span class="btn-caption">${"GET IT ON"}</span>
              <span class="btn-label">Google Play</span>
            </span>
          </a>
        </div>

          <div class="features-list">
            ${
              Array.isArray(t.home.features)
                ? t.home.features
                    .map((f) => `<h3 class="feature-item">${f}</h3>`)
                    .join("")
                : ""
            }
          </div>
        </div>


        <div class="qr-codes">
          <div class="qr-item">
            <img src="assets/images/app-store-qr.png" alt="App Store QR Code" width="210" height="210" />
          </div>
          <div class="qr-item">
            <img src="assets/images/play-store-qr.png" alt="Google Play QR Code" width="210" height="210" />
          </div>
        </div>
      </section>
    `;
  } else if (page === "privacy") {
    html = `
      <section class="legal-section">
        <h1>${t.privacy.title}</h1>
        <div class="legal-content">${t.privacy.content.replace(
          /\n/g,
          "<br>"
        )}</div>
      </section>
    `;
  } else if (page === "terms") {
    html = `
      <section class="legal-section">
        <h1>${t.terms.title}</h1>
        <div class="legal-content">${t.terms.content.replace(
          /\n/g,
          "<br>"
        )}</div>
      </section>
    `;
  } else if (page === "childsafety") {
    html = `
      <section class="legal-section">
        <h1>${t.childsafety.title}</h1>
        <div class="legal-content">${t.childsafety.content.replace(
          /\n/g,
          "<br>"
        )}</div>
      </section>
    `;
  } else if (page === "delete") {
    html = `
      <section class="delete-section">
        <h1>${t.delete.title}</h1>
        <ol class="delete-steps">
          ${t.delete.steps.map((s) => `<li>${s}</li>`).join("")}
        </ol>
        <div class="delete-help">${t.delete.help}</div>
      </section>
    `;
  }
  if (mainContent) mainContent.innerHTML = html;
}

async function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("proovit-lang", lang);
  if (!translations[lang]) {
    await loadTranslations(lang);
  }
  if (langSwitcher) langSwitcher.value = lang;
  renderNav();
  renderPage(currentPage);
  if (
    footerPrivacyLink &&
    footerTermsLink &&
    footerChildsafetyLink &&
    footerDeleteLink
  ) {
    footerPrivacyLink.textContent = translations[lang].footerLinks.privacy;
    footerTermsLink.textContent = translations[lang].footerLinks.terms;
    footerChildsafetyLink.textContent =
      translations[lang].footerLinks.childsafety;
    footerDeleteLink.textContent = translations[lang].nav.delete;
  }
  if (footerCopyright) {
    footerCopyright.innerHTML = translations[lang].footer;
  }
  if (deleteBtn) {
    deleteBtn.textContent = translations[lang].nav.delete;
  }
}

// SPA: listen for nav clicks
if (navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      renderPage(page);
      renderNav(); // <-- Add this line!
    });
  });
}

// Static: listen for language switch
if (langSwitcher) {
  langSwitcher.addEventListener("change", async (e) => {
    await setLang(e.target.value);
  });
}

// SPA: listen for hash changes
window.addEventListener("hashchange", () => {
  const page = window.location.hash.replace("#", "") || "home";
  renderPage(page);
});

// Initial render
(async () => {
  await setLang(currentLang);
})();
