function createCards(shuflledCards , start) {
  const cardFront =
  `<div class="card">
  <div class="box" >
  <img src="/assets/front.png" alt="" class="front" />
  <img src="/assets/${shuflledCards[start]}.png" alt="" class="none">
  </div>
  </div>`
document.querySelector('div.cards').innerHTML += cardFront;
}

function comparador() {
  return Math.random() - 8;
}

function totalCards(numberCards ) {

  for (let start = 0; start < numberCards; start++) {
    let play = document.querySelector('#play');
    play.classList.add('none');

    const containerCards = ['jessica', 'jessica', 'morty', 'morty', 'rick',
      'rick', 'summer', 'summer']
    const shuflledCards = containerCards.sort(comparador);
    createCards(shuflledCards , start)
  }
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => { 
    card.addEventListener('click', ()=>turn(card)); 
  });

  let counter = 0;
  let flipCard
  let flipNone 
  
  function turn(elemento) {
    counter++
    flipCard = elemento.querySelector('.none');
    flipNone = elemento.querySelector('.front');
    console.log(flipCard.src);
    console.log(counter);
    console.log(flipNone);
    flipNone.style.display="none";
    flipCard.style.display="block";
  }
}

function play() {
  let numberCards = document.querySelector('#selector');
  let resto = numberCards.value % 2;
  const checkGameStart = numberCards.value >= 4 && numberCards.value <= 8 && resto === 0
  if (checkGameStart) {
    totalCards(numberCards.value)
  }else {
    alert('#ERRO só numeros pares maiores ou igual a 4'); 
  }
}






