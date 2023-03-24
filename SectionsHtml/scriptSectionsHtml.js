export const sectionsHtml = () => {

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML = `
       <div class="settingsContents">
         <div class="settingsHeader">
         Semantic tags - sections HTML
         </div>
      </div>         
      `;
   }

   const renderOutput = () => {
      const outputElement = document.querySelector(".js-outputContainer");

      outputElement.innerHTML = "";
      outputElement.innerHTML = `
         <div class="outputContents">
            <div class="outputLabel"></div>
            <img class="outputImage--sectionsHtml" src="./SectionsHtml/images/sectionsHtml.png" alt="sectionsHtml">
         </div>
      `;
   }

   const render = () => {
      renderSettings();
      renderOutput();
   };

   render();
}