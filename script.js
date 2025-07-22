const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Full màn hình
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Ký tự
const chars = "アァイィウエエオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

// Xử lý phát nhạc
document.getElementById("music-btn").onclick = () => {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
    document.getElementById("music-btn").textContent = "Đang phát 🎶";
  } else {
    audio.pause();
    document.getElementById("music-btn").textContent = "Phát nhạc 🎵";
  }
};