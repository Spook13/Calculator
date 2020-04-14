// Button.js :)

import Expressions from "./Expressions.js";

export default class Button {

    _type;
    _vaule;

    constructor(button) {

        // gets data-type from index.html :)
        this._type = button.dataset.type;

        // gets value through text from index.html :)
        this._vaule = button.textContent;

        // adds event listener to button class :)
        button.addEventListener("click", this.clickEventHandler);
    }

    // arrow functions "=>" :)
    // click event handler utilizing an arrow function :)
    // 'this' is accessible :)
    clickEventHandler = event => {
        this.updateExpressions(this._type, this._vaule);
    }

    updateExpressions(type, value) {
        Expressions.update(type, value);
    }
}