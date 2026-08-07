let currentPage = 0;

const pages = document.querySelectorAll(".page");


function nextPage() {

    let oldPage = pages[currentPage];

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
function startLove() {

    document.getElementById("envelopePage").classList.remove("active");

    document.getElementById("questionPage").classList.add("active");

}


function loveYes() {

    document.getElementById("questionPage").classList.remove("active");

    currentPage = 0;

    showPage();

}


const noButton = document.getElementById("noButton");

let noAttempts = 0;

if (noButton) {

    noButton.addEventListener("click", function () {

        if (noAttempts < 10) {

            noAttempts++;

            const maxX = window.innerWidth - noButton.offsetWidth - 30;
            const maxY = window.innerHeight - noButton.offsetHeight - 30;

            const x = Math.max(15, Math.random() * maxX);
            const y = Math.max(15, Math.random() * maxY);

            noButton.style.position = "fixed";
            noButton.style.left = x + "px";
            noButton.style.top = y + "px";

        }

    });

}
