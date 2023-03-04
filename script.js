{
   const parametrs = () => {

      let buttonsObjectsRaw = [
         { properties: ["position"], propertiesValues: ["static", "relative", "absolute", "fixed", "sticky"] },
         { properties: ["top"], propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"] },
         { properties: ["right"], propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"] },
         { properties: ["bottom"], propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"] },
         { properties: ["left"], propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"] },
         { properties: ["transform"], propertiesValues: ["none", "translate(50px, 100px)", "scale(2, 2)", "rotate(45deg)"] },
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
         const setingsElement = document.querySelector(".js-setings");

         setingsElement.innerHTML = "";
         setingsElement.innerHTML += `
         <div class="labelSetings">
         ${settingsLabelContainer()}
         </div>
         ${buttonsContainer()}
         `;
      };

      const settingsLabelContainer = () => {
         let labelElement = "";

         const labelProperties = () => {
            let labelElement = "";
            buttonsObjects.forEach((buttons) => {
               const active = (buttons.properties.find((buttons) => buttons.active === true))

               buttons.properties.forEach((prop) => {
                  if (prop.active) {
                     labelElement += ` <p>
               ${prop.active ? prop.name : ""} `
                     const a = prop.active ? prop.name : "";
                  }
               })
               if (active !== undefined) {
                  buttons.propertiesValues.forEach((prop) => {

                     if (prop.active) {
                        labelElement += ` :
               ${prop.active ? prop.name : ""} </p>`
                        const b = prop.active ? prop.name : "";
                     }
                  })
               }
            })
            return labelElement;
         };

         labelElement += `
            <div class="styleContents">.parent{</div>
            <div class="styleContent">
               <p>  position: relative; </p>
               <p>  border: 3px dashed white; </p>
               <p>  background: purple; </p>
            </div>
            <div class="styleContents">}</div>
               &nbsp
            <div class="styleContents">.child{</div>
            <div class="styleContent">
         ${labelProperties()}
            </div>
            <div class="styleContents">}</div>
         `;

         return labelElement;
      };

      const buttonsContainer = () => {
         let propsElements = "";

         propsElements += `<div class="contentsButtons">`
         buttonsObjects.forEach((object) => {
            property = object.properties[0];
            propsElements += `<div class="propertyButtons">
               <button class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                  ${property.name}
               </button>
               </div>
               <div class="valueButtons"> &nbsp : `
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

      const renderContents = () => {
         const contentsElement = document.querySelector(".js-contents");

         contentsElement.innerHTML = "";
         contentsElement.innerHTML += `
         <div class="contentPositioning">
            <div class="labelPositioning">OUTPUT :</div>
            <div class="topPositioning">TOP</div>
            <div class="leftPositioning">LEFT</div>
            <div class="rightPositioning">RIGHT</div>
            <div class="bottomPositioning">BOTTOM</div>
            <div class="centerPositioning">parent</div>
            <div class="parentPositioning">
               <p class="childPositioning js-child">child</p>
               <p class="childPositioning--default">child with default settings</p>
            </div>
         </div>
         `;

         styles();
      };

      const styles = () => {
         const childStyles = document.querySelector(".childPositioning");

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
               activeValue = buttonPropertyToggle(button);
               render();
            });
         });
      };

      const buttonPropertyToggle = (button) => {
         buttonsObjects.forEach((buttonsObject, index) => {
            buttonsObject.properties.forEach(prop => {
               if (prop.name === button.innerText) {
                  prop.active = !prop.active;
               }
            });
         })
      };

      const bindValueButtons = () => {
         const buttonElements = [
            { selector: ".js-positionValueButton", value: 0 },
            { selector: ".js-topValueButton", value: 1 },
            { selector: ".js-rightValueButton", value: 2 },
            { selector: ".js-bottomValueButton", value: 3 },
            { selector: ".js-leftValueButton", value: 4 },
            { selector: ".js-transformValueButton", value: 5 },
         ];

         buttonElements.forEach((button) => {
            const buttonValueElements = document.querySelectorAll(button.selector);

            buttonValueElements.forEach((buttonValue) => {
               buttonValue.addEventListener("click", () => {
                  activeValue = buttonValueToggle(buttonValue, button.value);
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
         renderContents();
         bindPropertyButtons();
         bindValueButtons();
      };

      const init = () => {
         const positioningElement = document.querySelector(".js-buttonPositioning");

         positioningElement.addEventListener("click", () => {
            render();
            console.log(buttonsObjects);
            positioningElement.classList.add("button--active")

         })
      };

      init();
   }
   parametrs();
}