// =============================
// NO BUTTON ESCAPE LOGIC
// =============================
const noBtn = document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("click", () => {

let container = document.querySelector(".container");

let maxX = container.clientWidth - noBtn.clientWidth;
let maxY = container.clientHeight - noBtn.clientHeight;

let randomX = Math.random() * maxX;
let randomY = Math.random() * maxY;

noBtn.style.position = "absolute";
noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";

});

}


// =============================
// EIDI AMOUNT CHECK
// =============================

function checkEidi(){

let amount = document.getElementById("amount").value;
let resultText = document.getElementById("result");

let message = "";


if(amount === ""){
message = "Amount toh likho pehle 😑";
}

else if(amount < 20){
message = "Itni kam Eidi? Yeh toh insult hai 😭";
}

else if(amount < 100){
message = "Hmm... thoda kanjoosi lag rahi hai 🤨";
}

else if(amount < 500){
message = "Theek hai... Eid bach gayi 😎";
}

else if(amount < 1000){
message = "Wah! Dil bada hai tumhara 💰";
}

else{
message = "Ameer log bhi aa gaye site par 😳";
}

resultText.innerText = message;

}



// =============================
// RANDOM FUNNY MESSAGE
// =============================

const funnyTexts = [

"Eidi dena farz hai 😌",
"Kanjoosi Eid par allowed nahi hai",
"Allah sab dekh raha hai 👀",
"Pocket check kar lo pehle 😆",
"Note nikaalo warna guilt milega"

];



const randomMessage = document.getElementById("randomMessage");

if(randomMessage){

let randomIndex = Math.floor(Math.random() * funnyTexts.length);

randomMessage.innerText = funnyTexts[randomIndex];

}



// =============================
// CONFETTI / CELEBRATION EFFECT
// =============================

function celebrate(){

for(let i=0;i<20;i++){

let coin = document.createElement("div");

coin.innerHTML = "💰";

coin.style.position = "fixed";
coin.style.left = Math.random()*100+"vw";
coin.style.top = "-50px";
coin.style.fontSize = "24px";
coin.style.animation = "fall 3s linear";

document.body.appendChild(coin);

setTimeout(()=>{
coin.remove();
},3000);

}

}



// =============================
// COIN FALL ANIMATION STYLE
// =============================

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(0);
}
100%{
transform:translateY(100vh);
}
}
`;

document.head.appendChild(style);