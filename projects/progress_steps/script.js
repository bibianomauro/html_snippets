const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', function()
{
    currentActive++;
    if(currentActive > circles.length)
    {
        currentActive = circles.length;
    };
    updateUI();
});

prev.addEventListener('click', function()
{
    currentActive--;
    if(currentActive < 1)
    {
        currentActive = 1;
    };
    updateUI();
});

function updateUI()
{
    for(let i = 0; i < circles.length; i++)
    {
        const circle = circles[i];
        if(i < currentActive)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        };
    };

    const percentage = (currentActive - 1) / (circles.length - 1) * 100;
    progress.style.width = percentage + '%';

    if(currentActive === 1)
    {
        prev.disabled = true;
    }
    else if(currentActive === circles.length)
    {
        next.disabled = true;
    }
    else
    {
        prev.disabled = false;
        next.disabled = false;
    };

};