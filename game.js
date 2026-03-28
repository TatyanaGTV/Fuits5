let mainDeck = [];
let player1Deck = [];
let player2Deck = [];
// сделать адаптивные стили
window.onload = function() {
    startGame();
}

function startGame() {
    createDeck();
}

let gameAgain = document.getElementById('gameOverScreen');

function createDeck() {
    mainDeck = [];

    for (let i = 1; i <= 15; i++) {
        mainDeck.push(i);
    }
    console.log(mainDeck);
    shuffle(mainDeck);
     renderMainDeck(mainDeck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//let topCard = mainDeck.pop();

function renderMainDeck() {

 let container = document.getElementById("centerArea");
    container.innerHTML = "";

    if (mainDeck.length === 0) return;

   let topCard = mainDeck.pop();

    let img = document.createElement("img");
    img.src = "images/" + topCard + ".png";
    img.style.width = "300px";

    let button = document.getElementById('btn_1');
    let button2 = document.getElementById('btn_2');
    button.onclick = () => giveCard(1, topCard);
    button2.onclick = () => giveCard(2, topCard);
    container.appendChild(img);
    //return topCard;
}
let score = document.getElementById("score");
let score2 = document.getElementById("score2");
let scoreCount = 0;
let scoreCount2 = 0;

function giveCard(player, card) {

    let gameOverScreen = document.getElementById('gameOverScreen');
    
    
    if (mainDeck.length === 0) {
            gameOverScreen.style.display = "flex"
        return;
        //добавить очки
    }
//mainDeck.pop();
    //let card = mainDeck.pop(); // берём последнюю карту

    if (player === 1) {
        player1Deck.push(card);
        renderPlayerCards(1, card);
        scoreCount++
        score.innerText = `Количество очков ${scoreCount}`;

    } else {
        player2Deck.push(card);
        renderPlayerCards(2, card);
        scoreCount2++
        score2.innerText = `Количество очков ${scoreCount2}`;
    }

    renderPlayerCards(player,card);
    topCard = null;
    renderMainDeck();
}
    console.log("Осталось карт:", mainDeck.length);
    


/*function takeCard() {

    if (mainDeck.length === 0) {
        alert("Колода закончилась!");
        return;
    }

    let card = mainDeck.pop();
    let flyingCard = document.getElementById("flyingCard");

    flyingCard.src = "images/" + card + ".png";
    flyingCard.style.opacity = "1";
    flyingCard.style.transform = "translate(0, 0)";

    // небольшая пауза перед полётом
    setTimeout(() => {

        let target = document.getElementById("player" + currentPlayer);
        let rect = target.getBoundingClientRect();
        let centerRect = flyingCard.getBoundingClientRect();

        let moveX = rect.left - centerRect.left;
        let moveY = rect.top - centerRect.top;

        flyingCard.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    }, 50);

    // после анимации добавляем карту игроку
    setTimeout(() => {

        flyingCard.style.opacity = "0";
        flyingCard.style.transform = "translate(0,0)";

        if (currentPlayer === 1) {
            player1Deck.push(card);
            renderPlayerCards(1);
            currentPlayer = 2;
        } else {
            player2Deck.push(card);
            renderPlayerCards(2);
            currentPlayer = 1;
        }

       // updateTurnInfo();

    }, 650);
}*/

function renderPlayerCards(player,card) {

    let container = document.getElementById("player" + player);
    container.innerHTML = "";

    let deck = player === 1 ? player1Deck : player2Deck;

   // let card = mainDeck.pop();
        let img = document.createElement("img");
        img.src = "images/" + card + ".png";
        img.style.width = "300px";
        container.appendChild(img);
        //renderMainDeck();
}
function toggleMenu() {
    const menu = document.getElementById("dropdownContent");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


//let tipButton = document.getElementById('tip');


function openHints () {
    let tipList = document.getElementById('hints');
    if(tipList.style.display === 'block'){
        tipList.style.display = 'none';
    } else {
        tipList.style.display = 'block';
    }

}

let footer = document.getElementById('footer')
