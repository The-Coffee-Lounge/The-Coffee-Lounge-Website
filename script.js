/* Scrolls the page to About section if About button is clicked */

document.getElementById("aboutBtn").addEventListener("click", scrollToAbout);

function scrollToAbout(){
    const element = document.getElementById("about-us");
    element.scrollIntoView({behavior: "smooth"});
}

/* Navigates to the order page when the Menu button is clicked */

document.getElementById("menuBtn").addEventListener("click", goToMenu)

function goToMenu() {
    window.open("order.html", "_self")
}