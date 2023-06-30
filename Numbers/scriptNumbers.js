import { methodsNumbers } from "./methodsNumbersRaw.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const numbers = () => {
  let number = "";
  let numbers = [];
  let methodContent = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let methodActive = "";

  const viewNumberOrString = (variable) => {
    let element = "";
    element += `
      ${(typeof (variable) === "string" ?
        (`"` + variable + `"`) : variable)}`;

    return element;
  };

  const viewArray = (array) => {
    let element = "";

    array.forEach((arrayElement, index) => {
      element += `
        <span class="labelParagraph--arrays">
          ${(arrayElement)
        + ((array.length === index + 1) ? "" : ",")}
        </span>`;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";

    element += `
      <span class="labelParagraph--numbers strong">
        let output = ${methodContent[2].replace("?", methodContent[1])}
      </span>
    `;

    return element;
  };

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
        <div class="labelContents labelContents--numbers js-labelContents">
          <p class="labelParagraph--numbers strong">let number = ${viewNumberOrString(number)};</p>
          <p></p>
          <p class="labelParagraph--numbers strong">const numbers = [${viewArray(numbers)}];</p>
          <p></p>        
          ${(methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsNumbersSettings = (name, contents) => {
        let element = "";

        element += `
          <form class="form js-form">
            <div class="propertyElements propertyElements--numbers">
              <div class="methodName methodName--parameters">
                ${contents.replace("?", `<input type="text" name="${name}" autocomplete="off" class="methodInput js-methodInput" />`)}
              </div>&nbsp;
            </div>
            <div class="valueElements valueElements--numbers">
              <button id="${name}" class="button button--numbers button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--numbers">
          </div>
        `;

        return element;
      };

      methodsSetingsElement += `
        <div>
          <div class="settings--numbers">
            <span class="methods--label">
              Load number :
            </span>
            <div class="valueElements">   
              <button id="randomNumber" class="button js-random">
                random number
              </button>
              <button id="randomIntegerNumber" class="button js-random">
                random integer number
              </button>
              <button id="randomNaturalNumber" class="button js-random">
                random natural number
              </button>
              <button id="randomString" class="button js-random">
                random string
              </button>
              <button id="infinity" class="button js-random">
                Infinity
              </button>
              <button id="nan" class="button js-random">
                NaN
              </button>
              <button id="loadFromOutput" ${(output && !outputInfo) ? "" : "disabled"} class="button js-example">
                from output
              </button>
            </div>            
            <span class="methods--label">
              Load numbers :
            </span>
            <div class="valueElements">
              <button id="randomNumbers" class="button js-random">
                random numbers
              </button>
              <button id="randomIntegerNumbers" class="button js-random">
                random integer numbers
              </button>
              <button id="randomNaturalNumbers" class="button js-random">
                random natural numbers
              </button>
            </div>
          </div>
          <span class="methods--label">
            Methods :
          </span>
          <div class="settingsElements">
      `;

      methodsNumbers.forEach((object) => {
        methodsSetingsElement += `
        ${methodsNumbersSettings(object.method, object.methodContents)}
      `
      });

      methodsSetingsElement += `
          </div>            
        </div>
      `;

      return methodsSetingsElement;
    };

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      ${methodsSettings()}      
    `;

    const settingsContentsElement = document.querySelector(".js-labelContents");
    heightAnimation(settingsContentsElement);
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
      <div class="outputContents outputContents--numbers">
        <div class="outputLabel">OUTPUT :</div>
          <p class="labelParagraph--numbers strong">
            ${!outputInfo ? (Array.isArray(output) ? `
              <p class="labelParagraph--arrays strong">[ ${viewArray(output)} ]</p>
              ` : viewNumberOrString(output)) : outputInfo}
          </p>
        </div>
      </div>
    `;
  };

  const bindInputsAndButtons = () => {
    const inputElements = document.querySelectorAll(".js-methodInput");
    const formElements = document.querySelectorAll(".js-form");
    const randomElements = document.querySelectorAll(".js-random");
    const exampleElements = document.querySelectorAll(".js-example");
    methodContent = [];

    inputElements.forEach((input) => {
      if (input.name === methodActive) input.focus();

      input.addEventListener("click", ({ target }) => {
        methodsNumbers.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            outputInfo = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsNumbers.forEach(({ method }) => {
            if (method === input.name) {
              input.classList.remove("errorInput");
              key ? (target.value = key) : (target.value = "");
            };
          });
        };
      });
    });

    const displayWarningAboutNumber = (method) => {
      methodContent = [...methodContent, "warning"];
      if (typeof (number) !== "number" && method.method === "toFixed") {
        outputInfo = `Error: number.toFixed is not a function. The variable "number" is not of type number.`;
      };
      renderOutput();
    };

    const displayWarningAboutInputValue = ({ method }, input) => {
      methodContent = [...methodContent, "warning"];
      if (method === "toFixed") {
        outputInfo = `The entered value is not allowed. Please enter a number from 0 to 100.`;
      } else if (method === "Math.floor(Math.random())") {
        outputInfo = `The entered value is invalid. Please enter a natural number greater than 1.`
      } else {
        outputInfo = `Input value is not allowed, use: number or \" \"`
      };
      method === "Math.floor(Math.random())" ? input.value = "" : input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };

    const checkDependency = (method) => {
      return (
        ["toFixed"].includes(method.method) && (typeof (number) !== "number")
      )
    };

    formElements.forEach((formElement) => {
      formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const button = event.submitter;

        inputElements.forEach((input) => {
          if (input.name === button.id) {
            methodsNumbers.forEach((method) => {
              if (method.method === button.id) {
                const pattern = method.inputPattern;
                if (pattern.test(input.value)) {
                  if (checkDependency(method)) {
                    render();
                    displayWarningAboutNumber(method);
                    return
                  } else {
                    runMethod(button.id, input.value, method.method, method.methodContents);
                    methodActive = input.name;
                    method.method === "Math.floor(Math.random())" ? renderOutput() : render();
                    methodActive = "";
                  };
                } else {
                  displayWarningAboutInputValue(method, input);
                  return
                };
              };
            });
          };
        });

        methodsNumbers.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            runMethod(button.id, null, method.method, method.methodContents)
            render();
          };
        });
      });
    });

    const useRandomNumber = () => {
      number = Math.random() * 20000 - 10000;
      outputInfo = `A random number has been saved in the variable "number".`;
      render();
    };

    const useRandomNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.random() * 20000 - 10000);
      };
      outputInfo = `Random numbers have been saved in the array "numbers".`;
      render();
    };

    const useRandomIntegerNumber = () => {
      number = Math.floor(Math.random() * 20000 - 10000);
      outputInfo = `A random integer number has been saved in the variable "number".`;
      render();
    };

    const useRandomIntegerNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 20000 - 10000));
      };
      outputInfo = `Random integers have been saved in the array "numbers".`;
      render();
    };

    const useRandomNaturalNumber = () => {
      number = Math.floor(Math.random() * 1000);
      outputInfo = `A random natural number has been saved in the variable "number".`;
      render();
    };

    const useRandomNaturalNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 10000));
      };
      outputInfo = `Random natural numbers have been saved in the array "numbers".`;
      render();
    };

    const useInfinity = () => {
      number = Infinity;
      outputInfo = `Infinity has been saved in the variable "number".`;
      render();
    };

    const useNan = () => {
      number = NaN;
      outputInfo = `NaN has been saved in the variable "number".`;
      render();
    };

    const useRandomString = () => {
      let string;
      let randomChar;
      let array;
      let random = Math.random();

      string = Math.floor(Math.random() * 20000 - 10000) + "";
      randomChar = Math.floor(Math.random() * string.length);
      array = string.split("").map((char, index) =>
        index === randomChar ? "text" : char
      );
      if (random < 0.33) { number = string } else if (random > 0.66) { number = array.join("") } else {
        number = "text"
      };

      outputInfo = `A random string value has been saved in the variable "number".`;
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      switch (target.id) {
        case "randomNumber":
          useRandomNumber();
          break;
        case "randomIntegerNumber":
          useRandomIntegerNumber();
          break;
        case "randomNaturalNumber":
          useRandomNaturalNumber();
          break;
        case "randomNumbers":
          useRandomNumbers();
          break;
        case "randomIntegerNumbers":
          useRandomIntegerNumbers();
          break;
        case "randomNaturalNumbers":
          useRandomNaturalNumbers();
          break;
        case "randomString":
          useRandomString();
          break;
        case "infinity":
          useInfinity();
          break;
        case "nan":
          useNan();
          break;
      };
    }));

    const loadFromOutput = () => {
      if (output) {
        number = output;
        outputInfo = "The value from the variable \"output\" has been stored in the variable \"number\".";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        target.id === "loadFromOutput" ? loadFromOutput() : "";
      });
    });
  };

  const readNumberOrString = (inputValue) => {
    inputValue = inputValue.trim();
    return (
      (inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"`) ?
        inputValue.slice(1, -1) :
        (inputValue === "" ? inputValue : Number(inputValue))
    );
  };

  const runMethod = (button, inputValue, method, methodContents) => {
    outputInfo = "";
    switch (button) {
      case "+":
        output = number + (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "-":
        output = number - (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "*":
        output = number * (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "/":
        output = number / (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "===":
        output = number === (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "=":
        output = number = (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "+=":
        output = number += (readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "toFixed":
        output = number.toFixed(readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "toString":
        output = number.toString();
        methodContent = [method, null, methodContents];
        break;
      case "isNaN":
        output = isNaN(number);
        methodContent = [method, null, methodContents];
        break;
      case "Number.isNaN":
        output = Number.isNaN(number);
        methodContent = [method, null, methodContents];
        break;
      case "Number":
        output = Number(number);
        methodContent = [method, null, methodContents];
        break;
      case "+number":
        output = +number;
        methodContent = [method, null, methodContents];
        break;
      case "++number":
        output = ++number;
        methodContent = [method, null, methodContents];
        break;
      case "number++":
        output = number++;
        methodContent = [method, null, methodContents];
        break;
      case "--number":
        output = --number;
        methodContent = [method, null, methodContents];
        break;
      case "number--":
        output = number--;
        methodContent = [method, null, methodContents];
        break;
      case "Math.min":
        output = Math.min(...numbers);
        methodContent = [method, null, methodContents];
        break;
      case "Math.max":
        output = Math.max(...numbers);
        methodContent = [method, null, methodContents];
        break;
      case "Math.sqrt":
        output = Math.sqrt(number);
        methodContent = [method, null, methodContents];
        break;
      case "Math.round":
        output = Math.round(number);
        methodContent = [method, null, methodContents];
        break;
      case "Math.ceil":
        output = Math.ceil(number);
        methodContent = [method, null, methodContents];
        break;
      case "Math.floor":
        output = Math.floor(number);
        methodContent = [method, null, methodContents];
        break;
      case "Math.random":
        output = Math.random();
        methodContent = [method, null, methodContents];
        break;
      case "Math.floor(Math.random())":
        output = Math.floor(Math.random() * readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
    };
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--numbers");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer labelContainer--numbers js-labelContainer">
      </div>
      <div class="settingsContainer settingsContainer--numbers js-settingsContainer">
      </div>
      <div class="outputContainer js-outputContainer">
      </div>
    `;
  };

  const render = () => {
    renderLabel();
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  renderMainContainer();
  render();
};
