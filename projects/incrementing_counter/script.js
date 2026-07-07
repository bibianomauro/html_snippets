let counters = document.querySelectorAll(".counter");

for(let i = 0, length = counters.length; i < length; i++)
{
    let counter = counters[i];
    counter.textContent = "0";

    update_counter(counter);

};

function update_counter(counter)
{
    let target = Number(counter.getAttribute("data-target"));
    let actual = Number(counter.textContent);
    let increment = target / 200;

    let value = Math.ceil(actual + increment);
    if(actual < target)
    {
        counter.textContent = value;
        setTimeout(update_counter, 1, counter);
    }
    else
    {
        counter.textContent = target;
    };
};