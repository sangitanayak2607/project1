// Initialize AOS (scroll animation)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// ----------------------------
//  Contact Form (No Backend)
// ----------------------------
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const out = document.getElementById('formMessage');

  if (!name || !email || !message) {
    out.innerHTML = "<span style='color:#ff6b6b'>Please fill all fields.</span>";
    return;
  }

  // Simulate success — you can replace this with EmailJS, PHP, etc.
  out.innerHTML = "<span style='color:#9df3c4'>Message sent successfully! I'll get back to you soon.</span>";
  this.reset();
});

// ----------------------------
//  Smooth Scroll + Active Link Highlight
// ----------------------------
const navLinks = document.querySelectorAll('.nav-link');
const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));

function onScroll() {
  const scrollPos = window.scrollY + 120;
  sections.forEach((sec, idx) => {
    if (!sec) return;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(n => n.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll(); // Initialize active state on load

// ----------------------------
//  Skills Progress Animation
// ----------------------------
function animateSkills() {
  const skillsSection = document.querySelector('#skills');
  const progressBars = document.querySelectorAll('.progress-bar');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Check if skills section is visible in viewport
  if (sectionTop < windowHeight - 100) {
    progressBars.forEach(bar => {
      const target = bar.getAttribute('data-skill');
      bar.style.width = target + '%';
      bar.textContent = target + '%';
    });
    // Run once only
    window.removeEventListener('scroll', animateSkills);
  }
}

// Attach event listener
window.addEventListener('scroll', animateSkills);
