export const grid = () => {

   let buttonsObjectsRaw = [
      {
         properties: ["display"],
         propertiesValues: ["grid"]
      },
      {
         properties: ["justify-content"],
         propertiesValues: ["start", "center", "end", "space-between", "space-around", "stretch"]
      },
      {
         properties: ["align-content"],
         propertiesValues: ["start", "center", "end", "space-between", "space-around", "stretch"]
      },
      {
         properties: ["justify-items"],
         propertiesValues: ["start", "center", "end", "stretch"]
      },
      {
         properties: ["align-items"],
         propertiesValues: ["start", "center", "end", "stretch"]
      },
   ];

   let buttonsObjects = buttonsObjectsRaw.map((obj) => {
      return {
         properties: [{ name: obj.properties[0], active: true }],
         propertiesValues: obj.propertiesValues.map((val, index) => {
            return { name: val, active: index === 0 }
         }),
      };
   });

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML += `
         ${settingsContents()}
         ${buttonsContainer()}
      `;
   };

   const settingsContents = () => {
      let contentsElement = "";

      const settingsLabel = () => {
         let contentsElement = "";
         buttonsObjects.forEach((buttons) => {
            const active = (buttons.properties.find((buttons) => buttons.active === true))

            buttons.properties.forEach((prop) => {
               if (prop.active) {
                  contentsElement += `<p class="settingsParagraph settingsParagraph--grid">
                  ${prop.active ? prop.name : ""}`
               };
            });
            if (active !== undefined) {
               buttons.propertiesValues.forEach((prop) => {
                  if (prop.active) {
                     contentsElement += `:
                     ${prop.active ? prop.name : ""} </p>`
                  };
               });
            };
         });
         return contentsElement;
      };

      contentsElement += `
         <div class="settingsContents settingsContents--grid">
            <p class="settingsParagraph--grid">.parent{</p>
            
               <p class="settingsParagraph settingsParagraph--grid">  position: relative; </p>
               <p class="settingsParagraph settingsParagraph--grid">  border: 3px dashed white; </p>
               <p class="settingsParagraph settingsParagraph--grid">  background: purple; </p>
            
            <p class="settingsParagraph--grid">}</p>
            <p class="settingsParagraph--grid">.child{</p>
            
               ${settingsLabel()}
            
            <p class="settingsParagraph--grid">}</p>
         </div>
         `;

      return contentsElement;
   };

   const buttonsContainer = () => {
      let propsElements = "";

      propsElements += `<div class="settingsButtons">`
      buttonsObjects.forEach((object) => {
         let property = object.properties[0];
         propsElements += `<div class="propertyButtons">
               <button class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                  ${property.name}
               </button>
                &nbsp <strong>:</strong>
               </div>
               <div class="valueButtons">`
         object.propertiesValues.forEach((obj) => {
            propsElements += `
               <button class="button ${(obj.active) ? "button--active" : ""} js-${property.name}ValueButton">
                  ${obj.name}
               </button>
            `;
         })
         propsElements += `</div>`
      });
      propsElements += `</div>`

      return propsElements
   };

   const renderOutput = () => {
      const contentsElement = document.querySelector(".js-outputContainer");

      contentsElement.innerHTML = "";
      contentsElement.innerHTML += `
         <div class="outputContents outputContents--grid">
            <div class="outputLabel">OUTPUT :</div>
            <div class="outputLabelTop">TOP</div>
            <div class="outputLabelLeft">LEFT</div>
            <div class="outputLabelRight">RIGHT</div>
            <div class="outputLabelBottom">BOTTOM</div>
            <div class="outputLabelCenter">parent</div>
            <div class="outputParent js-outputParent">
               <div class="outputChild js-child">1</div>
               <div class="outputChild js-child">2</div>
               <div class="outputChild js-child">3</div>
               <div class="outputChild js-child">4</div>
               <div class="outputChild js-child">5</div>
            </div>
         </div>
         `;

      styles();
   };

   const styles = () => {
      const childStyles = document.querySelector(".js-outputParent");

      buttonsObjects.forEach((buttons) => {
         const activeProperties = (buttons.properties.find((buttons) => buttons.active === true));
         const activeValuesProperties = (buttons.propertiesValues.find((buttons) => buttons.active === true));
         childStyles.style[
            ((activeProperties === undefined) ? null : activeProperties.name)] = ((activeValuesProperties === undefined) ? null : activeValuesProperties.name);
      });
   };

   const bindPropertyButtons = () => {
      const buttonPropertyElements = document.querySelectorAll(".js-propertyButton");

      buttonPropertyElements.forEach((button) => {
         button.addEventListener("click", () => {
            buttonPropertyToggle(button);
            render();
         });
      });
   };

   const buttonPropertyToggle = (button) => {
      buttonsObjects.forEach(({ properties }) => {
         properties.forEach(prop => {
            if (prop.name === button.innerText) {
               prop.active = !prop.active;
            }
         });
      })
   };

   const bindValueButtons = () => {
      const buttonElements = [
         { selector: ".js-displayValueButton", value: 0 },
         { selector: ".js-justify-contentValueButton", value: 1 },
         { selector: ".js-align-contentValueButton", value: 2 },
         { selector: ".js-justify-itemsValueButton", value: 3 },
         { selector: ".js-align-itemsValueButton", value: 4 },
      ];

      buttonElements.forEach((button) => {
         const buttonValueElements = document.querySelectorAll(button.selector);

         buttonValueElements.forEach((buttonValue) => {
            buttonValue.addEventListener("click", () => {
               buttonValueToggle(buttonValue, button.value);
               render();
            });
         });
      });
   };

   const buttonValueToggle = (button, index) => {
      buttonsObjects[index].propertiesValues.forEach(prop => {
         if (prop.name === button.innerText) {
            prop.active = true;
         } else { prop.active = false }
      });
   };

   const render = () => {
      renderSettings();
      renderOutput();
      bindPropertyButtons();
      bindValueButtons();
   };

   render();
};






