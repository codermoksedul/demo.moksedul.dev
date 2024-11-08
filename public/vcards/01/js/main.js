document.querySelector("#call_btn").addEventListener("click", function(){
  document.querySelector("#popup_box_area").classList.add("popup_box_area_active");
  document.querySelector("#business_card_area").classList.add("business_card_area_active_popup");
})
document.querySelector("#popup_close_btn").addEventListener("click", function(){
  document.querySelector("#popup_box_area").classList.remove("popup_box_area_active");
  document.querySelector("#business_card_area").classList.remove("business_card_area_active_popup");
})




