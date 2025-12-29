// 1) Campo de texto: cambia un texto en la web
var input = document.getElementById("userInput");
var output = document.getElementById("userOutput");

input.addEventListener("input", function () {
  output.textContent = input.value || "—";
});

// 2) Intercambio de imágenes al hacer clic
var img = document.getElementById("swapImg");
var msg = document.getElementById("swapMsg");

// Dos imágenes coherentes con medio ambiente
var img1 = "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80";
var img2 = "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80";
var toggle = true;

// Precarga para que el cambio sea instantáneo
var preload = new Image();
preload.src = img2;

img.addEventListener("click", function () {
  img.src = toggle ? img2 : img1;
  msg.textContent = toggle ? "Clic para volver" : "Clic para cambiar";
  toggle = !toggle;
});

// 3) Objeto en movimiento (punto) con iniciar/parar
var dot = document.getElementById("dot");
var stage = dot.parentElement;

var start = document.getElementById("startBtn");
var stop = document.getElementById("stopBtn");

var x = 10;
var speed = 2;
var moving = false;
var intervalId = null;

start.addEventListener("click", function () {
  if (moving) return;
  moving = true;

  intervalId = setInterval(function () {
    var maxX = stage.clientWidth - dot.clientWidth - 6;
    x += speed;

    if (x <= 0 || x >= maxX) speed *= -1;

    dot.style.left = x + "px";
  }, 20);
});

stop.addEventListener("click", function () {
  moving = false;
  clearInterval(intervalId);
});
