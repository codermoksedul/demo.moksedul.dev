document.addEventListener('DOMContentLoaded', () => {
  const imageInput = document.getElementById('image-input');
  const imagePreview = document.getElementById('image-preview');
  const convertBtn = document.getElementById('convert-btn');
  const resultTextarea = document.getElementById('result');
  const downloadBtn = document.getElementById('download-btn');

  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  convertBtn.addEventListener('click', () => {
    const file = imageInput.files[0];
    if (file) {
      Tesseract.recognize(file)
        .progress((progress) => {
          console.log(`Progress: ${progress.progress}`);
        })
        .then((result) => {
          resultTextarea.value = result.text;
          downloadBtn.disabled = false;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  downloadBtn.addEventListener('click', () => {
    const text = resultTextarea.value;
    const filename = 'converted_text.txt';
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });
});
