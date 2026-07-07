const RESULTS = 69;

const list_items = [];

async function get_data()
{
  const res = await fetch("https://randomuser.me/api/0.8?results=" + RESULTS);
  const data = await res.json();

  result.innerHTML = "";

  for(let i = 0; i < data.results.length; ++i)
  {
    const user = data.results[i].user;
    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}.png" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.state} - ${data.nationality}</p>
      </div>
    `;

    list_items.push(li);

    result.appendChild(li);
  }
}

get_data();

filter.addEventListener("input", e => filter_data(e.target.value));

function filter_data(search)
{
  for(let i = 0; i < list_items.length; ++i)
  {
    const item = list_items[i];
    if(item.innerText
        .toLowerCase()
        .includes(search.toLowerCase()))
    {
      item.classList.remove("hide");
    }
    else
    {
      item.classList.add("hide");
    }

  }
}
