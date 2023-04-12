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

   buttonsArrayRaw.forEach((buttons) => {
      for (const value of buttons.destiny) {
         buttonsArray = [...buttonsArray, {
            properties: [{ name: buttons.properties[0], active: index === 0, key: `${index}` }],
            propertiesValues: buttons.propertiesValues.map((val, i) => {
               index++;

               return { name: val, active: i === 0, key: `${index}` }
            }),
            destiny: value
         },
         ];
         index++;
      }
   })

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
               <button class="button js-${name}Button">
                  ${name}
               </button>
               <span class="strong">
                 :
               </span>
            </div>
            <div class="valueButtons">
               <span class="settingsMethod">
                 array.${name}(<input type="${type}" class="inputMethod js-${name}input" />)
               </span>
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
               ${methodArray("unshift")}
               ${methodArray("filter")}
               ${methodArray("indexOf", "number")}
               ${methodArray("lastIndexOf", "number")}
            </div>            
         </div>
      `;

      return formElement
   };


   const renderOutput = () => {
      const outputElement = document.querySelector(".js-outputContainer");

      const testOutput = (name) => {
         let element = "";

         if (name === "array_1") {

            exampleArray1.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((exampleArray1.length === index + 1) ? "" : ", ")}</span>`;
            });
         }
         return element;
      }


      outputElement.innerHTML = "";
      outputElement.innerHTML += `
         <div class="outputContents outputContents--arrays">
            <div class="outputLabel">OUTPUT :</div>


            <span class="settingsParagraph--grid">const array_1 = [</span>
            ${testOutput("array_1")}
            <span class="settingsParagraph--grid">];</span>
            <p></p>


         
            </div>
         </div>
         `;
   }

   const bindSettingButtons = () => {
      // const inputArrayElement = document.querySelector(".js-inputArray");
      // const addToArrayElement = document.querySelector(".js-addToArray");


      // addToArrayElement.addEventListener("click", () => {

      //   render();
      // });
   };

   const render = () => {
      renderSettings();
      renderOutput();
      bindSettingButtons();
      // bindValueButtons();
   };

   render();
};

