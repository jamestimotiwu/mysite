var block = document.querySelector('.block-bio');
var head = document.querySelector('.header');
var body = document.querySelector('body');

document.getElementById('slideout').onclick = function (e) {
    block.classList.toggle('slide-down');
    head.classList.toggle('slide-up');
    body.classList.toggle('color-transition');
    e.preventDefault();
    setTimeout(function () { window.location.href = document.getElementById('slideout').href; }, 300);
}

document.getElementById('slideout1').onclick = function (e) {
    block.classList.toggle('slide-down');
    head.classList.toggle('slide-up');
    body.classList.toggle('color-transition-map');
    e.preventDefault();
    setTimeout(function () { window.location.href = document.getElementById('slideout1').href; }, 500);
}

document.getElementById('bioslide').onclick = function (e) {
    block.classList.toggle('slide-down');
    e.preventDefault();
    setTimeout(function () { window.location.href = document.getElementById('bioslide').href; }, 500); //timeout to prevent page from reloading before ani
}