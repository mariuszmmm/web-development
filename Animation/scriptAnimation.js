let heightContentLast;
let heightContentNew;
let activePropertiesLast = [];
let activePropertiesNew = [];

export const heightAnimation = (element) => {
  heightContentNew = element.scrollHeight;
  element.style.height = heightContentLast + "px"

  setTimeout(() => {
    element.style.height = heightContentNew + "px"
  }, 10);
  heightContentLast = heightContentNew;
};

export const opacityAnimation = (callback, element) => {
  setTimeout(() => {
    element ? element.classList.add("hidden") : "";
  }, 50);

  setTimeout(() => {
    callback();
    element ? element.classList.remove("hidden") : "";
  }, 500);
};

export const positioningAnimation = (buttonsObjects, element) => {
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