document.addEventListener('DOMContentLoaded', function () {
  const fadeText = document.getElementById('fade-in-text');
  const nextPageButton = document.getElementById('next-page-button');

  fadeText.addEventListener('transitionend', function (event) {
    if (event.propertyName === 'opacity' && fadeText.style.opacity === '1') {
      nextPageButton.style.display = 'block';
    }
  });
});

function revealText() {
  const fadeText = document.getElementById('fade-in-text');
  fadeText.style.opacity = 1;
  document.getElementById('reveal-button').style.display = 'none';
}

function goToNextPage() {
  // Voeg hier het relatieve of absolute pad toe van de volgende pagina
  window.location.href ='Slideshow.html';
}

function goToAnotherPage() {
  // Voeg hier het relatieve of absolute pad toe van de andere pagina
  window.location.href = 'Valentijn_verzoek.html';
}

let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function () {
  showSlides(slideIndex);
});

function accept() {
window.location.href = 'Eerste_foto.html';
    }

function moveRedButton() {
  var redButton = document.getElementById('redButton');

  // Bereken willekeurige X- en Y-positie binnen het venster
  var randomX = Math.floor(Math.random() * (window.innerWidth - redButton.clientWidth));
  var randomY = Math.floor(Math.random() * (window.innerHeight - redButton.clientHeight));

  // Bijwerk de positie van de rode knop
  redButton.style.left = randomX + 'px';
  redButton.style.top = randomY + 'px';
}

function goBackToIndex() {
      // Voeg hier het relatieve of absolute pad toe van de indexpagina
      window.location.href = 'Valentijn.html';
    }
