import { buttonsArrayRaw } from "./buttonsArrayRaw.js"

export const arrays = () => {
   let buttonsArray = [];
   let index = 0;
   let exampleArray1 = ["one", "two", 1, 2, null, undefined, NaN, false, true, "sto", "🎬", "😎", "👍", "📋"];
   let exampleArray2 = [1, 2, 22, 54, 0, 2, 4, 8, 1, 8, 1];
   let exampleArray3 = ["aaa", "ccc", "uuu", "ooo"];
   let exampleArray4 = [];

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

         if (name === "array_1") {

            exampleArray1.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((exampleArray1.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         if (name === "array_2") {
            exampleArray2.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((exampleArray2.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         if (name === "array_3") {
            exampleArray3.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((exampleArray3.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         if (name === "array_4") {
            exampleArray4.forEach((elementArray, index) => {
               element += `<span class="settingsParagraph--grid">${((!isNaN(elementArray) || Number.isNaN(elementArray) || (elementArray === undefined)) ? elementArray : (`"` + elementArray + `"`)) + ((exampleArray4.length === index + 1) ? "" : ", ")}</span>`;
            });
         }

         return element;
      };

      contentsElement += `
        <div class="settingsContents">
          <span class="settingsParagraph--grid">const array_1 = [</span>
          ${settingsLabel("array_1")}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
          <span class="settingsParagraph--grid">const array_2 = [</span>
          ${settingsLabel("array_2")}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
          <span class="settingsParagraph--grid">const array_3 = [</span>
          ${settingsLabel("array_3")}
          <span class="settingsParagraph--grid">];</span>
          <p></p>
          <span class="settingsParagraph--grid">const array_4 = [</span>
          ${settingsLabel("array_4")}
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
                 ${name}
               </span>
               <span class="strong">
                 :
               </span>
            </div>
            <div class="valueButtons">
               <input class="input js-input${name}" />
               <button class="button js-add${name}">
                  &nbsp Add string &nbsp
               </button>
               <button class="button js-addNumber${name}">
                  &nbsp Add number &nbsp
               </button>
               <button class="button js-loadOutput${name}">
                  &nbsp Load from output &nbsp
               </button>
            </div>
            <div class="propertyButtons propertyButtons--grid">
               <span class="settingsChild">
                  Default
               </span>
               <span class="strong">
                  :
               </span>
            </div>
            <div class="valueButtons">
               <button class="button js-loadDefault${name}">
                  &nbsp Load from default &nbsp
               </button>
               <button class="button js-saveDefault${name}">
                  &nbsp Save to default &nbsp
               </button>
               <button class="button js-resetDefault${name}">
                  &nbsp Reset default &nbsp
               </button>
            </div>
            <div class="propertyButtons propertyButtons--grid">
               <span class="settingsChild">
                Random
               </span>
               <span class="strong">
                  :
               </span>
            </div>
            <div class="valueButtons">
               <button class="button js-randomNumber${name}">
                  &nbsp Number &nbsp
               </button>
               <button class="button js-randomString${name}">
                  &nbsp String &nbsp
               </button>
               <button class="button js-randomMix${name}">
                  &nbsp Mix &nbsp
               </button>
               <input type="range" class="range js-range${name}" />
            </div>
         `;

         return element
      };

      formElement += `
        <div class="buttonsContainer">
          <div class="settingsButtons">
            ${inputArray("Array_1")}
          </div>
          <div class="settingsButtons">
             ${inputArray("Array_2")}
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

   const render = () => {
      renderSettings();
      renderOutput();
      // bindPropertyButtons();
      // bindValueButtons();
   };

   render();
};

