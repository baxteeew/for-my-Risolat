const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {

    document.querySelector(".container").innerHTML = `
        <h1>Рисолат ❤️</h1>

        <p>
            Спасибо, что ты есть в моей жизни.
            <br><br>
            Этот маленький сайт я сделал только для тебя.
        </p>

        <button id="nextBtn">
            Дальше 💕
        </button>
    `;

    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", function() {

        document.querySelector(".container").innerHTML = `
            <h1>Ты особенная ✨</h1>

            <p>
                Среди миллионов людей я рад,
                что встретил именно тебя ❤️
            </p>
        `;

    });

});
