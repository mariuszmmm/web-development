let heightContent;
let heightContentNew;

export const transitionHeightAnimation = () => {
  const settingsContentsElement = document.querySelector(".js-settingsContents");
  heightContentNew = settingsContentsElement.scrollHeight

  settingsContentsElement.style.height = heightContent + "px"
  setTimeout(() => {
    settingsContentsElement.style.height = heightContentNew + "px"
  }, 10);
  heightContent = heightContentNew
};

export const transitionOpacityAnimation = (callback) => {
  const settingsElement = document.querySelector(".js-settingsContainer");
  const outputElement = document.querySelector(".js-outputContainer");
  setTimeout(() => {
    settingsElement.classList.add("hidden")
    outputElement.classList.add("hidden")
  }, 50);
  setTimeout(() => {
    callback();
    settingsElement.classList.remove("hidden")
    outputElement.classList.remove("hidden")
  }, 500);
};