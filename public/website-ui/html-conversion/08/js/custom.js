function preloader(){
  document.querySelector(".preloader").classList.add("preloaded");
}

$(document).ready(function(){
  $("#scroll_top_btn").click(function(){
    $(window).scrollTop(0);
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scroll_top_btn').fadeIn();
        $("#hader_nav_area").addClass("header_nav_menu_fixed").fadeIn();
    } else {
        $('#scroll_top_btn').fadeOut();
        $("#hader_nav_area").removeClass("header_nav_menu_fixed").fadeIn();
    }
  });
})

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $("#navbar_menu").toggleClass("navbar_menu_active");
    $(".close_menu_box").toggleClass("close_menu_box_active");
  })

  $(".close_menu_box").click(function(){
    $("#navbar_menu").removeClass("navbar_menu_active");
    $(".close_menu_box").removeClass("close_menu_box_active");
  })
})
// carousel area start
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
          items:2
      },
      768:{
          items:3
      },
      1000:{
          items:4,
      }
  }
})
// carousel area end

// loading img area start
$(document).ready(function(){
  $(".load_more_btn").click(function(){
    $(".load_more_img").fadeIn();
    $(".loadmore_txt").text("Loading...")
  })
})
// loading img area end

document.querySelector(".footer_copyright_date_text").innerHTML= new Date().getFullYear();