// // url variable
// url = "pokeapi"
// // detail variables
// const detailName
// const detailSpecies
// const detailImage
// const detailLvl
// const detailNumber
// const detailChangeLvl
// const detailStats
// // team variables
// const teamTitle
// const teamName
// const teamImage
// const teamLevel

// // The fetch url retrieves a set of pokemon
// // the landing page would have a random pokemon as the main picture
// // if a pokemon is released they are removed from the team list
// // if you click an empty spot in the team list you can add a new pokemon

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
const pokemonType = document.getElementById('types');
// pokemon form variables
const newpokemonForm = document.getElementById("new-pokemon");
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newSpecies = document.getElementById("new-species");
const newComment = document.getElementById("new-comment");
let charactersArray

// fetch request
// const url = "https://pokeapi.co/api/v2/pokemon?limit=6";


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let newArray = data.splice(0, 6); 
    charactersArray = data
    renderTeam(newArray);
    // pokemonDetail(data[randomNumber]);
    renderList(data)
    // defaultPokemon(data.results[0]);
    // mainPokemon(data.results[0]);
  });
const pokemoneTeamMember = () => {

}
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
    nameAndLevel.append(displayLevel);

    
    let deleteButton=document.createElement("button")
    deleteButton.setAttribute("class","delete")
    deleteButton.textContent="x"
    playerInfo.append(deleteButton);
    deleteButton.addEventListener("click",deleteIt)
    function deleteIt(){teamMember.remove()}

    teamMember.setAttribute("name", pokemon.name);

    // console.log(pokemon.name)
    // add each teamMember to team div
    teamDiv.append(teamMember);
    teamMember.addEventListener('mouseover', () => {
      teamMember.style.transform = 'scale(1.1)';
    })
    teamMember.addEventListener('mouseleave', () => {
      teamMember.style.transform = 'scale(1)';
    })
    teamMember.addEventListener("click", () => {
      
      pokemonDetailImage.src = pokemon.img;
      console.log(pokemon.name);
      pokemonDetailName.textContent = pokemon.name;
      pokemonDetailLevel.textContent = ` lvl ${pokemonLevel}`;
    });
  });
};

let listOfNames = document.getElementById("mylist")
const renderList = (pokemon) => {
    for (var i = 0; i < pokemon.length ; ++i){
   let nameOption= document.createElement("option")
   nameOption.value=pokemon[i].name

   listOfNames.append(nameOption)
    }
    console.log(listOfNames)
};

// fetch for every pokeman

const pokemonDetail = (pokemon) => {
   
    
    pokemonDetailImage.src = pokemon.img;
    pokemonDetailName.textContent = pokemon.name;
};
newpokemonForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  newPoke= {}
  newPoke.name = event.target[0].value

  console.log(newPoke)
  
    // fetch(url)
    // .then((response) => response.json())
    // .then((data) => {
    //   for (let pokemon of data){
    //       if(event.target[0].value==pokemon.name){
    //         console.log(pokemon.sprite)
    //         console.log(newPoke)
    //         newPoke.sprite = pokemon.sprite
    //         renderTeam([newPoke])
    //       }
    //       }
    //     })

    for (let pokemon of charactersArray){
          if(event.target[0].value==pokemon.name){
            console.log(pokemon.sprite)
            console.log(newPoke)
            newPoke.sprite = pokemon.sprite
            newPoke.img=pokemon.img
          }
        }
      renderTeam([newPoke])
    })
                  
              
  //             });
  // results=[newPoke,...results]
  // console.log(results)
 //console.log(newPoke)
 //setTimeout(function(){renderTeam([newPoke])},1000) 
 //renderTeam([newPoke])


// const pokemonImages = (pokemon) => {
//   // let pokemonId = pokemon index value + 1
//   let pokemonThumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//   let pokemonMainImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
// };
// let listOfNames = document.getElementById("mylist")
// const renderList = (pokemon) => {
//     console.log(pokemon.length)
//     for (var i = 0; i < pokemon.length ; ++i){
//    let nameOption= document.createElement("option")
//    nameOption.value=pokemon[i].name
//    listOfNames.append(nameOption)
//     }
//     console.log(listOfNames)
// const newCharacterForm = document.getElementById("new-character")
// charInput=document.getElementById("searchChar")
// newCharacterForm.append(charInput)
// };

// const defaultPokemon = (pokemon) => {
//     console.log(pokemon.indexof(pokemons.name))

//     pokemonDetailImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
//     pokemonName.textContent = data.name;
//     pokemonspecies.textContent = data.name;
//     return defaultPokemon;
// };
// const pokemonDefault = (pokemon) => {
//     let pokemonUrl = pokemon.url;
// fetch(pokemonUrl)
//             .then((response) => response.json())
//             .then((data) => {
//             console.log(data);
//             pokemonDetailImage.src = data.sprites.other.home.front_default
//             console.log(data.sprites.other.home.front_default);
//             });
// }
//         let renderBulbasaur = (pokemon) => {
//             pokemonDetailImage.src = pokemon.spites.home.front_default;
//         }
// // iterates API data
// const renderTeam = (pokemons) => {
//     pokemons.forEach((pokemon) => {
//         // created images for team div

//         console.log(pokemon);
//         console.log(pokemon.name);
//         console.log(pokemon.url);
//         let pokemonUrl = pokemon.url;

// const pokemonteamImg = document.createElement('img');
// pokemonteamImg.src = pokemon.sprites.other.home.front_default;
// teamDiv.append(pokemonteamImg);
// added eventlistener to images of pokemon
// pokemonteamImg.addEventListener('click', () => {
//     pokemonDefault(pokemon);
// });
//     });
// };
// newpokemonForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log('form submitted');

//     const newpokemonObj = {
//         name: newName.value,
//         restaurant: newRestaurant.value,
//         image: newImage.value,
//         comment: newComment.value,
//         species: newspecies.value
//     };
//     fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(newpokemonObj)
//     }).then(response => response.json())
//       .then(showNewpokemon)
//     });

// function showNewpokemon(pokemon){
//     const pokemonImg = document.createElement('img');
//     pokemonImg.src = pokemon.image;
//     pokemonImg.alt = pokemon.name;
//     pokemonImg.dataset.id = pokemon.id

//     // pokemonImg.addEventListener('click', (e) => {
//     //     showpokemonDetails(pokemon)
//     // })

//     teamDiv.append(pokemonImg);
// }
