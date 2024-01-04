// ТОГЛООМИЙН ДҮРЭМ ALERT ГАРЧ ИРНЭ.
alert("Сайн байна уу? Манай тоглоомд тавтай морил");
alert(
    "ДҮРЭМ\nТа эсрэг тоглогчийн хамт шоо хаяж тоглох ба түрүүлж 100 оноо хүрсэн нь хожих болно. ROLL DICE button дээр даран хэдэн ч удаа шоогоо эргүүлэн current оноогоо ихэсгэх боломжтой бөгөөд хэрэв 1 буувал таны цуглуулсан current оноо 0 болон эсрэг тоглогч рүү шоо шидэх эрх шилжих болно. Тиймээс азаа үзэн 1 буухаас өмнө цуглуулсан оноогоо HOLD button дээр даран хадгалж авна уу HOLD button дээр дарснаар шоо шидэх эрх дараагийн тоглогч рүү шилжих болно."
);

// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч.
var isNewGame;

var diceDom = document.querySelector(".dice");

// Тоглоомын бүх газар ашиглагдах хувьсагчид
var activePlayer;
var scores;
var roundScore;

initGame();

function initGame() {
    // Тоглоом эхэллээ гэдэг төлөвт оруулна.
    isNewGame = true;

    // Тоглогчийн ээлжийг хадгалах хувьсагч
    // 1р тоглогч -- 0
    // 2р тоглогч -- 1
    activePlayer = 0;

    // document.querySelector("player-" + activePlayer + "-panel").classList.remove("active");
    // Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    // Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // Шооны аль талаараа буусныг хадгалах хувьсагч [1-6 хооронд бууна.]

    //Програм эхлэхэд бэлэн болох
    document.querySelector("#score-0").textContent = 0;
    //getElementByID нь хамаагүй хурдан ажилладаг.
    document.getElementById("score-1").textContent = 0;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // Тоглогчийн нэрийг буцаах.
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isNewGame === true) {
        // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
        var diceNumber = Math.floor(Math.random() * 6 + 1);

        // Шоог веб дээр гаргаж ирнэ.
        diceDom.style.display = "block";

        // Буусан шооны зургийг гаргаж ирнэ.
        diceDom.src = "dice-" + diceNumber + ".png";

        // Буусан тоо 1"ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог өөрчилнө.
        if (diceNumber !== 1) {
            // 1-ээс ялгаатай тоо бууж оноог нэмнэ..
            roundScore += diceNumber;
            document.getElementById("current-" + activePlayer).textContent =
                roundScore;
        } else {
            switchToNextPLayer();
        }
    } else {
        alert(
            "Тоглоом дууссан байна. NEW GAME button дээр дарж шинээр эхэлнэ үү!"
        );
    }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isNewGame) {
        // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нэмнэ.
        scores[activePlayer] += roundScore;

        // Дэлгэцний оноог өөрчлөнө.
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];

        // Уг тоглогч хожсон эсэхийг шалгах.
        if (scores[activePlayer] >= 100) {
            // Тоглоомыг дууссан төлөв оруулна.
            isNewGame = false;
            document.getElementById("name-" + activePlayer).textContent =
                "WINNER";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
            document.getElementById("name-" + activePlayer).textContent =
                "LOSER";
            diceDom.style.display = "none";
        } else {
            // Тоглогчийн ээлжийг солино.
            switchToNextPLayer();
        }
    } else {
        alert(
            "Тоглоом дууссан байна. NEW GAME button дээр дарж шинээр эхэлнэ үү!"
        );
    }
});

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPLayer() {
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийг шилжүүлнэ.
    // Хэрэв идэвхтэй тоглогч 0 байвал идэвтхтэй тоглогч 1 болго
    // Үгүй бол идэвхтэй тоглогчийг 0 болго.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлнэ.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгох.
    diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", initGame);
