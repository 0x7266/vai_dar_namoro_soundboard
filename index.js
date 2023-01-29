console.clear();
const btns = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9"),
  document.getElementById("btn10"),
  document.getElementById("btn11"),
  document.getElementById("btn12"),
  document.getElementById("btn13"),
];

const sounds = [
  "./sounds/calma-pae.mp3?raw=true",
  "./sounds/cavalo.mp3?raw=true",
  "./sounds/cheega.mp3?raw=true",
  "./sounds/e-brincadeira-ein.mp3?raw=true",
  "./sounds/ele-gosta.mp3?raw=true",
  "./sounds/esqueca-tudo.mp3?raw=true",
  "./sounds/eu-nao-entendi-o-que-ele-falou.mp3?raw=true",
  "./sounds/irraa.mp3?raw=true",
  "./sounds/olha-ele-ae.mp3?raw=true",
  "./sounds/que-isso-meu-filho.mp3?raw=true",
  "./sounds/tomi.mp3?raw=true",
  "./sounds/uepa.mp3?raw=true",
  "./sounds/ui.mp3?raw=true",
];

btns.map((b, index) => {
  b.setAttribute("onclick", `playSound(${index})`);
});

function playSound(index, b) {
  let sound = new Audio(sounds[index]);
  sound.play();
}
