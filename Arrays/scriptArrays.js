import { methodsArrayRaw } from "./methodsArrayRaw.js"

export const arrays = () => {
  const array = [];
  const defaultArray = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
  let output;
  let inputValue;
  const arrayNaN = [null, false, true, NaN, undefined];
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
                          (button === "a.lenght>?") ? " a => a.lenght > " : ""
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
        <span class="settingsParagraph--arrays">
          ${(((typeof (arrayElement) === "number") || (arrayNaN.some(elementNaN => elementNaN === arrayElement))) ?
          (arrayElement)
          :
          (`"` + arrayElement + `"`)) + ((exampleArray.length === index + 1) ? "" : ", ")}
        </span>
      `;
    });

    return element;
  };

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const leabelContents = () => {
      let contentsElement = "";

      contentsElement += `
        <div class="settingsContents">
          <span class="settingsParagraph--arrays">const array = [</span>
            ${viewArray(array)}
          <span class="settingsParagraph--arrays">];</span>
          <p></p>
          <span class="settingsParagraph--arrays">const defaultArray = [</span>
            ${viewArray(defaultArray)}
          <span class="settingsParagraph--arrays">];</span>
          <p></p>
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

      const methodsArraySettings = (name, buttons, inputType, inputValue) => {
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
          ${inputType ? `<input type="${inputType}" name="${name}" value="${inputValue}" class="methodInput js-methodInput" />` : ""} 
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
            <span class="settingsParagraph--arrays">];</span>` : (output || "")}  
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
    // poprawić 
    runButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        inputElements.forEach((input) => {
          if (input.name === button.id) {
            inputValue = input.value
          };
        });
        methodsArray.forEach((method) => {
          if ((method.method === button.id) && method.inputType) {
            console.log(inputValue);
            method.inputValue = enterNumberOrString(inputValue);
          };
        });
        runMethod(button.id, inputValue);
        render();
      });
    });
  };

  const runMethod = (button, inputValue) => {
    switch (button) {
      case "pop":
        output = array.pop();
        break;
      case "shift":
        output = array.shift();
        break;
      case "reverse":
        output = array.reverse();
        break;
      case "push":
        output = array.push(enterNumberOrString(inputValue));
        break;
      case "unshift":
        output = array.unshift(enterNumberOrString(inputValue));
        break;
      case "map":
        output = array.map(enterMethodContent(button, inputValue));
        break;
      case "filter":
        output = array.filter(enterMethodContent(button, inputValue));
        break;
      case "at":
        output = array.at(enterNumberOrString(inputValue));
        break;
      case "slice":
        output = array.slice(enterNumberOrString(inputValue));
        break;
      case "indexOf":
        output = array.indexOf(enterNumberOrString(inputValue));
        break;
      case "lastIndexOf":
        output = array.lastIndexOf(enterNumberOrString(inputValue));
        break;
    };
  };

  const enterNumberOrString = (inputValue) => {
    return (
      !!Number(inputValue) ?
        Number(inputValue)
        :
        inputValue.charAt(0) === `"` && inputValue.charAt(inputValue.length - 1) === `"` ?
          (inputValue.slice(1, -1)).toString()
          :
          (arrayNaN.some((elementNaN) => String(elementNaN) === inputValue)) ?
            (arrayNaN.find((elementNaN) => String(elementNaN) === inputValue))
            :
            inputValue
    );
  };

  const enterMethodContent = (button, inputValue) => {
    let content;
    methodsArray.forEach((method) => {
      if (method.method === button) {
        method.inputValue = inputValue
        method.methodButtons.forEach((element) => {
          if (element.active)
            content = element.methodContent + enterNumberOrString(inputValue);
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

