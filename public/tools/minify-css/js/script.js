function minifyCSS() {
  var input = document.getElementById("input").value;
  var output = input.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '').replace(/ {2,}/g, ' ').replace(/ ([{:}])/g, '$1').replace(/([;,]) /g, '$1').replace(/ !/g, '!');
  document.getElementById("output").value = output;
  document.getElementById("copy_btn").innerHTML = "Copy"
}

function copyOutput() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  document.getElementById("copy_btn").innerHTML = "Copied!"
}
