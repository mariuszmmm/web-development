import { buttonsArrayRaw } from "./buttonsArrayRaw.js"

export const arrays = () => {
   let buttonsArray = [];
   let index = 0;

   let exampleArray1 = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
   let exampleArray2 = [1, 2, 22, 54, 0, 2, 4, 8, 1, 8, 1];
   let exampleArray3 = ["aaa", "ccc", "uuu", "ooo"];
   let exampleArray4 = [];

   let array = [];
   let defaultArray = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
   let savedDefaultArray = [];
   let output;

   // buttonsArrayRaw.forEach((buttons) => {
   //    for (const value of buttons.destiny) {
   //       buttonsArray = [...buttonsArray, {
   //          properties: [{ name: buttons.properties[0], active: index === 0, key: `${index}` }],
   //          propertiesValues: buttons.propertiesValues.map((val, i) => {
   //             index++;

   //             return { name: val, active: i === 0, key: `${index}` }
   //          }),
   //          destiny: value
   //       },
   //       ];
   //       index++;
   //    }
   // })

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML += `
      ${settingsContents()}
      ${settingsForm()}      
      `;
   };

   const settingsContents = () => {
      let contentsElement = "";

      const settingsLabel = (name) => {
         let element = "";

         if (name === "array") {

            array.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((array.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         if (name === "defaultArray") {
            defaultArray.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((defaultArray.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         return element;
      };

      contentsElement += `
        <div class="settingsContents">
          <span class="settingsParagraph--grid">const array = [</span>
          ${settingsLabel("array")}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
          <span class="settingsParagraph--grid">const defaultArray = [</span>
          ${settingsLabel("defaultArray")}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
        </div>
      `;

      return contentsElement;
   };

   const settingsForm = () => {
      let formElement = "";

      const formContainer = (container) => {
         let element = "";

         buttonsArray.forEach((buttons) => {
            if (buttons.destiny !== container) {
               let property = null;
               let key = null;

               element += `
              <div class="propertyButtons propertyButtons--grid">
                <button id="${key}" class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                  ${property.name}
                </button>
                <span class="strong">
                  :
                </span>
              </div>
              <div class="valueButtons">
            `;

               buttons.propertiesValues.forEach((button) => {
                  element += `
                <button id="${button.key}" 
                  ${(property.active) ? "" : "disabled"} 
                  class="button ${(button.active && property.active) ? "button--active" : ""} js-${property.key}groupValueButtons">
                  ${formatTextArea(button.name)[1]}
                </button>
              `;
               })
               element += `
              </div>
            `;
            };
         });

         return element
      };

      const inputArray = (name, value) => {
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

      const methodArray = (name, type) => {
         let element = "";
         element += `
            <div class="propertyButtons propertyButtons--grid">
               <span class="settingsMethod">
                 array.${name}</span>
            </div>
            <div class="valueButtons">
               <span class="settingsMethod">
                  (<input id="${name}" type="${type}" class="methodInput js-methodInput" />)
               </span>
               <button id="${name}" class="button js-runButton">
                  ${name}
               </button>
            </div>
         `;
         return element
      };

      formElement += `
         <div class="buttonsContainer">
            <div class="settingsButtons">
               ${inputArray("array")}
            </div>
            <div class="settingsButtons">
               ${methodArray("push")}
               ${methodArray("unshift", "text")}
               ${methodArray("filter", "text")}
               ${methodArray("indexOf", "number")}
               ${methodArray("lastIndexOf", "number")}
            </div>            
         </div>
      `;

      return formElement
   };


   const renderOutput = () => {
      const outputElement = document.querySelector(".js-outputContainer");

      const outputArray = () => {
         let element = "";

         output.forEach((elementArray, index) => {
            element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((output.length === index + 1) ? "" : ", ")}</span>`;

            // console.log(elementArray.charAt(elementArray.length - 1) === `"`)

            // string.charAt(string.length - 1)
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
            <p></p> ` : "nie tablica"
         }  


         
            </div>
         </div>
         `;
   }

   const createNumbersArray = () => {

   };

   const bindSettingButtons = () => {
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


      runButtonElements.forEach((button, index) => {
         button.addEventListener("click", () => {
            // console.log(methodInputElements[index])
            // console.log(button)
            // console.log(button.innerText)
            // console.log(event.target)
            // console.log(index)
            // console.log(methodInputElements[index].value);
            // console.log(Number(methodInputElements[index]));
            // console.log(Number(methodInputElements[index].value));
            const test = () => {

               const inputValue = methodInputElements[index].value;
console.log(   ["null", "true", "false"].forEach((element) => element === inputValue));
               return (
               
               

                  ((inputValue.charAt(0) === `"`) && (inputValue.charAt(inputValue.length - 1) === `"`)) || ["null", "true", "false"].forEach((element) => element === inputValue)
                  ?       
                  // inputValue.slice(1, -1)
                  Number(inputValue)
                  :
                  ((!isNaN(Number(inputValue))) ? Number(inputValue) : (inputValue))
               
                  
               




               
               )
            };

            switch (button.innerText) {
               case "push":
console.log(test());

                  array.push(test());
                  output = array;
                  break;




            }
            //             console.log(array);         
            // console.log("output", output);
            render();
         })

      });

      randomNumberArrayElement.addEventListener("click", () => {
         // createNumbersArray(); 
         render();
      });
   };

   const render = () => {
      renderSettings();
      renderOutput();
      bindSettingButtons();
      // bindValueButtons();
   };

   render();
};

