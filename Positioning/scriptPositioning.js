import { buttonsArrayRaw } from "./buttonsArrayRaw.js"
import { transitionHeightAnimation } from "../Animation/script.js"

let propertyStyle = "";
let propertyStyleNew= "";
let valueStyle= "0";
let valueStyleNew = "0";
let activeButtons = [];
let activeButtonsLast = [];
let prop;
let propValue;


export const positioning = () => {

  let buttonsObjects = buttonsArrayRaw.map((obj) => {
    return {
      properties: [{ name: obj.properties[0], active: false }],
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
    transitionHeightAnimation();
  };

  const settingsContents = () => {
    let contentsElement = "";

    const settingsLabel = () => {
      let contentsElement = "";
      buttonsObjects.forEach((buttons) => {
        const active = (buttons.properties.find((buttons) => buttons.active === true))

        buttons.properties.forEach((prop) => {
          if (prop.active) {
            contentsElement += `<p class="settingsParagraph settingsParagraph--positioning">
                  ${prop.active ? prop.name : ""}`
          };
        });
        if (active !== undefined) {
          buttons.propertiesValues.forEach((prop) => {
            if (prop.active) {
              contentsElement += `:
                     ${prop.active ? prop.name : ""}; </p>`
            };
          });
        };
      });
      return contentsElement;
    };

    contentsElement += `
         <div class="settingsContents settingsContents--positioning js-settingsContents">
         <div id="text">
            <p class="settingsParagraph--positioning strong">.parent {</p>
              <p class="settingsParagraph settingsParagraph--positioning">  position: relative; </p>
              <p class="settingsParagraph settingsParagraph--positioning">  border: 3px dashed white; </p>
              <p class="settingsParagraph settingsParagraph--positioning">  background: purple; </p>
            <p class="settingsParagraph--positioning strong">}</p>
            <p class="settingsParagraph--positioning strong">.child_1 {</p>
              ${settingsLabel()}
            <p class="settingsParagraph--positioning strong">}</p>
            </div>
         </div>
         `;

    return contentsElement;
  };

  const buttonsContainer = () => {
    let propsElements = "";

    propsElements += `<div class="settingsButtons">`
    buttonsObjects.forEach((object) => {
      let property = object.properties[0];
      propsElements += `
            <div class="propertyButtons">
              <button class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                ${property.name}
              </button>
              <span class="strong">:</span>
            </div>
            <div class="valueButtons">
         `;
      object.propertiesValues.forEach((obj) => {
        propsElements += `
               <button ${(property.active) ? "" : " disabled"} class="button ${(obj.active && property.active) ? "button--active" : ""} js-${property.name}ValueButton">
                  ${obj.name}
               </button>
            `;
      })
      propsElements += `</div>`;
    });
    propsElements += `</div>`;

    return propsElements
  };

  const renderOutput = () => {
    const contentsElement = document.querySelector(".js-outputContainer");

    contentsElement.innerHTML = "";
    contentsElement.innerHTML += `
          <div class="outputContents outputContents--positioning">
            <div class="outputLabel">OUTPUT :</div>
            <div class="outputLabelTop">TOP</div>
            <div class="outputLabelLeft">LEFT</div>
            <div class="outputLabelRight">RIGHT</div>
            <div class="outputLabelBottom">BOTTOM</div>
            <div class="outputLabelCenter">parent</div>
            <div class="outputParent js-outputParent">
              <div class="outputChild--withSize js-child">child_1</div>
              <div class="outputChild--withSize">child_2</div>
            </div>
          </div>
          `;

   // styles();


    const animationPositioning = () => {
      const outputParentElement = document.querySelector(".js-outputParent");
      const childElement = document.querySelector(".js-child");
activeButtons = [];
      buttonsObjects.forEach((object) => {
        object.properties.forEach(obj => {
      if (obj.active === true) {
         prop = obj.name
      }
    })

   object.propertiesValues.forEach(obj => {
      if (obj.active === true) {
        propValue = obj.name
      }
   })
activeButtons = [...activeButtons, {property: prop, propertyValue: propValue}]
      });
console.log(buttonsObjects)
console.log(activeButtons)
      //    childElement.style.propertyStyle = valueStyle;
      // childElement.style.left = "0px";

      console.log("propertyStyleNew", propertyStyleNew);
      console.log("valueStyleNew", valueStyleNew);
      childElement.style[propertyStyle] = valueStyle;

      setTimeout(() => {


        // childElement.style.transform = "translate(100px)";
        // childElement.style.left = "300px";
        childElement.style[propertyStyleNew] = valueStyleNew;

      }, 500)

      propertyStyle = propertyStyleNew
      valueStyle = valueStyleNew
    };
    animationPositioning();

  };

  const styles = () => {
    const childStyles = document.querySelector(".js-child");

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

    const turnOff = (text) => {
      buttonsObjects.forEach(({ properties }) => {
        properties.forEach(prop => {
          if (prop.name === text) prop.active = false;
        });
      });
    };

    buttonsObjects.forEach(({ properties }) => {
      properties.forEach(prop => {
        if (prop.name === button.innerText) {
          if (!prop.active) {
            prop.active = true
            switch (button.innerText) {
              case "top": turnOff("bottom");
                break;
              case "bottom": turnOff("top");
                break;
              case "left": turnOff("right");
                break;
              case "right": turnOff("left");
                break;
            };
          } else prop.active = false;
        };
      });
    });
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
console.log(buttonsObjects)
  render();
};

