export const flex = () => {

  let buttonsObjectsRaw = [
    {
      properties: ["display"],
      propertiesValues: ["flex"],
      destiny: ["parent"],
    },
    {
      properties: ["flex-direction"],
      propertiesValues: ["row", "row-reverse", "column", "column-reverse"],
      destiny: ["parent"],
    },
    {
      properties: ["justify-content"],
      propertiesValues: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      destiny: ["parent"],
    },
    {
      properties: ["align-content"],
      propertiesValues: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      destiny: ["parent"],
    },
    {
      properties: ["align-items"],
      propertiesValues: ["stretch", "flex-start", "flex-end", "center"],
      destiny: ["parent"],
    },
    {
      properties: ["flex-wrap"],
      propertiesValues: ["nowrap", "wrap", "wrap-reverse"],
      destiny: ["parent"],
    },
    {
      properties: ["gap"],
      propertiesValues: ["none", "10px", "50px", "10%", "10vw"],
      destiny: ["parent"],
    },
    {
      properties: ["order"],
      propertiesValues: ["0", "1", "2", "3", "-1"],
      destiny: ["child", "child_all"],
    },
    {
      properties: ["flex-grow"],
      propertiesValues: ["0", "1", "2", "3", "4"],
      destiny: ["child", "child_all"],
    },
    {
      properties: ["flex-shrink"],
      propertiesValues: ["1", "2", "3", "4", "0"],
      destiny: ["child", "child_all"],
    },
    {
      properties: ["align-self"],
      propertiesValues: ["stretch", "flex-start", "flex-end", "center"],
      destiny: ["child", "child_all"],
    },
    {
      properties: ["flex-basis"],
      propertiesValues: ["auto", "100px", "200px", "12vw", "18vw", "50%", "0"],
      destiny: ["child", "child_all"],
    },
    {
      properties: ["flex"],
      propertiesValues: ["0 1 auto", "1 1 auto", "0 0 auto", "1 0 0", "0 0 100px"],
      destiny: ["child_all"],
    },
  ];

  let buttonsObjects = [];
  let index = 0;

  buttonsObjectsRaw.map((obj) => {
    for (const val of obj.destiny) {
      buttonsObjects = [...buttonsObjects, {
        properties: [{ name: obj.properties[0], active: val === "parent", key: `${index}` }],
        propertiesValues: obj.propertiesValues.map((val, i) => {
          index++;

          return { name: val, active: i === 0, key: `${index}` }
        }),
        destiny: val
      },
      ];

      index++;
    }
  })

  let children = 3;
  let childSelected = 1;
  const childrenMax = 20;
  const lorem =
  {
    childSelected: false,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae laboriosam, error suscipit excepturi quos maxime quidem odit repellendus, odio dolorem natus fuga dolorum autem, alias laborum id. Possimus, ullam?"
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
              contentsElement += `
                <p class="settingsParagraph settingsParagraph--flex">
                ${prop.active ? prop.name : ""}
              `;
            };
          });

          if (active !== undefined) {
            buttons.propertiesValues.forEach((prop) => {
              if (prop.active) {
                contentsElement += `
                  : ${prop.active ? prop.name : ""} </p>
                `;
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
        <p></p>
        <p class="settingsParagraph--flex strong">.child_all {</p>
          ${settingsLabel("child_all")}
        <p class="settingsParagraph--flex strong">}</p>
        <p></p>
        <p class="settingsParagraph--flex strong">.child_${childSelected} {</p>
          ${settingsLabel("child")}
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
          let key = object.properties[0].key;

          propsElements += `
            <div class="propertyButtons propertyButtons--${container}">
              <button id="${key}" class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
              &nbsp${property.name}&nbsp
              </button>
              <span class="strong">:</span>
            </div>
            <div class="valueButtons">
          `;

          object.propertiesValues.forEach((obj) => {
            propsElements += `
              <button id="${obj.key}" 
                ${(property.active) ? "" : " disabled"} 
                class="button ${(obj.active && property.active) ? "button--active" : ""} js-${property.key}ValueButton">
                &nbsp${obj.name}&nbsp
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
        <div class="sectionBorder"></div>
        <div class="propertyButtons">
          <span class="settingsChild">${name}</span>
          <span class="strong">:</span>
        </div>
        <div class="valueButtons">
          <button class="button settingsChild js-minusButton${name}">&nbsp-&nbsp</button>
          <span style="${(name === "Selected") ? "color: red" : ""}" class="settingsChild">${value}</span>
          <button class="button settingsChild js-plusButton${name}">&nbsp+&nbsp</button>
          ${(name === "Selected") ? `<button class="button settingsChild js-loremButton ${(lorem.childSelected) ? "button--active" : ""}">&nbsp Lorem ipsum &nbsp</button>` : ""}  
        </div>`;

      return propsElements
    };

    propsElements += `
      <div class="settingsButtons">
        ${buttonsSettings("parent")}
        ${buttonsNumbers("Children", children)}
        ${buttonsSettings("child_all")}
        ${buttonsNumbers("Selected", childSelected)}
        ${buttonsSettings("child")}
      </div>
    `;

    return propsElements
  };

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
         ${settingsContents()}
         ${buttonsContainer()}
      `;
  };

  const renderOutput = () => {
    const contentsElement = document.querySelector(".js-outputContainer");

    const childrenChange = () => {
      let contents = "";
      for (let k = 1; k <= children; k++) {
        contents += `
          <div class="outputChild js-child_all ${(k === childSelected) ? "childSelected js-child" : ""}">${k}${((lorem.childSelected) & (k === childSelected)) ? ". " + lorem.text : ""}
          </div>
        `;
      };

      return contents
    };

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
               ${childrenChange()}
            </div>
         </div>
         `;

    styleAdd("parent");
    styleAdd("child_all");
    styleAdd("child");
  };

  const styleAdd = (container) => {
    const parentStyles = document.querySelectorAll(".js-outputParent");
    const childAllStyles = document.querySelectorAll(".js-child_all");
    const childStyles = document.querySelectorAll(".js-child");

    buttonsObjects.forEach((buttons) => {
      const activeProperties = (buttons.properties.find((buttons) => buttons.active === true));
      const activeValuesProperties = (buttons.propertiesValues.find((buttons) => buttons.active === true));
      let element;

      switch (container) {
        case "parent":
          element = parentStyles
          break;
        case "child_all":
          element = childAllStyles
          break;
        case "child":
          element = childStyles
          break;
      }

      if (buttons.destiny === container) {

        element.forEach((elem) => {
          elem.style[
            ((activeProperties === undefined) ? null : activeProperties.name)] = ((activeValuesProperties === undefined) ? null : activeValuesProperties.name);
        })
      }
    })
  };

  const bindSettingsChildButtons = () => {
    const minusButtonSelectedElements = document.querySelector(".js-minusButtonSelected");
    const plusButtonSelectedElements = document.querySelector(".js-plusButtonSelected");
    const minusButtonChildrenElements = document.querySelector(".js-minusButtonChildren");
    const plusButtonChildrenElements = document.querySelector(".js-plusButtonChildren");
    const loremButtonElements = document.querySelector(".js-loremButton");


    minusButtonSelectedElements.addEventListener("click", () => {
      if (childSelected > 1) { childSelected-- }
      render();
    });

    plusButtonSelectedElements.addEventListener("click", () => {
      if (childSelected < children) { childSelected++ }
      render();
    });

    minusButtonChildrenElements.addEventListener("click", () => {
      if (children > 1) { children-- }
      if (childSelected > children) { childSelected = children }
      render();
    });

    plusButtonChildrenElements.addEventListener("click", () => {
      if (children < childrenMax) { children++ }
      render();
    });

    loremButtonElements.addEventListener("click", () => {
      lorem.childSelected = !lorem.childSelected
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
        if (prop.key === button.id) {
          prop.active = !prop.active;
        }
      });
    })
  };

  const bindValueButtons = () => {
    const buttonElements = buttonsObjects.map((buttons, index) => {

      let name = ".js-" + buttons.properties[0].key + "ValueButton";

      return { selector: name, value: index }
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
      if (prop.key === button.id) {
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