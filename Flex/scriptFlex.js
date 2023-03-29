export const flex = () => {

  let buttonsObjectsRaw = [
    {
      properties: ["display"],
      propertiesValues: ["flex", "inline-flex"],
      destiny: "parent"
    },
    {
      properties: ["flex-direction"],
      propertiesValues: ["row", "row-reverse", "column", "column-reverse"],
      destiny: "parent"
    },
    {
      properties: ["justify-content"],
      propertiesValues: ["normal", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      destiny: "parent"
    },
    {
      properties: ["align-content"],
      propertiesValues: ["normal", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"],
      destiny: "parent"
    },
    {
      properties: ["align-items"],
      propertiesValues: ["normal", "flex-start", "flex-end", "center", "stretch"],
      destiny: "parent"
    },
    {
      properties: ["flex-wrap"],
      propertiesValues: ["nowrap", "wrap", "wrap-reverse"],
      destiny: "parent"
    },
    {
      properties: ["gap"],
      propertiesValues: ["none", "10px", "10%"],
      destiny: "parent"
    },
    {
      properties: ["order"],
      propertiesValues: ["0", "1", "2", "-1"],
      destiny: "child"
    },
    {
      properties: ["flex-grow"],
      propertiesValues: ["0", "1", "2", "3", "-1"],
      destiny: "child"
    },
    {
      properties: ["flex-shrink"],
      propertiesValues: ["1", "2", "3", "-1", "0"],
      destiny: "child"
    },
    {
      properties: ["align-self"],
      propertiesValues: ["auto", "normal", "flex-start", "flex-end", "center", "stretch"],
      destiny: "child"
    },
    {
      properties: ["flex-basis"],
      propertiesValues: ["auto", "12vw", "20vw", "100px", "50%"],
      destiny: "child"
    },
  ];

  let buttonsObjects = buttonsObjectsRaw.map((obj) => {
    return {
      properties: [{ name: obj.properties[0], active: true }],
      propertiesValues: obj.propertiesValues.map((val, index) => {
        return { name: val, active: index === 0 }
      }),
      destiny: obj.destiny,
    };
  });

  let child = 3;
  let childSelected = 1;

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

    const settingsLabel = (name) => {
      let contentsElement = "";
      buttonsObjects.forEach((buttons) => {
      if (buttons.destiny === name) {
        const active = (buttons.properties.find((buttons) => buttons.active === true))

        buttons.properties.forEach((prop) => {
          if (prop.active) {
            contentsElement += `<p class="settingsParagraph settingsParagraph--flex">
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
      };

      });
      return contentsElement;
    };

    contentsElement += `
      <div class="settingsContents settingsContents--flex">
          <p class="settingsParagraph--flex strong">.parent {</p>
            ${settingsLabel("parent")}
          <p class="settingsParagraph--flex strong">}</p>
          <p class="settingsParagraph--flex strong">.child_${childSelected} {</p>
            ${(childSelected > 0) ? settingsLabel("child"): ""}
          <p class="settingsParagraph--flex strong">}</p>
      </div>
         `;

    return contentsElement;
  };

  const buttonsContainer = () => {
    let propsElements = "";

    const buttonsSettings = (container) => {

      let propsElements = "";
      buttonsObjects.forEach((object) => {

        if (object.destiny === container) {
          let property = object.properties[0];
          propsElements += `<div class="propertyButtons propertyButtons--${container}">
               <button class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                  ${property.name}
               </button>
                <span class="strong">:</span>
        </div>
        <div class="valueButtons">`
          object.propertiesValues.forEach((obj) => {
            propsElements += `
          <button ${(property.active) ? "" : " disabled"} class="button ${(obj.active && property.active) ? "button--active" : ""} js-${property.name}ValueButton">
            ${obj.name}
          </button>
        `;
          })
          propsElements += `</div>`
        };
      });

      return propsElements
    };

    const buttonsNumbers = (name, value) => {
      let propsElements = "";

      propsElements += `
      
    <div class="sectionBorder">&nbsp</div>
    <div class="sectionBorder"> 
    </div>
      
    <div class="propertyButtons">
      <span class="settingsChild">${name}</span>
       <span class="strong">:</span>
    </div>
    <div class="valueButtons">
      <button class="button settingsChild js-minusButton${name}">&nbsp-&nbsp</button>
      <span class="settingsChild">${value}</span>
      <button class="button settingsChild js-plusButton${name}">&nbsp+&nbsp</button>
    </div>`

      return propsElements
    };

    propsElements += `
      <div class="settingsButtons">
        ${buttonsSettings("parent")}
        ${buttonsNumbers("Selected", childSelected)}
        ${buttonsSettings("child")}
        ${buttonsNumbers("Children", child)}
      </div>
    `;

    return propsElements
  };


  const renderOutput = () => {
    const contentsElement = document.querySelector(".js-outputContainer");



    const children = () => {
      let contents = "";
      for (let k = 1; k <= child; k++) {

        contents += `<div class="outputChild ${(k === childSelected) ? "childSelected js-child" : ""}">${k}</div>
      `}
      return contents
    }

    contentsElement.innerHTML = "";
    contentsElement.innerHTML += `
         <div class="outputContents outputContents--flex">
            <div class="outputLabel">OUTPUT :</div>
            <div class="outputLabelTop">TOP</div>
            <div class="outputLabelLeft">LEFT</div>
            <div class="outputLabelRight">RIGHT</div>
            <div class="outputLabelBottom">BOTTOM</div>
            <div class="outputLabelCenter">parent</div>
            <div class="outputParent js-outputParent">
               ${children()}
            </div>
         </div>
         `;

    styles();
  };

  const styles = () => {
    const parentStyles = document.querySelector(".js-outputParent");
    const childStyles = document.querySelector(".js-child");

    buttonsObjects.forEach((buttons) => {

      const activeProperties = (buttons.properties.find((buttons) => buttons.active === true));
      const activeValuesProperties = (buttons.propertiesValues.find((buttons) => buttons.active === true));

      if (buttons.destiny === "parent") {
      parentStyles.style[
        ((activeProperties === undefined) ? null : activeProperties.name)] = ((activeValuesProperties === undefined) ? null : activeValuesProperties.name);
      }

      if (buttons.destiny === "child") {
        childStyles.style[
          ((activeProperties === undefined) ? null : activeProperties.name)] = ((activeValuesProperties === undefined) ? null : activeValuesProperties.name);
        }

    });
  };

  const bindSettingsChildButtons = () => {
    const minusButtonSelectedElements = document.querySelector(".js-minusButtonSelected");
    const plusButtonSelectedElements = document.querySelector(".js-plusButtonSelected");
    const minusButtonChildrenElements = document.querySelector(".js-minusButtonChildren");
    const plusButtonChildrenElements = document.querySelector(".js-plusButtonChildren");


    minusButtonSelectedElements.addEventListener("click", () => {
      if (childSelected > 1) { childSelected-- }
      render();
    });

    plusButtonSelectedElements.addEventListener("click", () => {
      if (childSelected < child) { childSelected++ }
      render();
    });

    minusButtonChildrenElements.addEventListener("click", () => {
      if (child > 1) { child-- }
      if (childSelected > child) {childSelected = child}
      render();
    });

    plusButtonChildrenElements.addEventListener("click", () => {
      if (child < 10) { child++ }
      render();
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
    const buttonElements = buttonsObjects.map((buttons, index) => {
        
       let name = ".js-" + buttons.properties[0].name+ "ValueButton";
       
       
      return {selector: name, value: index}
      
  });
  
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
    bindSettingsChildButtons();
    bindPropertyButtons();
    bindValueButtons();
  };

  render();
};