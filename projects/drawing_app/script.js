const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeElement = document.querySelector("#size");
const colorPicker = document.querySelector("#color");
const clearBtn = document.querySelector("#clear");

const DOUBLE_PI = Math.PI * 2;

let isPressed = false;
let circle_size = 10;
let line_size = 2 * circle_size;
let color = "black";
let x, y;

canvas.addEventListener("mousedown", function(e)
{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", function(e)
{
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", function(e)
{
    if(isPressed)
    {
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    };
})

function drawCircle(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y,
            circle_size,
            0,
            DOUBLE_PI);
    ctx.fillStyle = color;
    ctx.fill();
};

function drawLine(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = line_size;
    ctx.stroke();
};

function updateSizeOnScreen()
{
    sizeElement.textContent = circle_size;
};

increaseBtn.addEventListener("click", function()
{
    circle_size = circle_size + 5;

    if(circle_size > 50) circle_size = 50;

    line_size = 2 * circle_size;

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", function()
{
    circle_size = circle_size - 5;

    if(circle_size < 5) circle_size = 5;
    
    line_size = 2 * circle_size;

    updateSizeOnScreen();
})

colorPicker.addEventListener("change", function(e)
{
    color = e.target.value;
});

clearBtn.addEventListener("click", function()
{
    ctx.clearRect(0,0,
                  canvas.width,
                  canvas.height);
});

updateSizeOnScreen();