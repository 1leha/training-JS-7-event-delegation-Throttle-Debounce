// 1
const listRef = document.querySelectorAll('.list__item');
listRef.forEach(listEl => {
  console.log(listEl.textContent);
});

// 2
const ulRef = document.querySelector('.list');
const newListEl = document.createElement('li');
newListEl.textContent = 'Coke';
newListEl.classList.add('list__item');
ulRef.append(newListEl);

console.log([...ulRef.children]);

document.querySelectorAll('.list__item').forEach(child => (child.style.color = 'red'));
