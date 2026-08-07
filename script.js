const pages = Array.from(document.querySelectorAll(".page"));


// 💌 Конверт → вопрос + 🎵 музыка
function startLove() {

    document
        .getElementById("envelopePage")
        .classList.remove("active");

    document
        .getElementById("questionPage")
        .classList.add("active");


    const music =
        document.getElementById("loveMusic");

    if (music) {

        music.volume = 0.7;

        music.play().catch(function(error) {

            console.log("Музыка не запустилась:", error);

        });

    }

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

    const letterPages =
        pages.filter(function(page) {

            return page.id !== "envelopePage" &&
                   page.id !== "questionPage";

        });


    // Находим именно текущую видимую страницу
    // (страницу, которая ещё не уехала)
    const current =
        letterPages.find(function(page) {

            return page.classList.contains("active") &&
                   !page.classList.contains("leave-left") &&
                   !page.classList.contains("leave-right");

        });


    if (!current) return;


    const currentIndex =
        letterPages.indexOf(current);


    if (currentIndex === -1) return;


    const nextIndex =
        currentIndex + 1;


    if (nextIndex >= letterPages.length) return;


    const next =
        letterPages[nextIndex];


    // Старая страница уезжает
    if (currentIndex % 2 === 0) {

        current.classList.add("leave-left");

    } else {

        current.classList.add("leave-right");

    }


    // Следующая появляется сразу
    next.classList.add("active");

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
