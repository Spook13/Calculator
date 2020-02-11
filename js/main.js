// number variables
let zeroBtn = document.getElementById ('zero');
let oneBtn = document.getElementById ('one');
let twoBtn = document.getElementById ('two');
let threeBtn = document.getElementById ('three');
let fourBtn = document.getElementById ('four');
let fiveBtn = document.getElementById ('five');
let sixBtn = document.getElementById ('six');
let sevenBtn = document.getElementById ('seven');
let eightBtn = document.getElementById ('eight');
let nineBtn = document.getElementById ('nine');

// opeerator variable
let diviBtn = document.getElementById ('divi');
let multiBtn = document.getElementById ('multi');
let subBtn = document.getElementById ('sub');
let addBtn = document.getElementById ('add');
let deciBtn = document.getElementById ('deci');
let equalBtn = document.getElementById ('equal');

// clear variable
let clearBtn = document.getElementById ('clear');

// input field variable
let solve = document.getElementById ('solve');

// clicking stuff - numbers
zeroBtn.addEventListener("click", function (){calcBtn(zeroBtn)});
oneBtn.addEventListener("click", function (){calcBtn(oneBtn)});
twoBtn.addEventListener("click", function (){calcBtn(twoBtn)});
threeBtn.addEventListener("click", function (){calcBtn(threeBtn)});
fourBtn.addEventListener("click", function (){calcBtn(fourBtn)});
fiveBtn.addEventListener("click", function (){calcBtn(fiveBtn)});
sixBtn.addEventListener("click", function (){calcBtn(sixBtn)});
sevenBtn.addEventListener("click", function (){calcBtn(sevenBtn)});
eightBtn.addEventListener("click", function (){calcBtn(eightBtn)});
nineBtn.addEventListener("click", function (){calcBtn(nineBtn)});

// clicking stuff - operators
diviBtn.addEventListener("click", function (){calcBtn(diviBtn)});
multiBtn.addEventListener("click", function (){calcBtn(multiBtn)});
subBtn.addEventListener("click", function (){calcBtn(subBtn)});
addBtn.addEventListener("click", function (){calcBtn(addBtn)});
deciBtn.addEventListener("click", function (){calcBtn(deciBtn)});
equalBtn.addEventListener("click", function (){calcBtn(equalBtn)});

// clicking stuff  - clear
clearBtn.addEventListener("click", function (){calcBtn(clearBtn)});

// mass calling
let numBtns = document.getElementsByClassName('numbers');
let opBtns = document.getElementsByClassName('operators');

function calcBtn(btnPicked){

    console.log("Number is " + btnPicked.innerText);
}

// I could not remember much about making a functioning calculator, but I tried and ended up getting really over whelmed. so this is what I got. I was hoping I could get help with understanding js more, because while I can kind of read it, I do not know how to make my own functions and whatnot.