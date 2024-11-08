let menu_toggle_btn = document.querySelector(".humburger_btn");


menu_toggle_btn.addEventListener("click", function(){
  document.querySelector("#menu_area").classList.toggle("menu_active");
  document.querySelector("#interface_area").classList.toggle("interface_area_toggle");
  document.querySelector(".fa-bars-staggered").classList.toggle("fa-times")
});

let dark_toggler = document.querySelector(".dark_toggler");

dark_toggler.addEventListener("click", function(){
  document.querySelector(".dark").classList.toggle("dark_active");
  document.querySelector(".dark_icon").classList.toggle("fa-sun");
  document.querySelector(".dark_icon").classList.toggle("fa-moon");
})

// add user button menu area
let add_user_btn = document.querySelector(".add_user_btn");
let add_team_user_area = document.querySelector("#add_team_user_area");
let add_user_window_close_btn = document.querySelector(".add_user_window_close_btn");
add_user_btn.addEventListener("click", function(){
  add_team_user_area.classList.add("add_team_user_area_active");

})
add_user_window_close_btn.addEventListener("click", function(){
  add_team_user_area.classList.remove("add_team_user_area_active");

})