const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
  if (idx >= img.length - 1) {
    // Reinicie o índice para a primeira imagem
    idx = 0;
  }

  // Incrementa o índice dentro da condição
  idx++;

  imgs.style.transform = `translateX(${-idx * 500}px)`;
  imgs.style.transition = "transform 0.5s ease-in-out";
}

// Inicia o carrossel automaticamente
setInterval(carrosel, 1800);
