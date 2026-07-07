const APIURL = "https://api.github.com/users/";

const form = document.querySelector("#form");
const main = document.querySelector("#main");

function add_repos_to_card(repos)
{
  const repos_div = document.querySelector("#repos");
  const repos_length = repos.length < 5 ? repos.length : 5;

  for(let i = 0; i < repos_length; i++)
  {
    const repo = repos[i];
    const name = repo.name;
    const url = repo.svn_url;

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.textContent = name;
    a.classList.add("repo");

    repos_div.appendChild(a);
  };
};

function create_user_card(user)
{
  const card_HTML = `
    <div class="card">
      <div>
        <img
          src=${user.avatar_url}
          alt="avatar.jpg"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${user.name ? user.name : user.login}</h2>
        <p>${user.bio ? user.bio : "..."}</p>

        <ul>
          <li>${user.followers}<strong>Followers</strong></li>
          <li>${user.following}<strong>Following</strong></li>
          <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = card_HTML;
};

function create_error_card()
{
  const card_HTML = `
    <div class="card">
      <h1 style="text-align: center; width: 100%;">User not found</h1>
    </div>
  `;

  main.innerHTML = card_HTML;
};

function get_repos(username)
{
  return fetch(APIURL + username + "/repos?sort=created")
  .then(function(response)
  {
    if(!response.ok)
    {
      throw new Error(response.status);
    };
    return response.json();
  })
  .then(function(result)
  {
    add_repos_to_card(result);
  })
  .catch(function(error)
  {
    console.error(error);
  });
};

function get_user(username)
{
  return fetch(APIURL + username)
    .then(function(response)
    {
      if(!response.ok)
      {
        throw new Error(response.status);
      };
      return response.json();
    })
    .then(function(result)
    {
      create_user_card(result);
      get_repos(username);
    })
    .catch(function(error)
    {
      if(error.message == "404")
      {
        create_error_card();
      };
    });
};

form.addEventListener("submit", function(event){
  event.preventDefault();

  const username = event.target[0].value;

  if(username)
  {
    get_user(username);
    event.target[0].value = "";
  };
});


