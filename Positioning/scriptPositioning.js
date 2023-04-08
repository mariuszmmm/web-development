export const positioning = () => {

  let buttonsObjectsRaw = [
    {
      properties: ["position"],
      propertiesValues: ["static", "relative", "absolute", "fixed", "sticky"]
    },
    {
      properties: ["top"],
      propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"]
    },
    {
      properties: ["right"],
      propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"]
    },
    {
      properties: ["bottom"],
      propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"]
    },
    {
      properties: ["left"],
      propertiesValues: ["auto", "30px", "-30px", "50%", "-50%", "100%", "-100%", "0"]
    },
    {
      properties: ["transform"],
      propertiesValues: ["none", "translate(-50px, -50px)", "scale(2, 2)", "rotate(45deg)"]
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
         <div class="settingsContents settingsContents--positioning">
            <p class="settingsParagraph--positioning strong">.parent {</p>
              <p class="settingsParagraph settingsParagraph--positioning">  position: relative; </p>
              <p class="settingsParagraph settingsParagraph--positioning">  border: 3px dashed white; </p>
              <p class="settingsParagraph settingsParagraph--positioning">  background: purple; </p>
            <p class="settingsParagraph--positioning strong">}</p>
            <p class="settingsParagraph--positioning strong">.child_1 {</p>
              ${settingsLabel()}
            <p class="settingsParagraph--positioning strong">}</p>
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
            <div class="outputParent">
              <div class="outputChild--withSize js-child">child_1</div>
              <div class="outputChild--withSize">child_2</div>
            </div>
          </div>
          `;

    styles();
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

  render();
};