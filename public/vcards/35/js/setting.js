// call button popup 
function call_btn(){
    document.querySelector("#popup_box").classList.add("popup_box_active");
}
function popup_close(){
    document.querySelector("#popup_box").classList.remove("popup_box_active");
}

// // contact form validation 
// let name_input = document.querySelector("#name_input");
// let email_input = document.querySelector("#email_input");
// let phone_input = document.querySelector("#phone_input");
// let message_input = document.querySelector("#message_input");
// let email_validation = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// )
// let submit_btn = document.querySelector(".form_submit_btn");

// submit_btn.addEventListener("click", function(){
//     function form_email_validation(){
//         if((name_input.value.length >= 3 && name_input.value.length < 15) ){
//             document.querySelector(".invalid_name").classList.remove("invalid_active");
//         }
//         else{
//             document.querySelector(".invalid_name").classList.add("invalid_active");
//             document.querySelector(".invalid_email").classList.add("invalid_active");
//             document.querySelector(".invalid_message").classList.add("invalid_active");
//         }
//     }
//     form_email_validation();
// })


