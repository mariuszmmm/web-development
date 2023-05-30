import { tagsArray } from "./tagsArray.js"
import { transitionOpacityAnimation } from '../Animation/script.js';

export const htmlTags = () => {
  let tagsCategoryWithActive = [];

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      <div class="settingsContents settingsContents--HtmlTags">
        ${renderSettingsContents()}
      </div>
      `;
  };

  const renderSettingsContents = () => {
    let tagsCategory = [];
    tagsArray.forEach((tag) => {
      if (!tagsCategory.includes(tag.category)) {
        tagsCategory.push(tag.category)
      };
    })

    tagsCategoryWithActive = tagsCategory.map((tag) => ({
      name: tag, active: false
    }))

    let labelElement = "";
    tagsCategoryWithActive.forEach((tagCategory) => {

      labelElement += `
        <div class="settingsHeader settingsHeader--HtmlTags">
          ${tagCategory.name} :
        </div>    
        <div class="settingsSubcontainer--HtmlTags">
          <div>`

      tagsArray.forEach((tag) => {
        if (tag.category === tagCategory.name) {
          labelElement += `
            <p class="settingsParagraph">
              <span class="strong"> &lt;${tag.name}&gt; &nbsp; → </span>
                ${tag.description}
            </p>
          `;
        }
      });

      labelElement += `   
        </div>
        <button id="${tagCategory.name}" 
          class="button button--example ${tagCategory.active ? "button--active" : ""} 
                  js-exampleButton">
            example
        </button> 
        </div>
      `;
    });

    return labelElement
  };

  const bindButtons = () => {
    const buttonElements = document.querySelectorAll(".js-exampleButton");

    buttonElements.forEach((button) => {
      button.addEventListener("click", onClick)
      button.classList.remove("button--active")
      tagsCategoryWithActive.forEach((tag) => {
        if ((button.id === tag.name) && tag.active) {
          button.classList.add("button--active")
        }
      })
    })
  };

  const renderExample = (event, example) => {
    const contentsElement = document.querySelector(".js-outputContainer");

    contentsElement.innerHTML = "";
    let contentsExample = "";
    contentsExample += `
      <div class="outputContents outputContents--HtmlTags">
        ${example ? `
        <div class="outputLabel">HTML :</div>
        ` : ""}
      `;

    if (event) {
      contentsExample += `
        <img class="outputImage--HtmlTags" src="./HtmlTags/images/${example}.gif" alt="HtmlTags_example">
      `;
    };

    contentsExample += `
      </div>
      `;

    contentsElement.innerHTML += contentsExample;
  }

  const renderExampleOutput = (event, example_output) => {
    const contentsElement = document.querySelector(".js-outputContainer");

    let contentsOutput = "";
    contentsOutput += `
      <div class="outputContents outputContents--HtmlTags">
        ${example_output ? `
        <div class="outputLabel">OUTPUT :</div>
        ` : ""}
      `;

    if (event) {
      contentsOutput += `
        <img class="outputImage--HtmlTags" src="./HtmlTags/images/${example_output}.gif" alt="HtmlTags_example_output">
      `;
    };

    contentsOutput += `
      </div>
    `;
    contentsElement.innerHTML += contentsOutput;
  }

  const renderOutput = () => {
    renderExample();
    renderExampleOutput();
  };

  const onClick = (event) => {
    const contentsElement = document.querySelector(".js-outputContainer");

    tagsCategoryWithActive.map((tag) => {
      if (tag.name === event.target.id) {
        tag.active = true
      } else {
        tag.active = false
      }
    })

    bindButtons();
    let example;
    let exampleOutput;

    switch (event.target.id) {
      case "Structure Tags":
        example = "example_1";
        exampleOutput = "exampleOutput_1";
        break;
      case "Text Formatting Tags":
        example = "example_2";
        exampleOutput = "exampleOutput_2";
        break;
      case "Container Tags":
        example = "example_3";
        exampleOutput = "exampleOutput_3";
        break;
      case "Form Tags":
        example = "example_4";
        exampleOutput = "exampleOutput_4";
        break;
      case "Semantic Tags":
        example = "example_5";
        exampleOutput = "exampleOutput_5";
        break;
      case "List Tags":
        example = "example_6";
        exampleOutput = "exampleOutput_6";
        break;
      case "Table Tags":
        example = "example_7";
        exampleOutput = "exampleOutput_7";
        break;
      case "Multimedia Tags":
        example = "example_8";
        exampleOutput = "exampleOutput_8";
        break;
      case "Script and Style Tags":
        example = "example_9";
        exampleOutput = "exampleOutput_9";
        break;
      case "Button Tags":
        example = "example_10";
        exampleOutput = "exampleOutput_10";
        break;
    }

    transitionOpacityAnimation(() => renderExample(event, example), contentsElement, contentsElement);
    transitionOpacityAnimation(() => renderExampleOutput(event, exampleOutput), contentsElement, contentsElement);
  };

  const renderChanges = () => {
    bindButtons();
    renderOutput();
  };

  renderSettings();
  renderChanges();
};