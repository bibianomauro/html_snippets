const body = document.querySelector("body");
const panels = document.querySelectorAll('.panel');

body.style.setProperty("--background-img", panels[0].style.backgroundImage);

for(let i = 0; i < panels.length; i++)
{
    const panel = panels[i];
    panel.addEventListener('click', function()
    {
        removeActiveClasses();
        panel.classList.add('active');
        body.style.setProperty("--background-img", panel.style.backgroundImage);
    });
};

function removeActiveClasses()
{
    for(let i = 0; i < panels.length; i++)
    {
        panels[i].classList.remove('active');
    };
};