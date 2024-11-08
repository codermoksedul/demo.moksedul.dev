document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("preloader").style.display = "none";
    }, 3000);
  });
  

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down a certain distance
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  // Use the 'scrollTo' method with behavior set to 'smooth'
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let menuToggler = document.getElementById("menu_toggler");
let mobileMenu = document.getElementById("navbar_menu");

menuToggler.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
})