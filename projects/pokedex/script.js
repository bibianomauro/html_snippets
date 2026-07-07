const POKEMONS = 151;

const poke_container = document.getElementById("poke-container");
const COLORS = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

async function fetch_pokemons()
{
  for(let i = 1; i < POKEMONS; i++)
  {
    await get_pokemon(i);
  }
}

async function get_pokemon(id)
{
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const response = await fetch(url);
  const data = await response.json();
  create_pokemon_card(data);
}

function create_pokemon_card(pokemon)
{
  const pokemon_el = document.createElement("div");
  pokemon_el.classList.add("pokemon");

  pokemon_el.innerHTML = `
    <div class="img-container">
      <img src="${pokemon.sprites.front_default}" alt="" />
    </div>
    <div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
      <h3 class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      <mall class="type">Type: <span>${pokemon.types[0].type.name}</span></mall>
    </div>
  `;

  pokemon_el.style.backgroundColor = COLORS[pokemon.types[0].type.name];

  poke_container.appendChild(pokemon_el);
}

fetch_pokemons()
