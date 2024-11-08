// Select the input and output elements
const htmlInput = document.querySelector('#html');
const minifiedHtmlOutput = document.querySelector('#minified-html');

// Function to minify the HTML code
function minifyHTML(html) {
  // Remove comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // Remove whitespace between tags
  html = html.replace(/>\s+</g, '><');

  // Remove whitespace at the beginning and end of lines
  html = html.replace(/^\s+/gm, '');
  html = html.replace(/\s+$/gm, '');

  // Remove whitespace before and after inline elements
  html = html.replace(/(<[^\/>]+>)\s+/g, '$1');
  html = html.replace(/\s+(<\/[^>]+>)/g, '$1');

  return html;
}

// Function to copy the minified HTML code to clipboard
function copyToClipboard() {
  // Select the minified HTML code
  minifiedHtmlOutput.select();
  minifiedHtmlOutput.setSelectionRange(0, 99999);

  // Copy the selected text to clipboard
  document.execCommand('copy');

  // Alert the user that the code has been copied
  document.getElementById("copy-button").innerHTML = "Copied!";
}

// Add event listener to the submit button
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Minify the HTML code and display it in the output area
  minifiedHtmlOutput.value = minifyHTML(htmlInput.value);
  
  document.getElementById("copy-button").innerHTML = "Copy";
});

// Add event listener to the copy button
document.querySelector('#copy-button').addEventListener('click', function() {
  // Copy the minified HTML code to clipboard
  copyToClipboard();
});




// var code1 = "JRh0x9A4w4j1inpEp9or-2ytL4ZNdLBYqt2357GGP1A";
// var code2 = "JRh0x9A4w4j1inpEp9or-2ytL4ZNdLBYqt2357GGP1A";

// if(code1 === code2){
//   alert('yes')
// }
// else{
//   alert("false")
// }