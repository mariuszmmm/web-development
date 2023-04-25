import { methodsArrayRaw } from "./methodsArrayRaw.js"

export const arrays = () => {
  const array = [1, 2, 3, 4, 5, 7, 77, 8, 9];
  let methodContent = [];
  let output = "";
  const defaultArray = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
  const methodsArray = methodsArrayRaw.map((object) => {

    return {
      method: object.method,
      methodButtons: object.methodButtons.map((button, index) => {

        return {
          name: button, active: index === 0,
          methodContent:
            (button === "a*?") ? " a => a * " :
              (button === "a**?") ? " a => a ** " :
                (button === "a+?") ? " a => a + " :
                  (button === "a=?") ? " a => a = " :
                    (button === "a===?") ? " a => a === " :
                      (button === "a!==?") ? " a => a !== " :
                        (button === "a>?") ? " a => a > " :
                          (button === "a.length>?") ? " a => a.length > " : ""
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
        <span class="settingsParagraph--arrays strong">
          ${typeof (arrayElement) === "string" ?
          (`"` + arrayElement + `"`) + ((exampleArray.length === index + 1) ? "" : ", ") :
          arrayElement + ((exampleArray.length === index + 1) ? "" : ", ")
        }
        </span>
      `;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";
    element += `
      <span class="settingsParagraph--arrays strong">
        array.${methodContent[0]}( ${(methodContent[1] !== undefined) ?
        ((typeof (methodContent[1]) !== "string" || methodContent[2] === "twoArguments") ? methodContent[1] : `"` + methodContent[1] + `"`)
        :
        ""} );
      </span>
    `;

    return element;
  };

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const leabelContents = () => {
      let contentsElement = "";
      contentsElement += `
        <div class="settingsContents">
          <span class="settingsParagraph--arrays strong">const array = [</span>
            ${viewArray(array)}
          <span class="settingsParagraph--arrays strong">];</span>
          <p></p>
          ${methodContent[0] ? vievMethodContent(methodContent) : ""}
        </div>
      `;

      return contentsElement;
    };

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const arraySettings = () => {
        let element = "";
        element += `
          <span class="arrayMethods--label">
            array settings :
          </span>

          <div class="valueButtons">               
            <button class="button js-randomNumberArray">
              random numbers
            </button>
            <button class="button js-randomStringArray">
              random strings
            </button>
            <button class="button js-randomMixArray">
              random mixed
            </button>
            <span class="rangeContiner">
            <label class="arrayMethods--label">
              array size :
            </label> 
              <input id="inputRange" type="range" class="range js-rangeArray" />
            </span>
          </div>            

          <span class="arrayMethods--label">
          default array :
          </span>

          <div class="valueButtons">
            <button class="button js-loadDefaultArray">
              load from default
            </button>
            <button class="button js-saveDefaultArray">
              save to default
            </button>
            <button class="button js-resetDefaultArray">
              reset default
            </button>
            <button class="button js-loadOutputArray">
              load from output
            </button>
          </div>            
        `;

        return element;
      };

      const methodsArraySettings = (name, buttons, inputType, inputPattern) => {
        let element = "";
        element += `
          <div class="propertyButtons propertyButtons--arrays">
            <span class="methodName">
              array.${name}
            </span>
            <div class="methodName methodName--parameters">(
        `;

        buttons.forEach((button) => {
          element += `
            ${button.active ? button.methodContent : ""}`
        });

        element += `
          ${inputType ? `<input type="text" name="${name}" class="methodInput js-methodInput" />` : ""} 
              ) 
            </div>
          </div>
          <div class="valueButtons valueButtons--arrays">
            <button id="${name}" class="button button--array js-runButton">
              run
            </button>
        `;

        buttons.forEach((button) => {
          element += `  
            <button name="${name}" class="button button--array ${button.active ? "button--active" : ""} js-typeButton">
              ${button.name}
            </button>
          `;
        });

        element += `
          </div>
        `;

        return element;
      };

      methodsSetingsElement += `
        <div>
          <div class="arraySettings">
            ${arraySettings("array")}
          </div>
          <span class="arrayMethods--label">
          array methods :
          </span>
          <div class="settingsButtons">
      `;

      methodsArray.forEach((object) =>
        methodsSetingsElement += `
        ${methodsArraySettings(object.method, object.methodButtons, object.inputType, object.inputValue, object.inputPattern)}
      `);

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
            <span class="settingsParagraph--arrays">const outputArray = [ ${viewArray(output)}    
            ];</span>` : (output)}  
        </div>
      </div>
    `;
  };

  const bindInputsAndButtons = () => {
    const randomNumberArrayElement = document.querySelector(".js-randomNumberArray");
    const randomStringArrayElement = document.querySelector(".js-randomStringArray");
    const randomMixArrayElement = document.querySelector(".js-randomMixArray");
    const rangeArrayElement = document.querySelector(".js-rangeArray");
    const loadDefaultArrayElement = document.querySelector(".js-loadDefaultArray");
    const saveDefaultArrayElement = document.querySelector(".js-saveDefaultArray");
    const resetDefaultArrayElement = document.querySelector(".js-resetDefaultArray");
    const loadOutputArrayElement = document.querySelector(".js-loadOutputArrayArray");
    const inputElements = document.querySelectorAll(".js-methodInput")
    const runButtonElements = document.querySelectorAll(".js-runButton")
    const typeButtonElements = document.querySelectorAll(".js-typeButton")

    inputElements.forEach((input) => {
      input.addEventListener("click", ({ target }) => {
        methodsArray.forEach(({ method }) => {
          if (method === input.name) target.value = "";
        });
      });
    });

    typeButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        methodsArray.forEach((object) => {
          if (object.method === button.name) {
            object.methodButtons.forEach((obj) => {
              (obj.name === button.innerText) ?
                obj.active = true :
                obj.active = false;
            });
            render();
          };
        });
      });
    });

    runButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        inputElements.forEach((input) => {
          if (input.name === button.id) {
            methodsArray.forEach((method) => {
              if (method.method === button.id) {
                method.inputValue = enterNumberOrString(input.value);
                const pattern = RegExp(method.inputPattern);
                if (pattern.test(method.inputValue) &&
                  method.inputValue !== undefined &&
                  method.inputValue !== null) {
                  runMethod(button.id, method.inputValue, method.method);
                  render();
                } else {
                  output = "Input value not allowed, use: \" \"";
                  renderOutput();
                  input.value = "";
                  input.focus();
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
  };

  const runMethod = (button, inputValue, method) => {
    console.log("inputValue =", inputValue)
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
      case "push":
        output = array.push(inputValue);
        methodContent = [method, inputValue];
        break;
      case "unshift":
        output = array.unshift(inputValue);
        methodContent = [method, inputValue];
        break;
      case "map":
        output = array.map(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "filter":
        output = array.filter(enterContentForArrowFunction(button, inputValue));
        methodContent = [method, enterContentForArrowFunction(button, inputValue), "arrowFunction"];
        break;
      case "slice":
        output = array.slice(...enterContentForTwoArguments(inputValue));
        methodContent = [method, (enterContentForTwoArguments(inputValue).join(", ")), "twoArguments"];
        break;
      case "indexOf":
        output = array.indexOf(enterNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
        break;
      case "lastIndexOf":
        output = array.lastIndexOf(enterNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
        break;
    };
    console.log("array", array);
    console.log("methodContent", methodContent);
  };

  const enterNumberOrString = (inputValue) => {

    return (
      inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"` ?
        inputValue.slice(1, -1)
        :
        (!isNaN(inputValue) ? (inputValue !== "" ? Number(inputValue) : null) : inputValue)
    );
  };

  const readNumberOrString = (inputValue) => {
    return (
      (typeof (inputValue) === "number") ? inputValue :
        `"` + inputValue + `"`
    );
  };

  const enterContentForArrowFunction = (button, inputValue) => {
    let content;
    methodsArray.forEach((method) => {
      if (method.method === button) {
        method.methodButtons.forEach((element) => {
          if (element.active) {
            content = element.methodContent + readNumberOrString(inputValue)
          };
        });
      };
    });

    return Function(`return (${content})`)();
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

  const render = () => {
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  render();
};