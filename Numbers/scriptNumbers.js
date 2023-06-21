import { methodsNumbers } from "./methodsNumbersRaw.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";


export const numbers = () => {
  let number = "";
  let numbers = [];
  let methodContent = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let exampleStringSaved = "";
  let showExampleString = false;
  let methodActive = "";
  const char = ["+", "-", "*", "/", "==="];

  const viewString = (exampleString) => {
    let element = "";
    element += `
      ${(typeof (exampleString) === "string" ?
        (`"` + exampleString + `"`) : exampleString)}`;

    return element;
  };

  const viewArray = (exampleArray) => {
    let element = "";

    exampleArray.forEach((arrayElement, index) => {
      element += `
        <span class="labelParagraph--arrays">
          ${(arrayElement)
        + ((exampleArray.length === index + 1) ? "" : ",")}
        </span>`;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";

    console.log(methodContent)

    element += `
      <span class="labelParagraph--numbers strong">
        const output = ${methodContent[2].replace("?", methodContent[1] )}
      </span>
    `;

    return element;
  };

  // char.includes(methodContent[0]) ? `number&nbsp;${methodContent[0]}&nbsp;` : `${methodContent[0]}(`}${methodContent[1] !== null ? (methodContent[1]).trim() : (["Math.min", "Math.max"].includes(methodContent[0]) ? "...numbers" : "number")}${char.includes(methodContent[0]) ? "" : ");"

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
        <div class="labelContents labelContents--numbers js-labelContents">
          <p class="labelParagraph--numbers strong">const number = ${viewString(number)};</p>
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
              </div>
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
              <button id="randomWord" class="button js-random">
                random word
              </button> 
              <button id="randomSentence" class="button js-random">
                random sentence
              </button>
              <button id="loadFromExample" class="button js-example">
                from example string
              </button>
              <button id="loadFromOutput" ${(!outputInfo && typeof (output) === "string") ? "" : "disabled"} class="button js-example">
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
              ` : viewString(output)) : outputInfo}
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
      console.log("displayWarningAboutNumber")
      methodContent = [...methodContent, "warning"];
      if (number.includes(null)) {
        console.log("warning:1 ")
        outputInfo = `Error: Cannot read properties of null (reading 'length')`;
      };
      if (number.includes(undefined)) {
        console.log("warning:2 ")
        outputInfo = `Error: Cannot read properties of undefined (reading 'length')`;
      };
      if (number.length === 0 && method.method === "toFixed") {
        console.log("warning:3 ")
        outputInfo = `TypeError: number.toFixed is not a function. The variable "number" is not of type number. `;
      };
      renderOutput();
    };

    const displayWarningAboutInputValue = ({ method }, input) => {
      console.log("displayWarningAboutInputValue")
      methodContent = [...methodContent, "warning"];
      if (method === "slice" || method === "substring") {
        outputInfo = `The entered value is not allowed. Please enter a number or two numbers separated by a comma.`;
      } else if (method === "repeat") {
        outputInfo = `The entered value is not allowed. Please enter a number.`;
      } else if (method === "toFixed") {
        outputInfo = `The entered value is not allowed. Please enter a number from 0 to 100.`;
      } else {
        outputInfo = `Input value is not allowed, use: number or \" \"`
      };
      input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };


    const checkDependency_1 = (method) => {
      console.log("checkDependency_1")
      return (
        ["filter", "find", "findIndex", "some", "toFixed"].includes(method.method)
        && !!method.methodContents[0].active
        && (number.includes(null) || number.includes(undefined))
      )
    };

    const checkDependency_2 = (method, input) => {
      console.log("checkDependency_2")
      return (
        ["toFixed"].includes(method.method) && (number.length === 0) && (input.value === "")
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
                  // if ((number.length === 0) && (input.value === "")) {
                  //   render();
                  //   return



                    if (checkDependency_1(method) || checkDependency_2(method, input)) {
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
      output = `The variable "number" has been assigned a random number.`;
      render();
    };

    const useRandomNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.random() * 20000 - 10000);
      };
      output = `The array "numbers" has been loaded with random numbers.`;
      render();
    };

    const useRandomIntegerNumber = () => {
      number = Math.floor(Math.random() * 20000 - 10000);
      output = `The variable "number" has been assigned a random integer number.`;
      render();
    };

    const useRandomIntegerNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 20000 - 10000));
      };
      output = `The array "numbers" has been loaded with random integer numbers.`;
      render();
    };

    const useRandomNaturalNumber = () => {
      number = Math.floor(Math.random() * 1000);
      output = `The variable "number" has been assigned a random natural number.`;
      render();
    };

    const useRandomNaturalNumbers = () => {
      numbers = [];
      while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 10000));
      };
      output = `The array "numbers" has been loaded with random natural numbers.`;
      render();
    };

    const useInfinity = () => {
      number = Infinity;
      output = `The variable "number" has been assigned the value of Infinity.`;
      render();
    };

    const useNan = () => {
      number = NaN;
      output = `The variable "number" has been assigned the value of NaN.`;
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

      output = `The variable "number" has been assigned the value "text."`;
      render();
    };

    const useRandomLetters = () => {
      string = (letters.charAt(Math.floor(Math.random() * letters.length)));
      outputInfo = "The string has been loaded with a random letter.";
      render();
    };

    const useRandomWords = () => {
      string = (wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      outputInfo = "The string has been loaded with a random word.";
      render();
    };

    const useRandomSentences = () => {
      string = (sentencesArray[Math.floor(Math.random() * sentencesArray.length)]);
      outputInfo = "The string has been loaded with a random sentence.";
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
        case "infinity":
          useInfinity();
          break;
        case "nan":
          useNan();
          break;
        case "randomString":
          useRandomString();
          break;





        case "randomWord":
          useRandomWords();
          break;
        case "randomSentence":
          useRandomSentences();
          break;
      };
    }));

    const changeShowExampleString = () => {
      showExampleString = !showExampleString
      if (showExampleString) {
        outputInfo = "The example string has been displayed.";
      } else {
        outputInfo = "The example string has been hidden.";
      };
      render();
    };

    const loadFromExample = () => {
      if (exampleStringSaved.length > 0) {
        string = exampleStringSaved;
      }
      else { string = exampleString };
      outputInfo = "The string is loaded from an example string."
      render();
    };

    const saveToExample = () => {
      if (string) {
        exampleStringSaved = string;
        outputInfo = "The string stored as an example string.";
        render();
      } else {
        outputInfo = "Not stored. The string is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      exampleStringSaved = "";
      outputInfo = "The example string has been reset.";
      render();
    };

    const loadFromOutput = () => {
      if (typeof (output) === "string") {
        string = output;
        outputInfo = "The string has been loaded from the output.";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            changeShowExampleString();
            break;
          case "loadFromExample":
            loadFromExample();
            break;
          case "saveToExample":
            saveToExample();
            break;
          case "resetExample":
            resetExample();
            break;
          case "loadFromOutput":
            loadFromOutput();
            break;
        };
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

  const enterContentForManyArguments = (inputValue) => {
    let content = [];
    if (!isNaN(inputValue)) {
      return [...content, (inputValue)]

    }
    else {
      return (inputValue.split(",")).map(elem => elem.trim());
    };
  };

  const enterContent = (inputValue) => {
    let elements;

    if (inputValue.includes(",")) {
      elements = inputValue.split(",");
      return elements.map(elem =>
        readNumberOrString(elem.trim())
      );
    };
  };

  const runMethod = (button, inputValue, method, methodContents) => {
    outputInfo = false;
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
      case "Number.isNaN":
        output = Number.isNaN(number);
        methodContent = [method, null, methodContents];
        break;
      case "isNaN":
        output = isNaN(number);
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
      case "toFixed":
        output = number.toFixed(readNumberOrString(inputValue));
        methodContent = [method, inputValue, methodContents];
        break;
      case "Math.sqrt":
        output = Math.sqrt(number);
        methodContent = [method, null, methodContents];
        break;
      case "Math.max":
        output = Math.max(...numbers);
        methodContent = [method, null, methodContents];
        break;
      case "Math.min":
        output = Math.min(...numbers);
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
      case "Number":
        output = Number(number);
        methodContent = [method, null, methodContents];
        break;



      //     do usunięcia
      // case "trim":
      //   output = string.trim();
      //   methodContent = [method];
      //   break;
      // case "toLowerCase":
      //   output = string.toLowerCase();
      //   methodContent = [method];
      //   break;
      // case "toUpperCase":
      //   output = string.toUpperCase();
      //   methodContent = [method];
      //   break;
      // case "split":
      //   output = string.split(!inputValue ? null : readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "slice":
      //   output = string.slice(...enterContentForManyArguments(inputValue));
      //   methodContent = [method, (enterContentForManyArguments(inputValue).join(", ")), "twoArguments"];
      //   break;
      // case "substring":
      //   output = string.substring(...enterContentForManyArguments(inputValue));
      //   methodContent = [method, (enterContentForManyArguments(inputValue).join(", ")), "twoArguments"];
      //   break;
      // case "repeat":
      //   output = string.repeat(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "charAt":
      //   output = string.charAt(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "includes":
      //   output = string.includes(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "startsWith":
      //   output = string.startsWith(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "endsWith":
      //   output = string.endsWith(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "indexOf":
      //   output = string.indexOf(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "lastIndexOf":
      //   output = string.lastIndexOf(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "replace":
      //   output = string.replace(...enterContent(inputValue));
      //   methodContent = [method, (enterContentForManyArguments(inputValue).join(", ")), "twoArguments"];
      //   break;
      // case "replaceAll":
      //   output = string.replaceAll(...enterContent(inputValue));
      //   methodContent = [method, (enterContentForManyArguments(inputValue).join(", ")), "twoArguments"];
      //   break;
      // case "localeCompare":
      //   output = string.localeCompare(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
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
