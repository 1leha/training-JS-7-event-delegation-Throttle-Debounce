//? > Task 5. Mouse events
//? > 1) hover JS
//? > 2) change coordinates
//? > 3) change coordinates randome
//? > 4) only inside Window
//? > 5) event Delegation

const refs = {
  buttons: document.querySelector('.container'),
};

refs.buttons.addEventListener('mouseover', hoverhandler);

function hoverhandler(e) {
  // console.log(e.target);

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const containerWidth = refs.buttons.clientWidth;
  const containerHeight = refs.buttons.clientHeight;
  const { target: button } = e;
  // console.log('containerWidth', containerWidth);
  // console.log('containerHeight', containerHeight);

  // button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
  // button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;

  button.style.top = `${Math.floor(Math.random() * (containerHeight - button.clientHeight))}px`;
  button.style.left = `${Math.floor(Math.random() * (containerWidth - button.clientWidth))}px`;
}
