//? > Task 2. Many of Many

const refs = {
  buttons: document.querySelector('.buttons'),
};

refs.buttons.addEventListener('click', onButtonClick);

const tagArr = [];
const tagSet = new Set();

function onButtonClick(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  const isActiveButton = e.target.classList.contains('buttons__elem--active');
  e.target.classList.toggle('buttons__elem--active');

  //! Adding tags to Array by clicking on it ---<START>
  // if (!isActiveButton) {
  //   tagArr.push(e.target.dataset.value);
  // } else {
  //   tagArr.splice(tagArr.indexOf(e.target.dataset.value), 1);
  // }
  // console.log(tagArr);
  //! Adding tags to Array by clicking on it ---<END>

  //! Adding tags to Set by clicking on it ---<START>
  if (!isActiveButton) {
    tagSet.add(e.target.dataset.value);
  } else {
    tagSet.delete(e.target.dataset.value);
  }
  console.log(tagSet);
  //! Adding tags to Set by clicking on it ---<END>
}
