export const terminal = () => {

   const renderSettings = () => {
      const setingsElement = document.querySelector(".js-setings");

      setingsElement.innerHTML = "";
      setingsElement.innerHTML += `
         <div class="labelSetingsTerminal">
         ${settingsLabelContainer()}
         </div>
      `;
   };

   const settingsLabelContainer = () => {
      let labelElement = "";
      labelElement += `
      <div class="styleContentsTerminal strong">Terminal commands :</div>
      <div class="styleContentTerminal">
         <p>
            <span class="strong">dir &nbsp; → &nbsp; </span>
            list directory contents
         </p>
         <p>
            <span class="strong">cd C:\\dev &nbsp; &nbsp; → &nbsp; </span>
            change directory to C:\\dev
         </p>
         <p>
            <span class="strong">cd .. &nbsp; &nbsp; → &nbsp; </span>
            change directory to the parent directory
         </p>
         <p>
            <span class="strong">cd ../..  &nbsp; &nbsp; → &nbsp; </span>
            change directory to two parent directories up
         </p>
         <p>
            <span class="strong">cd  &nbsp; &nbsp; → &nbsp; </span>
            change directory to the user's home directory
         </p>
         <p>
            <span class="strong">code .  &nbsp; &nbsp; → &nbsp; </span>
            open Visual Studio Code in the current directory
         </p>
         <p>
            <span class="strong">code directory_name  &nbsp; &nbsp; → &nbsp; </span>
            open Visual Studio Code in the specified directory.
         </p>
      </div>
   `;

      return labelElement
   };

   const renderContents = () => {
      const contentsElement = document.querySelector(".js-contents");

      contentsElement.innerHTML = "";
   }

   const render = () => {
      renderSettings();
      renderContents();
   };

   render();

};