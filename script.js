// let cardsTitles = document.getElementsByClassName("card__title");

// window.onresize = function () {
//     var maxHeightOfCardTitle = 0;
//     //Определяем максимальную высоту блока
//     for (var i = 0; i < cardsTitles.length; i++) {
//         var currentHeight = cardsTitles[i].offsetHeight;
//         if (currentHeight > maxHeightOfCardTitle) {
//             maxHeightOfCardTitle = currentHeight;
//         }
//     }
//     //Задаем максимальную высоту блока всем элементам
//     for (var i = 0; i < cardsTitles.length; i++) {
//         cardsTitles[i].style.height = maxHeightOfCardTitle + 'px';
//     }
// };



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

