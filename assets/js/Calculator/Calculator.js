// Calculator.js
// import Button from "./Button.js";
// import Display from "./Display.js"

// export default class Calculator {

    _buttons = [];
    _display;

    constructor() {

        // gather the node list of buttons
        let buttonsNodeList = document.querySelectorAll(".button");

        // loop through the node list and instantiate a neeew button class for each
        for (let i = 0; i < buttonsNodeList.length; ++i){

            // i starts @ 0
            // creates a new button 
            this._buttons[i] = new Button(buttonsNodeList[i]);
        }

        // get a reference to the input eelement
        let displayElement = document.querySelector("#display");

        // construct the display
        this._display = new Display(displayElement);
    }
// }