// jquery settings here
$(document).ready(function(){
  // dashboard click functions
  $(".dashboard").click(function(){
    $(".dashboard_sub_menu").slideToggle();
    $(".dashboard").toggleClass('active');
    $(".apps_sub_menu").hide();
    $(".pages_sub_menu").hide();
    $(".components_sub_menu").hide();
    $(".elements_sub_menu").hide();
    $(".apps_menu").removeClass('active');
    $(".components").removeClass('active');
    $(".pages").removeClass('active');
    $(".ecommerce").removeClass('active');
    $(".elements").removeClass('active');

    $(".dashboard_toggler").toggleClass("fa-angle-up");
    $(".apps_toggler").addClass("fa-angle-down");
    $(".components_toggler").addClass("fa-angle-down");
    $(".elements_toggler").addClass("fa-angle-down");
    $(".pages_toggler").addClass("fa-angle-down");
    $(".ecommerce_toggler").addClass("fa-angle-down");

  })
  // Apps click functions
  $(".apps_menu").click(function(){
    $(".apps_sub_menu").slideToggle();
    $(".dashboard_sub_menu").hide();
    $(".components_sub_menu").hide();
    $(".elements_sub_menu").hide();
    $(".pages_sub_menu").hide();
    $(".dashboard").removeClass('active');
    $(".components").removeClass('active');
    $(".elements").removeClass('active');
    $(".pages").removeClass('active');
    $(".ecommerce").removeClass('active');
    $(".apps_menu").toggleClass('active');
    
    $(".dashboard_toggler").addClass("fa-angle-down");
    $(".apps_toggler").toggleClass("fa-angle-up");
    $(".components_toggler").addClass("fa-angle-down");
    $(".elements_toggler").addClass("fa-angle-down");
    $(".pages_toggler").addClass("fa-angle-down");
    $(".ecommerce_toggler").addClass("fa-angle-down");

  })
  // components click functions
  $(".components").click(function(){
    $(".components_sub_menu").slideToggle();
    $(".apps_sub_menu").hide();
    $(".dashboard_sub_menu").hide();
    $(".elements_sub_menu").hide();
    $(".pages_sub_menu").hide();
    $(".dashboard").removeClass('active');
    $(".apps_menu").removeClass('active');
    $(".elements").removeClass('active');
    $(".pages").removeClass('active');
    $(".ecommerce").removeClass('active');
    $(".components").toggleClass('active');
    
    $(".dashboard_toggler").addClass("fa-angle-down");
    $(".apps_toggler").addClass("fa-angle-down");
    $(".components_toggler").toggleClass("fa-angle-up");
    $(".elements_toggler").addClass("fa-angle-down")
    $(".pages_toggler").addClass("fa-angle-down");
    $(".ecommerce_toggler").addClass("fa-angle-down");

  })
  // Elements click functions
  $(".elements").click(function(){
    $(".elements_sub_menu").slideToggle();
    $(".components_sub_menu").hide();
    $(".apps_sub_menu").hide();
    $(".dashboard_sub_menu").hide();
    $(".pages_sub_menu").hide();
    $(".dashboard").removeClass('active');
    $(".apps_menu").removeClass('active');
    $(".components").removeClass('active');
    $(".pages").removeClass('active');
    $(".ecommerce").removeClass('active');
    $(".elements").toggleClass('active');

    $(".dashboard_toggler").addClass("fa-angle-down");
    $(".apps_toggler").addClass("fa-angle-down");
    $(".components_toggler").addClass("fa-angle-down");
    $(".elements_toggler").toggleClass("fa-angle-up");
    $(".pages_toggler").addClass("fa-angle-down");
    $(".ecommerce_toggler").addClass("fa-angle-down");

  })
  // pages click functions
  $(".pages").click(function(){
    $(".pages_sub_menu").slideToggle();
    $(".elements_sub_menu").hide();
    $(".components_sub_menu").hide();
    $(".apps_sub_menu").hide();
    $(".dashboard_sub_menu").hide();
    $(".dashboard").removeClass('active');
    $(".apps_menu").removeClass('active');
    $(".components").removeClass('active');
    $(".elements").removeClass('active');
    $(".ecommerce").removeClass('active');
    $(".pages").toggleClass('active');
    
    $(".dashboard_toggler").addClass("fa-angle-down");
    $(".apps_toggler").addClass("fa-angle-down");
    $(".components_toggler").addClass("fa-angle-down");
    $(".elements_toggler").addClass("fa-angle-down");
    $(".pages_toggler").toggleClass("fa-angle-up");
    $(".ecommerce_toggler").addClass("fa-angle-down");

  })
  // ecommerce click functions
  $(".ecommerce").click(function(){
    $(".ecommerce_sub_menu").slideToggle();
    $(".pages_sub_menu").hide();
    $(".elements_sub_menu").hide();
    $(".components_sub_menu").hide();
    $(".apps_sub_menu").hide();
    $(".dashboard_sub_menu").hide();
    $(".dashboard").removeClass('active');
    $(".apps_menu").removeClass('active');
    $(".components").removeClass('active');
    $(".elements").removeClass('active');
    $(".pages").removeClass('active');
    $(".ecommerce").toggleClass('active');
    
    $(".dashboard_toggler").addClass("fa-angle-down");
    $(".apps_toggler").addClass("fa-angle-down");
    $(".components_toggler").addClass("fa-angle-down");
    $(".elements_toggler").addClass("fa-angle-down");
    $(".pages_toggler").addClass("fa-angle-down");
    $(".ecommerce_toggler").toggleClass("fa-angle-up");

  })



  // right menu toggler button start
  $(".side_menu_toggler_btn").click(function(){
    $("#menu_area").toggleClass("active_menu_area");
    $(".menu_close_btn").addClass("activeClose_btn");
  })
  $(".menu_close_btn").click(function(){
    $("#menu_area").removeClass("active_menu_area");
    $(".menu_close_btn").removeClass("activeClose_btn");
  })


  // right menu collapse button here
  $(".side_menu_collapse_btn").click(function(){
    $("#menu_area").toggleClass("active_collapse_menu");
    $("#interface_area").toggleClass("interface_area_active_menu");

  })
  // right menu toggler button end

$("#menu_area").hover(function(){
  $("#interface_area").toggleClass("interface_area_hover_menu");
})

// notification toggler box
$(".notification_btn").click(function(){
  $(".notification_popup_box").fadeToggle();
  $(".settings_pupup_box").fadeOut();
  $(".profile_popup_box").fadeOut();
})
// notification toggler box
$(".settings_btn").click(function(){
  $(".settings_pupup_box").fadeToggle();
  $(".notification_popup_box").fadeOut();
  $(".profile_popup_box").fadeOut();
})
// profile toggler box
$(".profile_btn").click(function(){
  $(".profile_popup_box").fadeToggle();
  $(".settings_pupup_box").fadeOut();
  $(".notification_popup_box").fadeOut();
})

// color switch button here
$("#color_switch_btn").click(function(){
  $("#color_switch_icon").toggleClass("fa-moon");
  $(".color_switch_light").toggle();
  $(".color_switch_txt").html("White Mode");
  $("#light_mode").toggleClass("active_light_mode");
})









})