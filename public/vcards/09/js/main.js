document.querySelector(".btn1").addEventListener("click", function(){
  document.querySelector(".toggle_information1").classList.toggle("toggle_information_active")
  document.querySelector(".btn_arrow1").classList.toggle("fa-angle-up");
})
document.querySelector(".btn2").addEventListener("click", function(){
  document.querySelector(".toggle_information2").classList.toggle("toggle_information_active")
  document.querySelector(".btn_arrow2").classList.toggle("fa-angle-up");
})

// home button click 
document.querySelector(".home_btn").addEventListener("click", function(){
  document.querySelector(".home_btn").classList.add("footer_active");
  document.querySelector(".about_btn").classList.remove("footer_active");
  document.querySelector(".website_btn").classList.remove("footer_active");
  document.querySelector(".home_page_area").classList.add("home_page_area_active");
  document.querySelector(".admin_website_area").classList.remove("admin_website_area_active");
})
// about button click 
document.querySelector(".about_btn").addEventListener("click", function(){
  document.querySelector(".home_btn").classList.remove("footer_active");
  document.querySelector(".about_btn").classList.add("footer_active");
  document.querySelector(".website_btn").classList.remove("footer_active");
  document.querySelector(".home_page_area").classList.add("home_page_area_active");
  document.querySelector(".admin_website_area").classList.remove("admin_website_area_active");
})
// website button click 
document.querySelector(".website_btn").addEventListener("click", function(){
  document.querySelector(".home_btn").classList.remove("footer_active");
  document.querySelector(".about_btn").classList.remove("footer_active");
  document.querySelector(".website_btn").classList.add("footer_active");
  document.querySelector(".home_page_area").classList.remove("home_page_area_active");
  document.querySelector(".admin_website_area").classList.add("admin_website_area_active");
})



