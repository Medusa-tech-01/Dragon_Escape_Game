
let gameplay = new Audio('audio/gameplay1.wav');
let gameoveraudio = new Audio('audio/gameover2.wav');



score = 0;
cross = true;


// setInterval(() => {
gameplay.play();
// }, 1000);

document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        warrier = document.querySelector('.warrier');
        warrier.classList.add('animateWarrier');
        setTimeout(() => {
            warrier.classList.remove('animateWarrier');
        }, 500);
    }
    if (e.keyCode == 39) {
        warrier = document.querySelector('.warrier');
        warrierx = parseInt(window.getComputedStyle(warrier, null).getPropertyValue('left'));
        warrier.style.left = warrierx + 100 + "px";
    }
    if (e.keyCode == 37) {
        warrier = document.querySelector('.warrier');
        warrierx = parseInt(window.getComputedStyle(warrier, null).getPropertyValue('left'));
        warrier.style.left = warrierx - 100 + "px";
    }
}

setInterval(() => {
    warrier = document.querySelector('.warrier');
    enemy = document.querySelector('.enemy');
    gameover = document.querySelector('.gameover');

    wx = parseInt(window.getComputedStyle(warrier, null).getPropertyValue('left'));
    wy = parseInt(window.getComputedStyle(warrier, null).getPropertyValue('top'));
    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('top'));

    offsetX = Math.abs(wx - ex);
    offsetY = Math.abs(wy - ey);
    console.log(offsetX, offsetY)
    if (offsetX < 60 && offsetY < 100) {
        gameover.innerText = "Gameover!, You have lost!"
        // gameover.style.visibility = 'visible';
        enemy.classList.remove('animateEnemy')
        updateScore(score - 1);
        gameoveraudio.play();
        // setInterval(() => {
        gameplay.pause();
        // }, 1000);

    }
    else if (offsetX < 150 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            enemydur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
            enemydur = enemydur - 0.1;
            enemy.style.animationDuration = enemydur + 's';
            console.log(enemydur);
        }, 500);

    }
}, 100);

// Update Score
function updateScore(score) {
    scorecont.innerText = "Your Score is: " + score;
}






// Dropdown
function showDropdown() {
    document.getElementById('mydropdown').classList.toggle('show');
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeTheme(link) {
    gamecontainer = document.querySelector('.gamecontainer');
    gamecontainer.style.backgroundImage = "url(img/" + link + ".jpg)";
}

function reloadGame() {
    warrier = document.querySelector('.warrier');
    enemy = document.querySelector('.enemy');
    warrier.style.left = "120px";
    gameover = document.querySelector('.gameover');
    gameover.innerText = "Welcome to Dragon Escape";
    scorecont.innerText = "Your Score is: 0";
    enemy.style.animation = 'none';
    enemy.offsetHeight; /* trigger reflow */
    enemy.style.animation = null;
    enemy.classList.add('animateEnemy');
    score = 0;
    gameplay.currentTime = 0;
    gameplay.play();

}