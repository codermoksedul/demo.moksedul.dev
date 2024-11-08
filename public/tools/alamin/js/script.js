let dateInput = document.querySelector(".dateInput");
let peoject_start_date = document.querySelector(".peoject_start_date");
let estimated_delivery_date = document.querySelector(".estimated_delivery_date");

// Get current date
var currentDate = new Date();
var monthIndex = currentDate.getMonth();

var months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var monthName = months[monthIndex];

dateInput.value = "Date: " + currentDate.getDate() + " " + monthName + " " + currentDate.getFullYear();
peoject_start_date.value = currentDate.getDate() + " " + monthName + " " + currentDate.getFullYear();
estimated_delivery_date.value = currentDate.getDate() + " " + monthName + " " + currentDate.getFullYear();
