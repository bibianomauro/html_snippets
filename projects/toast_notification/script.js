const button = document.querySelector("#btn");
const toasts = document.querySelector("#toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

button.addEventListener("click", function()
{
    createNotification();
});

function createNotification()
{
    const notif = document.createElement("div")
    notif.classList.add("toast");
    notif.textContent = getRandomMessage();

    toasts.prepend(notif);

    setTimeout(function()
    {
       notif.remove(); 
    }, 2000);
};

function getRandomMessage()
{
    return messages[Math.floor(Math.random() * messages.length)];
};