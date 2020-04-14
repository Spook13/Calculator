  // Display.js 

  export default class Display {

     static _inputElement

      constructor(inputElement) {
          Display._inputElement = inputElement;
          Display._inputElement.value = "0";
      }

      setDisplay(expressions) {
        Display._inputElement.value = expressions;
      }

      static update(expressions) {

          document.querySelector("#display").value = expressions;

      }

  }