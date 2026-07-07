let tagsContainer = document.querySelector("#tags");
let textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", function(e)
{
    let tags = createTags(e.target.value);

    if(e.code === "Enter")
    {
        if(e.target.value === "\n")
        {
            e.target.value = "";
            return;
        }
        setTimeout(function()
        {
            e.target.value = "";
        }, 30);
        
        if(tags === 1)
        {
            let tag = document.querySelector(".tag");
            highlight(tag);
            return;
        }
        randomSelect();
    };
});

function createTags(input)
{
    let tags = [];
    let string = "";
    for(let i = 0, length = input.length; i < length; i++)
    {
        let char = input[i];
        if(char === " " || char === "\n") continue;
        if(char === ",")
        {
            if(string) tags.push(string);
            string = "";
            continue;
        };
        string = string + char;
    };
    if(string) tags.push(string);

    tagsContainer.innerHTML = "";

    for(let i = 0, length = tags.length; i < length; i++)
    {
        let tag = tags[i];
        let tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsContainer.appendChild(tagEl);
    };

    return tags.length;
};

function randomSelect()
{
    let times = 30;
    let millis = 150;

    let interval = setInterval(function()
    {
        let randomTag = pickRandomTag();
        highlight(randomTag);
        setTimeout(function()
        {
            unHighlight(randomTag);
        }, millis);
    }, millis);

    setTimeout(function()
    {
        clearInterval(interval);

        setTimeout(function()
        {
            let randomTag = pickRandomTag();
            highlight(randomTag);
        }, millis);
    }, times * millis);
};

function pickRandomTag()
{
    let tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
};

function highlight(tag)
{
    tag.classList.add("highlight");
};

function unHighlight(tag)
{
    tag.classList.remove("highlight");
};