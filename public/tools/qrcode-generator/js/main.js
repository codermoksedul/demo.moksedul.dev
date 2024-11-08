

const qrCodeContainer = document.getElementById('qrcode-container');
let qrCodeText = "https://moksedul.dev/";
const qrCodeColor = document.getElementById('color-input').value;
const qrCodeBackgroundColor = document.getElementById('background-color-input').value;

// Clear previous QR code image
qrCodeContainer.innerHTML = '';

// Create the QR code using QRCode.js
const qrCode = new QRCode(qrCodeContainer, {
  text: qrCodeText,
  width: 256,
  height: 256,
  colorDark: qrCodeColor,
  colorLight: qrCodeBackgroundColor,
  correctLevel: QRCode.CorrectLevel.H,
});

// Add a download link to the QR code image
const qrCodeCanvas = qrCodeContainer.querySelector('canvas');
const qrCodeImage = qrCodeCanvas.toDataURL('image/png');
const downloadLink = document.createElement('a');
downloadLink.href = qrCodeImage;
downloadLink.download = 'qrcode.png';
downloadLink.textContent = 'Download QR Code';
qrCodeContainer.appendChild(downloadLink);





const generateQRCode = (e) => {
  e.preventDefault();
    const qrCodeContainer = document.getElementById('qrcode-container');
    const qrCodeText = document.getElementById('link-input').value;
    const qrCodeColor = document.getElementById('color-input').value;
    const qrCodeBackgroundColor = document.getElementById('background-color-input').value;

    // Clear previous QR code image
    qrCodeContainer.innerHTML = '';

    // Create the QR code using QRCode.js
    const qrCode = new QRCode(qrCodeContainer, {
      text: qrCodeText,
      width: 256,
      height: 256,
      colorDark: qrCodeColor,
      colorLight: qrCodeBackgroundColor,
      correctLevel: QRCode.CorrectLevel.H
    });

    // Add a download link to the QR code image
    const qrCodeCanvas = qrCodeContainer.querySelector('canvas');
    const qrCodeImage = qrCodeCanvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImage;
    downloadLink.download = 'qrcode.png';
    downloadLink.textContent = 'Download QR Code';
    qrCodeContainer.appendChild(downloadLink);
  }

  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', generateQRCode);



  