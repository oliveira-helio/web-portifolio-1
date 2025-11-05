// DOM Elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const timeline = document.getElementById("timeline");
const filterBtns = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contact-form");

// Mobile Navigation Toggle
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Update active nav link based on scroll position
  updateActiveNavLink();
});

// Update Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll(".section");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Render Skills
function renderSkills() {
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillsData
    .map(
      (skill) => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render Projects
function renderProjects(filter = "all") {
  if (!projectsGrid) return;

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags
                      .map((tag) => `<span class="tag">${tag}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.github
                    }" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${
                      project.demo
                    }" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Re-initialize animations for new elements
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.add("animate-in");
    });
  }, 100);
}

// Project Filter
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    renderProjects(filter);
  });
});

// Render Timeline
function renderTimeline() {
  if (!timeline) return;

  timeline.innerHTML = experienceData
    .map(
      (exp) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.date}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// Contact Form Handling
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Simulate form submission
    console.log("Form submitted:", data);

    // Show success message
    showNotification("Mensagem enviada com sucesso!", "success");

    // Reset form
    contactForm.reset();
  });
}

// Notification System
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === "success" ? "var(--success)" : "var(--error)"};
        color: var(--bg-dark);
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
  notification.textContent = message;

  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Lazy Loading Images (if you add images later)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Copy to Clipboard (for email)
function initCopyToClipboard() {
  document.querySelectorAll(".contact-item span").forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      navigator.clipboard.writeText(item.textContent).then(() => {
        showNotification("Copiado para área de transferência!", "success");
      });
    });
  });
}

// Dark Mode Toggle (Optional - already dark themed)
function initThemeToggle() {
  const themeToggle = document.createElement("button");
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--bg-dark);
        border: none;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(0, 255, 136, 0.3);
        z-index: 1000;
        display: none; /* Hidden by default */
        font-size: 1.2rem;
        transition: var(--transition);
    `;

  themeToggle.addEventListener("click", () => {
    // Theme toggle logic can be added here
    showNotification("Tema alternado!", "success");
  });

  // Uncomment to enable theme toggle
  // document.body.appendChild(themeToggle);
}

// Initialize Everything
function init() {
  // Render content
  renderSkills();
  renderProjects();
  renderTimeline();

  // Initialize animations
  if (window.animations) {
    window.animations.addRevealAnimation();
    window.animations.initTypewriter();
    window.animations.initScrollAnimations();
    window.animations.initParallax();
    window.animations.createParticles();
    // window.animations.initMouseTrail(); // Uncomment for mouse trail effect
  }

  // Initialize other features
  lazyLoadImages();
  initCopyToClipboard();
  initThemeToggle();

  // Set initial active nav link
  updateActiveNavLink();
}

// Wait for DOM to be fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Performance Monitoring (Optional)
window.addEventListener("load", () => {
  console.log(
    "%c🚀 Portfolio Loaded Successfully!",
    "color: #00ff88; font-size: 16px; font-weight: bold;"
  );

  // Log performance metrics
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
  }
});
