function $(value) {
  return document.querySelector(value);
};

const card = $('.card');

document.addEventListener('mousemove', e => rotateElement(e, card));

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;
  
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  
  element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
  element.style.setProperty('--rotateY', offsetX + 'deg');
};