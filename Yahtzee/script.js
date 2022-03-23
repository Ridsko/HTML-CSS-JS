let dice = [
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
];

let score = [
  {
    aces: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    totals: null,
    bonus: null,
    total: null

  },
  {
    threeoak: null,
    fouroak: null,
    fullhouse: null,
    smstraight: null,
    lgstraight: null,
    yahtzee: null,
    chance: null,
    total: null,
    grandtotal: null

  }
];

const diceb = document.getElementById("b");
const roll = document.getElementById("roll");
const resett = document.getElementById("reset");
const popup = document.getElementById("popup");
const popupyes = document.getElementById("yes");
const popupno = document.getElementById("no");

const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const dice3 = document.querySelector('.dice3');
const dice4 = document.querySelector('.dice4');
const dice5 = document.querySelector('.dice5');
const rollknop = document.querySelector('.knop');
const save = document.querySelector('.b1');
const save1 = document.querySelector('.b2');
const save2 = document.querySelector('.b3');
const save3 = document.querySelector('.b4');
const save4 = document.querySelector('.b5');

roll.addEventListener('click', rollDice);
resett.addEventListener('click',showPopup );
save.addEventListener('click', saveKnop);
save1.addEventListener('click', saveKnop1);
save2.addEventListener('click', saveKnop2);
save3.addEventListener('click', saveKnop3);
save4.addEventListener('click', saveKnop4);
popupyes.addEventListener('click',reset);
popupno.addEventListener('click',() => {
  popup.style.display = "none";
});

let rollCounter = 0;
let diceValue = [];
let gameDone;
let upperValue = [];
let aantalBeurten = 0;

function rollDice() {

  gameDone = false;
  showSave();
  rollCounter++;
  checkRolls();

  if (rollCounter <= 3) {
    diceValue = [];
  }

  for (let i = 0; i < dice.length; i++) {
    if (dice[i].save == false) {
      dice[i].value = getRandomInt(1, 7);
    };

    diceValue.push(dice[i].value);

  }

  console.log(diceValue)

  dice1.textContent = diceValue[0];
  dice2.textContent = diceValue[1];
  dice3.textContent = diceValue[2];
  dice4.textContent = diceValue[3];
  dice5.textContent = diceValue[4];
};

function reset(){
  location.reload();
}

function showPopup(){
  popup.style.display = "block";
}

function showSave() {
  save.style.display = "block";
  save1.style.display = "block";
  save2.style.display = "block";
  save3.style.display = "block";
  save4.style.display = "block";
}

function saveKnop() {
  saveDice();
  checkSkip();
}

function saveKnop1() {
  saveDice1();
  checkSkip();
}

function saveKnop2() {
  saveDice2();
  checkSkip();
}

function saveKnop3() {
  saveDice3();
  checkSkip();
}

function saveKnop4() {
  saveDice4();
  checkSkip();
}

function checkSkip() {
  if (save.disabled && save1.disabled && save2.disabled && save3.disabled && save4.disabled) {
    rollCounter = 3;
    checkRolls();
  }
}

function checkRolls() {
  if (rollCounter == 3) {
    rollknop.style.backgroundColor = "grey";
    rollknop.disabled = true;
  }
}

function saveDice() {
  dice[0].save = true;
  save.style.backgroundColor = "grey";
  save.disabled = true;
  dice1.style.border = "3px solid red";
}

function saveDice1() {
  dice[1].save = true;
  save1.style.backgroundColor = "grey";
  save1.disabled = true;
  dice2.style.border = "3px solid red";
}

function saveDice2() {
  dice[2].save = true;
  save2.style.backgroundColor = "grey";
  save2.disabled = true;
  dice3.style.border = "3px solid red";
}

function saveDice3() {
  dice[3].save = true;
  save3.style.backgroundColor = "grey";
  save3.disabled = true;
  dice4.style.border = "3px solid red";
}
function saveDice4() {
  dice[4].save = true;
  save4.style.backgroundColor = "grey";
  save4.disabled = true;
  dice5.style.border = "3px solid red";
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ace(value) {
  for(let i = 0;i==6;i++)
  return value == i;

};
console.log(ace);
function two(value) {
  return value == 1;
};

function three(value) {
  return value == 1;
};

function four(value) {
  return value == 1;
};

function five(value) {
  return value == 1;
};

function six(value) {
  return value == 1;
};

