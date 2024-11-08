function removeSpaces() {
    var input = document.getElementById("input").value;
    var output = input.replace(/\s+/g, "");
    document.getElementById("output").innerHTML = output;
    document.getElementById("copy_btn").innerHTML="Copy";
}
  
function copyToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("copy_btn").innerHTML="Copied";
}
  