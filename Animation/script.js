let heightContent;
let heightContentNew;
let activeProperties = [];
let activePropertiesLast = [];

export const transitionHeightAnimation = () => {
  const settingsContentsElement = document.querySelector(".js-settingsContents");
  heightContentNew = settingsContentsElement.scrollHeight

  settingsContentsElement.style.height = heightContent + "px"
  setTimeout(() => {
    settingsContentsElement.style.height = heightContentNew + "px"
  }, 10);
  heightContent = heightContentNew
};

export const transitionOpacityAnimation = (callback, element_1, element_2) => {
  setTimeout(() => {
  element_1 ? element_1.classList.add("hidden") : "";
   element_2 ? element_2.classList.add("hidden") : "";
  }, 50);
  setTimeout(() => {
    callback();
    element_1 ? element_1.classList.remove("hidden") : "";
    element_2 ? element_2.classList.remove("hidden") : "";
  }, 500);
};

export const animationPositioning = (buttonsObjects) => {
  const childElement = document.querySelector(".js-child");
  activeProperties = [];

  buttonsObjects.forEach((object) => {
    let prop = "";
    let propValue = "";
    let positionValue;

    object.properties.forEach(obj => {
      obj.active ? prop = obj.name : "";
    });

    object.propertiesValues.forEach(obj => {
      obj.active ? propValue = obj.name : "";
    });

    if (prop && propValue) {
      activeProperties = [...activeProperties, { property: prop, propertyValue: propValue }];
    };
  });

  activePropertiesLast.forEach((property) => {
    childElement.style[property.property] = property.propertyValue;
  });

  setTimeout(() => {
    buttonsObjects.forEach((object) => {
      object.properties.forEach(obj => {
        obj.name === "position" ? childElement.style[obj.name] = "static" : "";
        obj.name === "transform" ? childElement.style[obj.name] = "none" : "";
        ["top", "bottom", "left", "right"].includes(obj.name) ? childElement.style[obj.name] = "auto" : "";
      });
    });

    activeProperties.forEach((property) => {
      childElement.style[property.property] = property.propertyValue;
    });
  }, 100)

  activePropertiesLast = activeProperties
};