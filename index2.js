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
const URL = "http://localhost:3000/ramens";
// menu variables
const menuDiv = document.getElementById('ramen-menu');
// ramen detail variables
const ramenDetail = document.getElementById('ramen-detail');
const ramenDetailImage = document.querySelector('.detail-image');
const ramenName = document.querySelector('.name');
const ramenRestaurant = document.querySelector('.restaurant');
const ramenRating = document.getElementById('rating-display');
const ramenComment = document.getElementById('comment-display');
// ramen form variables
const newRamenForm = document.getElementById('new-ramen');
const newName = document.getElementById('new-name');
const newRestaurant = document.getElementById('new-restaurant');
const newImage = document.getElementById('new-image');
const newRating = document.getElementById('new-rating');
const newComment = document.getElementById('new-comment')


// fetch request
fetch(URL)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    renderRamen(data);
    ramenDefault(data[0]);
});
// function to attach information to main image
const ramenDefault = (data) => {
    ramenDetailImage.src = data.image;
    ramenName.textContent = data.name;
    ramenRestaurant.textContent = data.restaurant;
    ramenRating.textContent = data.rating;
    ramenComment.textContent = data.comment;
};
// iterates API data
const renderRamen = (ramens) => {
    ramens.forEach(ramen => {
        // created images for menu div
        const ramenMenuImg = document.createElement('img');
        ramenMenuImg.src = ramen.image
        menuDiv.append(ramenMenuImg);
        // added eventlistener to images of ramen
        ramenMenuImg.addEventListener('click', () => {
            ramenDefault(ramen);
        });
    });
};
newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('form submitted');

    const newRamenObj = {
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newImage.value,
        comment: newComment.value,
        rating: newRating.value
    };
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newRamenObj)
    }).then(response => response.json())
      .then(showNewRamen)
    });


function showNewRamen(ramen){
    const ramenImg = document.createElement('img');
    ramenImg.src = ramen.image;
    ramenImg.alt = ramen.name;
    ramenImg.dataset.id = ramen.id

    // ramenImg.addEventListener('click', (e) => {
    //     showRamenDetails(ramen)
    // })

    menuDiv.append(ramenImg);
}