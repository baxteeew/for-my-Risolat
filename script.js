const pages = Array.from(document.querySelectorAll(".page"));


// 💌 Конверт → вопрос
function startLove() {

    document
        .getElementById("envelopePage")
        .classList.remove("active");

    document
        .getElementById("questionPage")
        .classList.add("active");
}


// ❤️ Да → первое письмо
function loveYes() {

    document
        .getElementById("questionPage")
        .classList.remove("active");

    document
        .getElementById("firstLetterPage")
        .classList.add("active");
}


// 📖 Следующая страница
function nextPage() {

    const current =
        document.querySelector(".page.active");

    if (!current) return;


    const letterPages =
        pages.filter(function(page) {

            return page.id !== "envelopePage" &&
                   page.id !== "questionPage";

        });


    const currentIndex =
        letterPages.indexOf(current);


    if (currentIndex === -1) return;


    const nextIndex =
        currentIndex + 1;


    if (nextIndex >= letterPages.length) {
        return;
    }


    current.classList.remove("active");

    letterPages[nextIndex]
        .classList.add("active");
}


// 😈 Нет — убегает 7 раз
const noButton =
    document.getElementById("noButton");

let noAttempts = 0;


if (noButton) {

    noButton.addEventListener("click", function() {

        if (noAttempts >= 7) return;

        noAttempts++;


        const maxX =
            window.innerWidth -
            noButton.offsetWidth -
            20;

        const maxY =
            window.innerHeight -
            noButton.offsetHeight -
            20;


        noButton.style.position = "fixed";

        noButton.style.left =
            Math.max(10, Math.random() * maxX) + "px";

        noButton.style.top =
            Math.max(10, Math.random() * maxY) + "px";

    });

}
