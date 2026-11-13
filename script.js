const stage = document.getElementById('stage');
const replay = document.getElementById('replay');
const confetti = document.getElementById('confetti');

// Partículas decorativas creadas con JavaScript, sin librerías externas.
const colors = ['#ff1748', '#ffffff', '#371a45', '#ffd447'];
for (let i = 0; i < 34; i++) {
  const piece = document.createElement('i');
  piece.style.left = `${Math.random() * 100}%`;
  piece.style.background = colors[i % colors.length];
  piece.style.animationDelay = `${2.85 + Math.random() * 0.55}s`;
  piece.style.transform = `rotate(${Math.random() * 180}deg)`;
  confetti.appendChild(piece);
}

function playCelebration() {
  stage.classList.remove('playing');
  // Forzar un reflow reinicia las animaciones CSS al pulsar repetir.
  void stage.offsetWidth;
  stage.classList.add('playing');
}

replay.addEventListener('click', playCelebration);
window.addEventListener('load', playCelebration);
