// Clickable divs for index
document.getElementById('learnLink').addEventListener('click', redirectLearn);
document.getElementById('playLink').addEventListener('click', redirectPlay);
document.getElementById('solverLink').addEventListener('click', redirectSolver);

function redirectLearn() {
    window.location.href = "learn.html";
}

function redirectPlay() {
    window.location.href = "play.html";
}

function redirectSolver() {
    window.location.href = "solver.html";
}

// overlay display
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}