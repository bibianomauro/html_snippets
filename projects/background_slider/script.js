const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

// let activeSlide = Math.floor(Math.random() * slides.length);
let activeSlide = 0;

setBgToBody();
setActiveSlide();

function setBgToBody()
{
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide()
{
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].classList.remove("active");
    };

    slides[activeSlide].classList.add("active");
};

leftBtn.addEventListener("click", function()
{
    activeSlide--;
    if(activeSlide < 0) activeSlide = slides.length - 1;
    setActiveSlide();
    setBgToBody();
});

rightBtn.addEventListener("click", function()
{
    activeSlide++;
    if(activeSlide >= slides.length) activeSlide = 0;
    setActiveSlide();
    setBgToBody();
});