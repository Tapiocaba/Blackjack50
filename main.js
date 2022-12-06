// Clickable divs for index
document.getElementById('learnLink').addEventListener('click', redirectLearn);
document.getElementById('playLink').addEventListener('click', redirectPlay);
document.getElementById('solverLink').addEventListener('click', redirectSolver);

function redirectLearn() {
    window.location.href = "rules.html";
}

function redirectPlay() {
    window.location.href = "play.html";
}

function redirectSolver() {
    window.location.href = "solver.html";
}


