/* Scrolls the page to About section if About button is clicked */

document.getElementById("aboutBtn").addEventListener("click", scrollToAbout);

function scrollToAbout(){
    const element = document.getElementById("about-us");
    element.scrollIntoView({behavior: "smooth"});
}

/* Navigates to the order page when the Menu button is clicked */

document.getElementById("menuBtn").addEventListener("click", goToMenu)

function goToMenu() {
    window.open("order.html", "_self");
}

document.getElementById("moreCoffeeBtn").addEventListener("click", goToOrderCoffee)
document.getElementById("morePastryBtn").addEventListener("click", goToOrderPastry)
document.getElementById("moreMealBtn").addEventListener("click", goToOrderMeal)

function goToOrderCoffee() {
    window.open("order.html#coffeePane", "_self");
}

function goToOrderPastry() {
    window.open("order.html#pastryPane", "_self");
}

function goToOrderMeal() {
    window.open("order.html#mealPane", "_self");
}