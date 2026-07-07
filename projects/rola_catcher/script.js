const screens = document.querySelectorAll(".screen");
const choose_rola_btns = document.querySelectorAll(".choose-rola-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

let seconds = 0;
let score = 0;
let selected_rola = {};

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

choose_rola_btns.forEach(btn => {
	btn.addEventListener("click", () => {
		const img = btn.querySelector("img");
		const src = img.getAttribute("src");
		const alt = img.getAttribute("alt");
		selected_rola = { src, alt };
		screens[1].classList.add("up");
		setTimeout(createRola, 1000);
		startGame();
	});
})

function startGame()
{
	setInterval(increaseTime, 1000);
}

function increaseTime()
{
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;
	timeEl.innerHTML = `Time: ${m}:${s}`;
	seconds++;
}

function createRola()
{
	const { src, alt } = selected_rola;
	const rola = document.createElement("div");
	rola.classList.add("rola");
	const { x, y } = getRandomLocation();
	rola.style.top = y + "px";
	rola.style.left = x + "px";
	rola.innerHTML = `<img src="${src}" alt="${alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
	rola.addEventListener("click", catchRola);

	game_container.appendChild(rola);
}

function getRandomLocation()
{
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;
	return { x, y };
}

function catchRola()
{
  increaseScore();
	this.classList.add("caught");
	setTimeout(() => this.remove(), 1000);
	addRolas();
}

function increaseScore()
{
	score++;
	if(score % 10 == 0) {
		message.classList.add("visible");
		setTimeout(() => message.classList.remove("visible"), 1000);
	}
	scoreEl.innerHTML = "Score: " + score;
}

function addRolas()
{
	setTimeout(createRola, 1000);
	setTimeout(createRola, 2000);
}
