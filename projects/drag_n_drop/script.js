const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(let i = 0, length = empties.length; i < length; i++)
{
    const empty = empties[i];
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
};

function dragStart()
{
    this.classList.add("hold");
    setTimeout(() => this.className = "", 0);
};

function dragEnd()
{
    this.classList.add("fill");
};

function dragOver(e)
{
    e.preventDefault();
};

function dragEnter(e)
{
    e.preventDefault();
    this.classList.add("hovered");
};

function dragLeave()
{
    this.classList.remove("hovered");
};

function dragDrop()
{
    this.className = "empty";
    this.appendChild(fill);
};
