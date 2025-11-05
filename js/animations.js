// Typewriter Effect
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize Typewriter on Hero Section
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    setTimeout(() => {
      typeWriter(typewriterElement, typewriterCode, 30);
    }, 500);
  }
}

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "+";
      }
    };

    updateCounter();
  });
}

// Intersection Observer for Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");

        // Trigger counter animation for stats
        if (entry.target.querySelector(".counter")) {
          animateCounters();
          observer.unobserve(entry.target);
        }

        // Trigger skill bar animations
        if (entry.target.classList.contains("skill-card")) {
          const progressBar = entry.target.querySelector(".skill-progress");
          const level = progressBar.getAttribute("data-level");
          setTimeout(() => {
            progressBar.style.width = level + "%";
          }, 200);
        }
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Observe skill cards
  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });
}

// Parallax Effect for Hero Section
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector(".hero-content");

    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      heroContent.style.opacity = 1 - scrolled / window.innerHeight;
    }
  });
}

// Smooth Reveal Animation
function addRevealAnimation() {
  const style = document.createElement("style");
  style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-card,
        .project-card,
        .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .skill-card.animate-in,
        .project-card.animate-in,
        .timeline-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-progress {
            width: 0;
            transition: width 1.5s ease;
        }
    `;
  document.head.appendChild(style);
}

// Particle Background Effect
function createParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const particlesContainer = document.createElement("div");
  particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    `;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
    particlesContainer.appendChild(particle);
  }

  const style = document.createElement("style");
  style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 100 - 50}px, ${
    Math.random() * 100 - 50
  }px);
            }
        }
    `;
  document.head.appendChild(style);

  hero.insertBefore(particlesContainer, hero.firstChild);
}

// Mouse Trail Effect
function initMouseTrail() {
  let mouseX = 0,
    mouseY = 0;
  let ballX = 0,
    ballY = 0;
  let speed = 0.1;

  const trail = document.createElement("div");
  trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 255, 136, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
  document.body.appendChild(trail);

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX += distX * speed;
    ballY += distY * speed;

    trail.style.left = ballX + "px";
    trail.style.top = ballY + "px";

    requestAnimationFrame(animate);
  }

  animate();
}

// Export functions for use in main.js
window.animations = {
  initTypewriter,
  animateCounters,
  initScrollAnimations,
  initParallax,
  addRevealAnimation,
  createParticles,
  initMouseTrail,
};
