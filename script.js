{
   const parametrs = () => {
      let side = [
         { name: "top", type: "side", active: false },
         { name: "right", type: "side", active: false },
         { name: "bottom", type: "side", active: false },
         { name: "left", type: "side", active: false },
      ];
      let sideValue = [
         { name: "auto", type: "sideValue", active: false },
         { name: "50px", type: "sideValue", active: false },
         { name: "-50px", type: "sideValue", active: false },
         { name: "50%", type: "sideValue", active: false },
         { name: "-50%", type: "sideValue", active: false },
         { name: "100%", type: "sideValue", active: false },
         { name: "-100%", type: "sideValue", active: false },
         { name: "0", type: "sideValue", active: false },
      ];
      let transform = [
         { name: "transform", type: "transform", active: false },
      ];
      let transformValue = [
         { name: "none", type: "transformValue", active: false },
         { name: "translate(50px, 100px)", type: "transformValue", active: false },
         { name: "scale(2, 2)", type: "transformValue", active: false },
         { name: "rotate(45deg)", type: "transformValue", active: false },
      ];
      let position = [
         { name: "position", type: "position", active: false },
      ];
      let positionValue = [
         { name: "static", type: "positionValue", active: false },
         { name: "relative", type: "positionValue", active: false },
         { name: "absolute", type: "positionValue", active: false },
         { name: "fixed", type: "positionValue", active: false },
         { name: "sticky", type: "positionValue", active: false },
      ];

      const render = () => {
         renderSettings();
         renderContents();
         bindSideButtons();
         bindSideValueButtons();
         bindTransformButton();
         bindTransformValueButtons();
         bindPositionButton();
         bindPositionValueButtons();
      };

      const renderSettings = () => {
         const setingsElement = document.querySelector(".js-setings");

         setingsElement.innerHTML = "";
         setingsElement.innerHTML += `
         <div class="labelSetings">
            ${renderLabelSettings()}
         </div>
         <div class="contentsButtons">
            <div class="propertieButtons">
               ${renderButtons(position)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(positionValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(transform)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(transformValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(side)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(sideValue)}
            </div>
         </div>     
         `;
      };

      const renderLabelSettings = () => {
         const sideActive = side.find((prop) => prop.active === true);
         const sideValuesActive = sideValue.find((prop) => prop.active === true);
         const transformActive = transform.find((prop) => prop.active === true);
         const transformValueActive = transformValue.find((prop) => prop.active === true);
         const positionActive = position.find((prop) => prop.active === true);
         const positionValueActive = positionValue.find((prop) => prop.active === true);
         let labelElement = "";

         labelElement += `
            <div class="styleContents">patern{</div>
            <div class="styleContent">
               position : relative;
            </div>
            <div class="styleContents">}</div>
               &nbsp
            <div class="styleContents">child{</div>
            <div class="styleContent">
               <div>
                  ${(positionActive === undefined) ? "&nbsp" : (positionActive.name)}
                  : 
                  ${(positionValueActive === undefined) ? "&nbsp" : (positionValueActive.name)};
               </div> 
               <div>
                  ${(transformActive === undefined) ? "&nbsp" : (transformActive.name)}
                  : 
                  ${(transformValueActive === undefined) ? "&nbsp" : (transformValueActive.name)};
               </div>
               <div>
                  ${(sideActive === undefined) ? "&nbsp" : (sideActive.name)}
                  : 
                  ${(sideValuesActive === undefined) ? "&nbsp" : (sideValuesActive.name)};
               </div>
            </div>
            <div class="styleContents">}</div>
         `;

         return labelElement;
      };

      const renderButtons = (props) => {
         let propsElements = "";

         props.forEach((prop) => {
            propsElements +=
               `<button class="button ${(prop.active) ? "button--active" : ""} 
                  js-${prop.type}Button">
                  ${prop.name}
               </button>
               `;
         });

         return propsElements;
      };

      const bindSideButtons = () => {
         const sideButtonElements = document.querySelectorAll(".js-sideButton");

         sideButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               sideButtonToggle(button);
            });
         });
      };

      const sideButtonToggle = (button) => {
         side = side.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: !prop.active }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindSideValueButtons = () => {
         const sideValueButtonElements = document.querySelectorAll(".js-sideValueButton");

         sideValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               sideValueButtonToggle(button);
            });
         });
      };

      const sideValueButtonToggle = (button) => {
         sideValue = sideValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindTransformButton = () => {
         const transformButtonElement = document.querySelector(".js-transformButton");

         transformButtonElement.addEventListener("click", () => {
            transformButtonToggle();
         });
      };

      const transformButtonToggle = () => {
         transform = transform.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindTransformValueButtons = () => {
         const transformValueButtonElements = document.querySelectorAll(".js-transformValueButton");

         transformValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               transformValueButtonToggle(button);
            });
         });
      };

      const transformValueButtonToggle = (button) => {
         transformValue = transformValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindPositionButton = () => {
         const positionButtonElement = document.querySelector(".js-positionButton");

         positionButtonElement.addEventListener("click", () => {
            positionButtonToggle();
         });
      };

      const positionButtonToggle = () => {
         position = position.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindPositionValueButtons = () => {
         const positionValueButtonElements = document.querySelectorAll(".js-positionValueButton");

         positionValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               positionValueButtonToggle(button);
            });
         });
      };

      const positionValueButtonToggle = (button) => {
         positionValue = positionValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
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
         const sideActive = side.find((prop) => prop.active === true);
         const sideValueActive = sideValue.find((prop) => prop.active === true);
         const transformActive = transform.find((prop) => prop.active === true);
         const ptransformValueActive = transformValue.find((prop) => prop.active === true);
         const positionActive = position.find((prop) => prop.active === true);
         const positionValueActive = positionValue.find((prop) => prop.active === true);
         const sideStyle = sideActive === undefined ? null : sideActive.name;
         const sideValueStyle = sideValueActive === undefined ? null : sideValueActive.name;
         const transformStyle = transformActive === undefined ? null : transformActive.name;
         const transformValueStyle = ptransformValueActive === undefined ? null : ptransformValueActive.name;
         const positionStyle = positionActive === undefined ? null : positionActive.name;
         const positionValueStyle = positionValueActive === undefined ? null : positionValueActive.name;

         childStyles.style[sideStyle] = sideValueStyle;
         childStyles.style[transformStyle] = transformValueStyle;
         childStyles.style[positionStyle] = positionValueStyle;
      };

      const init = () => {
         const positioningElement = document.querySelector(".js-buttonPositioning");

         positioningElement.addEventListener("click", () => {
            render();
            positioningElement.classList.add("button--active")
         })
      };

      init();
   }
   parametrs();
}