document.querySelector(".content_btn_1").addEventListener("click", function(){
  document.querySelector(".content_box_1").classList.toggle("content_box_active")
  document.querySelector(".toggle_content_icon1").classList.toggle("fa-angles-down")
  document.querySelector(".toggle_content_icon1").classList.toggle("fa-caret-up")
  
  document.querySelector(".content_box_2").classList.remove("content_box_active")
  document.querySelector(".content_box_3").classList.remove("content_box_active")
})
document.querySelector(".content_btn_2").addEventListener("click", function(){
  document.querySelector(".content_box_2").classList.toggle("content_box_active")
  document.querySelector(".toggle_content_icon2").classList.toggle("fa-angles-down")
  document.querySelector(".toggle_content_icon2").classList.toggle("fa-caret-up")
  
  document.querySelector(".content_box_1").classList.remove("content_box_active")
  document.querySelector(".content_box_3").classList.remove("content_box_active")
})
document.querySelector(".content_btn_3").addEventListener("click", function(){
  document.querySelector(".content_box_3").classList.toggle("content_box_active")
  document.querySelector(".toggle_content_icon2").classList.toggle("fa-angles-down")
  document.querySelector(".toggle_content_icon2").classList.toggle("fa-caret-up")
  
  document.querySelector(".content_box_1").classList.remove("content_box_active")
  document.querySelector(".content_box_2").classList.remove("content_box_active")
})
// aos carousel area
  AOS.init();