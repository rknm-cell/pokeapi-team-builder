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
const url = "https://pokeapi.co/api/v2/pokemon?limit=25";

// team variables
const teamDiv = document.getElementById('pokemon-team');
// pokemon detail variables
// const pokemonDetail = document.getElementById('pokemon-detail');
const pokemonDetailImage = document.querySelector('.detail-image');
const pokemonName = document.querySelector('.name');
const pokemonspecies = document.getElementById('species-display');
const pokemonComment = document.getElementById('comment-display');
// pokemon form variables
const newpokemonForm = document.getElementById('new-pokemon');
const newName = document.getElementById('new-name');
const newRestaurant = document.getElementById('new-restaurant');
const newImage = document.getElementById('new-image');
const newspecies = document.getElementById('new-species');
const newComment = document.getElementById('new-comment')

// fetch request
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data.results);
    renderTeam(data.results);
    // defaultPokemon(data.results[0]);
    // mainPokemon(data.results[0]);
});
// fetch for every pokeman 

// const pokemonDetail = (data) => {
//     pokemonId = pokemonTeamImg.alt
//     pokemonTeamImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
//     pokemonDetailImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//     pokemonName.textContent = data.name;
//     pokemonComment.textContent = data.comment;
// };

const renderTeam = (pokemons) => {
    pokemons.forEach(pokemon => {
        // console.log(index);
        console.log(pokemons.indexOf(pokemon))
        let pokemonId = (pokemons.indexOf(pokemon) + 1);  
        let pokemonTeamImg = document.createElement('img');
        pokemonTeamImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        pokemonTeamImg.alt = pokemonId;
        teamDiv.append(pokemonTeamImg);
        
        pokemonTeamImg.addEventListener('click', () => {
            pokemonId = pokemonTeamImg.alt;
            pokemonDetailImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
            pokemon
        })
    })
}

// const pokemonImages = (pokemon) => {
//     // let pokemonId = pokemon index value + 1
    // let pokemonThumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    // let pokemonMainImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`
    
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