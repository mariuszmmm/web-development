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

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = "";
    labelElement.innerHTML = `
      <div class="labelContents labelContents--clock">
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

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--startPage")

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer js-labelContainer">
      </div>
      <div class="outputContainer js-outputContainer">
      </div>
    `;
  };

  const render = () => {
    renderMainContainer();
    renderLabel()
    renderOutput()
  };

  render();
};