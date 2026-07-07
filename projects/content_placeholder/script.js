const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile-img");
const namae = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData()
{
    header.innerHTML = `
        <img
            src="https://images.unsplash.com/photo-1550690142-ad2b506b9ae8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        />
    `;

    title.innerHTML = `
        Lorem, ipsum dolor sit amet
    `;

    excerpt.innerHTML = `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, alias eum perferendis
    `;

    profile_img.innerHTML = `
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
    `;

    namae.innerHTML = `
        John Doe
    `;

    date.innerHTML = `
        Nov 08, 2019
    `;

    for(let i = 0, length = animated_bgs.length; i < length; i++)
    {
        animated_bgs[i].classList.remove("animated-bg");
    };
};

setTimeout(getData, 1000);