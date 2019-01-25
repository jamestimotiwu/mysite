var home = document.querySelector('.bio');
var engineer = document.querySelector('.engineer-block');
var isHome = true;

document.getElementById('about').onclick = function (e) {
    // home.classList.toggle('transitionout');
    home.style.animation = "fadeOut 0.1s";
    home.style.WebkitAnimation = "fadeOut 0.1s";
    isHome = false;
    console.log('Click just happened');
}
document.getElementById('home').onclick = function (e) {
    // engineer.classList.toggle('transitionout');
    engineer.style.animation = "fadeOut 0.1s";
    engineer.style.WebkitAnimation = "fadeOut 0.1s";
    isHome = true;
    console.log('Click just happened');
}

home.addEventListener('animationend', function (e) {
    if (isHome == false) {
        home.style.display = "none";
        engineer.style.animation = "fadeIn 0.5s";
        engineer.style.WebkitAnimation = "fadeIn 0.5s";
        // engineer.classList.toggle('transitionin');
        engineer.style.display = "block";
        console.log('ishome is false');
    }
});

engineer.addEventListener('animationend', function (e) {
    if (isHome == true) {
        engineer.style.display = "none";
        // home.classList.toggle('transitionin');
        home.style.animation = "fadeIn 0.5s";
        home.style.WebkitAnimation = "fadeIn 0.5s";
        home.style.display = "block";
        console.log('ishome is true');
    }
});
