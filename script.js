{
   const parametrs = () => {
      let properties = [
         { name: "top", active: false },
         { name: "right", active: false },
         { name: "bottom", active: false },
         { name: "left", active: false },
      ];
      let parametrsValues = [
         { name: "auto", active: false },
         { name: "30px", active: false },
         { name: "50%", active: false },
         { name: "0", active: false },
      ];
      let position = [
         { name: "position", active: false },
      ];
      let positionValues = [
         { name: "static", active: false },
         { name: "relative", active: false },
         { name: "absolute", active: false },
         { name: "fixed", active: false },
         { name: "sticky", active: false },
      ];

      const positioningRender = () => {
         renderSettings();
         bindPropertyButtons();
         bindValueButtons();
         bindPositionButton();
         bindPositionValuesButtons();
         renderContent();
      };

      const renderSettings = () => {
         const setingsElement = document.querySelector(".js-setings");

         setingsElement.innerHTML = "";
         setingsElement.innerHTML += `
         <div class="labelSetings">
            ${renderLabelSettings()}
         </div>
         <div class="contentsButtons">
            <div class="propertiesButtons">
               ${renderButtonsProperties()} :
            </div>
            <div class="valuesButtons">
               ${renderButtonsValues()}
            </div>
            <div class="propertiesButtons">
               ${renderButtonsPosition()} :
            </div>
            <div class="valuesButtons">
               ${renderButtonsPositionValues()}
            </div>
         </div>     
         `;
      };

      const renderLabelSettings = () => {
         let labelElement = "";
         labelElement += `
            <p class="styleContents">patern{</p>
            <p class="styleContent">
               &nbsp
            </p>
            <p class="styleContents">}</p>
               &nbsp
            <p class="styleContents">child{</p>
            <p class="styleContent">
               ${(((properties.find((property) => property.active === true))) === undefined) ? "&nbsp" : ((properties.find((property) => property.active === true)).name)}: 
               ${((parametrsValues.find((value) => value.active === true)) === undefined) ? "&nbsp" :
               ((parametrsValues.find((value) => value.active === true)).name)
               };
            </p>
            <p class="styleContents">}</p>
         `;
         return labelElement;
      };

      const renderButtonsProperties = () => {
         let propertiesElement = "";
         properties.forEach((property) => {
            propertiesElement +=
               `<button class="button 
                  ${(property.active) ? "button--active" : ""} 
                  js-buttonProperty">${property.name}
               </button>
               `;
         });

         return propertiesElement;
      };

      const renderButtonsValues = () => {
         let valuesElement = "";
         parametrsValues.forEach((value) => {
            valuesElement +=
               `<button class="button 
                  ${(value.active) ? "button--active" : ""} 
                  js-buttonValue">${value.name}
               </button>
               `;
         });

         return valuesElement;
      };

      const renderButtonsPosition = () => {
         let positionElement = "";
         position.forEach((position) => {
            positionElement +=
               `<button class="button 
            ${(position.active) ? "button--active" : ""} 
                  js-buttonPosition">${position.name}
               </button>
               `;
         }
         );
         return positionElement;
      };

      const renderButtonsPositionValues = () => {
         let positionValuesElement = "";
         positionValues.forEach((positionValues) => {
            positionValuesElement +=
               `<button class="button 
            ${(positionValues.active) ? "button--active" : ""} 
                  js-buttonPositionValues">${positionValues.name}
               </button>
               `;
         }
         );
         return positionValuesElement;
      };

      const bindPropertyButtons = () => {
         const propertyButtonElements = document.querySelectorAll(".js-buttonProperty");

         propertyButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               togglePropertyButtons(button);
            });
         });
      };

      const togglePropertyButtons = (button) => {
         properties = properties.map((property) =>
            (property.name === button.innerText)
               ?
               { ...property, active: true }
               :
               { ...property, active: false }
         );
         positioningRender();
      };

      const bindValueButtons = () => {
         const valueButtonElements = document.querySelectorAll(".js-buttonValue");

         valueButtonElements.forEach((valueButton) => {
            valueButton.addEventListener("click", () => {
               toggleValueButtons(valueButton);
            });
         });
      };

      const toggleValueButtons = (valueButton) => {
         parametrsValues = parametrsValues.map((value) =>
            (value.name === valueButton.innerText)
               ?
               { ...value, active: true }
               :
               { ...value, active: false }
         );
         positioningRender();
      };



      const bindPositionButton = () => {
         const positionButtonElements = document.querySelector(".js-buttonPosition");
         positionButtonElements.addEventListener("click", () => {
            togglePositionButton();
         });

      };

      const togglePositionButton = () => {
         position = position.map((position) =>
            ({ ...position, active: !position.active })

         );
         positioningRender();
      };


      const bindPositionValuesButtons = () => {
         const positionValuesButtonElements = document.querySelectorAll(".js-buttonPositionValues");

         positionValuesButtonElements.forEach((valueButton) => {
            valueButton.addEventListener("click", () => {
               togglePositionValuesButtons(valueButton);
            });
         });
      };

      const togglePositionValuesButtons = (valueButton) => {
         positionValues = positionValues.map((value) =>
            (value.name === valueButton.innerText)
               ?
               { ...value, active: true }
               :
               { ...value, active: false }
         );
         positioningRender();
      };



      const renderContent = () => {
         const contentsElement = document.querySelector(".js-contents");

         contentsElement.innerHTML = "";
         contentsElement.innerHTML += `
         <div class="contentPositioning">
            <div  class="labelPositioning">OUTPUT :</div>
            <div class="topPositioning">TOP</div>
            <div class="leftPositioning">LEFT</div>
            <div class="rightPositioning">RIGHT</div>
            <div class="bottomPositioning">BOTTOM</div>
            <div class="centerPositioning">Patern</div>
            <div class="paternPositioning">
               <div class="childPositioning js-child">Child</div>
            </div>
         </div>
         `;
         addStyles();
      };

      const addStyles = () => {
         const childStyles = document.querySelector(".childPositioning");
         const propertyStyle = (properties.find((property) => property.active === true)) === undefined ? null :
            (properties.find((property) => property.active === true)).name;
         const valueStyle = (parametrsValues.find((value) => value.active === true)) === undefined ? null :
            (parametrsValues.find((value) => value.active === true)).name;

         childStyles.style[propertyStyle] = valueStyle;
      };

      const init = () => {
         const positioningElement = document.querySelector(".js-buttonPositioning");
         positioningElement.addEventListener("click", () => {
            positioningRender();
            positioningElement.classList.add("button--active")
         })
      };

      init();
   }
   parametrs();
}