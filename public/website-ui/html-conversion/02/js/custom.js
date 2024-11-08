function preloader(){
  document.querySelector(".preloader").classList.add("preloaded");
}

// project carousel area
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,
      },
      1000:{
          items:3,
          nav:true,
          loop:true,
      }
  }
})

