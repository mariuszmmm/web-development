import { buttonsArrayRaw } from "./buttonsArrayRaw.js"
import { transitionHeightAnimation } from "../Animation/script.js"
import { animationPositioning } from "../Animation/script.js"

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
          <p class="settingsParagraph--positioning strong">.child_2 {</p>
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
          <button ${(property.active) ? "" : " disabled"} name="${property.name}" class="button ${(obj.active && property.active) ? "button--active" : ""} js-valueButton">
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

        <div class="outputParent js-outputParent">
        <div class="outputLabelCenter">parent</div>
          <div class="outputChild--withSize">child_1</div>
          <div class="outputChild--withSize childSelected js-child">child_2</div>
        </div>
      </div>
    `;

    animationPositioning(buttonsObjects);
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

    const turnOffPropertyButton = (text) => {
      buttonsObjects.forEach(({ properties }) => {
        properties.forEach(prop => {
          if (prop.name === text) prop.active = false;
        });
      });
    };

    const turnResetValueButton = (text) => {
      let indexPropertyOff;
      buttonsObjects.forEach((object, index) => {
        object.properties.forEach(property => {
          if (property.name === text) {
            indexPropertyOff = index;
          };
        });
      });

      buttonsObjects[indexPropertyOff].propertiesValues.forEach((prop, index) => {
        index === 0 ? prop.active = true : prop.active = false
      })
    };

    buttonsObjects.forEach(({ properties }) => {
      properties.forEach(prop => {
        if (prop.name === button.innerText) {
          if (!prop.active) {
            prop.active = true
            switch (button.innerText) {
              case "top":
                turnOffPropertyButton("bottom");
                turnResetValueButton("bottom");
                break;
              case "bottom":
                turnOffPropertyButton("top");
                turnResetValueButton("top");
                break;
              case "left":
                turnOffPropertyButton("right");
                turnResetValueButton("right");
                break;
              case "right":
                turnOffPropertyButton("left");
                turnResetValueButton("left");
                break;
            };
          } else {
            prop.active = false;
            turnResetValueButton(prop.name);
          }
        };
      });
    });
  };

  const bindValueButtons = () => {
      const buttonValueElements = document.querySelectorAll(".js-valueButton");

      buttonValueElements.forEach((buttonValue) => {
        buttonValue.addEventListener("click", ({target}) => {
          buttonValueToggle(buttonValue, target.name);
          render();
        });
      });
  };

  const buttonValueToggle = (button, name) => {
    let activePropertyIndex
    
    buttonsObjects.forEach((object, index) => {
      object.properties.forEach(prop => {
          if (prop.name === name) { activePropertyIndex = index;
          };
      });
    });
    
    buttonsObjects[activePropertyIndex].propertiesValues.forEach(prop => {
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

