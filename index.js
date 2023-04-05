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
const url = "https://pokeapi.co/api/v2/pokemon?limit=6";

// team variables
const teamDiv = document.querySelector('.team-div');
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
const input=document.querySelector(".char-input")
let results =[]

// fetch request
// const url = "https://pokeapi.co/api/v2/pokemon?limit=6";

fetch(url)
.then((response) => response.json())
.then((data) => {
    renderTeam(data.results);
    renderList(data.results);
    results=data.results;
    // defaultPokemon(data.results[0]);
    // mainPokemon(data.results[0]);
});


const renderTeam = (pokemons) => {
    pokemons.forEach(pokemon => {
        // console.log(index);
        // console.log(pokemons.indexOf(pokemon))
        let pokemonId = (pokemons.indexOf(pokemon) + 1);  
       
        let pokemonTeamImg = document.createElement('img');
        pokemonTeamImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        pokemonTeamImg.alt = pokemonId;
    
        let nameAndLevel=document.createElement("span")
        nameAndLevel.setAttribute("class","name-and-level")
        
        let displayName = document.createElement("h2")
        displayName.textContent=pokemon.name
        nameAndLevel.append(displayName)
        
        let displayLevel = document.createElement("h3")
        displayLevel.textContent="50"
        nameAndLevel.append(displayLevel)

        let playerInfo= document.createElement("span")
        playerInfo.setAttribute("class","player-info")
        playerInfo.append(pokemonTeamImg);
        
        let deleteButton=document.createElement("button")
        deleteButton.setAttribute("class","delete")
        deleteButton.textContent="x"
        playerInfo.append(deleteButton);
        deleteButton.addEventListener("click",deleteIt)
        function deleteIt(){teamMember.remove()}
       
        playerInfo.append(nameAndLevel)
        
    
       
        let teamMember = document.createElement('div')
        teamMember.setAttribute("class","players")
        teamMember.append(playerInfo)
    

       
        //teamMember.append(nameAndLevel);
        //teamMember.append(pokemonTeamImg);
        teamMember.setAttribute("id",pokemonId)
        
    
        


        teamMember.setAttribute("name",pokemon.name)
        
        // console.log(pokemon.name)
        //add each teamMember to team div
        teamDiv.append(teamMember)

            pokemonTeamImg.addEventListener('click', () => {
            pokemonId = pokemonTeamImg.alt;
            pokemonDetailImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
            pokemon

            
        })
    })

};

// let displayedPokemons=document.querySelectorAll(".players")
// for (i of displayedPokemons){
// displayedPokemons[i].style.display=i.innerHTML
// }
// console.log(displayedPokemons)



// fetch for every pokeman 

const pokemonDetail = (data) => {
    pokemonId = pokemonTeamImg.alt
    pokemonTeamImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    pokemonDetailImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    pokemonName.textContent = data.name;
    pokemonComment.textContent = data.comment;
};

const pokemonImages = (pokemon) => {
    // let pokemonId = pokemon index value + 1
    let pokemonThumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    let pokemonMainImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`
    
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

// }
// function addit(){
// while (teamDiv.length){
    
// }
// }

console.log(teamDiv.childElementCount)

newpokemonForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    newPoke={}
    newPoke.name=event.target[0].value
    console.log(results.indexOf(newPoke))
    console.log(newPoke)
    
    // newPoke.id=fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 for (let pokemon of data.results){
    //                     if(event.target[0].value==pokemon.name){
    //                        return pokemon.url
    //                     }
    //                     }
                
    //             });
    results=[newPoke,...results]
    console.log(results)
     renderTeam([newPoke])            
})
