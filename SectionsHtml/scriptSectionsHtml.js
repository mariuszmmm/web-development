export const sectionsHtml = () => {

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = "";
    labelElement.innerHTML = `
      <div class="labelContents">
        <div class="labelHeader">
          Semantic tags - sections HTML
        </div>
      </div>         
    `;
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    outputElement.innerHTML = "";
    outputElement.innerHTML = `
      <div class="outputContents outputContents--sectionsHtml">
        <div class="outputLabel"></div>
          <img class="outputImage--sectionsHtml" src="./SectionsHtml/images/sectionsHtml.png" alt="sectionsHtml">
        </div>
    `;
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--sectionsHtml")

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