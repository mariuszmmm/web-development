import { methodsArrayRaw } from "./methodsArrayRaw.js"
import { arrayExample, letters, arrayWords, arrayEmoticons, arrayObjects, mixArray } from "./arrays.js"

export const arrays = () => {
  let array = [];
  let methodContent = [];
  let output = "";
  let rangeValue;
  let arrayExampleSaved = [];
  let showExampleArray = false;
  let indexButton = 0;
  let methodActive = "";

  const methodsArray = methodsArrayRaw.map((object) => {
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

  const viewArray = (exampleArray) => {
    let element = "";

    exampleArray.forEach((arrayElement, index) => {
      element += `
        <span class="settingsParagraph--arrays">
          ${(typeof (arrayElement) === "string" ?
          (`"` + arrayElement + `"`)
          :
          (Array.isArray(arrayElement) ?
            viewSubArray(arrayElement)
            :
            ((typeof (arrayElement) === "object" && arrayElement !== null) ?
              viewObject(arrayElement)
              :
              arrayElement))) + ((exampleArray.length === index + 1) ? "" : ",")}
        </span>`;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";
    element += `
      <span class="settingsParagraph--arrays strong">
        array.${methodContent[0]}( ${(methodContent[1] !== undefined) ?
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
      methodsArray.forEach((object) => {
        if (object.method === name) {
          object.methodContents.forEach((obj) => {
            if (obj.active === true) {
              if (obj.methodContent.includes("({")) {
                content = "})";
              }
              if (obj.methodContent.includes("([")) {
                content = "])";
              }
              if (obj.methodContent.includes("find(")) {
                content = ")";
              }
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
      content += (property + ":")
        +
        (typeof (object[property]) === "string" ? (`"` + object[property] + `"`) : object[property])
        +
        ((Object.keys(object).length === index + 1) ? "" : ",")
    };

    return `<span class="${(Object.keys(object).length < 3) ? "nowrap" : ""}">{ ${content} }</span>`;
  };

  const viewSubArray = (subArray) => {
    let content = "";

    subArray.forEach((subArrayElement, index) => {
      content += `
      ${typeof (subArrayElement) === "string" ?
          ((`"` + subArrayElement + `"`) + ((subArray.length === index + 1) ? "" : ","))
          :
          (subArrayElement + ((subArray.length === index + 1) ? "" : ","))}
      `;
    });

    return `<span class="${(subArray.length < 4) ? "nowrap" : ""}">[${content}]</span>`;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const leabelContents = () => {
      let element = "";

      element += `
        <div class="settingsContents settingsContents--array">
          <p class="settingsParagraph--arrays strong">const array = [
          ${array.length > 0 ? `
          </p>
          <p class="settingsParagraph settingsParagraph--arrays">
            ${viewArray(array)}
          </p>
          <p class="settingsParagraph--arrays strong">
          ` : ""}
          ];</p>
          <p></p>
          ${!!showExampleArray ? `<p class="settingsParagraph--arrays strong">const exampleArray = [</p>
          <p class="settingsParagraph settingsParagraph--arrays">
            ${viewArray(arrayExampleSaved.length > 0 ? arrayExampleSaved : arrayExample)}
          </p>
          <p class="settingsParagraph--arrays strong">];</p>
          <p></p>` : ""}          
          ${(!!methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;

      return element;
    };

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsArraySettings = (name, objects, inputType) => {
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
            <div class="propertyButtons propertyButtons--arrays">
              <span class="methodName">
                array.${name}
              </span>
              <div class="methodName methodName--parameters">(
        `;

        objects.forEach((obj) => {
          element += `
            ${!!obj.active ? obj.methodContent : ""}
          `;
        });

        element += `
          ${!!inputType ? `
            <input type="text" name="${name}" class="methodInput js-methodInput" />` : ""} 
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
            <div class="valueButtons valueButtons--arrays">
              <button id="${name}" class="button button--array button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueButtons valueButtons--arrays">
       `;

        objects.forEach((obj) => {
          if (
            (obj.destiny === "forAll")
            ||
            (array.every(item => typeof (item) === "number") && obj.destiny === "forNumbers")
            ||
            (array.every(item => typeof (item) === "string") && obj.destiny === "forStrings")
            ||
            (array.every(item => typeof (item) === "object" && !Array.isArray(item)) && obj.destiny === "forObjects")
            ||
            (array.every(item => Array.isArray(item)) && obj.destiny === "forArrays")
          ) {
            element += `  
              <button name="${name}" id="${obj.id}" class="button button--array ${!!obj.active ? "button--active" : ""} js-typeButton">
                ${searchUnknown(obj.name)}
              </button>
          `;
          } else {
            element += `  
              <button name="${name}" id="${obj.id}" disabled class="button button--array ${!!obj.active ? "button--active" : ""} js-typeButton">
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
          <div class="arraySettings">
            <span class="arrayMethods--label">
              load array :
            </span>
            <div class="valueButtons">   
              <button id="randomNaturalNumbers" class="button js-random">
                random natural numbers
              </button>
              <button id="randomIntegers" class="button js-random">
                random integers
              </button>     
              <button id="randomLetters" class="button js-random">
                random letters
              </button>
              <button id="randomWords" class="button js-random">
                random words
              </button> 
              <button id="randomObjects" class="button js-random">
                random objects
              </button>
              <button id="randomArrays" class="button js-random">
                random arrays
              </button>
              <button id="randomEmoticons" class="button js-random">
                random emoticons
              </button>                  
              <button id="randomElements" class="button js-random">
                random elements
              </button>
              <button id="loadFromExample" class="button js-example">
                from example array
              </button>          
              <button id="loadFromOutput" ${Array.isArray(output) ? "" : "disabled"} class="button js-example">
                from output
              </button>            
            </div>            
            <label for="inputRange" class="arrayMethods--label">
              array size : 
              <span class="js-rangeValue">
                ${!!rangeValue ? rangeValue : "10"}
              </span>
            </label>          
            <div class="valueButtons">              
              <input id="inputRange" type="range" value="${!!rangeValue ? rangeValue : "10"}" min="1" max="30" step="1" class="range js-range" />
            </div>
            <span class="arrayMethods--label">
              example array :
            </span>
            <div class="valueButtons">
              <button id="showExample" class="button ${!!showExampleArray ? "button--active" : ""} js-example">
              show example array
              </button>          
              <button id="saveToExample" class="button js-example">
                save array to example array
              </button>
              <button id="resetExample" class="button js-example">
                reset example array
              </button>
            </div>
          </div>
          <span class="arrayMethods--label">
            methods :
          </span>
          <div class="settingsButtons">
      `;

      methodsArray.forEach((object) => {
        methodsSetingsElement += `
        ${methodsArraySettings(object.method, object.methodContents, object.inputType)}
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
      ${leabelContents()}
      ${methodsSettings()}      
    `;
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
      <div class="outputContents outputContents--arrays">
        <div class="outputLabel">OUTPUT :</div>
        ${Array.isArray(output) ? `
        <p class="settingsParagraph--arrays strong">[ ${viewArray(output)} ]</p>` : (typeof (output) === "object") ? ` 
        <p class="settingsParagraph--arrays strong"> ${output !== null ? viewObject(output) : output} </p>`
        :
        ((typeof (output) === "string" && !methodContent.includes("warning")) ?
          (output !== "" ? `"` + output + `"` : output)
          :
          output
        )}  
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
        methodsArray.forEach(({ method }) => {
          if (method === input.name) target.value = "";
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsArray.forEach(({ method }) => {
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
            methodsArray.forEach((method) => {
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

        methodsArray.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            runMethod(button.id, null, method.method)
            render();
          };
        });
      });
    });

    const resetTypeButton = (prop) => {
      methodsArray.forEach((object) => {
        object.methodContents.forEach((obj) => {
          if (!!obj.active && (obj.destiny !== prop)) {
            object.methodContents.forEach((obj, i) => {
              !i ? obj.active = true : obj.active = false
            });
          };
        });
      });
    };

    const useRandomNaturalNumbers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 100));
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random natural numbers.`;
      resetTypeButton("forNumbers");
      render();
    };

    const useRandomIntegers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 200 - 100));
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random integers.`;
      resetTypeButton("forNumbers");
      render();
    };

    const useRandomLetters = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(letters.charAt(Math.floor(Math.random() * letters.length)));
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random letters.`;
      resetTypeButton("forStrings");
      render();
    };

    const useRandomWords = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayWords[Math.floor(Math.random() * arrayWords.length)]);
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random words.`;
      resetTypeButton("forStrings");
      render();
    };

    const useRandomArrays = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        const arrayItem = () => {
          let subArray = [];
          while (subArray.length < 3) {
            subArray.push(arrayWords[Math.floor(Math.random() * arrayWords.length)]);
          };

          return subArray;
        };
        array.push(arrayItem());
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random three-element arrays.`;
      resetTypeButton("forArrays");
      render();
    };

    const useRandomObjects = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayObjects[Math.floor(Math.random() * arrayObjects.length)]);
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random objects, each having two properties.`;
      resetTypeButton("forObjects");
      render();
    };

    const useRandomEmoticons = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayEmoticons[Math.floor(Math.random() * arrayEmoticons.length)]);
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random emoticons.`;
      resetTypeButton("forAll");
      render();
    };

    const useRandomElements = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(mixArray[Math.floor(Math.random() * mixArray.length)]);
      };
      output = `The array has been loaded with ${rangeValueElement.textContent} random elements.`;
      resetTypeButton("forAll");
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      switch (target.id) {
        case "randomNaturalNumbers": useRandomNaturalNumbers();
          break;
        case "randomIntegers": useRandomIntegers();
          break;
        case "randomLetters": useRandomLetters();
          break;
        case "randomWords": useRandomWords();
          break;
        case "randomObjects": useRandomObjects();
          break;
        case "randomArrays": useRandomArrays();
          break;
        case "randomEmoticons": useRandomEmoticons();
          break;
        case "randomElements": useRandomElements();
          break;
      };
    }));

    const changeShowExampleArray = () => {
      showExampleArray = !showExampleArray
      if (!!showExampleArray) {
        output = "The example array has been displayed.";
      } else {
        output = "The example array has been hidden.";
      }
      render();
    };

    const loadFromExample = () => {
      if (arrayExampleSaved.length > 0) {
        array = [...arrayExampleSaved]
      }
      else { array = [...arrayExample] };
      output = "The array is loaded from an example array."
      render();
    };

    const saveToExample = () => {
      if (array.length > 0) {
        arrayExampleSaved = [...array];
        output = "The array stored as an example array.";
        render();
      } else {
        output = "Not stored. The array is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      arrayExampleSaved = [];
      output = "The example array has been reset.";
      render();
    };

    const loadFromOutput = () => {
      if (Array.isArray(output)) {
        array = [...output];
        output = "The array has been loaded from the output.";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample": changeShowExampleArray();
            break;
          case "loadFromExample": loadFromExample();
            break;
          case "saveToExample": saveToExample();
            break;
          case "resetExample": resetExample();
            break;
          case "loadFromOutput": loadFromOutput();
            break;
        };
      });
    });

    rangeElement.addEventListener("input", ({ target }) => {
      rangeValueElement.textContent = target.value;
      rangeValue = rangeValueElement.textContent;
      output = `The array size has been set to ${rangeValue} ${rangeValue === "1" ? "element" : "elements"}.
      <br>Choose a button and load the array.`
      renderOutput();
    });

    typeButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        let activeButton = "";
        methodsArray.forEach((object) => {
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
            output = `You have chosen the "${object.method}" method` + `${activeButton !== "( )" ? ` with the function ${activeButton}.`
              + `${!!object.inputType ? "<br>Complete the function by entering a value in the input field." + `${activeButton === "(a=>a%2===?)" ? "<br>It is recommended to enter 1 or 0." : ""}` : ""}`
              : "."}`;
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
        (typeof (inputValue) === "string" ? (inputValue) : "")
        :
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

    methodsArray.forEach((object) => {
      if (object.method === method) {
        object.methodContents.forEach((element) => {
          if (!!element.active) {
            content = element.methodContent +
              (!!inputValue ?
                ((typeof (inputValue) === "object" ? inputValue.name : inputValue) + (changeArrowFunctionIfObject(method)))
                : ""
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
      case "pop":
        output = array.pop();
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
        methodContent = [method, enterContentForArrowFunction(button) + ", " + inputValue, "arrowFunction"];
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

  const render = () => {
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  render();
};