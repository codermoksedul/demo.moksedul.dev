const form = document.querySelector('#form');
const textInput = document.querySelector('#text');
const removeSpaceCheckbox = document.querySelector('#removeSpace');
const removePunctuationCheckbox = document.querySelector('#removePunctuation');
const removeNumberCheckbox = document.querySelector('#removeNumber');
const resetButton = document.querySelector('#reset');
const submitButton = document.querySelector('#submit');
const outputDiv = document.querySelector('#output');

function counter_box(){
    let text = textInput.value;
  if (removeSpaceCheckbox.checked) {
    text = text.replace(/ /g, '');
  }
  if (removePunctuationCheckbox.checked === false) {
    text = text.replace(/[^\w\s]/gi, '');
  }
  if (removeNumberCheckbox.checked === false) {
    text = text.replace(/\d+/g, '');
  }
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const letterCount = text.length;
  outputDiv.innerHTML = `Word count: ${wordCount}<br>Letter
  count: ${letterCount}`;

  resetButton.addEventListener('click', function() {
    textInput.value = '';
    removeSpaceCheckbox.checked = false;
    removePunctuationCheckbox.checked = false;
    removeNumberCheckbox.checked = false;
    outputDiv.innerHTML = '';
  })
};

setInterval(() => {
    counter_box();
}, 100);

document.querySelector(".more_option_btn").addEventListener("click", function(){
    document.querySelector(".more_func").classList.toggle("active_more_func");
    document.querySelector(".more_btn_icon").classList.toggle("active_more_btn_icon");
})