let home = 0
let away = 0


// any element that has id=home-score-el should display whatever is in "home" variable
document.getElementById("home-score-el").textContent = home
document.getElementById("away-score-el").textContent = away

// updating the home and away sacore 
// create a JS variable e.g., homeEL by reference. That is; homeEl becomes another name for the id "home-score-el" and whatever you do to homeEL affects the ID 
let homeEl = document.getElementById("home-score-el")
let awayEl = document.getElementById("away-score-el")


// Plus 1

function plusonehome() {
    
    home=home+1
    homeEl.innerText = home
    
}

function plusoneaway() {
    
    away+=1
    awayEl.innerText = away
    
}

// Plus 2

function plustwohome() {
    
    home=home+2
    homeEl.innerText = home
    
}

function plustwoaway() {
    
    away+=2
    awayEl.innerText = away
    
}


// Plus 3

function plusthreehome() {
    
    home=home+3
    homeEl.innerText = home
    
}

function plusthreeaway() {
    
    away+=3
    awayEl.innerText = away
    
}