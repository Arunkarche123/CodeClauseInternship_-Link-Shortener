document.getElementById("shorten-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const longUrl = document.getElementById("long-url").value;
    const customAlias = document.getElementById("custom-alias").value;
    const resultContainer = document.getElementById("result");
    const shortUrlElement = document.getElementById("short-url");
    const qrCanvas = document.getElementById("qr-code");
  
    // Generate a mock short URL
    const baseUrl = "https://short.ly/";
    const shortUrl = customAlias ? ${baseUrl}${customAlias} : ${baseUrl}${Math.random().toString(36).substr(2, 5)};
  
    // Display the shortened URL
    shortUrlElement.textContent = shortUrl;
    shortUrlElement.href = shortUrl;
  
    // Generate QR Code
    const qrCode = new QRCode(qrCanvas, {
      text: shortUrl,
      width: 128,
      height: 128,
    });
  
    // Show the result container
    resultContainer.classList.remove("hidden");
  });
  
  // QR Code library
  class QRCode {
    constructor(canvas, options) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
  
      const text = options.text || "Default";
      const size = options.width || 128;
      const scale = 10;
      const grid = Math.ceil(size / scale);
  
      for (let x = 0; x < grid; x++) {
        for (let y = 0; y < grid; y++) {
          if (Math.random() > 0.7) {
            ctx.fillRect(x * scale, y * scale, scale, scale);
          }
        }
      }
    }
  }