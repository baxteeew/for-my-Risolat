let currentPage = 0;

const pages = document.querySelectorAll(".page");


function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage < pages.length) {

        pages[currentPage].classList.add("active");

    }

}
