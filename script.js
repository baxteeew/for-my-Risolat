let currentPage = 0;

const pages = document.querySelectorAll(".page");


// Переход на следующую страницу
function nextPage() {

    const firstLetter = document.getElementById("firstLetterPage");

    if (!firstLetter) return;

    const letterPages = Array.from(document.querySelectorAll(".page"))
        .filter(function(page) {

            return page.id !== "envelopePage" &&
                   page.id !== "questionPage";

        });

    const currentLetterIndex = letterPages.indexOf(
        document.querySelector(".page.active")
    );

    if (currentLetterIndex === -1) return;

    const oldPage = letterPages[currentLetterIndex];

    oldPage.classList.remove("active");

    if (currentLetterIndex % 2 === 0) {

        oldPage.classList.add("leave-left");

    } else {

        oldPage.classList.add("leave-right");

    }

    const nextLetterIndex = currentLetterIndex + 1;

    if (nextLetterIndex < letterPages.length) {

        letterPages[nextLetterIndex].classList.add("active");

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
function startLove() {

    const envelopePage = document.getElementById("envelopePage");
    const questionPage = document.getElementById("questionPage");

    if (envelopePage) {
        envelopePage.classList.remove("active");
    }

    if (questionPage) {
        questionPage.classList.add("active");
    }

}
