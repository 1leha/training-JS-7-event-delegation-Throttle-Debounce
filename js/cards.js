{
  /* <article>
  <h2>Card Title</h2>
  <p>Card Description</p>
  <p>Card Price</p>
</article>; */
}

//! The first way of cards layout
// import products from './cards-from-backend.js';

// const makeCardLayout = ({ title, description, price }) => {
//   const articleRef = document.createElement('article');

//   const articleTitle = document.createElement('h2');
//   articleTitle.textContent = title;

//   const articleDescription = document.createElement('p');
//   articleDescription.textContent = description;

//   const articleDPrice = document.createElement('p');
//   articleDPrice.textContent = `Price: $${price}`;

//   articleRef.append(articleTitle, articleDescription, articleDPrice);

//   return articleRef;
// };

// const cards = products.map(makeCardLayout);

// const cardsContainer = document.querySelector('.cards-container');

// cardsContainer.append(...cards);

//! The second way of cards layout
import products from './cards-from-backend.js';

const makeCardLayout = ({ title, description, price }) => {
  //return string of HTML layout
  return `<article>
      <h2>${title}</h2>
      <p>${description}</p>
      <p>Price: $${price}</p>
    </article>`;
};

// make array of strings with our elements and join all of them to one HTML string
const cards = products.map(makeCardLayout).join('');

// define cards container
const cardsContainer = document.querySelector('.cards-container');

// insert cards into container
cardsContainer.insertAdjacentHTML('afterbegin', cards);
