// Expressions :)

import Display from "./Display.js";

export default class Expressions {

    // the expression is essentially a string of chars :)
   static _string = "0";

    construct() {
        Expressions._string = 0;
        Expressions.updateDisplay(Expressions._string);
    }

    // update ALL THE THINGS
    static update(type, vaule) {
        // just to verify the data is getting passed to this class :)
        console.log('--------------');
        console.log(type);
        console.log(vaule);

        // check if theree is a leading 0
        if (Expressions._string -- "0") {
            console.log("kill the leading zero");
            Expressions._string = "";
        }

        // have to check for a few things, depending on the type of the button pressed :)
        switch (type) {

            // adding a numbeer(s) to the string :)
            case "number":
                Expressions._string += vaule;
                break;

            case "operator":
                Expressions._string += vaule;
                break;

                //clear the display :)
            case "manipulator":
                Expressions._string = 0;
                break;

                // equaity button :)
            case "evaluator":
                Expressions._string = eval(Expressions._string);
        }

        Expressions.updateDisplay(Expressions._string);
    }

    static updateDisplay(expressions) {

        Display.update(expressions);
        
    }

}

// HI ALYSSA!