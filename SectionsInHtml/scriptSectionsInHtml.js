export const sectionsInHtml = () => {

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML = `
       <div class="settingsContents settingsContents--sectionsInHtml">
         <div class="settingsHeader settingsHeader--sectionsInHtml">
            Semantic tags - HTML structure
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
            <img class="outputImage--sectionsInHtml" src="./sectionsInHtml/images/sectionsInHtml.png" alt="SectionsInHtml">
         </div>
      `;
   }

   const render = () => {
      renderSettings();
      renderOutput();
   };

   render();
}