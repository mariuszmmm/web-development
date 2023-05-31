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
          <form class="settingsElements">
      `;

      inputsArray.forEach(input => {
        inputsSetingsElement += `
          <div class="propertyElements propertyElements--inputs">
            <span class="contentName">
              &lt;input type="${input}"&gt;
            </span>
            <span class="contentName">
              &nbsp; → &nbsp;
            </span>
          </div>
          <div class="valueElements valueElements--inputs">
            <input class="input--inputs" type="${input}" />
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

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");
    outputElement.innerHTML = "";
  };

  const render = () => {
    renderSettings();
    renderOutput();
  }

  render();
}