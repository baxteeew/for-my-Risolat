const startBtn = document.getElementById("startBtn");


function createHeart() {

    const heart = document.createElement("div");

    const hearts = [
        "❤️",
        "❤️‍🔥",
        "💗",
        "💖",
        "💘",
        "❣️",
        "💕",
        "💞"
    ];

    heart.className = "heart";

    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    heart.style.fontSize =
        Math.random() * 25 + 25 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


setInterval(createHeart, 500);


startBtn.addEventListener("click", function() {

    document.querySelector(".container").innerHTML = `
        <h1>Рисолат ❤️</h1>

        <p>
            Спасибо, что ты есть в моей жизни.
            <br><br>
            Этот сайт создан только для тебя.
        </p>

        <button id="nextBtn">
            Дальше 💕
        </button>
    `;


    document.getElementById("nextBtn")
    .addEventListener("click", function(){

        document.querySelector(".container").innerHTML = `
            <h1>Ты особенная ✨</h1>

            <p>
                Каждый момент с тобой становится дороже ❤️
            </p>

            <button id="finalBtn">
                Сюрприз 🎁
            </button>
        `;


        document.getElementById("finalBtn")
        .addEventListener("click", function(){

            document.querySelector(".container").innerHTML = `
                <h1>Я люблю тебя ❤️</h1>

                <p>
                    Это маленький подарок,
                    сделанный от всего сердца.
                </p>
            `;

        });

    });

});
