const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill2 = document.getElementById("hill2");
const hill3 = document.getElementById("hill3");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");
const tree = document.getElementById("tree");
const plant = document.getElementById("plant");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    
    leaf.style.top = value * -.5 + "px";
    leaf.style.left = value * .5 + "px";
    hill1.style.top = value * .2 + "px";
    hill2.style.left = value * -.1 + "px";
    hill3.style.left = value * .1 + "px";
    hill4.style.left = value * -.5 + "px";
    hill5.style.left = value * .5 + "px";
    tree.style.top = value* .2 + "px";
    plant.style.top = value* .2 + "px";
});