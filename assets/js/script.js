const prof = document.querySelector(".profiles-image");
const menu = document.querySelector('.menu-wrapper');
const contents = document.querySelector('.content-wrapper');
const links = document.querySelector('.links');
const posts = document.querySelector('.posts');

window.addEventListener("load", function (event) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setTimeout(function () {
        window.scrollTo(0, 1)
    }, 0)
    const h = window.innerHeight - menu.clientHeight - prof.clientHeight;
    contents.style.height = `${h}px`
    links.style.height = `${h}px`
    posts.style.height = `${h}px`
});
function handleClick(e, name) {
    const items = document.querySelectorAll('.menu-wrapper button')
    const el = e.target
    items.forEach((item) => {
        item.classList.remove('active')
    })
    el.classList.add('active')
    const elScroll = document.querySelector(`.${name}`)
    contents.scrollTo(elScroll.offsetLeft, 0)
}

contents.addEventListener('scroll', (evt) => {
    if (evt.target.scrollLeft > window.innerWidth / 2 && evt.target.scrollLeft < window.innerWidth + (window.innerWidth / 2)) {
        menu.querySelector('button:nth-child(1)').classList.remove('active')
        menu.querySelector('button:nth-child(2)').classList.add('active')
    }else if (evt.target.scrollLeft < window.innerWidth / 2) {
        menu.querySelector('button:nth-child(1)').classList.add('active')
        menu.querySelector('button:nth-child(2)').classList.remove('active')
    } else if (evt.target.scrollLeft > window.innerWidth + (window.innerWidth / 2)){
        menu.querySelector('button:nth-child(2)').classList.remove('active')
        menu.querySelector('button:nth-child(3)').classList.add('active')
    }
})