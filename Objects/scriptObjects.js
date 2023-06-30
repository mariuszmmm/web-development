import { methodsObject } from "./methodsObjectRaw.js";
import { objectsArray, exampleObject } from "./objects.js";
import { heightAnimation } from "../Animation/scriptAnimation.js";

export const objects = () => {
  let object = {};
  let methodContent = [];
  let output = "";
  let outputInfo = "The variable \"output\" values or information about the used functions will be displayed here.";
  let showExampleObject = false;
  let methodActive = "";

  const vievMethodContent = (methodContent) => {
    let element = "";

    element += `
      <span class="labelParagraph--objects strong">
        let output = ${methodContent[0].replaceAll("'", "\"")}${(methodContent[1] !== undefined) ?
        (typeof (methodContent[1]) === "string" ?
          (methodContent[1])
          :
          ((typeof (methodContent[1]) === "object") ?
            methodContent[1].name
            :
            methodContent[1]))
        :
        ""};
      </span>
    `;

    return element;
  };

  const viewObject = (obj) => {
    let content = "";
    let index = 0;

    for (const prop in obj) {
      ++index
      content += `<div class="labelParagraph labelParagraph--objects">` +
        (typeof (obj[prop]) === "string" ? (prop + `: "` + obj[prop] + `"`) : (typeof (obj[prop]) === "number") ? (prop + `: ` + obj[prop]) : `${typeof (obj[prop]) === "object" ? `${prop + `: ` + viewSubObject(obj[prop])}` : viewFunction(obj[prop])}`) + `${(Object.keys(obj).length === index) ? "" : ","}</div>`
    };

    return content;
  };

  const viewFunction = (fun) => {
    let content = fun.toString();
    content = content.replace("() {", `() { <p class="labelParagraph labelParagraph--objects">`);
    content = content.replace(/}$/, `</p>}`);

    return content;
  };

  const viewSubObject = (obj) => {
    let content = "";
    let index = 0;

    for (let prop in obj) {
      ++index
      content += `<p class="labelParagraph labelParagraph--objects">` + (prop + ": ") +
        (typeof (obj[prop]) === "string" ? (`"` + obj[prop] + `"`) : (typeof (obj[prop]) === "number") ? (obj[prop]) : obj[prop]) + `,</p>`
    };
    content = `{<div class="labelParagraph--objects">${content}</div>},`

    return content;
  };

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");
    labelElement.innerHTML = `
        <div class="labelContents labelContents--objects js-labelContents">
          <p class="labelParagraph--objects strong">const object = {
          ${Object.keys(object).length > 0 ? `
          </p>
          <div class="labelParagraph labelParagraph--objects">
            ${viewObject(object)}
          </div>
          <p class="labelParagraph--objects strong">
          ` : ""}
          };</p>
          <p></p>
          ${showExampleObject ? `<p class="labelParagraph--objects strong">const exampleObject = {</p>
          <div class="labelParagraph labelParagraph--objects">
            ${viewObject(exampleObject)}
          </div>
          <p class="labelParagraph--objects strong">};</p>  
          <p></p>` : ""}          
          ${(methodContent[0] && !methodContent.includes("warning")) ? vievMethodContent(methodContent) : ""}
        </div>
      `;
  }

  const renderSettings = () => {
    const settingsElement = document.querySelector(".js-settingsContainer");

    const methodsSettings = () => {
      let methodsSetingsElement = "";

      const methodsObjectSettings = (name, inputType) => {
        let element = "";

        element += `
          <form class="form js-form">
            <div class="propertyElements propertyElements--objects">
              <span class="methodName">
                ${name.replaceAll("'", "\"")}
              </span>
              <div class="methodName methodName--parameters">
        `;

        element += `
          ${inputType ? `
            <input type="text" name="${name}" ${Object.keys(object).length > 0 ? "" : "disabled"} autocomplete="off" class="methodInput js-methodInput" />` : ""} 
        `;

        element += ` 
              </div>&nbsp;
            </div>
            <div class="valueElements valueElements--objects">
              <button id="${name}" ${Object.keys(object).length > 0 ? "" : "disabled"} class="button button--array button--run">
                run
              </button>
            </div>
          </form>
          <div class="valueElements valueElements--objects">
       `;

        element += `
          </div>
        `;

        return element;
      };

      methodsSetingsElement += `
        <div>
          <div class="settings--objects">
            <span class="methods--label">
              Load object :
            </span>
            <div class="valueElements">   
              <button id="randomObject" class="button js-random">
                random object
              </button>                  
            </div>            
            <span class="methods--label">
              Example object :
            </span>
            <div class="valueElements">
              <button id="showExample" class="button ${showExampleObject ? "button--active" : ""} js-example">
              show example object
              </button>          
            </div>
          </div>
          <span class="methods--label">
            Methods :
          </span>
          <div class="settingsElements">
      `;

      methodsObject.forEach((object) => {
        methodsSetingsElement += `
        ${methodsObjectSettings(object.method, object.inputType)}
      `
      });

      methodsSetingsElement += `
          </div>            
        </div>
      `;

      return methodsSetingsElement;
    };

    settingsElement.innerHTML = "";
    settingsElement.innerHTML += `
      ${methodsSettings()}      
    `;

    const settingsContentsElement = document.querySelector(".js-labelContents");
    heightAnimation(settingsContentsElement);
  };

  const renderOutput = () => {
    const outputElement = document.querySelector(".js-outputContainer");

    outputElement.innerHTML = "";
    outputElement.innerHTML += `
    <div class="outputContents outputContents--objects">
      <div class="outputLabel">OUTPUT :</div>
      ${!outputInfo ? (typeof (output) === "object" ? `
      <div class="labelParagraph--objects strong">{${viewObject(output)}}</div>` : (typeof (output) === "object") ? ` 
      <div class="labelParagraph--objects strong"> ${output !== null ? viewObject(output) : output} </div>`
        :
        (typeof (output) === "string" ?
          (output !== "" ? `"` + output + `"` : output)
          :
          viewFunction(output)
        )) : outputInfo}
    </div>
  </div >
    `;
  };

  const bindInputsAndButtons = () => {
    const inputElements = document.querySelectorAll(".js-methodInput");
    const formElements = document.querySelectorAll(".js-form");
    const randomElements = document.querySelectorAll(".js-random");
    const exampleElements = document.querySelectorAll(".js-example");
    methodContent = [];

    inputElements.forEach((input) => {
      if (input.name === methodActive) input.focus();

      input.addEventListener("click", ({ target }) => {
        methodsObject.forEach((method) => {
          if (method.method === input.name) {
            target.value = "";
            outputInfo = `Enter a value and then click the "run" button or hit enter.`;
            renderOutput();
          };
        });
      });

      input.addEventListener("keyup", ({ key, target }) => {
        if ((key.match(/^[a-zA-Z0-9\W]$/)) && (input.classList.contains("errorInput"))) {
          methodsObject.forEach(({ method }) => {
            if (method === input.name) {
              input.classList.remove("errorInput");
              key ? (target.value = key) : (target.value = "");
            };
          });
        };
      });
    });

    const displayWarningAboutInputValue = (input) => {
      methodContent = [...methodContent, "warning"];
      outputInfo = `Input value is not allowed, use: number or \" \"`
      input.classList.add("errorInput")
      input.focus();
      renderOutput();
    };

    formElements.forEach((formElement) => {
      formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const button = event.submitter;

        inputElements.forEach((input) => {
          if (input.name === button.id) {
            methodsObject.forEach((method) => {
              if (method.method === button.id) {
                const pattern = method.inputPattern;
                if (pattern.test(input.value)) {
                  runMethod(button.id, enterNumberOrString(input.value), method.method);
                  methodActive = input.name;
                  render();
                  methodActive = "";
                } else {
                  displayWarningAboutInputValue(input);
                  return
                };
              };
            });
          };
        });

        methodsObject.forEach((method) => {
          if ((method.method === button.id) && !method.inputType) {
            runMethod(button.id, null, method.method)
            render();
          };
        });
      });
    });

    const useRandomObject = () => {
      object = {};
      object = (objectsArray[Math.floor(Math.random() * objectsArray.length)]);
      outputInfo = "A random object has been saved in the variable \"object\".";
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      switch (target.id) {
        case "randomObject":
          useRandomObject();
          break;
      };
    }));

    const changeShowExampleObject = () => {
      showExampleObject = !showExampleObject
      if (showExampleObject) {
        outputInfo = "The variable \"exampleObject\" has been displayed.";
      } else {
        outputInfo = "The variable \"exampleObject\" has been hidden.";
      }
      render();
    };

    exampleElements.forEach((element) => {
      element.addEventListener("click", ({ target }) => {
        switch (target.id) {
          case "showExample":
            changeShowExampleObject();
            break;
        };
      });
    });
  };

  const enterNumberOrString = (inputValue) => {
    return (
      (typeof (inputValue) === "string" ? (inputValue) : "")
    );
  };

  const readNumberOrString = (inputValue) => {
    return (
      (typeof (inputValue) === "string") ?
        ((inputValue[0] === `"` && inputValue[inputValue.length - 1] === `"`) ?
          inputValue.slice(1, -1) : (inputValue === "" ? inputValue : Number(inputValue)))
        :
        ((typeof (inputValue) === "object") ? inputValue.name : Number(inputValue))
    );
  };

  const runMethod = (button, inputValue, method) => {
    outputInfo = "";

    switch (button) {
      case "object.name":
        output = object.name;
        methodContent = [method];
        break;
      case "object.surname":
        output = object.surname;
        methodContent = [method];
        break;
      case "object.age":
        output = object.age;
        methodContent = [method];
        break;
      case "object.sayHello()":
        object.sayHello();
        output = object.sayHello;
        methodContent = [method];
        break;
      case "object.getFullName()":
        output = object.getFullName()
        methodContent = [method];
        break;
      case "object.friend":
        output = object.friend;
        methodContent = [method];
        break;
      case "object['friend']['name']":
        output = object["friend"]["name"];
        methodContent = [method];
        break;
      case "object['friend']['surname']":
        output = object["friend"]["surname"];
        methodContent = [method];
        break;
      case "object['friend']['age']":
        output = object["friend"]["age"];
        methodContent = [method];
        break;
      case "object === exampleObject":
        output = object === exampleObject;
        methodContent = [method];
        break;
      case "object.name === exampleObject.name":
        output = object.name === exampleObject.name;
        methodContent = [method];
        break;
      case "object.friend === exampleObject.friend":
        output = object.friend === exampleObject.friend;
        methodContent = [method];
        break;
      case "object = exampleObject":
        output = object = exampleObject;
        methodContent = [method];
        break;
      case "object = { ...exampleObject }":
        output = object = { ...exampleObject };
        methodContent = [method];
        break;
      case "object.name = ":
        output = object.name = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.surname = ":
        output = object.surname = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object.age = ":
        output = object.age = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object['friend']['name'] = ":
        output = object["friend"]["name"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object['friend']['surname'] = ":
        output = object["friend"]["surname"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
      case "object['friend']['age'] = ":
        output = object["friend"]["age"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue];
        break;
    };
  };

  const renderMainContainer = () => {
    const mainContainerElement = document.getElementById("main");

    mainContainerElement.scrollTo(0, 0);
    mainContainerElement.classList = "";
    mainContainerElement.classList.add("mainContainer", "mainContainer--objects");

    mainContainerElement.innerHTML = "";
    mainContainerElement.innerHTML = `
      <div class="labelContainer labelContainer--objects js-labelContainer">
      </div>
      <div class="settingsContainer settingsContainer--objects js-settingsContainer">
      </div>
      <div class="outputContainer js-outputContainer">
      </div>
    `;
  };

  const render = () => {
    renderLabel();
    renderSettings();
    renderOutput();
    bindInputsAndButtons();
  };

  renderMainContainer();
  render();
};