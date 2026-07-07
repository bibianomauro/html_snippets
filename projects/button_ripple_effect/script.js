const buttons = document.querySelectorAll(".ripple");

for(let i = 0, length = buttons.length; i < length; i++)
{
    const button = buttons[i];

    button.addEventListener("click", function(e)
    {
       let x = e.offsetX;
       let y = e.offsetY;
       
    //    button.innerHTML = `
    //      ROLA
    //      <span class="circle" style="top: ${y}px; left: ${x}px;"></span>
    //    `;

        const span = document.createElement("span");
        span.classList.add("circle");
        span.style.top = y + "px";
        span.style.left = x + "px";

        button.appendChild(span);

        setTimeout(function() { span.remove() }, 500);
    });
};