// let dashboard_btn = document.querySelector(".dasdboard_btn");
// let card_btn = document.querySelector(".card_btn");
// let subscription_btn = document.querySelector(".subscription_btn");
// let activity_btn = document.querySelector(".activity_btn");
// let currency_btn = document.querySelector(".currency_btn");
// let setting_btn = document.querySelector(".setting_btn");
// let logout_btn = document.querySelector(".logout_btn");

// dashboard_btn.addEventListener("click", function(){
//   dashboard_btn.classList.add("active");
//   card_btn.classList.remove("active");
//   subscription_btn.classList.remove("active");
//   activity_btn.classList.remove("active");
//   currency_btn.classList.remove("active");
//   setting_btn.classList.remove("active");

//   document.querySelector("#dashboard_interface_area").classList.add("dashboard_interface_area_active");
//   document.querySelector("#currency_rate_interface").classList.remove("currency_rate_interface_active");
//   document.querySelector("#transacton_interface").classList.remove("transacton_interface_active");
// })
// card_btn.addEventListener("click", function(){
//   dashboard_btn.classList.remove("active");
//   card_btn.classList.add("active");
//   subscription_btn.classList.remove("active");
//   activity_btn.classList.remove("active");
//   currency_btn.classList.remove("active");
//   setting_btn.classList.remove("active");
// })
// subscription_btn.addEventListener("click", function(){
//   dashboard_btn.classList.remove("active");
//   card_btn.classList.remove("active");
//   subscription_btn.classList.add("active");
//   activity_btn.classList.remove("active");
//   currency_btn.classList.remove("active");
//   setting_btn.classList.remove("active");
// })
// activity_btn.addEventListener("click", function(){
//   dashboard_btn.classList.remove("active");
//   card_btn.classList.remove("active");
//   subscription_btn.classList.remove("active");
//   activity_btn.classList.add("active");
//   currency_btn.classList.remove("active");
//   setting_btn.classList.remove("active");

//   document.querySelector("#dashboard_interface_area").classList.remove("dashboard_interface_area_active");
//   document.querySelector("#currency_rate_interface").classList.remove("currency_rate_interface_active");
//   document.querySelector("#transacton_interface").classList.add("transacton_interface_active");
// })
// currency_btn.addEventListener("click", function(){
//   dashboard_btn.classList.remove("active");
//   card_btn.classList.remove("active");
//   subscription_btn.classList.remove("active");
//   activity_btn.classList.remove("active");
//   currency_btn.classList.add("active");
//   setting_btn.classList.remove("active");

//   document.querySelector("#dashboard_interface_area").classList.remove("dashboard_interface_area_active");
//   document.querySelector("#currency_rate_interface").classList.add("currency_rate_interface_active");
//   document.querySelector("#transacton_interface").classList.remove("transacton_interface_active");
// })
// setting_btn.addEventListener("click", function(){
//   dashboard_btn.classList.remove("active");
//   card_btn.classList.remove("active");
//   subscription_btn.classList.remove("active");
//   activity_btn.classList.remove("active");
//   currency_btn.classList.remove("active");
//   setting_btn.classList.add("active");
// })
// humburger toggle button
let toggle_btn = document.querySelector(".humburger_btn");
let menu_toggle_btn = document.querySelector(".menu_close_btn");

toggle_btn.addEventListener("click", function(){
  document.querySelector("#menu_area").classList.toggle("menu_active")
})
menu_toggle_btn.addEventListener("click", function(){
  document.querySelector("#menu_area").classList.toggle("menu_active")
})

// collapse menu here
document.querySelector(".collapse_menu_btn").addEventListener("click", function(){
  document.querySelector("#menu_area").classList.toggle("collapse_menu");
  document.querySelector("#main_layout_area").classList.toggle("main_layout_area_collapse");
})

// profile box click function here
let profile_btn = document.querySelector(".profile_btn");
let profile_pop_box = document.querySelector("#profile_popup_box");
let notification_btn = document.querySelector("#notification_btn");
let notification_popup_box = document.querySelector(".notification_popup_box");


let profile_popup_close_btn = document.querySelector(".profile_pop_up_close_btn");
profile_btn.addEventListener("click", function(){
  profile_pop_box.classList.toggle("active");
  profile_popup_close_btn.classList.toggle("profile_popup_close_active");
  notification_popup_box.classList.remove("ntb_active");
})
profile_popup_close_btn.addEventListener("click", function(){
  profile_pop_box.classList.remove("active");
  profile_popup_close_btn.classList.toggle("profile_popup_close_active");notification_popup_box.classList.remove("ntb_active");
})

notification_btn.addEventListener("click", function(){
  notification_popup_box.classList.toggle("ntb_active");
  profile_popup_close_btn.classList.toggle("profile_popup_close_active");
  profile_pop_box.classList.remove("active");
})