// filterable img
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to filter cards based on filter buttons
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));



// --------------------------------

// banner slide show
var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 2500);
    var x;
    const img = document.querySelectorAll(".img-slideShow");
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();




        
