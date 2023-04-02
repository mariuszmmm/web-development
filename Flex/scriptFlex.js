import { buttonsArrayRaw } from "./buttonsArrayRaw.js"

export const flex = () => {
  let buttonsArray = [];
  let index = 0;

  buttonsArrayRaw.forEach((buttons) => {
    for (const value of buttons.destiny) {
      buttonsArray = [...buttonsArray, {
        properties: [{ name: buttons.properties[0], active: value === "parent", key: `${index}` }],
        propertiesValues: buttons.propertiesValues.map((val, i) => {
          index++;

          return { name: val, active: i === 0, key: `${index}` }
        }),
        destiny: value
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
    loremActive: false,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae laboriosam, error suscipit excepturi quos maxime quidem odit repellendus, odio dolorem natus fuga dolorum autem, alias laborum id. Possimus, ullam?"
  };

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
         ${settingsContents()}
         ${settingsButtons()}
      `;
  };

  const settingsContents = () => {
    let contentsElement = "";

    const settingsLabel = (name) => {
      let element = "";
      
      buttonsArray.forEach((buttons) => {
        if (buttons.destiny === name) {
          const active = !!buttons.properties[0].active;

          buttons.properties.forEach((prop) => {
            if (prop.active) {
              element += `
                <p class="settingsParagraph settingsParagraph--flex">
                ${prop.active ? prop.name : ""}
              `;
            };
          });

          if (active) {
            buttons.propertiesValues.forEach((prop) => {
              if (prop.active) {
                element += `
                  : ${prop.active ? prop.name : ""} 
                  </p>
                `;
              };
            });
          };
        };
      });

      return element;
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

  const settingsButtons = () => {
    let buttonsElement = "";

    const buttonsSettings = (container) => {
      let element = "";

      buttonsArray.forEach((buttons) => {
        if (buttons.destiny === container) {
          let property = buttons.properties[0];
          let key = buttons.properties[0].key;

          element += `
            <div class="propertyButtons">
              <button id="${key}" class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                &nbsp${property.name}&nbsp
              </button>
              <span class="strong">
                :
              </span>
            </div>
            <div class="valueButtons">
          `;

          buttons.propertiesValues.forEach((button) => {
            element += `
              <button id="${button.key}" 
                ${(property.active) ? "" : "disabled"} 
                class="button ${(button.active && property.active) ? "button--active" : ""} js-${property.name}groupValueButtons">
                &nbsp${button.name}&nbsp
              </button>
            `;
          })
          element += `
            </div>
          `;
        };
      });

      return element
    };

    const buttonsNumbers = (name, value) => {
      let element = "";

      element += `
        <div class="propertyButtons">
          <span class="settingsChild">
            ${name}
          </span>
          <span class="strong">
            :
          </span>
        </div>
        <div class="valueButtons">
          <button class="button settingsChild js-minusButton${name}">
            &nbsp-&nbsp
          </button>
          <span style="${(name === "Selected") ? "color: red" : ""}" class="settingsChild">
            ${value}
          </span>
          <button class="button settingsChild js-plusButton${name}">
            &nbsp+&nbsp
          </button>
          ${(name === "Selected") ? `
            <button class="button settingsChild js-loremButton 
              ${(lorem.loremActive) ? "button--active" : ""}">
              &nbsp Lorem ipsum &nbsp
            </button>
          ` : ""
        }  
        </div>`;

      return element
    };

    buttonsElement += `
      <div class="settingsButtons">
        ${buttonsSettings("parent")}
        <div class="sectionBorder">&nbsp</div>
        <div class="sectionBorder">&nbsp</div>
        ${buttonsNumbers("Children", children)}
        ${buttonsSettings("child_all")}
        <div class="sectionBorder">&nbsp</div>
        <div class="sectionBorder">&nbsp</div>
        ${buttonsNumbers("Selected", childSelected)}
        ${buttonsSettings("child")}
      </div>
    `;

    return buttonsElement
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    const changeChildren = () => {
      let element = "";

      for (let k = 1; k <= children; k++) {
        element += `
          <div class="outputChild js-child_all ${(k === childSelected) ? "childSelected js-child" : ""}">
            ${k}
            ${((lorem.loremActive) & (k === childSelected)) ? ". " + lorem.text : ""}
          </div>
        `;
      };

      return element
    };

    const styleAdd = (container) => {
      const parentStyles = document.querySelectorAll(".js-outputParent");
      const childAllStyles = document.querySelectorAll(".js-child_all");
      const childStyles = document.querySelectorAll(".js-child");

      buttonsArray.forEach((buttons) => {
        const activeProperties = (buttons.properties[0].active ? buttons.properties[0] : undefined);
        const activeValuesProperties = (buttons.propertiesValues.find((buttons) => buttons.active));
        let element;

        switch (container) {
          case "parent":
            element = parentStyles;
            break;
          case "child_all":
            element = childAllStyles;
            break;
          case "child":
            element = childStyles;
            break;
        };

        if (buttons.destiny === container) {
          element.forEach((elem) => {
            elem.style[((activeProperties) ? activeProperties.name : "")] =
              ((activeValuesProperties) ? activeValuesProperties.name : "");
          });
        };
      });
    };

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
         <div class="outputContents outputContents--flex">
            <div class="outputLabel">OUTPUT :</div>
            <div class="outputLabelTop">TOP</div>
            <div class="outputLabelLeft">LEFT</div>
            <div class="outputLabelRight">RIGHT</div>
            <div class="outputLabelBottom">BOTTOM</div>
            <div class="outputLabelCenter">parent</div>
            <div class="outputParent js-outputParent">
               ${changeChildren()}
            </div>
         </div>
         `;

    styleAdd("parent");
    styleAdd("child_all");
    styleAdd("child");
  };

  const bindPropertyButtons = () => {
    const buttonPropertyElements = document.querySelectorAll(".js-propertyButton");

    buttonPropertyElements.forEach((button) => {
      button.addEventListener("click", () => {
        buttonPropertyToggle(button);
        render();
      });
    });

    const buttonPropertyToggle = (buttonEvent) => {
      buttonsArray.forEach((button) => {
        const buttonObject = button.properties[0];

        if (buttonObject.key === buttonEvent.id) {
          buttonObject.active = !buttonObject.active;
        }
      });
    };
  };

  const bindValueButtons = () => {
    const buttonElements = buttonsArray.map((buttons, index) => {
      let name = ".js-" + buttons.properties[0].name + "groupValueButtons";

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

    const buttonValueToggle = (button, index) => {
      buttonsArray[index].propertiesValues.forEach(prop => {
        if (prop.key === button.id) {
          prop.active = true;
        } else { prop.active = false }
      });
    };
  };

  const bindChildSettingButtons = () => {
    const minusButtonSelectedElement = document.querySelector(".js-minusButtonSelected");
    const plusButtonSelectedElement = document.querySelector(".js-plusButtonSelected");
    const minusButtonChildrenElement = document.querySelector(".js-minusButtonChildren");
    const plusButtonChildrenElement = document.querySelector(".js-plusButtonChildren");
    const loremButtonElement = document.querySelector(".js-loremButton");


    minusButtonSelectedElement.addEventListener("click", () => {
      if (childSelected > 1) { childSelected-- }
      render();
    });

    plusButtonSelectedElement.addEventListener("click", () => {
      if (childSelected < children) { childSelected++ }
      render();
    });

    minusButtonChildrenElement.addEventListener("click", () => {
      if (children > 1) { children-- }
      if (childSelected > children) { childSelected = children }
      render();
    });

    plusButtonChildrenElement.addEventListener("click", () => {
      if (children < childrenMax) { children++ }
      render();
    });

    loremButtonElement.addEventListener("click", () => {
      lorem.loremActive = !lorem.loremActive
      render();
    });
  };

  const render = () => {
    renderSettings();
    renderOutput();
    bindPropertyButtons();
    bindValueButtons();
    bindChildSettingButtons();
  };

  render();
};