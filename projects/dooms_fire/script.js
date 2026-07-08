const body = document.getElementById("app");

const firePixelsArray = [];
const fireHeight = 100;
const fireWidth = 100;
const frameTime = 50; //milissegundos
const maxDecay = 2;
const debug = false;

const fireColorsPalette = [
  {"r":0,"g":0,"b":0},
  {"r":31,"g":7,"b":7},
  {"r":47,"g":15,"b":7},
  {"r":71,"g":15,"b":7},
  {"r":87,"g":23,"b":7},
  {"r":103,"g":31,"b":7},
  {"r":119,"g":31,"b":7},
  {"r":143,"g":39,"b":7},
  {"r":159,"g":47,"b":7},
  {"r":175,"g":63,"b":7},
  {"r":191,"g":71,"b":7},
  {"r":199,"g":71,"b":7},
  {"r":223,"g":79,"b":7},
  {"r":223,"g":87,"b":7},
  {"r":223,"g":87,"b":7},
  {"r":215,"g":95,"b":7},
  {"r":215,"g":95,"b":7},
  {"r":215,"g":103,"b":15},
  {"r":207,"g":111,"b":15},
  {"r":207,"g":119,"b":15},
  {"r":207,"g":127,"b":15},
  {"r":207,"g":135,"b":23},
  {"r":199,"g":135,"b":23},
  {"r":199,"g":143,"b":23},
  {"r":199,"g":151,"b":31},
  {"r":191,"g":159,"b":31},
  {"r":191,"g":159,"b":31},
  {"r":191,"g":167,"b":39},
  {"r":191,"g":167,"b":39},
  {"r":191,"g":175,"b":47},
  {"r":183,"g":175,"b":47},
  {"r":183,"g":183,"b":47},
  {"r":183,"g":183,"b":55},
  {"r":207,"g":207,"b":111},
  {"r":223,"g":223,"b":159},
  {"r":239,"g":239,"b":199},
  {"r":255,"g":255,"b":255}
];

function start() {
  createFireDataStructure()
  createFireSource()
  
  setInterval(calculateFirePropagation, frameTime);
}
function createFireDataStructure() {
  for (let row = 0; row < fireHeight; row++) {
    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + fireWidth * row;
      firePixelsArray[pixelIndex] = 0;
    }
  }
}
function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + fireWidth * row;
      updateFireIntensityPerPixel(pixelIndex);
    }
  }
  renderFire();
}
function updateFireIntensityPerPixel(pixelIndex) {
  const belowPixelIndex = pixelIndex + fireWidth;
  if (belowPixelIndex >= fireWidth * fireHeight) return;
  const decay = Math.floor(Math.random() * maxDecay);
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
  const newFireIntensity = (belowPixelFireIntensity - decay >= 0) ?
    belowPixelFireIntensity - decay :
    0;
  firePixelsArray[pixelIndex - decay] = newFireIntensity;
}
function createFireSource() {
  const overFlowPixelIndex = fireHeight * fireWidth
  for( let column = 0; column < fireWidth; column++) {
    const pixelIndex = (overFlowPixelIndex - fireWidth) + column;
    firePixelsArray[pixelIndex] = 36;
  }
}
function renderFire() {
  let html = "<div class='table'>";
  for (let row = 0; row < fireHeight; row++) {
    html = html + "<div class='row'>";
    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + fireWidth * row;
      const fireIntensity = firePixelsArray[pixelIndex];
      if (debug === true) {
        html = html + `
          <div class="cell">
            <div class="value">${fireIntensity}</div>
            <div class="index">${pixelIndex}</div>
          </div>
        `
      } else {
        const color = fireColorsPalette[fireIntensity];
        const colorString = `${color.r}, ${color.g}, ${color.b}`;
        html = html + `
          <div
            class="cell"
            style="background-color: rgb(${colorString})"
          ></div>
        `;
      }
    }
    html = html + "</div>";
  }
  body.innerHTML = html + "</div>"
}
start()