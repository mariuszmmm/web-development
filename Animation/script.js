let heightContentLast;
let heightContentNew;
let activePropertiesLast = [];
let activePropertiesNew = [];

export const transitionHeightAnimation = (element) => {
  heightContentNew = element.scrollHeight;
  element.style.height = heightContentLast + "px"

  setTimeout(() => {
    element.style.height = heightContentNew + "px"
  }, 10);
  heightContentLast = heightContentNew;
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

export const animationPositioning = (buttonsObjects, element) => {
  activePropertiesNew = [];

  buttonsObjects.forEach((object) => {
    let prop = "";
    let propValue = "";

    object.properties.forEach(obj => {
      obj.active ? prop = obj.name : "";
    });

    object.propertiesValues.forEach(obj => {
      obj.active ? propValue = obj.name : "";
    });

    if (prop && propValue) {
      activePropertiesNew = [...activePropertiesNew, { property: prop, propertyValue: propValue }];
    };
  });

  activePropertiesLast.forEach((property) => {
    element.style[property.property] = property.propertyValue;
  });

  setTimeout(() => {
    buttonsObjects.forEach((object) => {
      object.properties.forEach(obj => {
        obj.name === "position" ? element.style[obj.name] = "static" : "";
        obj.name === "transform" ? element.style[obj.name] = "none" : "";
        ["top", "bottom", "left", "right"].includes(obj.name) ? element.style[obj.name] = "auto" : "";
      });
    });

    activePropertiesNew.forEach((property) => {
      element.style[property.property] = property.propertyValue;
    });
  }, 100)

  activePropertiesLast = activePropertiesNew;
};