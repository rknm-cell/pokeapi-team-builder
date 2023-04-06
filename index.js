// url variable
const url = "http://localhost:3000/pokemon?limit=6";
// const pokemonTypeUrl = `https://pokeapi.co/api/v2/type/45/`;

// team variables
const teamDiv = document.querySelector(".team-div");
// pokemon detail variables
// const pokemonDetail = document.getElementById('pokemon-detail');
const pokemonDetailImage = document.querySelector(".detail-image");
const pokemonDetailName = document.getElementById("detail-name");
const pokemonDetailLevel = document.getElementById("detail-level");
const pokemonDetailSpecies = document.getElementById("species-display");
const pokemonType = document.getElementById("types");
// pokemon form variables
const newpokemonForm = document.getElementById("new-pokemon");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newSpecies = document.getElementById("new-species");
const newComment = document.getElementById("new-comment");
let charactersArray;


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let newArray = data.splice(0, 6);
    charactersArray = data;
    renderTeam(newArray);
    // pokemonDetail(data[randomNumber]);
    renderList(data);
    // defaultPokemon(data.results[0]);
    // mainPokemon(data.results[0]);
  });

const pokemoneTeamMember = () => {};
const renderTeam = (pokemons) => {
  pokemons.forEach((pokemon) => {
    // console.log(index);
    // console.log(pokemons.indexOf(pokemon))

    let pokemonLevel = "";
    let pokemonTeamImg = document.createElement("img");
    pokemonTeamImg.src = pokemon.sprite;
    pokemonTeamImg.alt = pokemon.id;
    // create div for each team member
    let teamMember = document.createElement("div");
    teamMember.setAttribute("class", "players");
    let playerInfo = document.createElement("span");
    playerInfo.setAttribute("class", "player-info");
    teamMember.append(playerInfo);
    let nameAndLevel = document.createElement("span");
    nameAndLevel.setAttribute("class", "name-and-level");
    playerInfo.append(nameAndLevel);
    // add img and delete button to each team member div
    playerInfo.append(pokemonTeamImg);
    // display settings

    let displayName = document.createElement("h3");
    displayName.textContent = pokemon.name;
    nameAndLevel.append(displayName);
    // level settings
    let displayLevel = document.createElement("h3");
    displayLevel.textContent = ` lvl: ${pokemonLevel}`;
    // nameAndLevel.append(displayLevel);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.textContent = "x";
    playerInfo.append(deleteButton);
    deleteButton.addEventListener("click", deleteIt);
    function deleteIt() {
      teamMember.remove();
      pokemonDetailImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png";
      console.log(pokemon.name);
      pokemonDetailName.innerHTML = '';
      pokemonDetailLevel.innerHTML = ``;
    }

    teamMember.setAttribute("name", pokemon.name);

    // console.log(pokemon.name)
    // add each teamMember to team div
    teamDiv.append(teamMember);
    teamMember.addEventListener("mouseover", () => {
      teamMember.style.transform = "scale(1.1)";
    });
    teamMember.addEventListener("mouseleave", () => {
      teamMember.style.transform = "scale(1)";
    });
    pokemonTeamImg.addEventListener("click", () => {
      pokemonDetailImage.src = pokemon.img;
      console.log(pokemon.name);
      pokemonDetailName.textContent = pokemon.name;
      
    });
  });
};

let listOfNames = document.getElementById("mylist");
const renderList = (pokemon) => {
  for (var i = 0; i < pokemon.length; ++i) {
    let nameOption = document.createElement("option");
    nameOption.value = pokemon[i].name;

    listOfNames.append(nameOption);
  }
  console.log(listOfNames);
};

// keep details closed if there are 6 pokemon on the team


// fetch for every pokeman
const pokemonDetail = (pokemon) => {
  pokemonDetailImage.src = pokemon.img;
  pokemonDetailName.textContent = pokemon.name;
};
newpokemonForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newPoke = {};
  newPoke.name = event.target[0].value;

  console.log(newPoke);

  for (let pokemon of charactersArray) {
    if (event.target[0].value == pokemon.name) {
      console.log(pokemon.sprite);
      console.log(newPoke);
      newPoke.sprite = pokemon.sprite;
      newPoke.img = pokemon.img;
    }
  }
  renderTeam([newPoke]);
});

