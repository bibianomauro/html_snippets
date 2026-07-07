let sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong",
];

for(let i = 0, soundsLength = sounds.length; i < soundsLength; i++)
{
    let sound = sounds[i];
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener('click', function()
    {
        stopSongs();
        let id = "#" + sound;
        document.querySelector(id).play();
    });

    document.querySelector("#buttons").appendChild(btn);
};

function stopSongs()
{
    for(let i = 0, soundsLength = sounds.length;
        i < soundsLength;
        i++)
    {
        let id = "#" + sounds[i];
        let sound = document.querySelector(id);
        sound.pause();
        sound.currentTime = 0;
    };
};