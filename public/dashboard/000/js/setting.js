$(document).ready(function(){
  // menu active button moble screen
  $(".menu_toggler_btn").click(function(){
    $("#menu_area").toggleClass("active_menu_area");
    $(".remove_menu_area_btn").show();
  })
  // menu desable button mobile screen
  $(".remove_menu_area_btn").click(function(){
    $("#menu_area").removeClass("active_menu_area");
    $(".remove_menu_area_btn").hide();
  })
  // collapse menu button 
  $(".menu_collapse_btn").click(function(){
    $("#menu_area").toggleClass("collapse_menu_area_active");
    $("#interface_area").toggleClass("collapse_active_interface_area");
    $(".menu_collapse_btn").toggleClass("active_menu")
  })


// popup box button here
$(".notificaton_btn").click(function(){
  $(".notification_popup_box").fadeToggle(300);
  $(".profile_pupup_box").fadeOut(300);
})
$(".profile_btn").click(function(){
  $(".profile_pupup_box").fadeToggle(300);
  $(".notification_popup_box").fadeOut(300);
})


// color switching button here
$(".color_switching_btn").click(function(){
  $(".color_switching_icon").toggleClass("fa-sun");
  $(".color_switching_icon").toggleClass("fa-moon");
  $("#body").toggleClass("light_active");
})






})