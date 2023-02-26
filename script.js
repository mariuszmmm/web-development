{
   const parametrs = () => {
      let properties = [
         { name: "top", active: true },
         { name: "right", active: false },
         { name: "bottom", active: false },
         { name: "left", active: false },
      ];
      let values = [
         { name: "auto", active: true },
         { name: "30px", active: false },
         { name: "50%", active: false },
         { name: "0", active: false },
      ];

      const positioningRender = () => {
         renderSettings();
         bindPropertyButtons();
         bindValueButtons();
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
            ${renderButtonsProperties()} :
            ${renderButtonsValues()}
         </div>    
         `;
      };

      const renderLabelSettings = () => {
         let labelElement = "";
         labelElement += `
            <p class="styleContents">child{</p>
            <p class="styleContent">
               ${(properties.find((property) => property.active === true)).name} :
               ${(values.find((value) => value.active === true)).name} ;
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
         values.forEach((value) => {
            valuesElement +=
               `<button class="button 
                  ${(value.active) ? "button--active" : ""} 
                  js-buttonValue">${value.name}
               </button>
               `;
         });

         return valuesElement;
      };

      const bindPropertyButtons = () => {
         const propertyButtonElements = document.querySelectorAll(".js-buttonProperty");

         propertyButtonElements.forEach((propertyButton) => {
            propertyButton.addEventListener("click", () => {
               togglePropertyButtons(propertyButton);
            });
         });
      };

      const togglePropertyButtons = (propertyButton) => {
         properties = properties.map((property) =>
            (property.name === propertyButton.innerText)
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
         values = values.map((value) =>
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
            <div  class="labelPositioning">OUTPUT:</div>
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
         const propertyStyle = (properties.find((property) => property.active === true)).name;
         const valueStyle = (values.find((value) => value.active === true)).name;

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