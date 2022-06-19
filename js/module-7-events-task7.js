const refs = {
  searchStandart: document.querySelector('.search'),
  searchFuse: document.querySelector('.search-fuse'),
  text: document.querySelector('.text'),
  textFuse: document.querySelector('.text-fuse'),
  counterStandart: document.querySelector('.counter-standart span'),
  counterFuse: document.querySelector('.counter-fuse span'),
};

const origText = refs.text.innerText;
const targetToSearch = origText.split(' ');
refs.counterStandart.textContent = 0;
refs.counterFuse.textContent = 0;

refs.searchStandart.addEventListener(
  'input',
  _.debounce(e => {
    onStdSearchInput(e);
  }, 300),
);
refs.searchFuse.addEventListener(
  'input',
  _.debounce(e => {
    onFuseSearchInput(e);
  }, 300),
);

function onStdSearchInput(e) {
  const searchString = e.target.value.toLowerCase();
  let counterStandart = 0;
  refs.counterStandart.textContent = counterStandart;

  if (searchString === '') {
    refs.text.innerText = origText;
    return;
  }

  origText.split(' ').map((searchedEl, i, markedArr) => {
    if (searchedEl.toLowerCase().includes(searchString)) {
      counterStandart += 1;
      markedArr.splice(i, 1, `<span class="mark-vanilla">${searchedEl}</span>`);
      refs.text.innerHTML = markedArr.join(' ');
    }

    refs.counterStandart.textContent = counterStandart;
  });
}

function onFuseSearchInput(e) {
  const searchString = e.target.value.toLowerCase();
  const searchArr = refs.textFuse.innerText.split(' ');
  refs.counterFuse.textContent = 0;
  const options = {
    includeScore: true,
    threshold: 0.6,
  };
  const fuse = new Fuse(searchArr, options);
  const result = fuse.search(searchString);
  refs.counterFuse.textContent = result.length;
  createMarkupFuse(searchArr, result);
}

function createMarkupFuse(searchArr, result) {
  result.forEach(({ item, refIndex }) => {
    searchArr.splice(refIndex, 1, `<span class="mark-fuse">${item}</span>`);
    refs.textFuse.innerHTML = searchArr.join(' ');
  });
}
