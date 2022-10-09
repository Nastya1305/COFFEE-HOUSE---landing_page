
//  Фиксированный заголовок
let header = document.getElementById("header");
let headerTop = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > headerTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
};


//  Выпадающий список навигации меню
let menu = document.getElementById("menu");
let navToggle = document.getElementById("navToggle");

navToggle.onclick = function () {
    menu.classList.toggle("show");
};


//  Переход по ссылкам меню
let nav_links = document.querySelectorAll("[data-scroll]");
for (let link of nav_links) {
    link.onclick = function (event) {
        event.preventDefault();

        let sectionID = this.dataset.scroll;
        let sectionTop = document.getElementById(sectionID).offsetTop;
        window.scrollTo(0, sectionTop - header.offsetHeight);

        menu.classList.remove("show");
    };
}

