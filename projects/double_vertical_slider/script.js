const slider_container = document.querySelector(".slider-container");
const slide_left = document.querySelector(".left-slide");
const slide_right = document.querySelector(".right-slide");
const up_button = document.querySelector(".up-button");
const down_button = document.querySelector(".down-button");
const slides_length = slide_right.querySelectorAll("div").length;

let active_slide_index = 0;

slide_left.style.top = `-${(slides_length - 1) * 100}vh`;

up_button.addEventListener("click", function()
{
    change_slide("up");
});

down_button.addEventListener("click", function()
{
    change_slide("down");
});

function change_slide(direction)
{
    const slider_height = slider_container.clientHeight;
    
    if(direction == "up")
    {
        active_slide_index++;
        if(active_slide_index > slides_length - 1) active_slide_index = 0;
    }
    else if(direction == "down")
    {
        active_slide_index--;
        if(active_slide_index < 0) active_slide_index = slides_length - 1;
    };

    slide_right.style.transform = `translateY(-${active_slide_index * slider_height}px)`;

    slide_left.style.transform = `translateY(${active_slide_index * slider_height}px)`;
}