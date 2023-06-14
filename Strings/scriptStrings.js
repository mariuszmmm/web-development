import { methodsStringRaw } from "./methodsStringRaw.js";
import { exampleString, letters, wordsArray, sentencesArray } from "./strings.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const strings = () => {
  let string = "";
  let methodContent = [];
  let output = "";
  let rangeValue;
  let exampleStringSaved = "";
  let showExampleString = false;
  let indexButton = 0;
  let methodActive = "";

  const methodsString = methodsStringRaw.map((object) => {
    return {
      method: object.method,
      methodContents: object.methodContents.map((obj, index) => {
        indexButton++

        return {
          id: indexButton,
          name: obj.button,
          methodContent: obj.content,
          active: index === 0,
          destiny: obj.destiny,
        }
      }),
      inputType: object.inputType,
      inputValue: "",
      inputPattern: object.inputPattern
    }
  });

  const viewString = (exampleString) => {
    let element = "";
      element += `
        <span class="labelParagraph--strings">
          ${(typeof (exampleString) === "string") ?
          (`"` + exampleString + `"`)
          :
           exampleString};
        </span>`;

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";
    element += `
      <span class="labelParagraph--strings strong">
        string.${methodContent[0]}( ${(methodContent[1] !== undefined) ?
        (typeof (methodContent[1]) === "string" ?
          (methodContent[1])
          :
          ((typeof (methodContent[1]) === "object") ?
            methodContent[1].name
            :
            methodContent[1]))
        :
        ""} );
      </span>
    `;

    return element;
  };

  const changeArrowFunctionIfObject = (name) => {
    let content = "";

    if (!!name) {
      methodsString.forEach((object) => {
        if (object.method === name) {
          object.methodContents.forEach((obj) => {
            if (obj.active === true) {
              if (obj.methodContent.includes("({")) {
                content = "})";
              };
              if (obj.methodContent.includes("([")) {
                content = "])";
              };
              if (obj.methodContent.includes("find(")) {
                content = ")";
              };
            };
          });
        };
      });

      return content;
    };
  };

  const viewObject = (object) => {
    let content = "";
    let index = -1;

    for (let property in object) {
      index++
      content += (property + ":") +
        (typeof (object[property]) === "string" ? (`"` + object[property] + `"`) : object[property]) +
        ((Object.keys(object).length === index + 1) ? "" : ",&nbsp;")
    };

    return `<span class="${(Object.keys(object).length < 3) ? "nowrap" : ""}">{&nbsp;${content}&nbsp;}</span>`;
  };

  const viewSubArray = (subArray) => {
    let content = "";

    subArray.forEach((subArrayElement, index) => {
      content += `${typeof (subArrayElement) === "string" ?
        ((`"` + subArrayElement + `"`) + ((subArray.length === index + 1) ? "" : ",&nbsp;"))
        :
        (subArrayElement + ((subArray.length === index + 1) ? "" : ","))}`;
    });

    return `<span class="${(subArray.length < 4) ? "nowrap" : ""}">[&nbsp;${content}&nbsp;]</span>`;
  }

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
        <div class="labelContents labelContents--strings js-labelContents">
          <p class="labelParagraph--strings strong">const string = ${viewString (string)}</p>
          <p></p>
          ${!!showExampleString ? `<p class="labelParagraph--strings strong">const exampleString = ${viewString(!!exampleStringSaved ? exampleStringSaved : exampleString)}</p>
          <p></p>` : ""}          
          ${(!!methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsStringSettings = (name, objects, inputType) => {
        let element = "";

        const searchUnknown = (text, prop) => {
          if (text.includes("?")) {
            if (prop !== "disabled") {
              text = text.replace("?", `<span class="unknown"> ? </span>`)
            } else {
              text = text.replace("?", `<span> ? </span>`)
            };
          };

          return text;
        }

        element += `
          <form class="form js-form">
            <div class="propertyElements propertyElements--strings">
              <span class="methodName">
                array.${name}
              </span>
              <div class="methodName methodName--parameters">(
        `;

        objects.forEach((obj) => {
          element += `
            ${!!obj.active ?
              (name === "reduce" ?
                (obj.methodContent).trim() + ",&nbsp;" : obj.methodContent)
              : ""}
          `;
        });

        element += `
          ${!!inputType ? `
            <input type="text" name="${name}" autocomplete="off" class="methodInput js-methodInput" />` : ""} 
        `;

        objects.forEach((obj) => {
          element += `
            ${!!obj.active ? changeArrowFunctionIfObject(name) : ""}
          `;
        });

        element += `
                ) 
              </div>
            </div>
            <div class="valueElements valueElements--strings">
              <button id="${name}" class="button button--strings button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--strings">
       `;

        objects.forEach((obj) => {
          if (
            (obj.destiny === "forAll") ||
            (array.every(item => typeof (item) === "number") && obj.destiny === "forNumbers") ||
            (array.every(item => typeof (item) === "string") && obj.destiny === "forStrings") ||
            (array.every(item => typeof (item) === "object" && !Array.isArray(item)) && obj.destiny === "forObjects") ||
            (array.every(item => Array.isArray(item)) && obj.destiny === "forArrays")
          ) {
            element += `  
              <button name="${name}" id="${obj.id}" class="button button--strings ${!!obj.active ? "button--active" : ""} js-typeButton">
                ${searchUnknown(obj.name)}
              </button>
          `;
          } else {
            element += `  
              <button name="${name}" id="${obj.id}" disabled class="button button--strings ${!!obj.active ? "button--active" : ""} js-typeButton">
                ${searchUnknown(obj.name, "disabled")}
              </button>
            `;
          }
        });

        element += `
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
              <button id="randomIntegers" class="button js-random">
                random number
              </button>  
              <button id="loadFromExample" class="button js-example">
                from example string
              </button>          
            </div>            
            <span class="methods--label">
              Example string :
            </span>
            <div class="valueElements">
              <button id="showExample" class="button ${!!showExampleString ? "button--active" : ""} js-example">
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
            Strings methods :
          </span>
          <div class="settingsElements">
      `;

      methodsString.forEach((object) => {
        methodsSetingsElement += `
        ${methodsStringSettings(object.method, object.methodContents, object.inputType)}
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
         <p class="labelParagraph--strings strong"> ${!methodContent.includes("warning") ? viewString(output) : output}</p>
        </div>
      </div>
    `;
  };

  const bindInputsAndButtons = () => {
    const inputElements = document.querySelectorAll(".js-methodInput");
    const formElements = document.querySelectorAll(".js-form");
    const randomElements = document.querySelectorAll(".js-random");
    const exampleElements = document.querySelectorAll(".js-example");
    const rangeElement = document.querySelector(".js-range");
    const rangeValueElement = document.querySelector(".js-rangeValue");
    const typeButtonElements = document.querySelectorAll(".js-typeButton");
    methodContent = [];

    inputElements.forEach((input) => {
      if (input.name === methodActive) input.focus();

      input.addEventListener("click", ({ target }) => {
        methodsString.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            output = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsString.forEach(({ method }) => {
            if (method === input.name) {
              input.classList.remove("errorInput");
              !!key ? (target.value = key) : (target.value = "");
            };
          });
        };
      });
    });

    const displayWarningAboutArray = () => {
      methodContent = [...methodContent, "warning"];
      if (array.includes(null)) {
        output = `Error: Cannot read properties of null (reading 'length')`;
      };
      if (array.includes(undefined)) {
        output = `Error: Cannot read properties of undefined (reading 'length')`;
      };
      if (array.length === 0) {
        output = `Error: Reduce of empty array with no initial value`;
      };
      renderOutput();
    };

    const displayWarningAboutInputValue = ({ method }, input) => {
      methodContent = [...methodContent, "warning"];
      if (method === "slice") {
        output = `The entered value is not allowed. Please enter a number or two numbers separated by a comma.`;
      } else {
        output = `Input value not allowed, use: \" \"`
      };
      input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };

    const checkDependency_1 = (method) => {
      return (
        ["filter", "find", "findIndex", "some"].includes(method.method)
        && !!method.methodContents[0].active
        && (array.includes(null) || array.includes(undefined))
      )
    };

    const checkDependency_2 = (method, input) => {
      return (
        ["reduce"].includes(method.method) && (array.length === 0) && (input.value === "")
      )
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
                  if (checkDependency_1(method) || checkDependency_2(method, input)) {
                    render();
                    displayWarningAboutArray();
                    return
                  } else {
                    runMethod(button.id, enterNumberOrString(input.value), method.method);
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

    const resetTypeButton = (prop) => {
      methodsString.forEach((object) => {
        object.methodContents.forEach((obj) => {
          if (!!obj.active && (obj.destiny !== prop)) {
            object.methodContents.forEach((obj, i) => {
              !i ? obj.active = true : obj.active = false
            });
          };
        });
      });
    };

    const useRandomIntegers = () => {
      string = "";
      string = Math.floor(Math.random() * 2000 - 1000);
      console.log(string)
      output = "The string has been loaded with a random number.";
    //  resetTypeButton("forNumbers");
      render();
    };

    const useRandomLetters = () => {
      string = "";
      
      string = (letters.charAt(Math.floor(Math.random() * letters.length)));
      output = "The string has been loaded with a random letter.";
      resetTypeButton("forStrings");
      render();
    };

    const useRandomWords = () => {
      string = "";
      string = (wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      
      output = "The string has been loaded with a random word.";
      resetTypeButton("forStrings");
      render();
    };

    const useRandomSentences = () => {
      string = "";
      string = (sentencesArray[Math.floor(Math.random() * sentencesArray.length)]);
      output = "The string has been loaded with a random sentence.";
    //  resetTypeButton("forObjects");
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      switch (target.id) {
        case "randomIntegers":
          useRandomIntegers();
          break;
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
      if (!!showExampleString) {
        output = "The example array has been displayed.";
      } else {
        output = "The example array has been hidden.";
      }
      render();
    };

    const loadFromExample = () => {
      if (exampleStringSaved.length > 0) {
        string = exampleStringSaved
      }
      else { string = exampleString };
      output = "The string is loaded from an example string."
      render();
    };

    const saveToExample = () => {
      if (!!string) {
        exampleStringSaved = string;
        output = "The string stored as an example string.";
        render();
      } else {
        output = "Not stored. The string is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      exampleStringSaved = "";
      output = "The example string has been reset.";
      render();
    };

    const loadFromOutput = () => {
      if (typeof(output) === "string") {
        string = output;
        output = "The string has been loaded from the output.";
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

    typeButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        let activeButton = "";
        methodsString.forEach((object) => {
          if (object.method === button.name) {
            methodActive = button.name
            object.methodContents.forEach((obj) => {
              if (obj.id === +button.id) {
                obj.active = true
                activeButton = obj.name
              } else {
                obj.active = false;
              };
            });
            output = `You have chosen the "${object.method}" method` + `${activeButton !== "( )" ? ` with the function ${activeButton}.` + `${!!object.inputType ? "<br>Complete the function by entering a value in the input field." + `${activeButton === "(a=>a%2===?)" ? "<br>It is recommended to enter 1 or 0." : ""}` : ""}` : "."}${!object.inputType ? `<br>Now click the "run" button.` : ""}`;
            render();
          };
        });
      });
    });
  };

  const notString = (inputValue) => {
    switch (inputValue) {
      case "null":
        return { name: null };
      case "undefined":
        return { name: undefined };
      case "NaN":
        return { name: NaN };
      case "true":
        return { name: true };
      case "false":
        return { name: false };
      default:
        return inputValue;
    };
  };

  const enterNumberOrString = (inputValue) => {
    return (
      !["null", "true", "false", "undefined", "NaN"].includes(inputValue) ?
        (typeof (inputValue) === "string" ? (inputValue) : "") :
        (!isNaN(inputValue) ?
          (inputValue !== "" ? (Number(inputValue)) : null) :
          notString(inputValue)
        )
    );
  };

  const readNumberOrString = (inputValue) => {
    return (
      (typeof (inputValue) === "string") ?
        ((inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"`) ?
          inputValue.slice(1, -1) : (inputValue === "" ? inputValue : Number(inputValue)))
        :
        ((typeof (inputValue) === "object") ? inputValue.name : Number(inputValue))
    );
  };

  const enterContentForArrowFunction = (method, inputValue) => {
    let content;

    methodsString.forEach((object) => {
      if (object.method === method) {
        object.methodContents.forEach((element) => {
          if (!!element.active) {
            content = element.methodContent +
              (!!inputValue ?
                ((typeof (inputValue) === "object" ? inputValue.name : inputValue) + (changeArrowFunctionIfObject(method))) :
                ""
              )
          };
        });
      };
    });

    if (content !== "") return Function(`return (${content})`)();
  };

  const enterContentForTwoArguments = (inputValue) => {
    let content = [];

    if (!isNaN(enterNumberOrString(inputValue))) {
      return [...content, (enterNumberOrString(inputValue))]
    }
    else {
      return (enterNumberOrString(inputValue).split(",")).map(number => number);
    };
  };

  const setAadditionalParameter = (inputValue) => {
    return (
      array.every(item => typeof (item) === "number") ?
        (inputValue === "" ? null : readNumberOrString(inputValue))
        :
        (inputValue === "0" ? "" : readNumberOrString(inputValue))
    )
  };

  const runMethod = (button, inputValue, method) => {
    switch (button) {
      case "toString":
        output = string.toString();
        methodContent = [method];
        break;
      case "shift":
        output = array.shift();
        methodContent = [method];
        break;
      case "reverse":
        output = array.reverse();
        methodContent = [method];
        break;
      case "sort":
        methodContent = [method, (enterContentForArrowFunction(button, null)), "arrowFunction"];
        output = array.sort(enterContentForArrowFunction(button, null));
        break;
      case "join":
        output = array.join(
          (enterNumberOrString(inputValue) === "") ? "," : (enterNumberOrString(inputValue) === `""`) ? "" : readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "push":
        output = array.push(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "unshift":
        output = array.unshift(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "map":
        output = array.map(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "find":
        output = array.find(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "findIndex":
        output = array.findIndex(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "reduce":
        output = array.reduce(enterContentForArrowFunction(button), setAadditionalParameter(inputValue));
        methodContent = [method, enterContentForArrowFunction(button) + (!!inputValue ? ", " + inputValue : ""), "arrowFunction"];
        break;
      case "filter":
        output = array.filter(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "some":
        output = array.some(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "every":
        output = array.every(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "includes":
        output = array.includes(readNumberOrString(inputValue));
        methodContent = [method, inputValue];
        break;
      case "slice":
        output = array.slice(...enterContentForTwoArguments(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "indexOf":
        output = array.indexOf(readNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
        break;
      case "lastIndexOf":
        output = array.lastIndexOf(readNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
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
