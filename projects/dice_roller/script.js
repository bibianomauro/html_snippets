const DICE_SIDES = 6;
const ROLL_DURATION = 1000;
const ROLL_INTERVAL = 150;

let isRolling = false;

document.addEventListener("DOMContentLoaded", function()
{
	const dice = document.getElementById("dice");
	const rollBtn = document.getElementById("roll-btn");
	const result = document.getElementById("result");
	const faces = document.querySelectorAll(".face");

	function rollDice()
	{
		if(isRolling) return;
		isRolling = true;
		result.classList.add("hidden");
		rollBtn.disabled = true;
		dice.classList.add("rolling");

		const rollInterval = setInterval(() => {
			for(let i = 0; i < faces.length; ++i)
			{
				faces[i].classList.add("hidden");
			}
			faces[Math.floor(Math.random() * faces.length)].classList.remove("hidden");
		}, ROLL_INTERVAL);

		setTimeout(() => {
			clearInterval(rollInterval);
			for(let i = 0; i < faces.length; ++i)
			{
				faces[i].classList.add("hidden");
			}
			dice.classList.remove("rolling");
			const finalFace = Math.floor(Math.random() * faces.length);
			faces[finalFace].classList.remove("hidden");	

			isRolling = false;
			rollBtn.disabled = false;
		}, ROLL_DURATION);
	}

	rollBtn.addEventListener("click", rollDice);
	dice.addEventListener("click", rollDice);
});

