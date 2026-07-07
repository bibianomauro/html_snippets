const nav = document.querySelector(".nav");

window.addEventListener("scroll", fix_nav);

function fix_nav()
{
    if(window.scrollY > nav.offsetHeight + 150)
    {
        nav.classList.add("active");
    }
    else
    {
        nav.classList.remove("active");
    }
};