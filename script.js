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
