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
      console.log(tagsCategory);

      tagsCategoryWithActive = tagsCategory.map((tag) => ({
         name: tag, active: false
      }))

      let labelElement = "";
      tagsCategoryWithActive.forEach((tagCategory) => {

         labelElement += `
            <div class="settingsHeader settingsHeader--HtmlTags">
               ${tagCategory.name} :
            </div>    
            <div class="settingsContainer settingsContainer--HtmlTags">
               <div>`

         tagsArray.forEach((tag) => {
            if (tag.category === tagCategory.name) {
               labelElement += `
                  <p class="settingsParagraph">
                     <span class="strong"> &lt;${tag.name}&gt; &nbsp; → &nbsp; </span>
                     ${tag.description}
                  </p>
               `;
            }
         });

         labelElement += `   
               </div>
               <button id="${tagCategory.name}" 
                  class="button ${tagCategory.active ? "button--active" : ""} 
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

   const renderExample = () => {
      const contentsElement = document.querySelector(".js-outputContainer");

      contentsElement.innerHTML = "";
      contentsElement.innerHTML += `
         <div class="outputContents">
            <div class="outputLabel">HTML :</div>
            
         </div>
         `;
   }

   const renderOutput = () => {
      const contentsElement = document.querySelector(".js-outputContainer");

      contentsElement.innerHTML += `
         <div class="outputContents">
            <div class="outputLabel">OUTPUT :</div>
      
         </div>
         `;
   }

   const renderContents = () => {
      const contentsElement = document.querySelector(".js-outputContainer");
      renderExample();
      renderOutput();
   };

   const onClick = ({ target }) => {
      tagsCategoryWithActive.map((tag) => {
         if (tag.name === target.id) {
            tag.active = true
         } else {
            tag.active = false
         }
      })

      switch (target.id) {
         case "Structure Tags":
            renderExample();
            renderOutput();
            break;
         case "Container Tags":
            renderExample();
            renderOutput();
            break;
         case "Form Tags":
            renderExample();
            renderOutput();
            break;
         case "Semantic Tags":
            renderExample();
            renderOutput();
            break;
         case "Text Formatting Tags":
            renderExample();
            renderOutput();
            break;
         case "List Tags":
            renderExample();
            renderOutput();
            break;
         case "Table Tags":
            renderExample();
            renderOutput();
            break;
         case "Multimedia Tags":
            renderExample();
            renderOutput();
            break;
         case "Script and Style Tags":
            renderExample();
            renderOutput();
            break;
         case "Button Tags":
            renderExample();
            renderOutput();
            break;

      }
      render();
   };


   const render = () => {
      bindButtons();
      renderContents();
   };

   renderSettings();
   render();
};