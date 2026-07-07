const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", function()
{
    if(document.querySelector("html").classList.toggle("dark"))
    {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        return;
    };
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
});

function setTime()
{
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `
        translate(-50%, -100%)
        rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)
    `;
    minuteEl.style.transform = `
        translate(-50%, -100%)
        rotate(${scale(minutes, 0, 60, 0, 360)}deg)
    `;
    secondEl.style.transform = `
        translate(-50%, -100%)
        rotate(${scale(seconds, 0, 60, 0, 360)}deg)
    `;

    const formatTime = function(time)
    {
        if(time < 10) return "0" + time;
        return time;
    };
    const ampm = function(hours)
    {
        if(hours < 12) return "AM";
        return "PM";
    };

    timeEl.innerHTML = `${hoursForClock}:${formatTime(minutes)} ${ampm(hours)}`;
    dateEl.innerHTML = `
        <span>${days[day]},</span>
        <span>${months[month]}</span>
        <span class="circle">${date}</span>
    `;
};

function scale(num, in_min, in_max, out_min, out_max)
{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
