export const terminal = () => {

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    labelElement.innerHTML = `
      <div class="labelContents">
        <h1 class="labelHeader">Terminal commands :</h1>
        <div>
          <p class="labelParagraph">
            <span class="strong">dir &nbsp; → </span>
            list directory contents
          </p>
          <p class="labelParagraph">
            <span class="strong">cd C:\\dev &nbsp; → </span>
            change directory to C:\\dev
          </p>
          <p class="labelParagraph">
            <span class="strong">cd .. &nbsp; → </span>
            change directory to the parent directory
          </p>
          <p class="labelParagraph">
            <span class="strong">cd ../..  &nbsp; → </span>
            change directory to two parent directories up
          </p>
          <p class="labelParagraph">
            <span class="strong">cd  &nbsp; → </span>
            change directory to the user's home directory
          </p>
          <p class="labelParagraph">
            <span class="strong">code .  &nbsp; → </span>
            open Visual Studio Code in the current directory
          </p>
          <p class="labelParagraph">
            <span class="strong">code directory_name  &nbsp; → </span>
            open Visual Studio Code in the specified directory.
          </p>
        </div>  
      </div>     
    `;
  };

  const renderOutput = () => {
    const contentsElement = document.querySelector(".js-outputContainer");

    contentsElement.innerHTML += `
      <div class="outputContents outputContents--terminal">
        <div class="outputLabel">TERMINAL :</div>
       <div class="imgContainer">
        <img class="outputImage--terminal" src="Terminal/images/terminal.gif" alt="terminal">
        </div>
      </div>
    `;
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--terminal");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer js-labelContainer">
      </div>
      <div class="outputContainer js-outputContainer">
      </div>
    `;
  };

  const render = () => {
    renderLabel();
    renderOutput();
  };

  renderMainContainer();
  render();
};