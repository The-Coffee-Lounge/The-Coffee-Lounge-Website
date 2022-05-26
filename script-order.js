/* Allows the home buttons to go back to the main index.html page */
document.getElementById("homeBtn1").addEventListener("click", goHome);
document.getElementById("homeBtn2").addEventListener("click", goHome);
document.getElementById("homeBtn3").addEventListener("click", goHome);
document.getElementById("homeBtn4").addEventListener("click", goHome);

function goHome() {
    window.open("index.html", "_self")
}

/* Allows the arrow up button to go back to previous pane. And the arrow down button to go next pane */

document.getElementById("downBtn1").addEventListener("click", scrollToPastry);
document.getElementById("downBtn2").addEventListener("click", scrollToMeal);
document.getElementById("downBtn3").addEventListener("click", scrollToOrderList);

document.getElementById("upBtn1").addEventListener("click", scrollToCoffee);
document.getElementById("upBtn2").addEventListener("click", scrollToPastry);
document.getElementById("upBtn3").addEventListener("click", scrollToMeal);

function scrollToCoffee() {
    const element = document.getElementById("coffeePane");
    element.scrollIntoView({behavior: "smooth"});
}

function scrollToPastry() {
    const element = document.getElementById("pastryPane");
    element.scrollIntoView({behavior: "smooth"});
}

function scrollToMeal() {
    const element = document.getElementById("mealPane");
    element.scrollIntoView({behavior: "smooth"});
}

function scrollToOrderList() {
    const element = document.getElementById("orderListPane");
    element.scrollIntoView({behavior: "smooth"});
}


/* Takes care of updating the order amount whenever the user clicks "Add to Order" button */ 

var orderAmt = 0;

document.getElementById("addCoffee").addEventListener("click", increaseOrderAmt);
document.getElementById("addPastry").addEventListener("click", increaseOrderAmt);
document.getElementById("addMeal").addEventListener("click", increaseOrderAmt);

function increaseOrderAmt(){
    orderAmt++;
    updateOrderCounters();
}

function updateOrderCounters(){
    document.getElementById("orderCounter1").innerHTML = orderAmt;
    document.getElementById("orderCounter2").innerHTML = orderAmt;
    document.getElementById("orderCounter3").innerHTML = orderAmt;
}


