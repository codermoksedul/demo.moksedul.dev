// preloader area star
$(document).ready(function(){
    $(window).on('load', function() {
        $('#preloader_area').fadeOut('slow');
      });
});
// preloader area end

$(document).ready(function(){
  $('.navbar_toggler').click(function(){
    $("#navbar_menu").toggleClass('active_navar_menu');
    $(".close_menu").toggleClass('active_close_menu');
  });
  // close button
  $(".close_menu").click(function(){
    $("#navbar_menu").removeClass('active_navar_menu');
    $(".close_menu").removeClass('active_close_menu');
  });
// popup video player hero area
$(".play_btn").click(function(){
  $("#video_popup_box").addClass("active_video_popup_box");
})
$(".video_player_close").click(function(){
  $("#video_popup_box").removeClass("active_video_popup_box");
})
});


// company slider
// <!-- Initialize Swiper -->

    var swiper = new Swiper(".companySwiper", {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



// price tabble here
let price_changer = document.getElementById("price_changer");
let standard_price = document.querySelector(".standard_price");
let unlimited_price = document.querySelector(".unlimited_price");
let premium_price = document.querySelector(".premium_price");

let stnd_website = document.querySelector(".stnd_website");
let stnd_disk = document.querySelector(".stnd_disk");
let stnd_page = document.querySelector(".stnd_page");
let stnd_domain = document.querySelector(".stnd_domain");

let unlimited_website = document.querySelector(".unlimited_website");
let unlimited_disk = document.querySelector(".unlimited_disk");
let unlimited_page = document.querySelector(".unlimited_page");
let unlimited_domain = document.querySelector(".unlimited_domain");

let premium_website = document.querySelector(".premium_website");
let premium_disk = document.querySelector(".premium_disk");
let premium_page = document.querySelector(".premium_page");
let premium_domain = document.querySelector(".premium_domain");


price_changer.addEventListener("change", function(){
  if (this.checked) {
    standard_price.innerHTML = "$150";
    unlimited_price.innerHTML = "$999";
    premium_price.innerHTML = "$550";
    // standard
    stnd_website.innerHTML = "Up to 10 Website";
    stnd_disk.innerHTML = "100 GB disk space";
    stnd_page.innerHTML = "25 Customize sub pages";
    stnd_domain.innerHTML = "4 Domains access";
    // unlimided
    unlimited_website.innerHTML = "Unlimited Website";
    unlimited_disk.innerHTML = "400 GB disk space";
    unlimited_page.innerHTML = "40 Customize sub pages";
    unlimited_domain.innerHTML = "20 Domains access";
    // premium
    premium_website.innerHTML = "Up to 20 Website";
    premium_disk.innerHTML = "200 GB disk space";
    premium_page.innerHTML = "25 Customize sub pages";
    premium_domain.innerHTML = "8 Domains access";

  } else {
    standard_price.innerHTML = "$15";
    unlimited_price.innerHTML = "$99";
    premium_price.innerHTML = "$55";
    // standard
    stnd_website.innerHTML = "Up to 5 Website";
    stnd_disk.innerHTML = "50 GB disk space";
    stnd_page.innerHTML = "10 Customize sub pages";
    stnd_domain.innerHTML = "2 Domains access";
    // unlimided
    unlimited_website.innerHTML = "Unlimited Website";
    unlimited_disk.innerHTML = "200 GB disk space";
    unlimited_page.innerHTML = "20 Customize sub pages";
    unlimited_domain.innerHTML = "10 Domains access";
    // premium
    premium_website.innerHTML = "Up to 10 Website";
    premium_disk.innerHTML = "100 GB disk space";
    premium_page.innerHTML = "15 Customize sub pages";
    premium_domain.innerHTML = "4 Domains access";
  }
});

// sticky menu
// Get the sticky menu element
const stickyMenu = document.querySelector('.sticky-menu');

// Get the offset position of the sticky menu
const stickyOffset = stickyMenu.offsetTop;

// Function to handle scrolling
const handleScroll = () => {
  // Check if the page has been scrolled past the sticky offset position
  if (window.pageYOffset > stickyOffset) {
    // Add a CSS class to make the menu sticky
    stickyMenu.classList.add('sticky');
  } else {
    // Remove the CSS class if the page is above the sticky offset position
    stickyMenu.classList.remove('sticky');
  }
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


//scrolll to top
// Get the scroll-to-top button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scrollToTopBtn');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition === 0) {
    scrollButton.style.display = 'none';
  } else if (scrollPosition >= 300) {
    scrollButton.style.display = 'block';
  }
});

// Function to smoothly scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Attach the click event listener to the scroll-to-top button
scrollToTopBtn.addEventListener('click', scrollToTop);

