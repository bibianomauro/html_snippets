const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let intervalID = setInterval(blurring, 30);

function blurring()
{
    load++;
    loadText.textContent = load + '%';
    loadText.style.opacity = (1 - (load / 100));
    // loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = 'blur(' + (30 * (1 - (load / 100))) + 'px)';

    if(load > 99) clearInterval(intervalID);
};

// // map numbers function
// function scale(num, in_min, in_max, out_min, out_max)
// {
//     return out_min + ((num - in_min) * (out_max - out_min)) / (in_max - in_min);
// };