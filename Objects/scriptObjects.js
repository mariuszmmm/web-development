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
  let specActive = "methods";

  const viewMethodContent = (methodContent) => {
    let element = "";
    const [, inputValue, , content, additionalContents] = methodContent;

    if (additionalContents) {
      additionalContents.forEach((elem, index) => {
        if (index === 0) {
          element += `  
            <p class="strong">${elem.replaceAll("'", "\"")}${(inputValue !== undefined) ? inputValue + ";" : ""}</p>
            `;
        };
        if (index > 0) {
          if (additionalContents.length === index + 1) {
            element += `  
            <p class="labelParagraph--objects strong">${elem.replaceAll("'", "\"")};</p>
            `;
          } else {
            element += `<p class="labelParagraph strong">${elem.replaceAll("'", "\"")}</p>`;
          }
        }
      })
    }

    if (content.length > 0) {
      element += `<p class="strong">let output = ${content}</p>`;
    };

    element += `
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
    content = `{<div class="labelParagraph--objects">${content}</div>}`

    return content;
  };

  const renderLabel = () => {
    const labelElement = document.querySelector(".js-labelContainer");
    labelElement.innerHTML = `
        <div class="labelContents labelContents--objects js-labelContents">
          <p class="labelParagraph--objects strong">const object = {${Object.keys(object).length > 0 ? `
          </p>
          <div class="labelParagraph labelParagraph--objects">
            ${viewObject(object)}
          </div>
          <p class="labelParagraph--objects strong">
          ` : ""}};</p>
          <p></p>
          ${showExampleObject ? `<p class="labelParagraph--objects strong">const exampleObject = {</p>
          <div class="labelParagraph labelParagraph--objects">
            ${viewObject(exampleObject)}
          </div>
          <p class="labelParagraph--objects strong">};</p>  
          <p></p>` : ""}          
          ${(methodContent[0] && !methodContent.includes("warning")) ? viewMethodContent(methodContent) : ""}
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
          <label class="selectLabel">
            <span class="methods--label">
              Spec : 
            </span>
            <select class="js-select">
              <option value="methods" ${specActive === "methods" ? "selected" : ""}>
                using object properties and methods
              </option>
              <option value="iteration" ${specActive === "iteration" ? "selected" : ""}>
                iteration
              </option>
              <option value="destructuring" ${specActive === "destructuring" ? "selected" : ""}>
                destructuring
              </option>
              <option value="spreadSyntax" ${specActive === "spreadSyntax" ? "selected" : ""}>
                spread syntax
              </option>
              <option value="immutability" ${specActive === "immutability" ? "selected" : ""}>
                immutability 
              </option>
            </select>
          </label>
          <div class="settingsElements">
      `;

      methodsObject.forEach((object) => {
        if (object.spec === specActive) {
          methodsSetingsElement += `
        ${methodsObjectSettings(object.method, object.inputType)}
      `};
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
    const selectElement = document.querySelector(".js-select")
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

    selectElement.addEventListener("change", () => {
      outputInfo = "";
      output = "";

      specActive = selectElement.value
      render();
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
                  runMethod(button.id, enterNumberOrString(input.value), method.method, method.contents, method.additionalContents);
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
            runMethod(button.id, null, method.method, method.contents, method.additionalContents)
            render();
          };
        });
      });
    });

    const useRandomObject = () => {
      object = (objectsArray[Math.floor(Math.random() * objectsArray.length)]);
      outputInfo = "A random object has been saved in the variable \"object\".";
      render();
    };

    randomElements.forEach(element => element.addEventListener("click", ({ target }) => {
      target.id === "randomObject" ? useRandomObject() : "";
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
        target.id === "showExample" ? changeShowExampleObject() : "";
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

  const runMethod = (button, inputValue, method, content, additionalContents) => {
    outputInfo = "";
    output = "";

    switch (button) {
      case "object.name":
        output = object.name;
        methodContent = [method, , , content];
        break;
      case "object.surname":
        output = object.surname;
        methodContent = [method, , , content];
        break;
      case "object.age":
        output = object.age;
        methodContent = [method, , , content];
        break;
      case "object.sayHello()":
        object.sayHello();
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "object.getFullName()":
        output = object.getFullName();
        methodContent = [method, , , content];
        break;
      case "object.friend":
        output = object.friend;
        methodContent = [method, , , content];
        break;
      case "object['friend']['name']":
        output = object["friend"]["name"];
        methodContent = [method, , , content];
        break;
      case "object['friend']['surname']":
        output = object["friend"]["surname"];
        methodContent = [method, , , content];
        break;
      case "object['friend']['age']":
        output = object["friend"]["age"];
        methodContent = [method, , , content];
        break;
      case "object === exampleObject":
        output = object === exampleObject;
        methodContent = [method, , , content];
        break;
      case "object.name === exampleObject.name":
        output = object.name === exampleObject.name;
        methodContent = [method, , , content];
        break;
      case "object.friend === exampleObject.friend":
        output = object.friend === exampleObject.friend;
        methodContent = [method, , , content];
        break;
      case "object.name = ":
        object.name = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object.surname = ":
        object.surname = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object.age = ":
        object.age = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object.city = ":
        object.city = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object['friend']['name'] = ":
        object["friend"]["name"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object['friend']['surname'] = ":
        object["friend"]["surname"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "object['friend']['age'] = ":
        object["friend"]["age"] = readNumberOrString(inputValue);
        methodContent = [method, inputValue, , content, additionalContents];
        outputInfo = "The variable \"object\" has been changed.";
        break;
      case "for...in":
        for (const property in object) { console.log(`${property}: ${object[property]}`) };
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "const { name, surname, ...rest } = object":
        const { name, surname, ...objectWithoutNameAndSurname } = object;
        console.log(name, surname);
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "const { city = 'N/A' } = object":
        const { city = "N/A" } = object;
        console.log(city);
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "const { surname: lastName } = object":
        const { surname: lastName } = object;
        console.log(lastName);
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "const { friend: { name: friendName } } = object":
        const { friend: { name: friendName } } = object;
        console.log(friendName);
        methodContent = [method, , , content, additionalContents];
        outputInfo = "Check the console";
        break;
      case "function argument destructuring":
        const getObjectFullNameWithAge = ({ name, surname, age }) => `${name} ${surname} ${age}`;
        output = getObjectFullNameWithAge(object);
        methodContent = [method, , , content, additionalContents];
        break;
      case "cloning an object (shallow copy)":
        output = { ...object };
        methodContent = [method, , , content];
        break;
      case "merging objects":
        const additionalObject = { city: "New York", hobby: "swimming" };
        output = { ...object, ...additionalObject };
        methodContent = [method, , , content, additionalContents];
        break;
      case "adding properties to an object":
        output = { ...object, city: 'N/A' };
        methodContent = [method, , , content];
        break;
      case "editing object properties":
        output = { ...object, name: 'Tom' };
        methodContent = [method, , , content];
        break;
      case "removal of object's property":
        const { age, ...rest } = object;
        output = rest;
        methodContent = [method, , , content, additionalContents];
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