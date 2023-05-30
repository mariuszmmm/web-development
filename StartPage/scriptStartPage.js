export const startPage = () => {
  const clock = () => {
    const time = new Date();

    const hours = () => {
      if (time.getHours() < 10) {
        return "0" + (time.getHours())
      } else return (time.getHours()) + "";
    };

    const minutes = () => {
      if (time.getMinutes() < 10) {
        return "0" + (time.getMinutes())
      } else return (time.getMinutes()) + "";
    };

    const seconds = () => {
      if (time.getSeconds() < 10) {
        return "0" + (time.getSeconds())
      } else return (time.getSeconds()) + "";
    };

    let clockString = `
      ${hours()}:${minutes()}:${seconds()}
    `;

    return clockString;
  };

  const renderLeabel = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML = `
      <div class="settingsContents settingsContents--clock">
        TIME
      </div>         
    `;
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    outputElement.innerHTML = "";
    outputElement.innerHTML = `
      <div class="outputContents">
        <div class="clockContainer">
          <div class="clockContents">
            ${clock()}
          </div>
        </div>
      </div>
    `;
  };

  const render = () => {
    renderLeabel();
    renderOutput();
  };

  render();
};