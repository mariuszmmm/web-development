import { methodsObjectRaw } from "./methodsObjectRaw.js";
import { objectsArray, exampleObject } from "./objects.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const objects = () => {
  let object = {};
  let methodContent = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let rangeValue;
  let exampleObjectSaved = [];
  let showExampleObject = false;
  let indexButton = 0;
  let methodActive = "";

  const methodsObject = methodsObjectRaw.map((object) => {
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
        <span class="labelParagraph--objects">
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
      <span class="labelParagraph--objects strong">
        let output = ${methodContent[0]}(${(methodContent[1] !== undefined) ?
        (typeof (methodContent[1]) === "string" ?
          (methodContent[1])
          :
          ((typeof (methodContent[1]) === "object") ?
            methodContent[1].name
            :
            methodContent[1]))
        :
        ""});
      </span>
    `;

    return element;
  };

  const changeArrowFunctionIfObject = (name) => {
    let content = "";

    if (!!name) {
      methodsObject.forEach((object) => {
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
        <div class="labelContents labelContents--objects js-labelContents">
          <p class="labelParagraph--objects strong">const object = {
          ${Object.keys(object).length > 0 ? `
          </p>
          <p class="labelParagraph labelParagraph--objects">
            ${viewObject(object)}
          </p>
          <p class="labelParagraph--objects strong">
          ` : ""}
          };</p>
          <p></p>
          ${!!showExampleObject ? `<p class="labelParagraph--objects strong">const exampleObject = {</p>
          <p class="labelParagraph labelParagraph--objects">
            ${viewObject(Object.keys(exampleObjectSaved).length > 0 ? exampleObjectSaved : exampleObject)}
          </p>
          <p class="labelParagraph--objects strong">];</p>
          <p></p>` : ""}          
          ${(!!methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsObjectSettings = (name, objects, inputType) => {
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
            <div class="propertyElements propertyElements--objects">
              <span class="methodName">
                ${name}
              </span>
              <div class="methodName methodName--parameters">
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
              </div>
            </div>
            <div class="valueElements valueElements--objects">
              <button id="${name}" class="button button--array button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--objects">
       `;

        objects.forEach((obj) => {
          if (
            (obj.destiny === "forAll")
            // ||
            // (array.every(item => typeof (item) === "number") && obj.destiny === "forNumbers") ||
            // (array.every(item => typeof (item) === "string") && obj.destiny === "forStrings") ||
            // (array.every(item => typeof (item) === "object" && !Array.isArray(item)) && obj.destiny === "forObjects") ||
            // (array.every(item => Array.isArray(item)) && obj.destiny === "forArrays")
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
          <div class="settings--objects">
            <span class="methods--label">
              Load object :
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
              <button id="randomObject" class="button js-random">
                random object
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
                from example object
              </button>          
              <button id="loadFromOutput" ${((typeof (output) === "object") && !outputInfo) ? "" : "disabled"} class="button js-example">
                from output
              </button>            
            </div>            
            <label for="inputRange" class="methods--label">
              Array size : 
              <span class="js-rangeValue">
                ${!!rangeValue ? rangeValue : "10"}
              </span>
            </label>          
            <div class="valueElements">              
              <input id="inputRange" type="range" value="${!!rangeValue ? rangeValue : "10"}" min="1" max="30" step="1" class="range js-range" />
            </div>
            <span class="methods--label">
              Example object :
            </span>
            <div class="valueElements">
              <button id="showExample" class="button ${!!showExampleObject ? "button--active" : ""} js-example">
              show example object
              </button>          
              <button id="saveToExample" class="button js-example">
                save object to example object
              </button>
              <button id="resetExample" class="button js-example">
                reset example object
              </button>
            </div>
          </div>
          <span class="methods--label">
            Methods :
          </span>
          <div class="settingsElements">
      `;

      methodsObject.forEach((object) => {
        methodsSetingsElement += `
        ${methodsObjectSettings(object.method, object.methodContents, object.inputType)}
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
    <div class="outputContents outputContents--objects">
      <div class="outputLabel">OUTPUT :</div>
      ${!outputInfo ? (typeof (output) === "object" ? `
      <p class="labelParagraph--objects strong">{ ${viewObject(output)} ]</p>` : (typeof (output) === "object") ? ` 
      <p class="labelParagraph--objects strong"> ${output !== null ? viewObject(output) : output} </p>`
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
    methodContent = [];

    inputElements.forEach((input) => {
      if (input.name === methodActive) input.focus();

      input.addEventListener("click", ({ target }) => {
        methodsObject.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            outputInfo = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsObject.forEach(({ method }) => {
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
      methodContent = [...methodContent, "warning"];
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
            methodsObject.forEach((method) => {
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

        methodsObject.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            runMethod(button.id, null, method.method)
            render();
          };
        });
      });
    });

    const resetTypeButton = (prop) => {
      methodsObject.forEach((object) => {
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
      console.log(+rangeValueElement.textContent)
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

    const useRandomObject = () => {
      object = {};

      object = (objectsArray[Math.floor(Math.random() * objectsArray.length)]);
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
        case "randomObject":
          useRandomObject();
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

    const changeShowExampleObject = () => {
      showExampleObject = !showExampleObject
      if (!!showExampleObject) {
        outputInfo = "The variable \"exampleObject\" has been displayed.";
      } else {
        outputInfo = "The variable \"exampleObject\" has been hidden.";
      }
      render();
    };

    const loadFromExample = () => {
      if (Object.keys(exampleObjectSaved).length > 0) {
        object = exampleObjectSaved
      }
      else { object = exampleObject };
      outputInfo = "The value from the variable \"exampleObject\" has been saved in the variable \"object\"."
      render();
    };

    const saveToExample = () => {
      if (Object.keys(object).length > 0) {
        exampleObjectSaved = object;
        outputInfo = "The value from the variable \"object\" has been saved in the variable \"exampleObject\".";
        render();
      } else {
        outputInfo = "Not saved. The variable \"object\" is empty.";
        renderOutput();
      };
    };

    const resetExample = () => {
      exampleObjectSaved = [];
      outputInfo = "The initial value has been restored in the variable \"exampleObject\".";
      render();
    };

    const loadFromOutput = () => {
      if (typeof (output) === "object") {
        object = output;
        outputInfo = "The value from the variable \"output\" has been stored in the variable \"object\".";
        render();
      };
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            changeShowExampleObject();
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
        methodsObject.forEach((object) => {
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
            outputInfo = `You have chosen the "${object.method}" method` + `${activeButton !== "( )" ? ` with the function ${activeButton}.` + `${!!object.inputType ? "<br>Complete the function by entering a value in the input field." + `${activeButton === "(a=>a%2===?)" ? "<br>It is recommended to enter 1 or 0." : ""}` : ""}` : "."}${!object.inputType ? `<br>Now click the "run" button.` : ""}`;
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

    methodsObject.forEach((object) => {
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

  const enterContent = (method, inputValue) => {
      let content;
  
      methodsObject.forEach((object) => {
        if (object.method === method) {
          object.methodContents.forEach((element) => {
            if (!!element.active) {
              content = element.methodContent 
              // +
              //   (!!inputValue ?
              //     ((typeof (inputValue) === "object" ? inputValue.name : inputValue) + (changeArrowFunctionIfObject(method))) :
              //     ""
              //   )
            };
          });
        };
      });
  
      if (content !== "")  return Function(`return (${content})`)();
    };

  const runMethod = (button, inputValue, method) => {
    outputInfo = "";
    switch (button) {
      case "object.name":
        output = object.name;
        methodContent = [method];
        break;
      case "object[age]":
        output = object["age"];
        methodContent = [method];
        break;
      case "object.sayHello()":
        object.sayHello();
        output = object.sayHello;
        methodContent = [method];
        break;
      case "object.getFullName()":
        output = object.getFullName()
        methodContent = [method];
        break;
      case "object.friend":
        output = object.friend;
        methodContent = [method];
        break;
      case "object.friend.name":
        output = object.friend.name;
        methodContent = [method];
        break;
      case "object[friend][surname]":
        output = object["friend"]["surname"];
        methodContent = [method];
        break;
      case "object === object":
        output = object === object;
        methodContent = [method];
        break;
      case "object === exampleObject":
        output = object === exampleObject;
        methodContent = [method];
        break;
      case "=":
        console.log(button)
        console.log(inputValue)
        console.log(method)
        console.log(enterContent(method, inputValue))
        output =  enterContent(method, inputValue)
        // object.name = readNumberOrString(inputValue)
        ;
        methodContent = [method, inputValue];
        break;
      case "object.surname =":
        output = object.surname = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.age =":
        output = object.age = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.friend.name =":
        output = object.friend.name = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.friend.surname =":
        output = object.friend.surname = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.friend.age =":
        output = object.friend.age = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;







      ////////////////////      
      // case "pop":
      //   output = array.pop();
      //   methodContent = [method];
      //   break;
      // case "shift":
      //   output = array.shift();
      //   methodContent = [method];
      //   break;
      // case "reverse":
      //   output = array.reverse();
      //   methodContent = [method];
      //   break;
      // case "sort":
      //   methodContent = [method, (enterContentForArrowFunction(button, null)), "arrowFunction"];
      //   output = array.sort(enterContentForArrowFunction(button, null));
      //   break;
      // case "join":
      //   output = array.join(
      //     (enterNumberOrString(inputValue) === "") ? "," : (enterNumberOrString(inputValue) === `""`) ? "" : readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "push":
      //   output = array.push(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "unshift":
      //   output = array.unshift(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "map":
      //   output = array.map(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "find":
      //   output = array.find(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "findIndex":
      //   output = array.findIndex(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "reduce":
      //   output = array.reduce(enterContentForArrowFunction(button), setAadditionalParameter(inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button) + (!!inputValue ? ", " + inputValue : ""), "arrowFunction"];
      //   break;
      // case "filter":
      //   output = array.filter(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "some":
      //   output = array.some(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "every":
      //   output = array.every(enterContentForArrowFunction(button, inputValue));
      //   methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
      //   break;
      // case "includes":
      //   output = array.includes(readNumberOrString(inputValue));
      //   methodContent = [method, inputValue];
      //   break;
      // case "slice":
      //   output = array.slice(...enterContentForTwoArguments(inputValue));
      //   methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
      //   break;
      // case "indexOf":
      //   output = array.indexOf(readNumberOrString(inputValue));
      //   methodContent = [method, enterNumberOrString(inputValue)];
      //   break;
      // case "lastIndexOf":
      //   output = array.lastIndexOf(readNumberOrString(inputValue));
      //   methodContent = [method, enterNumberOrString(inputValue)];
      //   break;
    };
    // console.log(output);
    // console.log(methodContent);
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--objects");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer labelContainer--objects js-labelContainer">
      </div>
      <div class="settingsContainer settingsContainer--objects js-settingsContainer">
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
