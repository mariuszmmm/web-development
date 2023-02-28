{
   const parametrs = () => {
      let top = [
         { name: "top", type: "top", active: true },
      ];
      let topValue = [
         { name: "auto", type: "topValue", active: true },
         { name: "30px", type: "topValue", active: false },
         { name: "-30px", type: "topValue", active: false },
         { name: "50%", type: "topValue", active: false },
         { name: "-50%", type: "topValue", active: false },
         { name: "100%", type: "topValue", active: false },
         { name: "-100%", type: "topValue", active: false },
         { name: "0", type: "topValue", active: false },
      ];
      let right = [
         { name: "right", type: "right", active: true },
      ];
      let rightValue = [
         { name: "auto", type: "rightValue", active: true },
         { name: "30px", type: "rightValue", active: false },
         { name: "-30px", type: "rightValue", active: false },
         { name: "50%", type: "rightValue", active: false },
         { name: "-50%", type: "rightValue", active: false },
         { name: "100%", type: "rightValue", active: false },
         { name: "-100%", type: "rightValue", active: false },
         { name: "0", type: "rightValue", active: false },
      ];
      let bottom = [
         { name: "bottom", type: "bottom", active: true },
      ];
      let bottomValue = [
         { name: "auto", type: "bottomValue", active: true },
         { name: "30px", type: "bottomValue", active: false },
         { name: "-30px", type: "bottomValue", active: false },
         { name: "50%", type: "bottomValue", active: false },
         { name: "-50%", type: "bottomValue", active: false },
         { name: "100%", type: "bottomValue", active: false },
         { name: "-100%", type: "bottomValue", active: false },
         { name: "0", type: "bottomValue", active: false },
      ];
      let left = [
         { name: "left", type: "left", active: true },
      ];
      let leftValue = [
         { name: "auto", type: "leftValue", active: true },
         { name: "30px", type: "leftValue", active: false },
         { name: "-30px", type: "leftValue", active: false },
         { name: "50%", type: "leftValue", active: false },
         { name: "-50%", type: "leftValue", active: false },
         { name: "100%", type: "leftValue", active: false },
         { name: "-100%", type: "leftValue", active: false },
         { name: "0", type: "leftValue", active: false },
      ];
      let transform = [
         { name: "transform", type: "transform", active: true },
      ];
      let transformValue = [
         { name: "none", type: "transformValue", active: true },
         { name: "translate(50px, 100px)", type: "transformValue", active: false },
         { name: "scale(2, 2)", type: "transformValue", active: false },
         { name: "rotate(45deg)", type: "transformValue", active: false },
      ];
      let position = [
         { name: "position", type: "position", active: true },
      ];
      let positionValue = [
         { name: "static", type: "positionValue", active: true },
         { name: "relative", type: "positionValue", active: false },
         { name: "absolute", type: "positionValue", active: false },
         { name: "fixed", type: "positionValue", active: false },
         { name: "sticky", type: "positionValue", active: false },
      ];

      const render = () => {
         renderSettings();
         renderContents();
         bindTopButton();
         bindTopValueButtons();
         bindRightButton();
         bindRightValueButtons();
         bindBottomButton();
         bindBottomValueButtons();
         bindLeftButton();
         bindLeftValueButtons();
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
               ${renderButtons(top)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(topValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(right)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(rightValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(bottom)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(bottomValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(left)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(leftValue)}
            </div>
            <div class="propertieButtons">
               ${renderButtons(transform)} :
            </div>
            <div class="valueButtons">
               ${renderButtons(transformValue)}
            </div>
         </div>     
         `;
      };

      const renderLabelSettings = () => {
         const topActive = top.find((prop) => prop.active === true);
         const topValuesActive = topValue.find((prop) => prop.active === true);
         const rightActive = right.find((prop) => prop.active === true);
         const rightValuesActive = rightValue.find((prop) => prop.active === true);
         const bottomActive = bottom.find((prop) => prop.active === true);
         const bottomValuesActive = bottomValue.find((prop) => prop.active === true);
         const leftActive = left.find((prop) => prop.active === true);
         const leftValuesActive = leftValue.find((prop) => prop.active === true);
         const transformActive = transform.find((prop) => prop.active === true);
         const transformValueActive = transformValue.find((prop) => prop.active === true);
         const positionActive = position.find((prop) => prop.active === true);
         const positionValueActive = positionValue.find((prop) => prop.active === true);
         let labelElement = "";

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
               <p>
                  ${(positionActive === undefined) ? "&nbsp" : (positionActive.name)}
                  : 
                  ${(positionValueActive === undefined) ? "&nbsp" : (positionValueActive.name)};
               </p> 
               <p>
                  ${(topActive === undefined) ? "&nbsp" : (topActive.name)}
                  : 
                  ${(topValuesActive === undefined) ? "&nbsp" : (topValuesActive.name)};
               </p>
               <p>
                  ${(rightActive === undefined) ? "&nbsp" : (rightActive.name)}
                  : 
                  ${(rightValuesActive === undefined) ? "&nbsp" : (rightValuesActive.name)};
               </p>
               <p>
                  ${(bottomActive === undefined) ? "&nbsp" : (bottomActive.name)}
                  : 
                  ${(bottomValuesActive === undefined) ? "&nbsp" : (bottomValuesActive.name)};
               </p>
               <p>
                  ${(leftActive === undefined) ? "&nbsp" : (leftActive.name)}
                  : 
                  ${(leftValuesActive === undefined) ? "&nbsp" : (leftValuesActive.name)};
               </p>
               <p>
                  ${(transformActive === undefined) ? "&nbsp" : (transformActive.name)}
                  : 
                  ${(transformValueActive === undefined) ? "&nbsp" : (transformValueActive.name)};
               </p>
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

      const bindTopButton = () => {
         const topButtonElement = document.querySelector(".js-topButton");

         topButtonElement.addEventListener("click", () => {
            topButtonToggle();
         });
      };

      const topButtonToggle = () => {
         top = top.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindTopValueButtons = () => {
         const topValueButtonElements = document.querySelectorAll(".js-topValueButton");

         topValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               topValueButtonToggle(button);
            });
         });
      };

      const topValueButtonToggle = (button) => {
         topValue = topValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindRightButton = () => {
         const rightButtonElement = document.querySelector(".js-rightButton");

         rightButtonElement.addEventListener("click", () => {
            rightButtonToggle();
         });
      };

      const rightButtonToggle = () => {
         right = right.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindRightValueButtons = () => {
         const rightValueButtonElements = document.querySelectorAll(".js-rightValueButton");

         rightValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               rightValueButtonToggle(button);
            });
         });
      };

      const rightValueButtonToggle = (button) => {
         rightValue = rightValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindBottomButton = () => {
         const bottomButtonElement = document.querySelector(".js-bottomButton");

         bottomButtonElement.addEventListener("click", () => {
            bottomButtonToggle();
         });
      };

      const bottomButtonToggle = () => {
         bottom = bottom.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindBottomValueButtons = () => {
         const bottomValueButtonElements = document.querySelectorAll(".js-bottomValueButton");

         bottomValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               bottomValueButtonToggle(button);
            });
         });
      };

      const bottomValueButtonToggle = (button) => {
         bottomValue = bottomValue.map((prop) =>
            (prop.name === button.innerText)
               ?
               { ...prop, active: true }
               :
               { ...prop, active: false }
         );
         render();
      };

      const bindLeftButton = () => {
         const leftButtonElement = document.querySelector(".js-leftButton");

         leftButtonElement.addEventListener("click", () => {
            leftButtonToggle();
         });
      };

      const leftButtonToggle = () => {
         left = left.map((prop) =>
            ({ ...prop, active: !prop.active })
         );
         render();
      };

      const bindLeftValueButtons = () => {
         const leftValueButtonElements = document.querySelectorAll(".js-leftValueButton");

         leftValueButtonElements.forEach((button) => {
            button.addEventListener("click", () => {
               leftValueButtonToggle(button);
            });
         });
      };

      const leftValueButtonToggle = (button) => {
         leftValue = leftValue.map((prop) =>
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
            <div class="centerPositioning">parent</div>
            <div class="parentPositioning">
               <p class="childPositioning js-child">child</p>
               <p class="childPositioning--default">child with default settings</p>
            </div>
         </div>
         `;
         addStyles();
      };

      const addStyles = () => {
         const childStyles = document.querySelector(".childPositioning");
         const topActive = top.find((prop) => prop.active === true);
         const topValueActive = topValue.find((prop) => prop.active === true);
         const rightActive = right.find((prop) => prop.active === true);
         const rightValueActive = rightValue.find((prop) => prop.active === true);
         const bottomActive = bottom.find((prop) => prop.active === true);
         const bottomValueActive = bottomValue.find((prop) => prop.active === true);
         const leftActive = left.find((prop) => prop.active === true);
         const leftValueActive = leftValue.find((prop) => prop.active === true);
         const transformActive = transform.find((prop) => prop.active === true);
         const ptransformValueActive = transformValue.find((prop) => prop.active === true);
         const positionActive = position.find((prop) => prop.active === true);
         const positionValueActive = positionValue.find((prop) => prop.active === true);
         const topStyle = topActive === undefined ? null : topActive.name;
         const topValueStyle = topValueActive === undefined ? null : topValueActive.name;
         const rightStyle = rightActive === undefined ? null : rightActive.name;
         const rightValueStyle = rightValueActive === undefined ? null : rightValueActive.name;
         const bottomStyle = bottomActive === undefined ? null : bottomActive.name;
         const bottomValueStyle = bottomValueActive === undefined ? null : bottomValueActive.name;
         const leftStyle = leftActive === undefined ? null : leftActive.name;
         const leftValueStyle = leftValueActive === undefined ? null : leftValueActive.name;
         const transformStyle = transformActive === undefined ? null : transformActive.name;
         const transformValueStyle = ptransformValueActive === undefined ? null : ptransformValueActive.name;
         const positionStyle = positionActive === undefined ? null : positionActive.name;
         const positionValueStyle = positionValueActive === undefined ? null : positionValueActive.name;

         childStyles.style[topStyle] = topValueStyle;
         childStyles.style[rightStyle] = rightValueStyle;
         childStyles.style[bottomStyle] = bottomValueStyle;
         childStyles.style[leftStyle] = leftValueStyle;
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