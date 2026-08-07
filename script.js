let currentPage = 0;

const pages = document.querySelectorAll(".page");


// Переход на следующую страницу
function nextPage() {

    const oldPage = pages[currentPage];

    if (!oldPage) return;

    oldPage.classList.remove("active");

    if (currentPage % 2 === 0) {
        oldPage.classList.add("leave-left");
    } else {
        oldPage.classList.add("leave-right");
    }

    currentPage++;

    if (currentPage < pages.length) {

        pages[currentPage].classList.add("active");

    }

}


// Нажали "Да ❤️"
function loveYes() {

    // Убираем вопрос
    const questionPage = document.getElementById("questionPage");

    if (questionPage) {
        questionPage.classList.remove("active");
    }

    // Убираем active со всех страниц
    pages.forEach(function(page) {
        page.classList.remove("active");
        page.classList.remove("leave-left");
        page.classList.remove("leave-right");
    });

    // Открываем именно первую страницу письма
    const firstLetter = document.getElementById("firstLetterPage");

    if (firstLetter) {

        firstLetter.classList.add("active");

        // Находим её реальный номер
        currentPage = Array.from(pages).indexOf(firstLetter);

    }

}


// Кнопка "Нет 😈"
const noButton = document.getElementById("noButton");

let noAttempts = 0;

if (noButton) {

    noButton.addEventListener("click", function () {

        if (noAttempts < 7) {

            noAttempts++;

            const maxX =
                window.innerWidth - noButton.offsetWidth - 30;

            const maxY =
                window.innerHeight - noButton.offsetHeight - 30;

            const x = Math.max(
                15,
                Math.random() * maxX
            );

            const y = Math.max(
                15,
                Math.random() * maxY
            );

            noButton.style.position = "fixed";
            noButton.style.left = x + "px";
            noButton.style.top = y + "px";

        }

    });

}
