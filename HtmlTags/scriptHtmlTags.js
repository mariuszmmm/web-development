import { tagsArray } from "./tagsArray.js";
import { opacityAnimation } from '../Animation/scriptAnimation.js';

export const htmlTags = () => {
  let tagsCategoryWithActive = [];
  let labelHeight;

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");

    let tagsCategory = [];
    tagsArray.forEach((tag) => {
      if (!tagsCategory.includes(tag.category)) {
        tagsCategory.push(tag.category)
      };
    });

    tagsCategoryWithActive = tagsCategory.map((tag) => ({
      name: tag, active: false
    }));

    let element = "";
    tagsCategoryWithActive.forEach((tagCategory) => {

      element += `
        <div class="labelHeader labelHeader--HtmlTags">
          ${tagCategory.name} :
        </div>    
        <div class="settingsSubcontainer--HtmlTags">
          <div>`

      tagsArray.forEach((tag) => {
        if (tag.category === tagCategory.name) {
          element += `
            <p class="labelParagraph">
              <span class="strong"> &lt;${tag.name}&gt; &nbsp; → </span>
                ${tag.description}
            </p>
          `;
        };
      });

      element += `   
        </div>
        <button id="${tagCategory.name}" class="button button--example ${tagCategory.active ? "button--active" : ""} js-exampleButton">
          example
        </button> 
        </div>
      `;
    });

    labelElement.innerHTML = `
      <div class="labelContents labelContents--HtmlTags">
        ${element}
      </div>
    `;

    labelElement.style.height = labelHeight + "px"
  };

  const renderOutput = (outputElement, exampleHtml, exampleOutput) => {
    outputElement.innerHTML = `
      <div class="outputContainer js-outputContainerHTML">
        <div class="outputContents outputContents--HtmlTags">
          <div class="outputLabel">HTML :</div>
           <div class="imgContainer">
            <img class="outputImage--HtmlTags" src="./HtmlTags/images/${exampleHtml}.gif" alt="HtmlTags_example">
            </div>
        </div>
      </div>
      <div class="outputContainer js-outputContainerOUTPUT">
      <div class="outputContents outputContents--HtmlTags">
        <div class="outputLabel">OUTPUT :</div>
        <div class="imgContainer">
          <img class="outputImage--HtmlTags" src="./HtmlTags/images/${exampleOutput}.gif" alt="HtmlTags_example">
          </div>
      </div>
    </div>
    `;
  };

  const bindButtons = () => {
    const buttonElements = document.querySelectorAll(".js-exampleButton");

    buttonElements.forEach((button) => {
      button.addEventListener("click", onClick);
      button.classList.remove("button--active");
      tagsCategoryWithActive.forEach((tag) => {
        if ((button.id === tag.name) && tag.active) {
          button.classList.add("button--active");
        };
      });
    });
  };

  const onClick = (event) => {
    const labelElement = document.querySelector(".js-labelContainer");
    const outputElement = document.querySelector(`.js-outputContainer`);
 /*   labelElement.style.height = 365 + "px"; */
    outputElement.classList.remove("none")

    tagsCategoryWithActive.map((tag) => {
      if (tag.name === event.target.id) {
        tag.active = true
      } else {
        tag.active = false
      };
    });

    let exampleHtml;
    let exampleOutput;

    switch (event.target.id) {
      case "Structure Tags":
        exampleHtml = "example_1";
        exampleOutput = "exampleOutput_1";
        break;
      case "Text Formatting Tags":
        exampleHtml = "example_2";
        exampleOutput = "exampleOutput_2";
        break;
      case "Container Tags":
        exampleHtml = "example_3";
        exampleOutput = "exampleOutput_3";
        break;
      case "Form Tags":
        exampleHtml = "example_4";
        exampleOutput = "exampleOutput_4";
        break;
      case "Semantic Tags":
        exampleHtml = "example_5";
        exampleOutput = "exampleOutput_5";
        break;
      case "List Tags":
        exampleHtml = "example_6";
        exampleOutput = "exampleOutput_6";
        break;
      case "Table Tags":
        exampleHtml = "example_7";
        exampleOutput = "exampleOutput_7";
        break;
      case "Multimedia Tags":
        exampleHtml = "example_8";
        exampleOutput = "exampleOutput_8";
        break;
      case "Script and Style Tags":
        exampleHtml = "example_9";
        exampleOutput = "exampleOutput_9";
        break;
      case "Button Tags":
        exampleHtml = "example_10";
        exampleOutput = "exampleOutput_10";
        break;
    };

    opacityAnimation(() => renderOutput(outputElement, exampleHtml, exampleOutput), outputElement);
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--htmlTags")

    mainContainerElement.innerHTML = `
      <div class="labelContainer js-labelContainer">
      </div>
      <div class="outputContainer js-outputContainer">
      </div>
    `;
    
  const outputElement = document.querySelector(`.js-outputContainer`);
   outputElement.classList.add("none"),

    labelHeight = mainContainerElement.offsetHeight - 10;
  };

  const render = () => {
    renderMainContainer();
    renderLabel();
    bindButtons();
  };

  render();
};