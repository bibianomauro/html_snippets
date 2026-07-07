const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

updateBigCup();

for(let i = 0, length = smallCups.length; i < length; i++)
{
    const cup = smallCups[i];
    cup.addEventListener("click", function()
    {
        highlightCups(i);
    });
};

function highlightCups(index)
{
    if(smallCups[index].classList.contains("full"))
    {
        if(index == smallCups.length - 1)
        {
            index--;
        }
        else if(!smallCups[index].nextElementSibling.classList.contains("full"))
        {
            index--;
        };
    };

    for(let i = 0, length = smallCups.length; i < length; i++)
    {
        const cup = smallCups[i];
        if(i <= index)
        {
            cup.classList.add("full");
        }
        else
        {
            cup.classList.remove("full");
        };
    };

    updateBigCup();
};

function updateBigCup()
{
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    
    if(fullCups == 0)
    {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }
    else
    {
        const value = (fullCups / totalCups) * 100 + "%";
        percentage.style.visibility = "visible";
        percentage.style.height = value;
        percentage.innerText = value;
    };

    if(fullCups == totalCups)
    {
        remained.style.visiblity = "hidden";
        remained.style.height = 0;
    }
    else
    {
        remained.style.visibility = "visible";
        liters.innerText = 250 * (totalCups - fullCups) / 1000 + " L";
    }
};