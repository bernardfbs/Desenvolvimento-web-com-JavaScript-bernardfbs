//corrigindo o cálculo das imagens x3
let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

//posicionando os botões corretamente
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

//criando a função para os botões

let currentSlide = 0;

function goPrev () {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides -1;
  }
  updateMargin();

  
}

function goNext () {
  currentSlide++;
  if(currentSlide > (totalSlides -1)) {
    currentSlide = 0;
  }
  updateMargin();
}

//atualizando margem para passagem de imagens

function updateMargin() {
  let newMargin = (currentSlide * document.body.clientWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

//Intervalo que passa automaticamente as fotos.
setInterval(goNext, 4000)
