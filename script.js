const pages = Array.from(document.querySelectorAll(".page"));


// 💌 Конверт → вопрос + 🎵 музыка
function startLove() {

    const envelopePage =
        document.getElementById("envelopePage");

    const questionPage =
        document.getElementById("questionPage");

    const music =
        document.getElementById("loveMusic");

    const musicButton =
        document.getElementById("musicToggle");


    // Переходим от конверта к вопросу
    if (envelopePage) {
        envelopePage.classList.remove("active");
    }

    if (questionPage) {
        questionPage.classList.add("active");
    }


    // 🎵 Запускаем музыку
    if (music) {

        music.volume = 0.7;

        music.play()
            .then(function() {

                // Музыка играет → показываем паузу
                if (musicButton) {
                    musicButton.textContent = "⏸️";
                }

            })
            .catch(function(error) {

                console.log(
                    "Музыка не запустилась:",
                    error
                );

            });

    }

}


// ❤️ Да → первое письмо
function loveYes() {

    document
        .getElementById("questionPage")
        .classList.remove("active");

    document
        .getElementById("secondQuestionPage")
        .classList.add("active");

}

// 📖 Следующая страница
function nextPage() {

    const letterPages =
        pages.filter(function(page) {

            return page.id !== "envelopePage" &&
                   page.id !== "questionPage";

        });


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


    // Старая страница уходит
    if (currentIndex % 2 === 0) {

        // 1 → 2: старая уходит влево
        current.classList.add("leave-left");

    } else {

        // 2 → 3: старая уходит вправо
        current.classList.add("leave-right");

    }


    // Следующая страница приходит
    if (currentIndex % 2 === 0) {

        next.classList.add("come-from-right");

    } else {

        next.classList.add("come-from-left");

    }


    next.classList.add("active");


    // После запуска анимации убираем стартовый класс
    setTimeout(function() {

        next.classList.remove("come-from-right");
        next.classList.remove("come-from-left");

    }, 50);

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
function toggleMusic() {

    const music =
        document.getElementById("loveMusic");

    const button =
        document.getElementById("musicToggle");

    if (!music || !button) return;


    if (music.paused) {

        music.play();

        button.textContent = "⏸️";

    } else {

        music.pause();

        button.textContent = "▶️";

    }

}
function secondYes() {

    document
        .getElementById("secondQuestionPage")
        .classList.remove("active");


    document
        .getElementById("introLetterPage")
        .classList.add("active");

}
function openLetter() {

    document
        .getElementById("introLetterPage")
        .classList.remove("active");


    document
        .getElementById("musicLowPage")
        .classList.add("active");

}
function startLetter() {

    document
        .getElementById("musicLowPage")
        .classList.remove("active");


    document
        .getElementById("firstLetterPage")
        .classList.add("active");


    const music =
        document.getElementById("loveMusic");


    if (music) {

        music.volume = 0.3;

    }

}
function sweetYes() {

    document
        .getElementById("sweetQuestionPage")
        .classList.remove("active");

    document
        .getElementById("myPhotoPage")
        .classList.add("active");

}
function showFinalPhoto() {

    document
        .getElementById("moreSweetPage")
        .classList.remove("active");

    document
        .getElementById("finalPhotoPage")
        .classList.add("active");

}
