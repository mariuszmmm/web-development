import { inputsArray } from "./inputsArray.js";

export const inputsHtml = () => {
  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const inputsSettings = () => {
      let inputsSetingsElement = "";

      inputsSetingsElement += `
        <div class="inputsSettings">
          <span class="inputsSettings--label">
            HTML Input Types :
          </span>
          <form class="settingsElements settingsElements--inputs">
      `;

      inputsArray.forEach(input => {
        inputsSetingsElement += `
          <div class="propertyElements propertyElements--inputs">
            <span class="contentName">
              &lt;input type="${input.type}"&gt;
            </span>
          </div>
          <div class="propertyElements">
            <span class="arrow">
              →
            </span>
          </div>
          <div class="valueElements valueElements--inputs">
            <input class="input--inputs" type="${input.type}" required
              ${!!input.value ? `value="${input.value}"` : ""} 
              ${!!input.name ? `name="${input.name}"` : ""}
            />
          </div>
        `;
      });

      inputsSetingsElement += `
          </form>
        </div>
      `;

      return inputsSetingsElement
    };

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      ${inputsSettings()}      
    `;
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
    <div class="settingsContainer js-settingsContainer">
  `;
  };

  const render = () => {
    renderSettings();
  };

  renderMainContainer();
  render();
};