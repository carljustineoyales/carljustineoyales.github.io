

const aboutCTA = document.getElementById('about-cta');
const divbackground = document.getElementById('background');

const backgroundHalfToRight = () => {
    divbackground.style.width = '50%';
    divbackground.style.right = '0';
}

aboutCTA.addEventListener('click', backgroundHalfToRight);
