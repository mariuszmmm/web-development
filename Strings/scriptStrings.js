import { methodsStringRaw } from "./methodsStringRaw.js";
import { exampleString, letters, wordsArray, sentencesArray } from "./strings.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const strings = () => {
  let string = "";
  let methodContent = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let exampleStringSaved = "";
  let showExampleString = false;
  let methodActive = "";

  const methodsString = methodsStringRaw.map((object) => {
    return {
      method: object.method,
      inputType: object.inputType,
      inputValue: "",
      inputPattern: object.inputPattern
    }
  });

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
          ${(`"` + arrayElement + `"`)
        + ((exampleArray.length === index + 1) ? "" : ",")}
        </span>`;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";

    element += `
      <span class="labelParagraph--strings strong">
        let output = string${methodContent[0] === "+" ? `&nbsp;${methodContent[0]}&nbsp;` : `.${methodContent[0]}${methodContent[0] === "length" ? "" : "("}`}${methodContent[1] !== undefined ? (methodContent[1]).trim() : ""}${["+", "length"].includes(methodContent[0]) ? "" : ");"}
      </span>
    `;

    return element;
  };

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
        <div class="labelContents labelContents--strings js-labelContents">
          <p class="labelParagraph--strings strong">let string = ${viewString(string)};</p>
          <p></p>
          ${showExampleString ? `<p class="labelParagraph--strings strong">let exampleString = ${viewString(exampleStringSaved ? exampleStringSaved : exampleString)}</p>
          <p></p>` : ""}          
          ${(methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsStringSettings = (name, inputType) => {
        let element = "";

        element += `
          <form class="form js-form">
            <div class="propertyElements propertyElements--strings">
              <span class="methodName">
                string${name === "+" ? `&nbsp;${name}` : `.${name}`}
              </span>
              <div class="methodName methodName--parameters">${["+", "length"].includes(name) ? "&nbsp;" : "("}
                ${inputType ? `
                  <input type="text" name="${name}" autocomplete="off" class="methodInput js-methodInput" />` : ""}
                ${["+", "length"].includes(name) ? "" : ")"} 
              </div>
            </div>
            <div class="valueElements valueElements--strings">
              <button id="${name}" class="button button--strings button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--strings">
          </div>
        `;

        return element;
      };

      methodsSetingsElement += `
        <div>
          <div class="settings--string">
            <span class="methods--label">
              Load string :
            </span>
            <div class="valueElements">   
              <button id="randomLetter" class="button js-random">
                random letter
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
              Example string :
            </span>
            <div class="valueElements">
              <button id="showExample" class="button ${showExampleString ? "button--active" : ""} js-example">
              show example string
              </button>          
              <button id="saveToExample" class="button js-example">
                save string to example string
              </button>
              <button id="resetExample" class="button js-example">
                reset example string
              </button>
            </div>
          </div>
          <span class="methods--label">
            Methods :
          </span>
          <div class="settingsElements">
      `;

      methodsString.forEach((object) => {
        methodsSetingsElement += `
        ${methodsStringSettings(object.method, object.inputType)}
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
      <div class="outputContents outputContents--strings">
        <div class="outputLabel">OUTPUT :</div>
          <p class="labelParagraph--strings strong">
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
        methodsString.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            outputInfo = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsString.forEach(({ method }) => {
            if (method === input.name) {
              input.classList.remove("errorInput");
              key ? (target.value = key) : (target.value = "");
            };
          });
        };
      });
    });

    const displayWarningAboutInputValue = ({ method }, input) => {
      methodContent = [...methodContent, "warning"];
      if (method === "slice" || method === "substring") {
        outputInfo = `The entered value is not allowed. Please enter a number or two numbers separated by a comma.`;
      } else if (method === "repeat") {
        outputInfo = `The entered value is not allowed. Please enter a number.`;
      } else {
        outputInfo = `Input value is not allowed, use: \" \"`
      };
      input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };

    formElements.forEach((formElement) => {
      formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const button = event.submitter;

        inputElements.forEach((input) => {
          if (input.name === button.id) {
            methodsString.forEach((method) => {
              if (method.method === button.id) {
                const pattern = method.inputPattern;
                if (pattern.test(input.value)) {
                  if ((string.length === 0) && (input.value === "")) {
                    render();
                    return
                  } else {
                    runMethod(button.id, input.value, method.method);
                    methodActive = input.name;
                    render();
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

        methodsString.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            runMethod(button.id, null, method.method)
            render();
          };
        });
      });
    });

    const useRandomLetters = () => {
      string = (letters.charAt(Math.floor(Math.random() * letters.length)));
      outputInfo = "The random letter  has been saved in the variable \"string\".";
      render();
    };

    const useRandomWords = () => {
      string = (wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      outputInfo = "The random word has been saved in the variable \"string\".";
      render();
    };

    const useRandomSentences = () => {
      string = (sentencesArray[Math.floor(Math.random() * sentencesArray.length)]);
      outputInfo = "The random sentence has been saved in the variable \"string\".";
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      switch (target.id) {
        case "randomLetter":
          useRandomLetters();
          break;
        case "randomWord":
          useRandomWords();
          break;
        case "randomSentence":
          useRandomSentences();
          break;
      };
    }));

    const changeShowexampleString = () => {
      showExampleString = !showExampleString
      if (showExampleString) {
        outputInfo = "The variable \"exampleString\" has been displayed.";
      } else {
        outputInfo = "The variable \"exampleString\" has been hidden.";
      };
      render();
    };

    const loadFromExample = () => {
      if (exampleStringSaved.length > 0) {
        string = exampleStringSaved;
      }
      else { string = exampleString };
      outputInfo = "The value from the variable \"exampleString\" has been saved in the variable \"string\"."
      render();
    };

    const saveToExample = () => {
      if (string) {
        exampleStringSaved = string;
        outputInfo = "The value from the variable \"string\" has been saved in the variable \"exampleString\".";
        render();
      } else {
        outputInfo = "Not saved. The variable \"string\" is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      exampleStringSaved = "";
      outputInfo = "The initial value has been restored in the variable \"exampleString\".";
      render();
    };

    const loadFromOutput = () => {
      if (typeof (output) === "string") {
        string = output;
        outputInfo = "The value from the variable \"output\" has been stored in the variable \"string\".";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            changeShowexampleString();
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

  const enterContentForTwoArguments = (inputValue) => {
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

  const runMethod = (button, inputValue, method) => {
    outputInfo = "";
    switch (button) {
      case "+":
        output = string + (readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "length":
        output = string.length;
        methodContent = [method];
        break;
      case "trim":
        output = string.trim();
        methodContent = [method];
        break;
      case "toLowerCase":
        output = string.toLowerCase();
        methodContent = [method];
        break;
      case "toUpperCase":
        output = string.toUpperCase();
        methodContent = [method];
        break;
      case "split":
        output = string.split(!inputValue ? null : readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "slice":
        output = string.slice(...enterContentForTwoArguments(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "substring":
        output = string.substring(...enterContentForTwoArguments(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "repeat":
        output = string.repeat(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "charAt":
        output = string.charAt(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "includes":
        output = string.includes(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "startsWith":
        output = string.startsWith(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "endsWith":
        output = string.endsWith(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "indexOf":
        output = string.indexOf(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "lastIndexOf":
        output = string.lastIndexOf(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "replace":
        output = string.replace(...enterContent(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "replaceAll":
        output = string.replaceAll(...enterContent(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "localeCompare":
        output = string.localeCompare(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
    };
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--strings");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer labelContainer--strings js-labelContainer">
      </div>
      <div class="settingsContainer settingsContainer--strings js-settingsContainer">
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
