const menu = document.querySelector('.menu-wrapper');
function handleClick(e, name) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}