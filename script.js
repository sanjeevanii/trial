const lines = [
  "BOOTING SANJIVA.EXE...",
  "PHYSICS DETECTED",
  "SCANNING HAIR... ERROR",
  "HEART SIZE OVERFLOW",
  "ACCESS GRANTED"
];

let i = 0;
const t = document.getElementById("terminal");

function type() {
  if (i < lines.length) {
    t.innerHTML += lines[i++] + "\n";
    setTimeout(type, 400);
  } else {
    document.getElementById("enterBtn").style.display = "block";
  }
}

type();

document.getElementById("enterBtn").onclick = () => {
  document.getElementById("overlay").style.display = "none";

  if (typeof confetti !== "undefined") {
    confetti({
      particleCount: 250,
      spread: 180
    });
  }
};

for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 10) + "s";

  const particles = document.getElementById("particles");

  if (particles) {
    particles.appendChild(p);
  }
}

document.getElementById("aiBtn").onclick = () => {
  const q = (prompt("Ask Research AI") || "").toLowerCase();

  let answer = "Research ongoing.";

  if (q.includes("bald"))
    answer = "Hair converted into wisdom.";

  if (q.includes("nose"))
    answer = "Visible from orbit.";

  if (q.includes("heart"))
    answer = "Measurements exceed limits.";

  if (q.includes("physics"))
    answer = "Physics chose him.";

  alert(answer);
};