import { tagsArray } from "./tagsArray.js"

export const htmlTags = () => {

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML += `
         <div class="settingsContents settingsContents--HtmlTags">
         ${settingsLabelContainer()}
         </div>
      `;
   };

   const settingsLabelContainer = () => {
      let tagsCategory = [];
      tagsArray.forEach((tag) => {
         if (!tagsCategory.includes(tag.category)) {
            tagsCategory.push(tag.category)
         };
      })

      const tagsCategoryWithActive = tagsCategory.map((tag) => ({
         name:tag, active: false
      }))

      let labelElement = "";
      tagsCategoryWithActive.map((tagCategory) => {

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
               <button id="StructureTagsButton" 
                  class="button ${tagCategory.active ? "button--active" : ""} 
                  js-exampleButton">
                  example
               </button>   
            </div>
         `;
      });

      return labelElement
   };

   const onClick = ({ target }) => {
      const activeButton = () => {
         target.id.classList.add("active--button")
      }
      console.log(target.id)

      switch (target.id) {
         case "StructureTagsButton":
            renderExample();
            renderOutput();
            break
         case "ContainerTagsButton":
            renderExample();
            renderOutput();
            break
      }
   };

   const bindButtons = () => {
      const buttonElements = document.querySelectorAll(".js-exampleButton");

      buttonElements.forEach((button) => {
         button.addEventListener("click", onClick)
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

   const render = () => {
      renderSettings();
      bindButtons();
      renderContents();
   };

   render();
};