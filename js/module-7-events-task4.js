//? > Task 4. ColorPickerd
//? > 1) Find Fn getRandomHexColor
//? > 2) Find Fn hex2rgb
//? > 3) cardsMarkup()
//? > 4) paintBackground(e)

const refs = {
  input: document.getElementById('counter'),
  button: document.querySelector('.inputs__button'),
  cardsList: document.querySelector('.cards__list'),
};

const maxValue = refs.input.getAttribute('max');
refs.input.setAttribute('placeholder', `max value ${maxValue}`);

refs.button.addEventListener('click', cardsMarkup);
refs.cardsList.addEventListener('click', paintBackground);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hex2rgb(c) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function cardsMarkup() {
  const cards = [];
  const cardsAmount =
    parseInt(refs.input.value) > parseInt(maxValue)
      ? parseInt(maxValue)
      : parseInt(refs.input.value);

  for (i = 0; i < cardsAmount; i += 1) {
    const colorHEX = getRandomHexColor();
    const colorRGB = hex2rgb(colorHEX);

    const card = `        
        <li class="cards__item card">
          <div class="card__color" 
          data-hex="${colorHEX}" data-rgb="${colorRGB.r},${colorRGB.g},${colorRGB.b}" style="background-color: ${colorHEX};"></div>
          
          <div class="card__values">HEX: ${colorHEX} | RGB (${colorRGB.r},${colorRGB.g},${colorRGB.b})</div>
        </li>
        `;
    cards.push(card);
  }

  refs.input.value = '';
  refs.cardsList.innerHTML = '';
  refs.cardsList.insertAdjacentHTML('beforeend', cards.join(''));
}

function paintBackground(e) {
  const activePicker = refs.cardsList.querySelector('.card--active');

  const isColorSample = e.target.classList.contains('card__color');
  const colorSample = e.target.dataset.hex;

  removeClassActive(activePicker);
  addActive(e);

  if (!isColorSample) {
    return;
  }
  document.body.style.backgroundColor = colorSample;
}

function addActive(e) {
  e.target.closest('.card').classList.add('card--active');
}

function removeClassActive(active) {
  if (active) {
    active.classList.remove('card--active');
  }
}
