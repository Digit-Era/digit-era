// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Typing animation
// Typing animation for multiple texts in a loop (only once)
// Typing animation for multiple texts in a loop (only once)
const typingTexts = [
  "Transforming Businesses Digitally with Trust & Innovation",
  "Empowering Growth with Data, Design & Technology",
  "Your Partner for QR Menus, Websites, Analytics & Marketing"
];
const textElement = document.querySelector(".typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let loopDone = false;

function typeLoopOnce() {
  if (loopDone) return; // Stop if loop is done

  const currentText = typingTexts[textIndex];
  if (!isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      if (textIndex === typingTexts.length - 1) {
        // Last text: after typing, delete and then show first text
        setTimeout(() => {
          isDeleting = true;
          typeLoopOnce();
        }, 1500);
      } else {
        setTimeout(() => {
          isDeleting = true;
          typeLoopOnce();
        }, 1500);
      }
    } else {
      setTimeout(typeLoopOnce, 50);
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      if (textIndex === typingTexts.length - 1) {
        // After last text is deleted, show the first text and stop
        textElement.textContent = typingTexts[0];
        loopDone = true;
        return;
      } else {
        isDeleting = false;
        textIndex++;
        setTimeout(typeLoopOnce, 500);
      }
    } else {
      setTimeout(typeLoopOnce, 30);
    }
  }
}
typeLoopOnce();

// Go to Top Button
document.getElementById('goTopBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Animate credentials hover (desktop only)
// Animate credentials hover (desktop only)
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll('.cred-tile, .service-tile, .portfolio-tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => tile.classList.add('hovered'));
    tile.addEventListener('mouseleave', () => tile.classList.remove('hovered'));
  });
}


// Intersection Observer for animations
function animateOnScroll(selector, className = 'visible') {
  const elements = document.querySelectorAll(selector);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add(className));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll('.animate-service');
  animateOnScroll('.animate-why');
  animateOnScroll('.animate-about');
  animateOnScroll('#portfolio .portfolio-tile');
  animateOnScroll('.cred-tile');
});

// --- MOBILE FLIP LOGIC ---
// Service, Portfolio, and Credential tiles
document.querySelectorAll('.more-details-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const tile = btn.closest('.service-tile, .portfolio-tile, .cred-tile');
    tile.classList.add('flipped');
    // Remove blur if present
    tile.classList.remove('hovered');
  });
});
document.querySelectorAll('.close-details-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const tile = btn.closest('.service-tile, .portfolio-tile, .cred-tile');
    tile.classList.remove('flipped');
    // Remove blur if present
    tile.classList.remove('hovered');
  });
});
