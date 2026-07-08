const position = {
  oldX: 0,
  oldY: 0,
  newX: 0,
  newY: 0,
};

function randomColor() {
  return Math.floor(Math.random() * 361);
};

function distance() {
  const distX = position.newX - position.oldX;
  const distY = position.newY - position.oldY;
  const dist = Math.pow(distX, 2) + Math.pow(distY, 2);
  
  if(dist > 7000) {
    position.oldX = position.newX;
    position.oldY = position.newY;
    return true;
  };
  return false;
};

window.addEventListener('mousemove', function(e) {
  position.newX = e.clientX;
  position.newY = e.clientY;
  
  //console.log(position.newX, position.newY);
  
  const dot = document.createElement('div');
  dot.className = "fa-solid fa-star-of-david star"
  dot.style.color = `hsl(${randomColor()}, 0%, 69%)`;
  
  if(!distance()) return;
  
  dot.style.left = position.newX + 'px';
  dot.style.top = position.newY + 'px';
  
  document.body.appendChild(dot);
  
  setTimeout(() => document.body.removeChild(dot), 1500);
});