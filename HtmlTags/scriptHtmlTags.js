import { tagsArray } from "./tagsArray.js"

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
         <div class="outputContents">
         
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
         <div class="outputContents">
            
            ${example_output  ? `
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
      tagsCategoryWithActive.map((tag) => {
         if (tag.name === event.target.id) {
            tag.active = true
         } else {
            tag.active = false
         }
      })

      bindButtons();

      switch (event.target.id) {
         case "Structure Tags":
            renderExample(event, "example_1");
            renderExampleOutput(event, "exampleOutput_1");
            break;
         case "Text Formatting Tags":
            renderExample(event, "example_2");
            renderExampleOutput(event, "exampleOutput_2");
            break;
         case "Container Tags":
            renderExample(event, "example_3");
            renderExampleOutput(event, "exampleOutput_3");
            break;
         case "Form Tags":
            renderExample(event, "example_4");
            renderExampleOutput(event, "exampleOutput_4");
            break;
         case "Semantic Tags":
            renderExample(event, "example_5");
            renderExampleOutput(event, "exampleOutput_5");
            break;
         case "List Tags":
            renderExample(event, "example_6");
            renderExampleOutput(event, "exampleOutput_6");
            break;
         case "Table Tags":
            renderExample(event, "example_7");
            renderExampleOutput(event, "exampleOutput_7");
            break;
         case "Multimedia Tags":
            renderExample(event, "example_8");
            renderExampleOutput(event, "exampleOutput_8");
            break;
         case "Script and Style Tags":
            renderExample(event, "example_9");
            renderExampleOutput(event, "exampleOutput_9");
            break;
         case "Button Tags":
            renderExample(event, "example_10");
            renderExampleOutput(event, "exampleOutput_10");
            break;
      }
   };

   const renderChanges = () => {
      bindButtons();
      renderOutput();
   };

   renderSettings();
   renderChanges();
};