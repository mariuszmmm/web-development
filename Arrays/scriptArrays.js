import { methodsArrayRaw } from "./methodsArrayRaw.js"
import { arrayExample, letters, arrayWords, arrayEmoticons, arrayObjects } from "./arrays.js"

export const arrays = () => {
  let array = [];
  let methodContent = [];
  let output = "";
  let rangeValue;
  let arrayExampleSaved = [];
  let showExampleActive = true;
  let objectNotString;

  const methodsArray = methodsArrayRaw.map((object) => {

    return {
      method: object.method,
      methodButtons: object.methodButtons.map((button, index) => {

        return {
          name: button,
          active: index === 0,
          methodContent: (button === "(a*?)") ? "a => a * " :
            (button === "(a**?)") ? "a => a ** " :
              (button === "(a+?)") ? "a => a + " :
                (button === "(a=?)") ? "a => a = " :
                  (button === "(a===?)") ? "a => a === " :
                    (button === "(a!==?)") ? "a => a !== " :
                      (button === "(a>?)") ? "a => a > " :
                        (button === "(a.length>?)") ? "a => a.length > " :
                          (button === "(a%2===?)") ? "a => a % 2 === " :
                            (button === "( )") ? "" :
                              (button === "((a,b)=>a-b)") ? "(a,b) => a-b" :
                                (button === "((a,b)=>b-a)") ? "(a,b) => b-a" :

                                  (button === "((a,b)=>a.localeCompare(b))") ? "(a,b) => a.localeCompare(b)" : (button === "((a,b)=>b.localeCompare(a))") ? "(a,b) => b.localeCompare(a)" : (button === "((a,b)=>a.name.localeCompare(b.name))") ? "(a,b) => a.name.localeCompare(b.name)" : (button === "((a,b)=>b.name.localeCompare(a.name))") ? "(a,b) => b.name.localeCompare(a.name)" : (button === "((a,b)=>a.age-b.age)") ? "(a,b) => a.age-b.age" : (button === "((a,b)=>b.age-a.age)") ? "(a,b) => b.age-a.age" : (button === "((a,b)=>a[0].localeCompare(b[0]))") ? "(a,b) => a[0].localeCompare(b[0])" : (button === "((a,b)=>b[0].localeCompare(a[0]))") ? "(a,b) => b[0].localeCompare(a[0])" : (button === "(a=>a.name===?)") ? "a => a.name === " : (button === "(a=>a[0]===?)") ? "a => a[0] === " : (button === "(a=>({...a,country:?}))") ? "a => ({ ...a, country: " : ""
        }
      }),
      inputType: object.inputType,
      inputValue: "",
      inputPattern: object.inputPattern
    }
  });

  const searchActiveButtons = (button) => {
    let content = "";
    methodsArray.forEach((object) => {
      if (object.name === button) {
        object.methodButtons.forEach((button) => {
          if (button.active === true) {
            content = button.name
          };
        });
      };
    });
    console.log(content)
    return content;
  }

  const changeArrowFunctionIfObject = (name) => {

    let content = "";
    const arrowFunctionForObjects = ["(a=>({...a,country:?}))"];
    if (!!name) {

    methodsArray.forEach((obj) => {
      if (obj.method === name) {
        console.log(name)
        obj.methodButtons.forEach((button) => {
          if (button.active === true) {
          

            if (arrowFunctionForObjects.includes(button.name)) {
              content = "})";
            }  
          };
        });
      };
    });
    console.log(content)
    return content;
  }



    // methodsArray.forEach((object) => {
    //   if (object.method === "map") {
    //     object.methodButtons.forEach((button) => {
    //       if (button.name === "(a=>({...a,country:?}))" && button.active === true)
    //         content = "})"
    //     });
    //   };
    // });

  };

  console.log(changeArrowFunctionIfObject())




  console.log(methodsArray);
  const viewArray = (exampleArray) => {

    let element = "";
    exampleArray.forEach((arrayElement, index) => {

      element += `
        <span class="settingsParagraph--arrays nowrap">
          ${typeof (arrayElement) === "string" ?
          ((arrayElement[0] === `"` && arrayElement[arrayElement.length - 1] === `"`) ? arrayElement : (`"` + arrayElement + `"`))
          + ((exampleArray.length === index + 1) ? "" : ",")
          :
          ((Array.isArray(arrayElement) ? viewSubArray(arrayElement) : ((typeof (arrayElement) === "object" && arrayElement !== null) ? viewObject(arrayElement) : arrayElement)) + ((exampleArray.length === index + 1) ? "" : ","))}</span>`;
    });

    return element;
  };

  const viewObject = (object) => {
    let content = "";
    let index = -1;
    for (let property in object) {
      index++
      content += property + ":" + (typeof (object[property]) === "string" ? (`"` + object[property] + `"`) : object[property]) + ((Object.keys(object).length === index + 1) ? "" : ",")
    }
    return `{` + content + `}`;
  };

  const viewSubArray = (subArray) => {
    console.log(subArray.length)
    let content = "";
    subArray.forEach((subArrayElement, index) => {
      content += `
      ${typeof (subArrayElement) === "string" ?
          (((`"` + subArrayElement + `"`))
            + ((subArray.length === index + 1) ? "" : ",")) :
          subArrayElement + ((subArray.length === index + 1) ? "" : ",")}
        `
    });

    return `[` + content + `]`;
  }

  const vievMethodContent = (methodContent) => {
    let element = "";
    element += `
      <span class="settingsParagraph--arrays strong">
        array.${methodContent[0]}( ${(methodContent[1] !== undefined) ?
        (typeof (methodContent[1]) === "string" ?
          (methodContent[1])
          :
          ((typeof (methodContent[1]) === "object") ? methodContent[1].name : methodContent[1]))
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
        <div class="settingsContents settingsContents--array">
          <p class="settingsParagraph--arrays strong">const array = [
          
          ${(array.length > 0) ? `
          </p>
          <p class="settingsParagraph">
            ${viewArray(array)}
          </p>
          <p class="settingsParagraph--arrays strong">
          ` : ""}
          
          ];</p>
          <p></p>
         ${showExampleActive ? `<p class="settingsParagraph--arrays strong">const exampleArray = [</p>
          <p class="settingsParagraph">
            ${viewArray(arrayExampleSaved.length > 0 ? arrayExampleSaved : arrayExample)}
          </p>
          <p class="settingsParagraph--arrays strong">];</p>
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
            <button id="randomObjects" class="button js-random">
              random objects
            </button>
            <button id="randomArrays" class="button js-random">
              random arrays
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
            <button id="loadFromOutput" ${Array.isArray(output) ? "" : "disabled"} class="button js-example">
              from output
            </button>            
          </div>            
            
              <label for="inputRange" class="arrayMethods--label">
                 array size :               <span class="js-rangeValue">
                            ${rangeValue ? rangeValue : "10"}
                            </span>
              </label>          
            
            <div class="valueButtons">              
              <input id="inputRange" type="range" value="${rangeValue ? rangeValue : "10"}" min="1" max="30" step="1" class="range js-range" />
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
          ${inputType ? `<input type="text" name="${name}" value="" class="methodInput js-methodInput" />` : ""} 
          `;

        buttons.forEach((button) => {

          element += `
              ${!!button.active ? changeArrowFunctionIfObject(name) : ""}`

        });
        
        const searchX = (text, param) => {
          let a;
          if(text.includes("?")) {
            if (param !== "disabled") {
             a = text + "n"
            //   a = text.replace("?", `<span class="unknown"> ? </span>`)
            } else {
              a = text + "d"
              //a = text.replace("?", `<span> ? </span>`)
            }
          } else { a = text}
          console.log(methodsArray)
           return a
          }

        element += `
              ) 
            </div>
          </div>
          
          <div class="valueButtons valueButtons--arrays">
            <button id="${name}" class="button button--array button--run js-runButton">
              run
            </button>
          </div>
            
          <div class="valueButtons valueButtons--arrays">
            
        `;

        buttons.forEach((button) => {

          const conditionalValues = ["((a,b)=>a-b)", "((a,b)=>b-a)", "((a,b)=>a.localeCompare(b))", "((a,b)=>b.localeCompare(a))", "((a,b)=>a.name.localeCompare(b.name))", "((a,b)=>b.name.localeCompare(a.name))", "((a,b)=>a[0].localeCompare(b[0]))", "((a,b)=>b[0].localeCompare(a[0]))", "((a,b)=>a.age-b.age)", "((a,b)=>b.age-a.age)", "(a=>a.name===?)", "(a=>a[0]===?)"];
          if (
            (!conditionalValues.includes(button.name))
            ||
            (array.every(item => typeof (item) === "number") && (button.name === "((a,b)=>a-b)" || button.name === "((a,b)=>b-a)"))
            ||
            (array.every(item => typeof (item) === "string") && (button.name === "((a,b)=>a.localeCompare(b))" || button.name === "((a,b)=>b.localeCompare(a))"))
            ||
            (array.every(item => typeof (item) === "object" && !Array.isArray(item)) && (button.name === "((a,b)=>a.name.localeCompare(b.name))" || button.name === "((a,b)=>b.name.localeCompare(a.name))" ||
              button.name === "((a,b)=>a.age-b.age)" ||
              button.name === "((a,b)=>b.age-a.age)" || button.name === "(a=>a.name===?)"
            ))
            ||
            (array.every(item => Array.isArray(item)) && (button.name === "((a,b)=>a[0].localeCompare(b[0]))" || button.name === "((a,b)=>b[0].localeCompare(a[0]))" || button.name === "(a=>a[0]===?)"))
          ) {
            element += `  
            <button name="${name}" class="button button--array ${button.active ? "button--active" : ""} js-typeButton">
             ${searchX(button.name,null)}
            </button>
          `;
          } else {
            element += `  
              <button name="${name}" disabled class="button button--array ${button.active ? "button--active" : ""} js-typeButton">
             ${searchX(button.name,"disabled")}
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
            ${arraySettings("array")}
          </div>
          <span class="arrayMethods--label">
            methods :
          </span>
          <div class="settingsButtons settingsButtons--array">
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
            <p class="settingsParagraph--arrays strong">[
              ${viewArray(output)}  
            ]</p>` :
        typeof (output) === "object" ? `
            <p class="settingsParagraph--arrays strong">
              ${viewObject(output)}  
            </p>` :
          ((typeof (output) === "string" && methodContent.length > 0) ?
            (output !== "" ? `"` + output + `"` : output)
            :
            output)
      }  
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
        case "randomObjects":
          useRandomObjects();
          break;
        case "randomArrays":
          useRandomArrays();
          break;
        case "randomEmoticons":
          useRandomEmoticons();
          break;
        case "randomMixed":
          useRandomMixed();
          break;
      };
    }));

    const arrayLetters = [];
    for (let a = 0; a < letters.length; a++) {
      arrayLetters.push(letters.charAt(a))
    }

    const arrayIntegers = [];
    for (let a = -100; a < 101; a++) {
      arrayIntegers.push(a)
    };

    const mixArray = [...arrayLetters, ...arrayIntegers, ...arrayWords, ...arrayEmoticons]

    const resetTypeButton = () => {
      methodsArray.forEach(element => {

        if (element.method === "sort") {
          element.methodButtons.forEach(button => {
            button.name === "( )" ? button.active = true : button.active = false
          })
        }
        if (element.method === "find") {
          element.methodButtons.forEach(button => {
            button.name === "(a.length>?)" ? button.active = true : button.active = false
          })
        }
      })
    }

    const useRandomNaturalNumbers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 100));
      };
      resetTypeButton();
      render();
    };

    const useRandomIntegers = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(Math.floor(Math.random() * 200 - 100));
      };
      resetTypeButton();
      render();
    };

    const useRandomLetters = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(letters.charAt(Math.floor(Math.random() * letters.length)));
      }
      resetTypeButton();
      render();
    }

    const useRandomWords = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayWords[Math.floor(Math.random() * arrayWords.length)]);
      }
      resetTypeButton();
      render();
    }

    const useRandomArrays = () => {
      array = [];
      console.log(mixArray)

      while (array.length < rangeValueElement.textContent) {

        const arrayItem = () => {
          let subArray = [];
          while (subArray.length < 3) {
            subArray.push(arrayWords[Math.floor(Math.random() * arrayWords.length)]);
          };
          return subArray
        };

        array.push(arrayItem())


      }
      console.log(array)
      resetTypeButton();
      render();
    }

    const useRandomObjects = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayObjects[Math.floor(Math.random() * arrayObjects.length)]);
      };
      resetTypeButton();
      render();
    }

    const useRandomEmoticons = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(arrayEmoticons[Math.floor(Math.random() * arrayEmoticons.length)]);
      };
      resetTypeButton();
      render();
    }

    const useRandomMixed = () => {
      array = [];
      while (array.length < rangeValueElement.textContent) {
        array.push(mixArray[Math.floor(Math.random() * mixArray.length)]);
      }
      resetTypeButton();
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
        array = [...arrayExampleSaved]
      }
      else { array = [...arrayExample] };
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
                const pattern = method.inputPattern;
                console.log(input.value)
                console.log(typeof (input.value))
                if (pattern.test(input.value)) {
                  console.log("przesło patern")
                  if ((method.method === "filter" || method.method === "find" || method.method === "findIndex" || method.method === "some")
                    && !!method.methodButtons[0].active
                    && (array.includes(null) || array.includes(undefined))) {
                    render();
                    if (array.includes(null)) {
                      output = "Error: Cannot read properties of null (reading 'length')";
                    }
                    if (array.includes(undefined)) {
                      output = "Error: Cannot read properties of undefined (reading 'length')";
                    }
                    renderOutput();

                    return
                  } else {
                    console.log(enterNumberOrString(input.value))
                    if (typeof (enterNumberOrString(input.value)) === "object") {
                      console.log("jest runMethod")
                      runMethod(button.id, enterNumberOrString(input.value), method.method);
                      render();
                    } else {
                      console.log("else runMethod")
                      console.log(button.id, enterNumberOrString(input.value), method.method)
                      runMethod(button.id, enterNumberOrString(input.value), method.method);
                      render();
                    }
                  }
                } else {
                  methodContent = []
                  if (method.method === "slice") {
                    output = "The entered value is not allowed. Please enter a number or two numbers separated by a comma.";
                  } else {
                    output = "Input value not allowed, use: \" \""
                  };
                  input.focus();
                  renderOutput();

                  return
                };
              };
            });
          };
        });

        methodsArray.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            console.log("!method.inputType")
            runMethod(button.id, null, method.method)
            render();
          };
        });
      });
    });
  };


  // output = array.length
  // output = array.concat(arrayExample)
  // output = [...array, ...array Example]
  // output = array.toReversed()
  // output = array.toSorted()
  // output = array.toSpliced()
  // output = array.join("_")
  // output = array.reduce(  )
  //  output = array.find(a => a.name === "Leon")




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
      case "sort":
        methodContent = [method, (enterContentForArrowFunction(button, null)), "arrowFunction"];
        output = array.sort(enterContentForArrowFunction(button, null));
        break;
      case "join":
        console.log(enterNumberOrString(inputValue))
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
        console.log(enterNumberOrString(inputValue))
        output = array.indexOf(readNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
        break;
      case "lastIndexOf":
        output = array.lastIndexOf(readNumberOrString(inputValue));
        methodContent = [method, enterNumberOrString(inputValue)];
        break;
    };
    console.log("array", array);
    console.log("methodContent", methodContent);
    console.log("output", output);
  };

  const enterNumberOrString = (inputValue) => {
    console.log(inputValue)
    return (
      (inputValue !== "null" && inputValue !== "true" && inputValue !== "false" && inputValue !== "undefined" && inputValue !== "NaN") ?
        (typeof (inputValue) === "string" ? (inputValue) : "")
        :
        (!isNaN(inputValue) ?
          (inputValue !== "" ? (Number(inputValue)) : null) :
          notString(inputValue)
        )
    );
  };

  const notString = (inputValue) => {
    console.log(inputValue)
    console.log(typeof (inputValue))
    switch (inputValue) {
      case "null":
        objectNotString = { name: null };
        return objectNotString
        break;
      case "undefined":
        objectNotString = { name: undefined };
        return objectNotString
        break;
      case "NaN":
        objectNotString = { name: NaN };
        return objectNotString
        break;
      case "true":
        objectNotString = { name: true };
        return objectNotString
        break;
      case "false":
        objectNotString = { name: false };
        return objectNotString
        break;
      default:
        return inputValue.includes(",") ? inputValue : undefined;
        break;
    }
  }

  const readNumberOrString = (inputValue, content) => {
    console.log(inputValue)

    return (
      (typeof (inputValue) === "string") ?
        ((inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"`) ?
          (content === "forArrowFunction" ? inputValue : inputValue.slice(1, -1)) : Number(inputValue))
        :
        ((typeof (inputValue) === "object") ? inputValue.name : Number(inputValue))
    );
  };


  const enterContentForArrowFunction = (button, inputValue) => {
    let content;
    console.log(button)
    methodsArray.forEach((method) => {
      if (method.method === button) {
        method.methodButtons.forEach((element) => {
          if (element.active) {

            content = element.methodContent + (inputValue ? (inputValue + (changeArrowFunctionIfObject(button))) : "")
            // console.log("content", content)
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

  const clearOutput = () => {
    if (!Array.isArray(output)) {
      output = "";
    }
  }

  const render = () => {
    // clearOutput();
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  render();
};