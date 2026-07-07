const ratings = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
const ratingsContainer = document.querySelector(".ratings-container");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if(e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.parentNode.lastElementChild.textContent;
  } else if(e.target.classList.contains("rating")) {
    removeActive();
    e.target.classList.add("active");
    selectedRating = e.target.lastElementChild.textContent;
  }
})

sendBtn.addEventListener("click", e => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <br />
    <p>We'll use your feedback to improve our cat support</p>
  `;
})

function removeActive() {
  for(let i = 0; i < ratings.length; ++i) {
    ratings[i].classList.remove("active");
  }
}
