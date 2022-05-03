// set querySelectors for each alien ship and the FIRE button

const buttonGame = document.getElementById("button");
const scoreContainer1 = document.querySelector(".score-defence-1"); 
const scoreContainer2 = document.querySelector(".score-defence-2"); 
const scoreContainer3 = document.querySelector(".score-defence-3"); 
const scoreContainer4 = document.querySelector(".score-defence-4"); 
const scoreContainer5 = document.querySelector(".score-defence-5"); 
const scoreContainer6 = document.querySelector(".score-attack-1");
const scoreContainer7 = document.querySelector(".score-attack-2");
const scoreContainer8 = document.querySelector(".score-attack-3");
const scoreContainer9 = document.querySelector(".score-attack-4");
const scoreContainer10 = document.querySelector(".score-attack-5");
const scoreContainer11 = document.querySelector(".score-attack-6");
const scoreContainer12 = document.querySelector(".score-attack-7");
const scoreContainer13 = document.querySelector(".score-attack-8");
const scoreContainer14 = document.querySelector(".score-mother");
const scoreContainer = document.querySelectorAll(".score");

// function that runs when button is clicked

 export const buttonClicked = () => {
    
            let randomNumber = ((Math.floor(Math.random() * 14)) + 1);

//randomly chooses a number which is assigned to an alien ship
//score is reduced by the appropriate number for the alien ship and score is displayed in the alien ship container

            if (randomNumber === 14) {
                motherShip.reduceScore();
                scoreContainer14.innerHTML = motherShip.showScore();
                motherShip.endGame();
            } else if (randomNumber === 1) {
                defenceShip1.reduceScore();
                scoreContainer1.innerHTML = defenceShip1.showScore();
                allShipsZero();
            } else if (randomNumber === 2) {
                defenceShip2.reduceScore();
                scoreContainer2.innerHTML = defenceShip2.showScore();
                allShipsZero();
            } else if (randomNumber === 3) {
                defenceShip3.reduceScore();
                scoreContainer3.innerHTML = defenceShip3.showScore();
                allShipsZero();
            } else if (randomNumber === 4) {
                defenceShip4.reduceScore();
                scoreContainer4.innerHTML = defenceShip4.showScore();
                allShipsZero();
            } else if (randomNumber === 5) {
                defenceShip5.reduceScore();
                scoreContainer5.innerHTML = defenceShip5.showScore();
            } else if (randomNumber === 6) {
               attackShip1.reduceScore();
                scoreContainer6.innerHTML = attackShip1.showScore();
                allShipsZero();
            } else if (randomNumber === 7) {
                attackShip2.reduceScore();
                scoreContainer7.innerHTML = attackShip2.showScore();
                allShipsZero();
            } else if (randomNumber === 8) {
                attackShip3.reduceScore();
                scoreContainer8.innerHTML = attackShip3.showScore();
                allShipsZero();
            } else if (randomNumber === 9) {
                attackShip4.reduceScore();
                scoreContainer9.innerHTML = attackShip4.showScore();
                allShipsZero();
            } else if (randomNumber === 10) {
                attackShip5.reduceScore();
                scoreContainer10.innerHTML = attackShip5.showScore();
                allShipsZero();
            } else if (randomNumber === 11) {
                attackShip6.reduceScore();
                scoreContainer11.innerHTML = attackShip6.showScore();
            } else if (randomNumber === 12) {
               attackShip7.reduceScore();
                scoreContainer12.innerHTML = attackShip7.showScore();
                allShipsZero();
            } else if (randomNumber === 13) {
               attackShip8.reduceScore();
                scoreContainer13.innerHTML = attackShip8.showScore();
                allShipsZero();
            }  
        }

 //set up main Alien class

class Alien {
    constructor(score, minusPoints) {
        this.score = score;
        this.minusPoints = minusPoints;
    }
    reduceScore() {
        this.score -=
        this.minusPoints;
            if(this.score <= 0)
        this.score = 0;
            return this.score
    }  
    showScore() {
           return `<h2>${this.score}</h2>`
        ;
        }
    }

// set up extends class for Defence ships, Attack ships and Mother ship

class DefenceShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints) 
            this.name = name; 
    }
}

class AttackShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints) 
            this.name = name; 
    }
}

class MotherShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints)    
            this.name = name;   
    }
    endGame() {
        if(this.score <= 0) {
            document.querySelector(".modal-content").innerHTML = "GAME OVER! MOTHER SHIP DESTROYED";
            toggleModal();
        }
    }
 }
 
//set up new instances of the class

const motherShip = new MotherShip ( 100, 9, "motherShip");
const defenceShip1 = new DefenceShip (80, 10, "defenceShip1");
const defenceShip2 = new DefenceShip (80, 10, "defenceShip2");
const defenceShip3 = new DefenceShip (80, 10, "defenceShip3");
const defenceShip4 = new DefenceShip (80, 10, "defenceShip4");
const defenceShip5 = new DefenceShip (80, 10, "defenceShip5");
const attackShip1 = new AttackShip (45, 12, "attackShip1");
const attackShip2 = new AttackShip (45, 12, "attackShip2");
const attackShip3 = new AttackShip (45, 12, "attackShip3");
const attackShip4 = new AttackShip (45, 12, "attackShip4");
const attackShip5 = new AttackShip (45, 12, "attackShip5");
const attackShip6 = new AttackShip (45, 12, "attackShip6");
const attackShip7 = new AttackShip (45, 12, "attackShip7");
const attackShip8 = new AttackShip (45, 12, "attackShip8");

//button event listener 

buttonGame.addEventListener("click",buttonClicked)

// function to toggle between showing the modal when the game ends and closing it, then refreshing the page

const modal = document.querySelector(".modal");
   
    function toggleModal() {
        modal.classList.toggle("show-modal");
        setTimeout(closeModal, 6000);     
    }
    
    function closeModal() {
        modal.classList.toggle("show-modal");
        location.reload()
    }

// function to run when all alien ships scores are 0

const allShipsZero = () => {
    if ((defenceShip1.score === 0) && (defenceShip2.score === 0) && (defenceShip3.score === 0) && (defenceShip4.score === 0) && (defenceShip5.score === 0) && (attackShip1.score === 0) && (attackShip2.score === 0) && (attackShip3.score === 0) && (attackShip4.score === 0) && (attackShip5.score === 0) && (attackShip6.score === 0) && (attackShip7.score === 0) && (attackShip8.score === 0)) {
        document.querySelector(".modal-content").innerHTML = "GAME OVER! ALL ALIEN SHIPS DESTROYED";
        toggleModal();
    }
}

