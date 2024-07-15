let hS = window.localStorage.getItem("hS");
let cS = window.localStorage.getItem("cS");

console.log(hS, cS);

if (hS > cS) {
    endscreen.textContent = "Humans Win! 🥶";
} else if (hS < cS){
    endscreen.textContent = "All Hail SkyNett! 👾";
} 