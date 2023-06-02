export const terminal = () => {

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      <div class="settingsContents">
        ${settingsLabelContainer()}
      </div>
    `;
  };

  const settingsLabelContainer = () => {
    let labelElement = "";
    labelElement += `
      <h1 class="settingsHeader">Terminal commands :</h1>
      <div>
        <p class="settingsParagraph">
          <span class="strong">dir &nbsp; → </span>
          list directory contents
        </p>
        <p class="settingsParagraph">
          <span class="strong">cd C:\\dev &nbsp; → </span>
          change directory to C:\\dev
        </p>
        <p class="settingsParagraph">
          <span class="strong">cd .. &nbsp; → </span>
          change directory to the parent directory
        </p>
        <p class="settingsParagraph">
          <span class="strong">cd ../..  &nbsp; → </span>
          change directory to two parent directories up
        </p>
        <p class="settingsParagraph">
          <span class="strong">cd  &nbsp; → </span>
          change directory to the user's home directory
        </p>
        <p class="settingsParagraph">
          <span class="strong">code .  &nbsp; → </span>
          open Visual Studio Code in the current directory
        </p>
        <p class="settingsParagraph">
          <span class="strong">code directory_name  &nbsp; → </span>
          open Visual Studio Code in the specified directory.
        </p>
      </div>
    `;

    return labelElement;
  };

  const renderOutput = () => {
    const contentsElement = document.querySelector(".js-outputContainer");

    contentsElement.innerHTML = ""
    contentsElement.innerHTML += `
      <div class="outputContents outputContents--terminal">
        <div class="outputLabel">TERMINAL :</div>
        <img class="outputImage--terminal" src="Terminal/images/terminal.gif" alt="terminal">
      </div>
    `;
  };

  const render = () => {
    renderSettings();
    renderOutput();
  };

  render();
};