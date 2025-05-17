const translations = {
  en: {
    nav: {
      home: "Home",
      privacy: "Privacy",
      terms: "Terms",
      delete: "Delete Account",
    },
    home: {
      title: "What is Proovit?",
      description:
        "Proovit is a social app for participating in challenges with friends. Share special moments and compete in creative challenges. Join groups, upload photos, vote, and earn achievements!",
      features: [
        {
          icon: "group",
          title: "Groups",
          desc: "Join or create groups to challenge your friends.",
        },
        {
          icon: "camera_alt",
          title: "Photo Challenges",
          desc: "Complete challenges by uploading photos and voting.",
        },
        {
          icon: "emoji_events",
          title: "Achievements",
          desc: "Earn badges and track your progress.",
        },
      ],
      getStarted: "Get Started",
      download:
        'Download Proovit on the <a href="#">App Store</a> or <a href="#">Google Play</a> and start your first challenge today!',
    },
    privacy: {
      title: "Privacy Policy",
      content: `Effective date: April 17, 2025<br><br>
At Proovit, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use our application.<br><br>
<strong>1. Information We Collect</strong><br>
When using Proovit, we may collect:<br>
<ul>
<li>Account data: your name and email address, through our Clerk authentication provider.</li>
<li>Images and files: photos you upload to participate in challenges, securely stored in Cloudinary.</li>
<li>Technical information: device, OS, in-app activity, and push notifications.</li>
<li>Device permissions: camera and notification system, necessary for app functionality.</li>
</ul>
<strong>2. How We Use Your Information</strong>
<ul>
<li>Create and manage your user account.</li>
<li>Allow you to participate in challenges and verify your proofs through photos.</li>
<li>Send relevant notifications for the game experience.</li>
<li>Analyze app usage and improve its functionality.</li>
</ul>
<strong>3. Third-Party Services</strong>
<ul>
<li>Clerk: authentication and user management.</li>
<li>Cloudinary: image storage.</li>
<li>Neon: database management.</li>
<li>Fly.io: backend hosting.</li>
</ul>
These services may collect and process data according to their own privacy policies.<br>
<strong>4. Security</strong><br>
We adopt reasonable measures to protect your information. However, no system is completely secure.<br>
<strong>5. Data Deletion</strong><br>
You can request deletion of your account and all your personal data by writing to us at: <a href="mailto:proovit.dev@gmail.com">proovit.dev@gmail.com</a><br>
<strong>6. Children's Privacy</strong><br>
If you are under 13, you need consent from your parents or legal guardians.<br>
<strong>7. Changes to this Policy</strong><br>
We reserve the right to modify this Privacy Policy at any time. We will inform you of any substantial changes through the app or by email.`,
    },
    terms: {
      title: "Terms of Service",
      content: `Effective date: April 17, 2025<br><br>
Please read these Terms of Service carefully before using Proovit. By accessing or using the app, you agree to comply with these terms. If you disagree, please do not use Proovit.<br><br>
<strong>1. Service Usage</strong><br>
Proovit is an application that allows users to participate in challenges with friends, validating their achievements through photos uploaded directly from their devices.<br>
<strong>2. User Accounts</strong><br>
To access all functionalities, you must create an account using our Clerk provider. You are responsible for maintaining the confidentiality of your credentials. We reserve the right to suspend accounts for violations of these terms or inappropriate behavior.<br>
<strong>3. User Content</strong><br>
By uploading photos or any content to Proovit, you agree that:<br>
<ul>
<li>You own the content or have permission to share it.</li>
<li>The content is not illegal, offensive, or infringes on third-party rights.</li>
<li>We reserve the right to remove any content we deem inappropriate.</li>
</ul>
<strong>4. Acceptable Use</strong><br>
You may not use Proovit to:<br>
<ul>
<li>Conduct illegal or harmful activities.</li>
<li>Infringe on other users' rights.</li>
<li>Manipulate, hack, or damage the app's infrastructure.</li>
</ul>
<strong>5. Intellectual Property</strong><br>
All content, branding, and source code of Proovit (except user-generated content) is the exclusive property of its developers.<br>
<strong>6. Limitation of Liability</strong><br>
Proovit is provided "as is" and does not guarantee that the service will be uninterrupted or error-free. We are not responsible for direct or indirect damages arising from the use of the application.<br>
<strong>7. Modifications</strong><br>
We reserve the right to update these Terms at any time. We will notify you if significant changes are made.`,
    },
    delete: {
      title: "How to Delete Your Account",
      steps: [
        "Open the Proovit app on your device.",
        "Go to <strong>Settings</strong> &gt; <strong>Account</strong>.",
        "Tap <strong>Delete Account</strong> and follow the instructions.",
      ],
      help: `If you have trouble or prefer, you can email us at <a href="mailto:proovit.dev@gmail.com">proovit.dev@gmail.com</a> and request account deletion.`,
    },
    footer: "&copy; 2025 Proovit",
    footerLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      privacy: "Privacidad",
      terms: "Términos",
      delete: "Eliminar Cuenta",
    },
    home: {
      title: "¿Qué es Proovit?",
      description:
        "Proovit es una app social para participar en desafíos con amigos. ¡Comparte momentos especiales y compite en retos creativos! Únete a grupos, sube fotos, vota y gana logros.",
      features: [
        {
          icon: "group",
          title: "Grupos",
          desc: "Únete o crea grupos para desafiar a tus amigos.",
        },
        {
          icon: "camera_alt",
          title: "Retos Fotográficos",
          desc: "Completa retos subiendo fotos y votando.",
        },
        {
          icon: "emoji_events",
          title: "Logros",
          desc: "Gana medallas y sigue tu progreso.",
        },
      ],
      getStarted: "Comenzar",
      download:
        'Descarga Proovit en la <a href="#">App Store</a> o <a href="#">Google Play</a> y ¡empieza tu primer reto hoy!',
    },
    privacy: {
      title: "Política de Privacidad",
      content: `Fecha de entrada en vigor: 17 de abril de 2025<br><br>
En Proovit, valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y compartimos tu información cuando utilizas nuestra aplicación.<br><br>
<strong>1. Información que recopilamos</strong><br>
Al utilizar Proovit, podemos recopilar:<br>
<ul>
<li>Datos de cuenta: tu nombre y correo electrónico, a través de nuestro proveedor Clerk.</li>
<li>Imágenes y archivos: fotos que subes para participar en retos, almacenadas de forma segura en Cloudinary.</li>
<li>Información técnica: dispositivo, sistema operativo, actividad en la app y notificaciones push.</li>
<li>Permisos del dispositivo: cámara y notificaciones, necesarios para el funcionamiento de la app.</li>
</ul>
<strong>2. Cómo utilizamos tu información</strong>
<ul>
<li>Crear y gestionar tu cuenta de usuario.</li>
<li>Permitir participar en retos y verificar tus pruebas mediante fotos.</li>
<li>Enviar notificaciones relevantes para la experiencia de juego.</li>
<li>Analizar el uso de la app y mejorar su funcionamiento.</li>
</ul>
<strong>3. Servicios de terceros</strong>
<ul>
<li>Clerk: autenticación y gestión de usuarios.</li>
<li>Cloudinary: almacenamiento de imágenes.</li>
<li>Neon: gestión de base de datos.</li>
<li>Fly.io: hosting del backend.</li>
</ul>
Estos servicios pueden recopilar y procesar datos según sus propias políticas.<br>
<strong>4. Seguridad</strong><br>
Adoptamos medidas razonables para proteger tu información. Sin embargo, ningún sistema es completamente seguro.<br>
<strong>5. Eliminación de datos</strong><br>
Puedes solicitar la eliminación de tu cuenta y todos tus datos personales escribiendo a: <a href="mailto:proovit.dev@gmail.com">proovit.dev@gmail.com</a><br>
<strong>6. Privacidad de menores</strong><br>
Si tienes menos de 13 años, necesitas consentimiento de tus padres o tutores.<br>
<strong>7. Cambios a esta política</strong><br>
Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Te informaremos de cambios sustanciales mediante la app o por correo electrónico.`,
    },
    terms: {
      title: "Términos de Servicio",
      content: `Fecha de entrada en vigor: 17 de abril de 2025<br><br>
Por favor, lee atentamente estos Términos de Servicio antes de utilizar Proovit. Al acceder o usar la app, aceptas cumplir con estos términos. Si no estás de acuerdo, no uses Proovit.<br><br>
<strong>1. Uso del servicio</strong><br>
Proovit es una aplicación que permite a los usuarios participar en retos con amigos, validando sus logros mediante fotos subidas desde sus dispositivos.<br>
<strong>2. Cuentas de usuario</strong><br>
Para acceder a todas las funciones, debes crear una cuenta usando Clerk. Eres responsable de mantener la confidencialidad de tus credenciales. Podemos suspender cuentas por violaciones o comportamiento inapropiado.<br>
<strong>3. Contenido del usuario</strong><br>
Al subir fotos o contenido a Proovit, aceptas que:<br>
<ul>
<li>Eres propietario del contenido o tienes permiso para compartirlo.</li>
<li>El contenido no es ilegal, ofensivo ni infringe derechos de terceros.</li>
<li>Nos reservamos el derecho de eliminar contenido inapropiado.</li>
</ul>
<strong>4. Uso aceptable</strong><br>
No puedes usar Proovit para:<br>
<ul>
<li>Realizar actividades ilegales o dañinas.</li>
<li>Infringir derechos de otros usuarios.</li>
<li>Manipular, hackear o dañar la infraestructura de la app.</li>
</ul>
<strong>5. Propiedad intelectual</strong><br>
Todo el contenido, marca y código fuente de Proovit (excepto el generado por usuarios) es propiedad exclusiva de sus desarrolladores.<br>
<strong>6. Limitación de responsabilidad</strong><br>
Proovit se ofrece "tal cual" y no garantiza que el servicio sea ininterrumpido o libre de errores. No nos hacemos responsables por daños derivados del uso de la app.<br>
<strong>7. Modificaciones</strong><br>
Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Te notificaremos si hay cambios significativos.`,
    },
    delete: {
      title: "Cómo eliminar tu cuenta",
      steps: [
        "Abre la app Proovit en tu dispositivo.",
        "Ve a <strong>Ajustes</strong> &gt; <strong>Cuenta</strong>.",
        "Toca <strong>Eliminar cuenta</strong> y sigue las instrucciones.",
      ],
      help: `Si tienes problemas o prefieres, puedes escribirnos a <a href="mailto:proovit.dev@gmail.com">proovit.dev@gmail.com</a> y solicitar la eliminación de tu cuenta.`,
    },
    footer: "&copy; 2025 Proovit",
    footerLinks: {
      privacy: "Privacidad",
      terms: "Términos",
    },
  },
};

const mainContent = document.getElementById("main-content");
const footerText = document.getElementById("footer-text");
const langSwitcher = document.getElementById("lang-switcher");
const footerPrivacyLink = document.getElementById("footer-privacy-link");
const footerTermsLink = document.getElementById("footer-terms-link");
const footerCopyright = document.getElementById("footer-copyright");
const deleteBtn = document.getElementById("delete-btn");
const footerDeleteLink = document.getElementById("footer-delete-link");

// Detect which nav structure is present (SPA or static)
const navLinks = document.querySelectorAll("nav a[data-page]");
const navHome = document.getElementById("nav-home");
const navPrivacy = document.getElementById("nav-privacy");
const navTerms = document.getElementById("nav-terms");
const navDelete = document.getElementById("nav-delete");

let currentLang = localStorage.getItem("proovit-lang") || "en";

// Determine current page for static pages
let currentPage = "home";
if (window.location.pathname.includes("privacy")) currentPage = "privacy";
else if (window.location.pathname.includes("terms")) currentPage = "terms";
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
  } else if (navHome && navPrivacy && navTerms && navDelete) {
    navHome.textContent = translations[currentLang].nav.home;
    navPrivacy.textContent = translations[currentLang].nav.privacy;
    navTerms.textContent = translations[currentLang].nav.terms;
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
        <h1>${t.home.title}</h1>
        <p class="hero-desc">${t.home.description}</p>
      </section>
      <section class="features-list">
        ${t.home.features
          .map(
            (f) => `
          <div class="feature-tile">
            <span class="material-icons feature-icon">${f.icon}</span>
            <div>
              <h3>${f.title}</h3>
              <p>${f.desc}</p>
            </div>
          </div>
        `
          )
          .join("")}
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

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("proovit-lang", lang);
  if (langSwitcher) langSwitcher.value = lang;
  renderNav();
  renderPage(currentPage);
  if (footerPrivacyLink && footerTermsLink && footerDeleteLink) {
    footerPrivacyLink.textContent = translations[lang].footerLinks.privacy;
    footerTermsLink.textContent = translations[lang].footerLinks.terms;
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
  langSwitcher.addEventListener("change", (e) => setLang(e.target.value));
}

// SPA: listen for hash changes
window.addEventListener("hashchange", () => {
  const page = window.location.hash.replace("#", "") || "home";
  renderPage(page);
});

// Initial render
setLang(currentLang);
renderPage(currentPage);
