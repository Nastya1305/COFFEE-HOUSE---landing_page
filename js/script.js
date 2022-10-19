// Изменяемая высота заголовка
let cardsTitles = document.querySelectorAll(".card__title");

let resizeCardsTitles = function () {
    let maxHeight = 0;

    cardsTitles.forEach(cardTitle => {
        cardTitle.style.height = "";
        if (cardTitle.offsetHeight > maxHeight)
            maxHeight = cardTitle.offsetHeight;
    });

    cardsTitles.forEach(item => {
        item.style.height = maxHeight + 'px';
    });
};
window.addEventListener('resize', resizeCardsTitles);
window.addEventListener('load', resizeCardsTitles);


//  Фиксированный заголовок
let header = document.getElementById("header");
let headerTop = header.offsetTop;

let toggleFixedHeader = function () {
    if (window.pageYOffset > headerTop) {
        header.classList.add("header_fixed");
    } else {
        header.classList.remove("header_fixed");
    }
};
window.addEventListener('scroll', toggleFixedHeader);
window.addEventListener('load', toggleFixedHeader);


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

