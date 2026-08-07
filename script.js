const pages = Array.from(document.querySelectorAll(".page"));


// ================================
// 💌 КОНВЕРТ → ВОПРОС
// ================================

function startLove() {

    const envelopePage =
        document.getElementById("envelopePage");

    const questionPage =
        document.getElementById("questionPage");

    if (!envelopePage || !questionPage) return;

    envelopePage.classList.remove("active");

    questionPage.classList.add("active");
}


// ================================
// ❤️ ДА → ПЕРВОЕ ПИСЬМО
// ================================

function loveYes() {

    const questionPage =
        document.getElementById("questionPage");

    const firstLetter =
        document.getElementById("firstLetterPage");

    if (!questionPage || !firstLetter) return;


    // Скрываем вопрос
    questionPage.classList.remove("active");


    // Сбрасываем страницы
    pages.forEach(function(page) {

        page.classList.remove("active");
        page.classList.remove("leave-left");
        page.classList.remove("leave-right");

    });


    // Показываем первое письмо
    firstLetter.classList.add("active");
}


// ================================
// 📖 СЛЕДУЮЩАЯ СТРАНИЦА
// ================================

function nextPage() {

    const currentPage =
        document.querySelector(".page.active");


    if (!currentPage) return;


    // Берём только страницы письма
    const letterPages =
        pages.filter(function(page) {

            return (
                page.id !== "envelopePage" &&
                page.id !== "questionPage"
            );

        });


    const currentIndex =
        letterPages.indexOf(currentPage);


    if (currentIndex === -1) return;


    const nextIndex =
        currentIndex + 1;


    // Если страниц больше нет
    if (nextIndex >= letterPages.length) {

        return;

    }


    const nextPageElement =
        letterPages[nextIndex];


    // Убираем текущую
    currentPage.classList.remove("active");


    // Чередуем направление
    if (currentIndex % 2 === 0) {

        currentPage.classList.add("leave-left");

    } else {

        currentPage.classList.add("leave-right");

    }


    // У следующей убираем старую анимацию
    nextPageElement.classList.remove("leave-left");
    nextPageElement.classList.remove("leave-right");


    // Показываем следующую
    nextPageElement.classList.add("active");
}


// ================================
// 😈 КНОПКА «НЕТ»
// ================================

const noButton =
    document.getElementById("noButton");

let noAttempts = 0;


if (noButton) {

    noButton.addEventListener("click", function() {

        if (noAttempts >= 7) return;


        noAttempts++;


        const maxX =
            Math.max(
                20,
                window.innerWidth -
                noButton.offsetWidth -
                20
            );


        const maxY =
            Math.max(
                20,
                window.innerHeight -
                noButton.offsetHeight -
                20
            );


        const x =
            Math.random() * maxX;


        const y =
            Math.random() * maxY;


        noButton.style.position = "fixed";

        noButton.style.left =
            x + "px";

        noButton.style.top =
            y + "px";

    });

}
