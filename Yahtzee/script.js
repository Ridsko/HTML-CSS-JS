//Array object
let dice = [
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
];


//Dom 
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
const ace = document.getElementById("item11");
const two = document.getElementById("item12");
const three = document.getElementById("item13");
const four = document.getElementById("item14");
const five = document.getElementById("item15");
const six = document.getElementById("item16");
const totals = document.getElementById("item17");
const bonusup = document.getElementById("item18");
const allupper = document.getElementById("item19");

//Eventlisteners
ace.addEventListener('click',calcAce);
two.addEventListener('click',calcTwo);
three.addEventListener('click',calcThree);
four.addEventListener('click',calcFour);
five.addEventListener('click',calcFive);
six.addEventListener('click',calcSix);
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

//Global Variables
let rollCounter = 0;
let diceValue = [];
let gameDone;
let upperValue = [];
let aantalBeurten = 0;

//Roll function
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

  console.log(diceValue);

  dice1.textContent = diceValue[0];
  dice2.textContent = diceValue[1];
  dice3.textContent = diceValue[2];
  dice4.textContent = diceValue[3];
  dice5.textContent = diceValue[4];
  rollDisabled();
  borderDice();
  
};

//Refreshes the page
function reset(){
  location.reload();
}
//Shows popup for new-game
function showPopup(){
  popup.style.display = "block";
}
//Shows the savebuttons
function showSave() {
  save.style.display = "block";
  save1.style.display = "block";
  save2.style.display = "block";
  save3.style.display = "block";
  save4.style.display = "block";
}

//Hides the savebuttons
function hideSave(){
  save.style.display = "none";
  save1.style.display = "none";
  save2.style.display = "none";
  save3.style.display = "none";
  save4.style.display = "none";
}

//Eventlistener savebuttons
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

function rollCounterClear(){
  
}

function rollDisabled(){
  if(rollknop.disabled){
    hideSave();
  }
}

//If all savebuttons are pressed you cannot roll
function checkSkip() {
  if (save.disabled && save1.disabled && save2.disabled && save3.disabled && save4.disabled) {
    rollCounter = 3;
    checkRolls();
  }
}

//Limits the amout of rolls
function checkRolls() {
  if (rollCounter == 3) {
    //rollknop.style.backgroundColor = "grey";
    rollknop.disabled = true;
  }
}

//Gives a function and sets the arrayobjects to true for the save buttons
function saveDice() {
  dice[0].save = true;
 // save.style.backgroundColor = "grey";
  save.disabled = true;
  dice1.style.border = "3px solid red";
}

function saveDice1() {
  dice[1].save = true;
 // save1.style.backgroundColor = "grey";
  save1.disabled = true;
  dice2.style.border = "3px solid red";
}

function saveDice2() {
  dice[2].save = true;
 // save2.style.backgroundColor = "grey";
  save2.disabled = true;
  dice3.style.border = "3px solid red";
}

function saveDice3() {
  dice[3].save = true;
//  save3.style.backgroundColor = "grey";
  save3.disabled = true;
  dice4.style.border = "3px solid red";
}

function saveDice4() {
  dice[4].save = true;
 // save4.style.backgroundColor = "grey";
  save4.disabled = true;
  dice5.style.border = "3px solid red";
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


//Filters the array
function aceFilter(value) {
  return value == 1;

};

function twoFilter(value) {
  return value == 2;
};

function threeFilter(value) {
  return value == 3;
};

function fourFilter(value) {
  return value == 4;
};

function fiveFilter(value) {
  return value == 5;
};

function sixFilter(value) {
  return value == 6;
};

let resetroll = false;
let totalUpper = 0;
let counterace = 0;
let countertwo = 0;
let counterthree = 0;
let counterfour = 0;
let counterfive = 0;
let countersix = 0;
let upbonus = 35;
let allup = 0;

//Does the math for each button
function calcAce(){
  let resetroll = false;
  let acefiltered = diceValue.filter(aceFilter);
  counterace = acefiltered.length * 1;
  console.log(counterace)
  ace.textContent = counterace;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}
function calcTwo(){
  let resetroll = false;
  let twofiltered = diceValue.filter(twoFilter);
  countertwo = twofiltered.length * 2;
  console.log(countertwo)
  two.textContent = countertwo;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}
function calcThree(){
  let resetroll = false;
  let threefiltered = diceValue.filter(threeFilter);
  counterthree = threefiltered.length * 3;
  console.log(counterthree)
  three.textContent = counterthree;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}
function calcFour(){
  let resetroll = false;
  let fourfiltered = diceValue.filter(fourFilter);
  counterfour = fourfiltered.length * 4;
  console.log(counterfour)
  four.textContent = counterfour;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}


function calcFive(){
  let resetroll = false;
  let fivefiltered = diceValue.filter(fiveFilter);
  counterfive = fivefiltered.length * 5;
  console.log(counterfive)
  five.textContent = counterfive;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}


function calcSix(){
  let resetroll = false;
  let sixfiltered = diceValue.filter(sixFilter);
  countersix = sixfiltered.length * 6;
  console.log(countersix)
  six.textContent = countersix;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}

function borderDice(){
  if(rollknop.disabled){
    dice1.style.border = "3px solid red";
    dice2.style.border = "3px solid red";
    dice3.style.border = "3px solid red";
    dice4.style.border = "3px solid red";
    dice5.style.border = "3px solid red";
  };
};

//resets the roll and all arrays if clicked on score
function resetRoll(){
  if(!resetroll){
    aantalBeurten++;
    diceValue = [];
    dice = [
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
    ];
    showSave();
    rollCounter = 0;
    roll.disabled = false;
    save.disabled = false;
    save1.disabled = false;
    save2.disabled = false;
    save3.disabled = false;
    save4.disabled = false;
    dice1.style.border = "";
    dice2.style.border = "";
    dice3.style.border = "";
    dice4.style.border = "";
    dice5.style.border = "";
    console.log(diceValue);
    console.log(dice);
    dice1.textContent = "Gooi";
    dice2.textContent = "Gooi";
    dice3.textContent = "Gooi";
    dice4.textContent = "Gooi";
    dice5.textContent = "Gooi";
    console.log(aantalBeurten);
  };
};

function totalScore(){
  if(aantalBeurten == 13){
totalUpper = counterace + countertwo + counterthree + counterfour + counterfive + countersix;
console.log(totalUpper)
totals.textContent = totalUpper
  };
};

function upperBonus(){
  if(totalUpper>=63 && aantalBeurten == 13){

    bonusup.textContent = upbonus;
  };
};

function alltotal(){
  if(aantalBeurten == 13){

    allup = totalUpper + upbonus;

    allupper.textContent = allup;
  }
}