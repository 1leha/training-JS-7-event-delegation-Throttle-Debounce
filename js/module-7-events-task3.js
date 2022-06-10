//? > Task 3. Many of Many +++

const refs = {
  buttons: document.querySelector('.buttons-set'),
  resultOl: document.querySelector('.result__list'),
};

refs.buttons.addEventListener('click', onButtonClick);

const usersArr = [];

class User {
  constructor({ userName, userTags }) {
    this.userName = userName;
    this.userTags = userTags;
  }

  setTag(tag) {
    this.userTags.push(tag);
    // console.log(this);
  }

  deleteTag(tag) {
    this.userTags.splice(this.userTags.indexOf(tag), 1);
  }
}

function onButtonClick(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  const isActiveButton = e.target.classList.contains('buttons__elem--active');

  e.target.classList.toggle('buttons__elem--active');

  const button = e.target;
  const parentCard = e.target.closest('.js-user');
  const parentCardName = parentCard.querySelector('p').textContent;

  buttonsStateHandler(parentCardName, isActiveButton, button);
  deleteEmptyUser(usersArr);
  publishResults(usersArr);
}

function publishResults(usersArr) {
  const results = usersArr
    .map(el => {
      const spanEl = el.userTags.map(tag => {
        return `<span>${tag}</span>`;
      });

      return `
      <li class="result__item">${el.userName} has tags: ${spanEl.join(' ')}</li>
      `;
    })
    .sort();

  refs.resultOl.innerHTML = '';
  return refs.resultOl.insertAdjacentHTML('beforeend', results.join(''));
}

function buttonsStateHandler(parentCardName, isActiveButton, button) {
  const currentUser = usersArr.find(el => Object.values(el).includes(parentCardName));

  if (!currentUser) {
    const user = new User({ userName: parentCardName, userTags: [] });
    user.setTag(button.dataset.value);
    usersArr.push(user);
  } else {
    if (!isActiveButton) {
      currentUser.setTag(button.dataset.value);
    } else {
      currentUser.deleteTag(button.dataset.value);
    }
  }
}

function deleteEmptyUser(arr) {
  return arr.reduce((acc, el, index, array) => {
    if (el.userTags.length === 0) {
      array.splice(index, 1);
    }
  }, arr);
}
