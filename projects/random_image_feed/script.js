const container = document.querySelector(".container");
const lorenPicsum = "https://picsum.photos/10";

const rows = 4;

for(let i = 0; i < rows * 3; ++i) {
  const img = document.createElement("img");
  img.src = lorenPicsum + i;
  container.appendChild(img);
}
