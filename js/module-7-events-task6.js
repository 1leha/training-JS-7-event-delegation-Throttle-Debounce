const allTitles = document.querySelectorAll('[data-id]');
const titleList = document.querySelector('.title-list');
let activeTitle;
makeLinkMarkup();

// console.log(...allTitles);

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     [...allTitles].forEach(title => {
//       console.log(title.getBoundingClientRect().top <= 0);
//     });
//     // console.dir(document.querySelector('[data-id="title2"]').getBoundingClientRect().top);
//   }, 300),
// );

document.addEventListener(
  'scroll',
  _.debounce(() => {
    [...allTitles].forEach(title => {
      const titleTopCoord = title.getBoundingClientRect().top;
      const titleId = title.id;

      if (titleTopCoord <= 20) {
        activeTitle?.classList.remove('title-link--active');

        titleList.querySelector(`[href="#${titleId}"]`).classList.add('title-link--active');
        activeTitle = titleList.querySelector(`[href="#${titleId}"]`);
      }
    });
  }, 10),
);

function makeLinkMarkup() {
  const liMarkup = [...allTitles]
    .map(title => {
      const titleId = title.dataset.id;
      const titleName = title.textContent;
      return `
    <li><a class="title-link" href="#${titleId}">${titleName}</a></li>
    `;
    })
    .join('');
  titleList.innerHTML = '';
  titleList.insertAdjacentHTML('beforeend', liMarkup);
}

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     console.log(
//       [...allTitles].filter(
//         title =>
//           title.getBoundingClientRect().top <= 30 && title.getBoundingClientRect().top >= -30,
//       )[0].dataset.id,
//     );
//   }, 300),
// );
