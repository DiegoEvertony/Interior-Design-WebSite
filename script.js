// Animação Scroll

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.scroll-top', {
    delay: 200, // O delay para a animação acontecer
    distance: "30px", // A distancia do origin para a posição original do elemento.
    duration: 2000, // A duração da animação em ms
    origin: "top", //Para ele surgir de cima para baixo.
    reset: false, // Ao sair do campo de tela,
    useDelay: 'once'
});

// Animação do menu é abertura

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// horario

let paragrafoData = document.querySelectorAll(".data p");

let data = new Date();

//dia
let dia = data.getDate();

//mes
let mes;

switch (data.getMonth()) {
    case 0:
        mes = "Janeiro"
    break;
    case 1:
        mes = "Fevereiro"
    break;
    case 2:
        mes = "Março"
    break;
    case 3:
        mes = "Abril"
    break;
    case 4:
        mes = "Maio"
    break;
    case 5:
        mes = "Junho"
    break;
    case 6:
        mes = "Julho"
    break;
    case 7:
        mes = "Agosto"
    break;
    case 8:
        mes = "Setembro"
    break;
    case 9:
        mes = "Outubro"
    break;
    case 10:
        mes = "Novembro"
    break;
    case 11:
        mes = "Dezembro"
    break;
    default:
        break;
}

//ano
let ano = data.getFullYear();

for(let cont = 0; cont < paragrafoData.length; cont++){
    paragrafoData[cont].innerHTML = `${dia} ${mes}, ${ano}`;
}

let section = document.querySelectorAll("section")[0];
let navg = document.querySelector("nav");

let lastScrollTop = 100; // Guarda a última posição do scroll

window.addEventListener("scroll", myFunction);

function myFunction() {
  let currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Rolando para baixo
    section.classList.add("scroll");
    navg.classList.add("navScroll");
  } else {
    // Rolando para cima
    section.classList.remove("scroll");
    navg.classList.remove("navScroll");
    
  }

  lastScrollTop = currentScrollTop; // Atualiza a última posição do scroll
}












