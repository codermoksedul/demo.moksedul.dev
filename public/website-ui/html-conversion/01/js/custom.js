function preloader(){
  document.querySelector(".preloader").classList.add("preloaded");
}
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").fadeToggle();
    $(".navbar_close_btn").addClass("navbar_close_btn_active");
    $(".header_search_box").addClass("active_mobile_search")
  });
  $(".navbar_close_btn").click(function(){
    
    $(".navbar-collapse").fadeOut();
    $(".navbar_close_btn").removeClass("navbar_close_btn_active");
    $(".header_search_box").removeClass("active_mobile_search");

  })
})
