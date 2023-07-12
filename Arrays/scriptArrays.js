import { methodsArrayRaw } from "./methodsArrayRaw.js";
import { exampleArray, letters, wordsArray, emoticonsArray, objectsArray, mixArray } from "./arrays.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const arrays = () => {
  let array = [];
  let dataArray = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let rangeValue;
  let exampleArraySaved = [];
  let showExampleArray = false;
  let indexButton = 0;
  let methodActive = "";
  let specActive = "methods";

  const methodsArray = methodsArrayRaw.map((object) => {
    return {
      method: object.method,
      // inputValue: "",
      inputType: object.inputType,
      inputPattern: object.inputPattern,
      methodContents: object.contents.map((obj, index) => {
        indexButton++
        return {
          id: indexButton,
          name: obj.button,
          methodContent: obj.content,
          active: index === 0,
          destiny: obj.destiny,
        }
      }),

      // spreadSyntax: object.spreadSyntax,
      additionalContents: object.additionalContents,
      spec: object.spec,
    }
  });

  const viewArray = (exampleArray) => {
    let element = "";

    exampleArray.forEach((arrayElement, index) => {
      element += `
        <span class="labelParagraph--arrays">
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

  const vievMethodContent = (dataArray) => {
    let element = "";
    let method = dataArray[0].replaceAll("'", "\"");
    let contentWithInputValue = dataArray[1];
    let contentType = dataArray[2];

    element += `
      <span class="labelParagraph--arrays strong">
        let output = ${contentType ? "" : "array."}${method}${contentType ? "" : "("}${(contentWithInputValue !== undefined) ?
        (typeof (contentWithInputValue) === "string" ?
          (contentWithInputValue)
          :
          ((typeof (contentWithInputValue) === "object") ?
            contentWithInputValue.name
            :
            contentWithInputValue))
        :
        ""}${contentType ? "" : ")"};
      </span>
    `;

    return element;
  };

  const changeArrowFunctionIfObject = (name) => {
    let content = "";

    if (name) {
      methodsArray.forEach((object) => {
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
      content += (property + ": ") +
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
        (subArrayElement + ((subArray.length === index + 1) ? "" : ", "))}`;
    });

    return `<span class="${(subArray.length < 4) ? "nowrap" : ""}">[${content}]</span>`;
  }

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
        <div class="labelContents labelContents--arrays js-labelContents">
          <p class="labelParagraph--arrays strong">
            const array = [${array.length > 0 ? `
          </p>
          <p class="labelParagraph labelParagraph--arrays">
            ${viewArray(array)}
          </p>
          <p class="labelParagraph--arrays strong">
          ` : ""}];</p>
          <p></p>
          ${showExampleArray ? `<p class="labelParagraph--arrays strong">const exampleArray = [</p>
          <p class="labelParagraph labelParagraph--arrays">
            ${viewArray(exampleArraySaved.length > 0 ? exampleArraySaved : exampleArray)}
          </p>
          <p class="labelParagraph--arrays strong">];</p>
          <p></p>` : ""}          
          ${(dataArray[0] && !dataArray.includes("warning")) ? vievMethodContent(dataArray) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsArraySettings = (name, objects, inputType, spreadSyntax) => {
        let element = "";

        const searchUnknown = (text, prop) => {
          text = text.replaceAll("'", "\"")
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
            <div class="propertyElements propertyElements--arrays">
              <span class="methodName">
                ${spreadSyntax ? "" : `array.${name}`}
              </span>
              <div class="methodName methodName--parameters">${spreadSyntax ? "&nbsp;" : "("}
        `;

        objects.forEach((obj) => {
          element += `
            ${obj.active ?
              (name === "reduce" ?
                (obj.methodContent).trim() + ",&nbsp;" : obj.methodContent.replaceAll("'", "\""))
              : ""}
          `;
        });

        element += `
          ${inputType ? `
            <input type="text" name="${name}" autocomplete="off" class="methodInput js-methodInput" />` : ""} 
        `;

        objects.forEach((obj) => {
          element += `
            ${obj.active ? changeArrowFunctionIfObject(name) : ""}
          `;
        });

        element += `
                ${spreadSyntax ? `&nbsp;` : ")&nbsp;"} 
              </div>
            </div>
            <div class="valueElements valueElements--arrays">
              <button id="${name}" class="button button--array button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--arrays">
       `;

        objects.forEach((obj) => {
          if (
            (obj.destiny === "forAll") ||
            (array.every(item => typeof (item) === "number") && obj.destiny === "forNumbers") ||
            (array.every(item => typeof (item) === "string") && obj.destiny === "forStrings") ||
            (array.every(item => typeof (item) === "object" && !Array.isArray(item)) && obj.destiny === "forObjects") ||
            (array.every(item => Array.isArray(item)) && obj.destiny === "forArrays")
          ) {
            obj.name ?
              element += `  
              <button name="${name}" id="${obj.id}" class="button button--array ${obj.active ? "button--active" : ""} js-typeButton">
                ${searchUnknown(obj.name)}
              </button>
          ` : "";
          } else {
            name ?
              element += `  
              <button name="${name}" id="${obj.id}" disabled class="button button--array ${obj.active ? "button--active" : ""} js-typeButton">
                ${searchUnknown(obj.name, "disabled")}
              </button>
            ` : "";
          }
        });

        element += `
          </div>
        `;

        return element;
      };

      methodsSetingsElement += `
        <div>
          <div class="settings--arrays">
            <span class="methods--label">
              Load array :
            </span>
            <div class="valueElements">   
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
              <button id="loadFromOutput" ${(Array.isArray(output) && !outputInfo) ? "" : "disabled"} class="button js-example">
                from output
              </button>            
            </div>            
            <label for="inputRange" class="methods--label">
              Array size : 
              <span class="js-rangeValue">
                ${rangeValue ? rangeValue : "10"}
              </span>
            </label>          
            <div class="valueElements">              
              <input id="inputRange" type="range" value="${rangeValue ? rangeValue : "10"}" min="1" max="30" step="1" class="range js-range" />
            </div>
            <span class="methods--label">
              Example array :
            </span>
            <div class="valueElements">
              <button id="showExample" class="button ${showExampleArray ? "button--active" : ""} js-example">
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
          <label class="selectLabel">
          <span class="methods--label">
            Spec : 
          </span>
          <select class="js-select">
          <option value="methods" ${specActive === "methods" ? "selected" : ""}>
            array methods
          </option>
          <option value="iteration" ${specActive === "iteration" ? "selected" : ""}>
            iteration
          </option>
          <option value="destructuring" ${specActive === "destructuring" ? "selected" : ""}>
            destructuring
          </option>
          <option value="spreadSyntax" ${specActive === "spreadSyntax" ? "selected" : ""}>
            spread syntax
          </option>
          <option value="immutability" ${specActive === "immutability" ? "selected" : ""}>
            immutability 
          </option>
        </select>
      </label>
      <div class="settingsElements">
      `;
      // sprawdzić czy wszystkie argumenty methodsArraySettings  są potrzebne
      methodsArray.forEach((object) => {
        if (object.spec === specActive) {
          methodsSetingsElement += `
        ${methodsArraySettings(object.method, object.methodContents, object.inputType, object.spreadSyntax)}
      `};
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
    <div class="outputContents outputContents--arrays">
      <div class="outputLabel">OUTPUT :</div>
      ${!outputInfo ? (Array.isArray(output) ? `
      <p class="labelParagraph--arrays strong">[${viewArray(output)}]</p>` : (typeof (output) === "object") ? ` 
      <p class="labelParagraph--arrays strong"> ${output !== null ? viewObject(output) : output} </p>`
        :
        (typeof (output) === "string" ?
          (output !== "" ? `"` + output + `"` : output)
          :
          output
        )) : outputInfo}
  </div>
  </div >
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
    const selectElement = document.querySelector(".js-select")
    dataArray = [];

    inputElements.forEach((input) => {
      if (input.name === methodActive) {
        input.focus();
      }

      input.addEventListener("click", ({ target }) => {
        methodsArray.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            outputInfo = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsArray.forEach(({ method }) => {
            if (method === input.name) {
              input.classList.remove("errorInput");
              key ? (target.value = key) : (target.value = "");
            };
          });
        };
      });
    });

    selectElement.addEventListener("change", () => {
      outputInfo = "";
      output = "";

      specActive = selectElement.value
      render();
    });

    const displayWarningAboutArray = () => {
      dataArray = [...dataArray, "warning"];
      if (array.includes(null)) {
        outputInfo = `Error: Cannot read properties of null (reading 'length')`;
      };
      if (array.includes(undefined)) {
        outputInfo = `Error: Cannot read properties of undefined (reading 'length')`;
      };
      if (array.length === 0) {
        outputInfo = `Error: Reduce of empty array with no initial value`;
      };
      renderOutput();
    };

    const displayWarningAboutInputValue = ({ method }, input) => {
      dataArray = [...dataArray, "warning"];
      if (method === "slice") {
        outputInfo = `The entered value is not allowed. Please enter a number or two numbers separated by a comma.`;
      } else {
        outputInfo = `Input value not allowed, use: \" \"`
      };
      input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };

    const checkDependency_1 = (method) => {
      return (
        ["filter", "find", "findIndex", "some"].includes(method.method)
        && method.methodContents[0].active
        && (array.includes(null) || array.includes(undefined))
      )
    };

    const checkDependency_2 = (method, input) => {
      return (
        ["reduce"].includes(method.method) && (array.length === 0) && (input.value === "")
      )
    };

    formElements.forEach((formElement) => {
      methodActive = "";
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
                    runMethod(button.id, enterNumberOrString(input.value), method.method, method.spreadSyntax);
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
            runMethod(button.id, null, method.method, method.spreadSyntax)
            render();
          };
        });
      });
    });

    const resetTypeButton = (prop) => {
      methodsArray.forEach((object) => {
        object.methodContents.forEach((obj) => {
          if (obj.active && (obj.destiny !== prop)) {
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

      outputInfo = `${rangeValueElement.textContent} random natural ${+rangeValueElement.textContent > 1 ? "numbers have" : "number has"} been saved in the array "array".`;
      resetTypeButton("forNumbers");
      render();
    };

    const useRandomIntegers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 200 - 100));
      };
      outputInfo = `${rangeValueElement.textContent} random integer ${+rangeValueElement.textContent > 1 ? "numbers have" : "number has"} been saved in the array "array".`;
      resetTypeButton("forNumbers");
      render();
    };

    const useRandomLetters = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(letters.charAt(Math.floor(Math.random() * letters.length)));
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "letters have" : "letter has"} been saved in the array "array".`;
      resetTypeButton("forStrings");
      render();
    };

    const useRandomWords = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "words have" : "word has"} been saved in the array "array".`;
      resetTypeButton("forStrings");
      render();
    };

    const useRandomArrays = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        const arrayItem = () => {
          let subArray = [];
          while (subArray.length < 3) {
            subArray.push(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
          };

          return subArray;
        };
        array.push(arrayItem());
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "arrays with 3 elements have" : "array with 3 elements has"} been saved in the array "array".`;
      resetTypeButton("forArrays");
      render();
    };

    const useRandomObjects = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(objectsArray[Math.floor(Math.random() * objectsArray.length)]);
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "objects with 2 properties have" : "object with 2 properties has"} been saved in the array "array".`;
      resetTypeButton("forObjects");
      render();
    };

    const useRandomEmoticons = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(emoticonsArray[Math.floor(Math.random() * emoticonsArray.length)]);
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "emoticons have" : "emoticon has"} been saved in the array "array"`;
      resetTypeButton("forAll");
      render();
    };

    const useRandomElements = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(mixArray[Math.floor(Math.random() * mixArray.length)]);
      };
      outputInfo = `${rangeValueElement.textContent} random ${+rangeValueElement.textContent > 1 ? "elements have" : "element has"} been saved in the array "array"`;
      resetTypeButton("forAll");
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      methodActive = "";
      switch (target.id) {
        case "randomNaturalNumbers":
          useRandomNaturalNumbers();
          break;
        case "randomIntegers":
          useRandomIntegers();
          break;
        case "randomLetters":
          useRandomLetters();
          break;
        case "randomWords":
          useRandomWords();
          break;
        case "randomObjects":
          useRandomObjects();
          break;
        case "randomArrays":
          useRandomArrays();
          break;
        case "randomEmoticons":
          useRandomEmoticons();
          break;
        case "randomElements":
          useRandomElements();
          break;
      };
    }));

    const changeShowExampleArray = () => {
      showExampleArray = !showExampleArray
      if (showExampleArray) {
        outputInfo = "The variable \"exampleArray\" has been displayed.";
      } else {
        outputInfo = "The variable \"exampleArray\" has been hidden.";
      }
      render();
    };

    const loadFromExample = () => {
      if (exampleArraySaved.length > 0) {
        array = [...exampleArraySaved]
      }
      else { array = [...exampleArray] };
      outputInfo = "The value from the variable \"exampleArray\" has been saved in the variable \"array\"."
      render();
    };

    const saveToExample = () => {
      if (array.length > 0) {
        exampleArraySaved = [...array];
        outputInfo = "The value from the variable \"array\" has been saved in the variable \"exampleArray\".";
        render();
      } else {
        outputInfo = "Not saved. The variable \"array\" is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      exampleArraySaved = [];
      outputInfo = "The initial value has been restored in the variable \"exampleArray\".";
      render();
    };

    const loadFromOutput = () => {
      if (Array.isArray(output)) {
        array = [...output];
        outputInfo = "The value from the variable \"output\" has been stored in the variable \"array\".";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            changeShowExampleArray();
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

    rangeElement.addEventListener("input", ({ target }) => {
      rangeValueElement.textContent = target.value;
      rangeValue = rangeValueElement.textContent;
      outputInfo = `The array size has been set to ${rangeValue} ${rangeValue === "1" ? "element" : "elements"}.
      <br>Choose a button and save the elements in the array.`
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

            object.spreadSyntax ?
              outputInfo = `You have chosen the syntax ${activeButton.replaceAll("'", "\"").replaceAll(" ", "&nbsp;")}. <br>
            Now click the "Run" button.`
              :
              outputInfo = `You have chosen the "${object.method}" method` + `${activeButton !== "( )" ? ` with the function ${activeButton}.` + `${object.inputType ? "<br>Complete the function by entering a value in the input field." + `${activeButton === "(a=>a%2===?)" ? "<br>It is recommended to enter 1 or 0." : ""}` : ""}` : "."}${!object.inputType ? `<br>Now click the "run" button.` : ""}`;
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

    methodsArray.forEach((object) => {
      if (object.method === method) {
        object.methodContents.forEach((element) => {
          if (element.active) {
            content = element.methodContent +
              (inputValue ?
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

  const enterContentForSpreadSyntax = (method, forMethodContent) => {
    let content;

    methodsArray.forEach((object) => {
      if (object.method === method) {
        object.methodContents.forEach((element) => {
          if (element.active) {
            content = (element.name).replace("[...array,", "").replace("]", "");
          };
        });
      };
    });

    if (content !== "") {
      if (forMethodContent) {
        return content
      } else return Function(`return (${content})`)();
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

  const runMethod = (button, inputValue, method, spreadSyntax) => {
    outputInfo = "";
    switch (button) {
      case "pop":
        output = array.pop();
        dataArray = [method];
        break;
      case "shift":
        output = array.shift();
        dataArray = [method];
        break;
      case "reverse":
        output = array.reverse();
        dataArray = [method];
        break;
      case "[...array]":
        output = [...array];
        dataArray = [method, , spreadSyntax];
        break;
      case "[...array, ...exampleArray]":
        output = exampleArraySaved.length > 0 ? [...array, ...exampleArraySaved] : [...array, ...exampleArray];
        dataArray = [method, , spreadSyntax];
        break;
      case "[...array, element]":
        output = [...array, enterContentForSpreadSyntax(button)];
        dataArray = [method.replace("element", (enterContentForSpreadSyntax(button, "forMethodContent"))), , spreadSyntax];
        break;
      case "sort":
        dataArray = [method, (enterContentForArrowFunction(button, null)), "arrowFunction"];
        output = array.sort(enterContentForArrowFunction(button, null));
        break;
      case "join":
        output = array.join(
          (enterNumberOrString(inputValue) === "") ? "," : (enterNumberOrString(inputValue) === `""`) ? "" : readNumberOrString(inputValue));
        dataArray = [method, inputValue];
        break;
      case "push":
        output = array.push(readNumberOrString(inputValue));
        dataArray = [method, inputValue];
        break;
      case "unshift":
        output = array.unshift(readNumberOrString(inputValue));
        dataArray = [method, inputValue];
        break;
      case "map":
        output = array.map(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "find":
        output = array.find(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "findIndex":
        output = array.findIndex(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "reduce":
        output = array.reduce(enterContentForArrowFunction(button), setAadditionalParameter(inputValue));
        dataArray = [method, enterContentForArrowFunction(button) + (inputValue ? ", " + inputValue : ""), "arrowFunction"];
        break;
      case "filter":
        output = array.filter(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "some":
        output = array.some(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "every":
        output = array.every(enterContentForArrowFunction(button, inputValue));
        dataArray = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "includes":
        output = array.includes(readNumberOrString(inputValue));
        dataArray = [method, inputValue];
        break;
      case "slice":
        output = array.slice(...enterContentForTwoArguments(inputValue));
        dataArray = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "indexOf":
        output = array.indexOf(readNumberOrString(inputValue));
        dataArray = [method, enterNumberOrString(inputValue)];
        break;
      case "lastIndexOf":
        output = array.lastIndexOf(readNumberOrString(inputValue));
        dataArray = [method, enterNumberOrString(inputValue)];
        break;
    };
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--arrays");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer labelContainer--arrays js-labelContainer">
      </div>
      <div class="settingsContainer settingsContainer--arrays js-settingsContainer">
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
