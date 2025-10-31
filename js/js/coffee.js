// Initialize AOS animation
AOS.init({
  duration: 1200,
  once: true
});

// Typing Effect
const text = "THE BEST COFFEE TASTING EXPERIENCE";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;

// Navbar background change on scroll
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
