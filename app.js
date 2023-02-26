const cardInner = document.querySelectorAll('.card-inner');

for (let i = 0; i < cardInner.length; i++) {
  cardInner[i].addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
}

var elements = document.querySelectorAll("p, h1, h2");

for (var i = 0; i < elements.length; i++) {
  elements[i].style.userSelect = "none";
}