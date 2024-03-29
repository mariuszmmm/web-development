import { buttonsArrayRaw } from "./buttonsArrayRaw.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";
let activePropertiesNew = [];
let activePropertiesLast = [];

export const grid = () => {
  let buttonsArray = [];
  let index = 0;

  buttonsArrayRaw.forEach((buttons) => {
    for (const value of buttons.destiny) {
      buttonsArray = [...buttonsArray, {
        properties: [{ name: buttons.properties[0], active: false, key: `${index}` }],
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

  let children = 7;
  let childSelected = 1;
  const childrenMax = 20;
  const lorem = {
    loremActive: false,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  };

  const formatTextArea = (text) => {
    const regex = /"[^"]+"/g;
    const stringWithRegex = text.match(regex);
    const textArea = stringWithRegex ? stringWithRegex.join('<br>') : text;

    return [stringWithRegex, textArea];
  };

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    const renderContentLabel = (name) => {
      let element = "";

      buttonsArray.forEach((buttons) => {
        if (buttons.destiny === name) {
          const active = !!buttons.properties[0].active;

          buttons.properties.forEach((prop) => {
            if (prop.active) {
              element += `
                <p class="labelParagraph labelParagraph--grid">
                ${prop.active ? prop.name + ":" +
                  ((prop.name === "grid-template-areas") ? "<br>" : "")
                  : ""}
              `;
            };
          });

          if (active) {
            buttons.propertiesValues.forEach((prop) => {
              if (prop.active) {
                const areaContent = (prop) => {
                  let textArray = formatTextArea(prop)[0];
                  let element = "";

                  if (!!textArray) {
                    textArray.forEach((text) => {
                      element += `
                        <p class="labelParagraph--areaText labelParagraph--grid">
                          ${text}
                        </p>
                      `;
                    });
                    element += `  
                      <p class="labelParagraph labelParagraph--grid">
                        ;
                      </p>
                    `;
                  } else element = prop + ";";

                  return element;
                }

                element += `
                  ${areaContent(prop.name)}
                  </p>
                `;
              };
            });
          };
        };
      });

      return element;
    };

    labelElement.innerHTML = `
      <div class="labelContents labelContents--grid js-labelContents">
        <p class="labelParagraph--grid strong">.parent {</p>
        ${renderContentLabel("parent")}
        <p class="labelParagraph--grid strong">}</p>
        <p></p>
        <p class="labelParagraph--grid strong">.child_all {</p>
        ${renderContentLabel("child_all")}
        <p class="labelParagraph--grid strong">}</p>
        <p></p>
        <p class="labelParagraph--grid strong">.child_${childSelected} {</p>
        ${renderContentLabel("child")}
        <p class="labelParagraph--grid strong">}</p>
      </div>
    `;

    const labelContentsElement = document.querySelector(".js-labelContents");
    heightAnimation(labelContentsElement);
  };

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      ${settingsButtons()}
    `;
  };

  const settingsButtons = () => {
    let buttonsElement = "";

    const buttonsContainer = (container) => {
      let element = "";

      buttonsArray.forEach((buttons) => {
        if (buttons.destiny === container) {
          let property = buttons.properties[0];
          let key = buttons.properties[0].key;

          element += `
            <div class="propertyElements propertyElements--grid">
              <button id="${key}" class="button ${(property.active) ? "button--active" : ""} js-propertyButton">
                ${property.name}
              </button>
              <span class="strong">
                :
              </span>
            </div>
            <div class="valueElements">
          `;

          buttons.propertiesValues.forEach((button) => {
            element += `
              <button id="${button.key}" 
                ${(property.active) ? "" : "disabled"} 
                class="button ${(button.active && property.active) ? "button--active" : ""} js-${property.key}groupValueButtons">
                ${formatTextArea(button.name)[1]}
              </button>
            `;
          })
          element += `
            </div>
          `;
        };
      });

      return element;
    };

    const buttonsNumbers = (name, value) => {
      let element = "";

      element += `
        <div class="propertyElements propertyElements--grid">
          <span class="settingsChild">
            ${name}
          </span>
          <span class="strong">
            :
          </span>
        </div>
        <div class="valueElements">
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

      return element;
    };

    buttonsElement += `
      <div class="buttonsContainer">
        <div class="settingsElements">
          ${buttonsContainer("parent")}
        </div>
        <div class="settingsElements">
          ${buttonsNumbers("Children", children)}
          ${buttonsContainer("child_all")}
        </div>
        <div class="settingsElements">
          ${buttonsNumbers("Selected", childSelected)}
          ${buttonsContainer("child")}
        </div>
      </div>
    `;

    return buttonsElement;
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

      return element;
    };

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
      <div class="outputContents outputContents--grid">
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

    const changeGridStyles = () => {
      const parentStyles = document.querySelectorAll(".js-outputParent");
      const childAllStyles = document.querySelectorAll(".js-child_all");
      const childStyles = document.querySelectorAll(".js-child");
      activePropertiesNew = [];

      buttonsArray.forEach(object => {
        let prop = "";
        let propValue = "";
        let destiny;
        let resetValues = false;

        object.properties.forEach(obj => {
          if (!obj.active && obj.name === "display" && object.destiny !== "child") {
            prop = "display";
            destiny = object.destiny;
            propValue = "block";
          }

          !obj.active ? resetValues = true : "";
          prop = obj.name;
          destiny = object.destiny;
        });

        object.propertiesValues.forEach((obj, index) => {
          if (resetValues) {
            (index === 0 && destiny !== "child") ? obj.active = true : obj.active = false;
          };

          if (propValue !== "block") {
            if (obj.active) {
              propValue = obj.name;
            };
          };
        });

        if (prop && propValue) {
          activePropertiesNew = [...activePropertiesNew, { property: prop, propertyValue: propValue, destiny: destiny }]
        };
      });

      const setStyles = (elements, properties, name) => {
        elements.forEach((element) => {
          properties.forEach((property) => {
            if (property.destiny === name) {
              element.style[property.property] = property.propertyValue;
            };
          });
        });
      };

      setStyles(parentStyles, activePropertiesLast, "parent");
      setStyles(childAllStyles, activePropertiesLast, "child_all");
      setStyles(childStyles, activePropertiesLast, "child");

      setTimeout(() => {
        setStyles(parentStyles, activePropertiesNew, "parent");
        setStyles(childAllStyles, activePropertiesNew, "child_all");
        setStyles(childStyles, activePropertiesNew, "child");
      }, 10);

      activePropertiesLast = activePropertiesNew;
    };

    changeGridStyles();
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
        };
      });
    };
  };

  const bindValueButtons = () => {
    const buttonElements = buttonsArray.map((buttons, index) => {
      let name = ".js-" + buttons.properties[0].key + "groupValueButtons";

      return { selector: name, value: index };
    });

    buttonElements.forEach((button) => {
      const buttonValueElements = document.querySelectorAll(button.selector);

      buttonValueElements.forEach((buttonValue) => {
        buttonValue.addEventListener("click", () => {
          buttonValueToggle(buttonValue, button.value);
          render();
          buttonValue.innerText.includes("auto-fill") ? render() : "";
        });
      });
    });

    const buttonValueToggle = (button, index) => {
      buttonsArray[index].propertiesValues.forEach(prop => {
        if (prop.key === button.id) {
          prop.active = true;
        } else { prop.active = false };
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
      if (childSelected > 1) { childSelected-- };
      render();
    });

    plusButtonSelectedElement.addEventListener("click", () => {
      if (childSelected < children) { childSelected++ };
      render();
    });

    minusButtonChildrenElement.addEventListener("click", () => {
      if (children > 1) { children-- };
      if (childSelected > children) { childSelected = children };
      render();
    });

    plusButtonChildrenElement.addEventListener("click", () => {
      if (children < childrenMax) { children++ };
      render();
    });

    loremButtonElement.addEventListener("click", () => {
      lorem.loremActive = !lorem.loremActive;
      render();
    });
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--grid");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer js-labelContainer">
      </div>
      <div class="settingsContainer js-settingsContainer">
      </div>
      <div class="outputContainer outputContainer--grid js-outputContainer">
      </div>
    `;
  };

  const render = () => {
    renderLabel();
    renderSettings();
    renderOutput();
    bindPropertyButtons();
    bindValueButtons();
    bindChildSettingButtons();
  };

  renderMainContainer();
  render();
};
