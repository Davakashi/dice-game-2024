// Тоглогчийн ээлжийг хадгалах хувьсагч
// 1р тоглогч -- 0
// 2р тоглогч -- 1
var activePlayer = 1;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч [1-6 хооронд бууна.]
var dice = Math.floor(Math.random() * 6 + 1);

console.log("Шоо : " + dice);

// <div class="player-score" id="score-0">43</div>
//Програм эхлэхэд бэлэн болох
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
window.document.querySelector(".dice").style.display = "none";
