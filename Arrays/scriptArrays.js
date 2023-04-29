import { methodsArrayRaw } from "./methodsArrayRaw.js"
import { arrayExample, letters, arrayWords, arrayEmoticons } from "./arrays.js"

export const arrays = () => {
  let array = [];
  let methodContent = [];
  let output;
  let rangeValue;
  let arrayExampleSaved = [];
  let showExampleActive = false;

  const methodsArray = methodsArrayRaw.map((object) => {

    return {
      method: object.method,
      methodButtons: object.methodButtons.map((button, index) => {

        return {
          name: button,
          active: index === 0,
          methodContent: (button === "a*?") ? " a => a * " : (button === "a**?") ? " a => a ** " : (button === "a+?") ? " a => a + " : (button === "a=?") ? " a => a = " : (button === "a===?") ? " a => a === " : (button === "a!==?") ? " a => a !== " : (button === "a>?") ? " a => a > " : (button === "a.length>?") ? " a => a.length > " : ""
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
         ${showExampleActive? `<span class="settingsParagraph--arrays strong">const exampleArray = [</span>
            ${viewArray(arrayExampleSaved.length > 0? arrayExampleSaved :arrayExample)}
          <span class="settingsParagraph--arrays strong">];</span>
          <p></p>` : ""}          
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
            <button id="randomEmoticons" class="button js-random">
              random emoticons
            </button>                  
            <button id="randomMixed" class="button js-random">
              random mixed
            </button>
            <button id="loadFromExample" class="button js-example">
              from example array
            </button>          
            <button id="loadFromOutput" ${Array.isArray(output)? "" : "disabled"} class="button js-example">
              from output
            </button>            
          </div>            

            
              <label for="inputRange" class="arrayMethods--label">
                 array size :               <span class="js-rangeValue">
                            ${rangeValue ? rangeValue : "10"}
                            </span>
              </label>          
            
            <div class="valueButtons">              
              <input id="inputRange" type="range" value="${rangeValue ? rangeValue : "10"}" min="1" max="50" step="1" class="range js-range" />
           </div>


          <span class="arrayMethods--label">
          example array :
          </span>

          <div class="valueButtons">
            <button id="showExample" class="button ${showExampleActive ? "button--active" : ""} js-example">
             show example array
            </button>          
            <button id="saveToExample" class="button js-example">
              save array to example array
            </button>
            <button id="resetExample" class="button js-example">
              reset example array
            </button>
          </div>            
        `;

        return element;
      };

      const methodsArraySettings = (name, buttons, inputType, inputValue, inputPattern) => {
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
          ${inputType ? `<input type="text" name="${name}" value="${inputValue}" class="methodInput js-methodInput" />` : ""} 
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
            methods :
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
            <span class="settingsParagrap--arrays">const outputArray = [ ${viewArray(output)}    
            ];</span>` : (output)}  
        </div>
      </div>
    `;
  };

  const bindInputsAndButtons = () => {
    const randomElements = document.querySelectorAll(".js-random");
    const exampleElements = document.querySelectorAll(".js-example");

    const rangeElement = document.querySelector(".js-range");
    const rangeValueElement = document.querySelector(".js-rangeValue");


    const inputElements = document.querySelectorAll(".js-methodInput");
    const runButtonElements = document.querySelectorAll(".js-runButton");
    const typeButtonElements = document.querySelectorAll(".js-typeButton");

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
        case "randomEmoticons":
          useRandomEmoticons();
          break;
        case "randomMixed":
          useRandomMixed();
          break;
      };
    }));

    const useRandomNaturalNumbers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 100));
      };
      render();
    };

    const useRandomIntegers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 200 - 100));
      };
      render();
    };

    const useRandomLetters = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(letters.charAt(Math.floor(Math.random() * letters.length)));
      }
      render();
    }

    const useRandomWords = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayWords[Math.floor(Math.random() * arrayWords.length)]);
      }
      render();
    }
    
    const useRandomEmoticons = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayEmoticons[Math.floor(Math.random() * arrayEmoticons.length)]);
      }
      render();      
    }

    const useRandomMixed = () => {
      const arrayLetters = [];
      for (let a = 0; a < letters.length; a++) {
        arrayLetters.push(letters.charAt(a))
      }

      const arrayIntegers = [];
      for (let a = -100; a < 101; a++) {
        arrayIntegers.push(a)
      };

      const mixArray = [...arrayLetters, ...arrayIntegers, ...arrayWords, ...arrayEmoticons]
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(mixArray[Math.floor(Math.random() * mixArray.length)]);
      }
      render();
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            showExample();
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

    const showExample = () => {
      showExampleActive = !showExampleActive
      render();
    }

    const loadFromExample = () => {
      if (arrayExampleSaved.length > 0) {
      array = [...arrayExampleSaved] }
      else {array = [...arrayExample]};
      render();
    }

    const saveToExample = () => {
      if (array.length > 0) {
      arrayExampleSaved = [...array];
      render();
    } else {
      output = "Not saved, array is empty.";
      renderOutput();
    }
    }
    
    const resetExample = () => {
      arrayExampleSaved = [];
      render();
    }
    
    const loadFromOutput = () => {
     if (Array.isArray(output)) {
       array = [...output];
       render();
     } 
    }

    rangeElement.addEventListener("input", ({ target }) => {
      rangeValueElement.textContent = target.value;
      rangeValue = rangeValueElement.textContent;
    })

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
              obj.active = true:
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
                  if (method.method === "slice") {
                  output = "The entered value is not allowed. Please enter a number or two numbers separated by a comma.";             
                  } else {
                  output = "Input value not allowed, use: \" \""};
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
      inputValue.slice(1, -1) :
      (!isNaN(inputValue) ? (inputValue !== "" ? Number(inputValue) : null) : inputValue)
    );
  };

  const readNumberOrString = (inputValue) => {
    return (
      (typeof(inputValue) === "number") ? inputValue :
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
  
  const clearOutput = () => {
    if(!Array.isArray(output)) {
      output = "";
    }
  }

  const render = () => {
    clearOutput();
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  render();
};