import { methodsArrayRaw } from "./methodsArrayRaw.js"

export const arrays = () => {
  const array = [];
  let methodContent = [];
  let output = "";
  const defaultArray = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
  const arrayNaN = ["null", "false", "true", "NaN", "undefined"];
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
    }
  });

  const viewArray = (exampleArray) => {
    let element = "";
    exampleArray.forEach((arrayElement, index) => {
      element += `
        <span class="settingsParagraph--arrays strong">
          ${(arrayNaN.some(elementNaN => elementNaN === String(arrayElement)) ?
          notNumber(arrayElement) + ((exampleArray.length === index + 1) ? "" : ", ")
          :
          (typeof (arrayElement) === "number" ?
            arrayElement + ((exampleArray.length === index + 1) ? "" : ", ")
            :
            (`"` + arrayElement + `"`)) + ((exampleArray.length === index + 1) ? "" : ", "))}
        </span>
      `;
    });

    return element;
  };

  const vievMethodContent = (methodContent) => {
    let element = "";
    element += `
      <span class="settingsParagraph--arrays strong">
        array.${methodContent[0]}(${methodContent[1] ?
        (typeof (methodContent[1]) === "number" ? Number(methodContent[1]) : `"` + methodContent[1] + `"`)
        :
        ""}&nbsp)
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
          <div class="propertyButtons propertyButtons--arrays">
            <span class="settingsChild">
              array
            </span>
            <span class="strong">
              :
            </span>
          </div>
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
            <span class="settingsMethod">
              array size
              <input id="inputRange" type="range" class="range js-rangeArray" />
            </span>   
          </div>            
          <div class="propertyButtons propertyButtons--arrays">
          </div>
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

      const methodsArraySettings = (name, buttons, inputType) => {
        let element = "";
        element += `
          <div class="propertyButtons propertyButtons--arrays">
            <span class="settingsMethod">
              array.${name}</span>
          </div>
          <div class="valueButtons">
            <span class="settingsMethod"> 
              (
        `;

        buttons.forEach((button) => {
          element += `
            ${button.active ? button.methodContent : ""}`
        });

        element += `
          ${inputType ? `<input type="${inputType}" name="${name}" class="methodInput js-methodInput" />` : ""} 
              ) 
            </span>
            <button id="${name}" class="button js-runButton">
              run
            </button>
        `;

        buttons.forEach((button) => {
          element += `  
            <button name="${name}" class="button ${button.active ? "button--active" : ""} js-typeButton">
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
        <div class="buttonsContainer">
          <div class="settingsButtons">
            ${arraySettings("array")}
          </div>
          <div class="settingsButtons">
      `;

      methodsArray.forEach((object) =>
        methodsSetingsElement += `
        ${methodsArraySettings(object.method, object.methodButtons, object.inputType, object.inputValue)}
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
            <span class="settingsParagraph--arrays">const outputArray = [</span>
              ${viewArray(output)}
            <span class="settingsParagraph--arrays">];</span>` : (output)}  
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
                if (method.methodButtons.length > 0) {
                  if (method.inputValue !== "") {
                    runMethod(button.id, method.inputValue, method.method);
                    render();
                  } else {
                    input.value = "";
                    input.focus();
                    return
                  };
                } else {
                  runMethod(button.id, method.inputValue, method.method);
                  render();
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
        output = array.map(enterMethodContent(button, inputValue));
        methodContent = [method, enterMethodContent(button, inputValue)];
        break;
      case "filter":
        output = array.filter(enterMethodContent(button, inputValue));
        methodContent = [method, enterMethodContent(button, inputValue)];
        break;
      case "slice":
        output = array.slice(enterNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
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
  };

  const notNumber = (inputValue) => {
    switch (inputValue) {
      case "null": return null
      case "true": return true
      case "false": return false
      case "NaN": return NaN
      case "undefined": return undefined
      default: return String(inputValue)
    };
  };
// dodać ","
  const enterNumberOrString = (inputValue) => {

    return (
      inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"` ?
        String(inputValue.slice(1, -1))
        :
        (!!Number(inputValue) ? Number(inputValue) :

          (arrayNaN.some(elementNaN => elementNaN === inputValue) ?
            notNumber(inputValue) : String(inputValue)
          )
        )
    );
  };

  const readNumberOrString = (inputValue) => {
    return (
      (typeof (inputValue) === "number") ? inputValue :
        `"` + inputValue + `"`
    );
  };

  const enterMethodContent = (button, inputValue) => {
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

  const render = () => {
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  render();
};