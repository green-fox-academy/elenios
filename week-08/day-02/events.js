const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const getRandom = () => {
  return Math.floor(Math.random() * 255)
};
const getRandomColor = () => {
  return `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
};

const callback = (event) => {
  event.target.style.backgroundColor = getRandomColor();
};

click.addEventListener('click', callback);
hover.addEventListener('mouseenter', callback);