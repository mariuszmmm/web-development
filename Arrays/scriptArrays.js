import { methodsArrayRaw } from "./methodsArrayRaw.js"

export const arrays = () => {
  // let methodsArray = [];
  let index = 0;

  let exampleArray1 = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
  let exampleArray2 = [1, 2, 22, 54, 0, 2, 4, 8, 1, 8, 1];
  let exampleArray3 = ["aaa", "ccc", "uuu", "ooo"];
  let exampleArray4 = [];

  let array = [];
  let defaultArray = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
  let savedDefaultArray = [];
  let output;
  const arrayNaN = [null, false, true, NaN, undefined];

  const methodsArray = methodsArrayRaw.map((method) => {
    return {
      method: method.method,
      type: method.type.map((val, i) => {

        return {
          name: val, active: i === 0,
          Comparison: `
            ${(val === "=") ? "element => element === ( )" : ""}
            ${(val === "<") ? "element => element < ( )" : ""}
            ${(val === "<") ? "element => element > ( )" : ""}
          `
        }
      }),
      withInput: method.withInput
    }
  })

  console.log(methodsArray)

  const viewArray = (exampleArray) => {
    let element = "";

    exampleArray.forEach((arrayElement, index) => {
      element += `<span class="settingsParagraph--grid">
          ${(((typeof (arrayElement) === "number") || (arrayNaN.some(elementNaN => elementNaN === arrayElement))) ?
          (arrayElement)
          :
          (`"` + arrayElement + `"`)) + ((exampleArray.length === index + 1) ? "" : ", ")}
          </span>
        `;
    });
    return element
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      ${leabelContents()}
      ${methodsSettings()}      
      `;
  };

  const leabelContents = () => {
    let contentsElement = "";

    contentsElement += `
        <div class="settingsContents">
          <span class="settingsParagraph--grid">const array = [</span>
          ${viewArray(array)}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
          <span class="settingsParagraph--grid">const defaultArray = [</span>
          ${viewArray(defaultArray)}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
        </div>
      `;

    return contentsElement;
  };

  const methodsSettings = () => {
    let methodsSetingsElement = "";

    const inputArraySettings = (name, value) => {
      let element = "";
      element += `
            <div class="propertyButtons propertyButtons--grid">
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
            <div class="propertyButtons propertyButtons--grid">
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

      return element
    };

    const methodsArraySettings = (name, input, type) => {

      let element = "";
      element += `
            <div class="propertyButtons propertyButtons--grid">
               <span class="settingsMethod">
                 array.${name}</span>
            </div>
            <div class="valueButtons">
               <span class="settingsMethod">
                  (${(input) ? `<input name="${name}" class="methodInput js-methodInput" />` : " "})
               </span>
               <button id="${name}" class="button js-runButton">
                  ${name}
               </button>`

      type.forEach((elem) => {


        element += `  
 <button id="" class="button ${elem.active ? "button--active" : ""} js-typeButton">
 ${elem.name}
</button>

  `;
      })
      element += `</div>
         `;

      return element
    };

    methodsSetingsElement += `
        <div class="buttonsContainer">
          <div class="settingsButtons">
            ${inputArraySettings("array")}
          </div>
          <div class="settingsButtons">`
    methodsArray.forEach((object) =>
      methodsSetingsElement += `
      ${methodsArraySettings(object.method, object.withInput, object.type)}
    `)
    methodsSetingsElement += `</div>            
        </div>
      `;

    return methodsSetingsElement
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    const outputArray = () => {
      let element = "";

      output.forEach((arrayElement, index) => {
        element += `<span class="settingsParagraph--grid">
          ${(((typeof (arrayElement) === "number") || (arrayNaN.some(elementNaN => elementNaN === arrayElement))) ?
            (arrayElement)
            :
            (`"` + arrayElement + `"`)) + ((output.length === index + 1) ? "" : ", ")}
          </span>
        `;
      });

      return element;
    }

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
         <div class="outputContents outputContents--arrays">
            <div class="outputLabel">OUTPUT :</div>

            ${Array.isArray(output) ? `
            <span class="settingsParagraph--grid">const outputArray = [</span>
            ${outputArray()}
            <span class="settingsParagraph--grid">];</span>
            <p></p> ` : `${output ? output : ""}`
      }  
            </div>
         </div>
         `;
  }

  const bindMethodButtons = () => {
    const randomNumberArrayElement = document.querySelector(".js-randomNumberArray");
    const randomStringArrayElement = document.querySelector(".js-randomStringArray");
    const randomMixArrayElement = document.querySelector(".js-randomMixArray");
    const rangeArrayElement = document.querySelector(".js-rangeArray");
    const loadDefaultArrayElement = document.querySelector(".js-loadDefaultArray");
    const saveDefaultArrayElement = document.querySelector(".js-saveDefaultArray");
    const resetDefaultArrayElement = document.querySelector(".js-resetDefaultArray");
    const loadOutputArrayElement = document.querySelector(".js-loadOutputArrayArray");

    const methodInputElements = document.querySelectorAll(".js-methodInput")
    const runButtonElements = document.querySelectorAll(".js-runButton")
    let inputValue;

    runButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        methodInputElements.forEach((input) => {
          if (input.name === button.id) {
            inputValue = input.value
          }
        });

        const enterNumberOrString = () => {
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
          )
        };

        switch (button.innerText) {
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
            output = array.push(enterNumberOrString());
            break;
          case "unshift":
            output = array.unshift(enterNumberOrString());
            break;
          case "map":
            output = array.map(element => element === enterNumberOrString());
            break;
          case "filter":
            output = array.filter(element => element === enterNumberOrString());
            break;
          case "at":
            output = array.at(enterNumberOrString());
            break;
          case "slice":
            output = array.slice(enterNumberOrString());
            break;
          case "indexOf":
            output = array.indexOf(enterNumberOrString());
            break;
          case "lastIndexOf":
            output = array.lastIndexOf(enterNumberOrString());
            break;
        }

        render();
      })
    });
  };

  const render = () => {
    renderSettings();
    renderOutput();
    bindMethodButtons();
  };

  render();
};

