// Тоглогчийн ээлжийг хадгалах хувьсагч
// 1р тоглогч -- 0
// 2р тоглогч -- 1
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч [1-6 хооронд бууна.]

//Програм эхлэхэд бэлэн болох
document.querySelector("#score-0").textContent = 0;
//getElementByID нь хамаагүй хурдан ажилладаг.
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
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
        //1 буусан туул тоглогчийн ээлж солигдоно.

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
});
