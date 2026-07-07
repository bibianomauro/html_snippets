const editBtn = document.getElementById("edit");
const stopBtn = document.getElementById("stop");
const playBtn = document.getElementById("play");
const root = document.querySelector(":root");
const alarm = document.getElementById("alarm");

const minutesContainer = document.getElementById("minutes-container");
const secondsContainer = document.getElementById("seconds-container");

const minutesEl = minutesContainer.querySelector("p");
const secondsEl = secondsContainer.querySelector("p");

// State
let playing = false;
let editing = false;
let totalSeconds = 500;
let currentSeconds = totalSeconds;
let timeInterval = setInterval(run, 1000);

formatTime(totalSeconds);

// EventListeners
editBtn.addEventListener("click", function()
{
  stop();	
	editing = !editing;
	const editIcon = editBtn.querySelector("i");
	const gauges = document.querySelectorAll(".gauge");
	if(editing)
	{
		document.querySelector("h1").textContent = "Edit Mode";
		playBtn.classList.add("hidden");
		stopBtn.classList.add("hidden");
		editIcon.classList.remove("fa-pen");
		editIcon.classList.add("fa-check");
		
		for(let i = 0; i < gauges.length; ++i)
		{
			gauges[i].classList.remove("hidden");
			gauges[i].addEventListener("click", editTime);
		}		
//		minutesEl.contentEditable = true;
//		secondsEl.contentEditable = true;
	}
	else if(!editing)
	{
		document.querySelector("h1").textContent = "Timer";
		playBtn.classList.remove("hidden");
		stopBtn.classList.remove("hidden");
		editIcon.classList.remove("fa-check");
		editIcon.classList.add("fa-pen");
		for(let i = 0; i < gauges.length; ++i)
		{
			gauges[i].classList.add("hidden");
		}
	}
});

playBtn.addEventListener("click", () =>
{
	playing = !playing;
	editing = false;
	playBtn.classList.toggle("play");
	const playIcon = playBtn.querySelector("i");
	playIcon.classList.toggle("fa-play");
	playIcon.classList.toggle("fa-pause");
});

stopBtn.addEventListener("click", stop);

// Helper Functions
function editTime()
{
	const type = this.dataset.change;	
	const parent = this.parentElement;
	switch(type) {
		case "plus": {
			if(parent.id == "minutes-container") {
				totalSeconds += 60;
			} else if(parent.id == "seconds-container") {
				totalSeconds++;
			}
			break;	
		}
		case "minus": {
			if(parent.id == "minutes-container") {
				totalSeconds -= 60;
			} else if(parent.id == "seconds-container") {
				totalSeconds--;
			}
			break;
		}
		default: {
			return;
		}
	}
	if(totalSeconds < 0) totalSeconds = 0;
	formatTime(totalSeconds);
}

function stop()
{
	reset();
	document.querySelector("body").style.backgroundColor = "#222";
	alarm.pause();
	alarm.currentTime = 0;
}

function run()
{
	if(playing) {
		currentSeconds -= 1;
		if(currentSeconds <= 0) {
			reset();
			return;
		}	
		formatTime(currentSeconds);
		root.style.setProperty("--degrees", calcDeg());
	}
}

function reset()
{
	playing = false;
	playBtn.classList.add("play");
	const playIcon = playBtn.querySelector("i");
	playIcon.classList.remove("fa-pause");
	playIcon.classList.add("fa-play");
	currentSeconds = totalSeconds;
	formatTime(currentSeconds);
	root.style.setProperty("--degrees", "0deg");
	clearInterval(timeInterval);
	timeInterval = setInterval(run, 1000);
	document.querySelector("body").style.backgroundColor = "#f00";
	alarm.play();
}

function calcDeg()
{
	return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

function formatTime(seconds)
{
	let minutes = Math.floor(seconds / 60);
	let newSeconds = seconds % 60;

	if(minutes > 99) minutes = 99;

  minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
	secondsEl.textContent = newSeconds < 10 ? "0" + newSeconds : newSeconds;
}
