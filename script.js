const list = document.getElementById("preview");
let isDarkmode = false;
let isHighlightOn = false;
let detailsShown = true;

document.getElementById("decrease").addEventListener("click", decrease);
document.getElementById("increase").addEventListener("click", increase);
document.getElementById("highlight").addEventListener("click", highlight);
document.getElementById("darkModeBtn").addEventListener("click", darkMode);
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("reset").addEventListener("click", reset);

const darkStats = document.getElementById("darkStats");
const fontStats = document.getElementById("fontStats");
const highlightStats = document.getElementById("highlightStats");
const deatailStats = document.getElementById("deatailStats");


function updateStatus() {
  darkStats.textContent = "Dark mode: " + (isDarkmode ? "on" : "off");

  const currentSize = parseFloat(getComputedStyle(list).fontSize);
  fontStats.textContent = "Font size: " + currentSize + "px";

  highlightStats.textContent = "Highlight: " + (isHighlightOn ? "enabled" : "disabled");
  deatailStats.textContent = "Deatails: " + (detailsShown ? "shown" : "hidden");
}

function toggle(){

  list.hidden = !list.hidden;
  detailsShown = !detailsShown;
  updateStatus();
}

function increase() {
  const currentSize = parseFloat(getComputedStyle(list).fontSize);
  list.style.fontSize = (currentSize + 2) + "px";
    updateStatus();

}

function decrease() {
  const currentSize = parseFloat(getComputedStyle(list).fontSize);
  list.style.fontSize = ( currentSize - 2) + "px";
    updateStatus();

}

function darkMode(){
  isDarkmode = !isDarkmode;
  document.body.classList.toggle("dark", isDarkmode);
  updateStatus();

}

function highlight(){
  isHighlightOn = !isHighlightOn;

  list.classList.toggle("highlight");
  updateStatus();

}

function reset(){
  list.style.fontSize= "16px";
   list.hidden = false;
    updateStatus();


}