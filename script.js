const startBtn = document.getElementById("startBtn");


function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
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
