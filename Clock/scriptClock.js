export const clock = () => {

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML = `
       <div class="settingsContents settingsContents--clock">
         <div class="settingsHeader">
            TIME
         </div>
      </div>         
      `;
   }

   const renderContents = () => {
      const outputElement = document.querySelector(".js-outputContainer");

      const time = new Date();
      const hours = () => {
         if (time.getHours() < 10) {
            return "0" + (time.getHours())
         } else return (time.getHours()) + "";
      }
      const minutes = () => {
         if (time.getMinutes() < 10) {
            return "0" + (time.getMinutes())
         } else return (time.getMinutes()) + "";
      }
      const seconds = () => {
         if (time.getSeconds() < 10) {
            return "0" + (time.getSeconds())
         } else return (time.getSeconds()) + "";
      }

      outputElement.innerHTML = "";
      outputElement.innerHTML = `
      <div class="outputContents">
         <div class="clockContainer">
            <div class="clockContents">
               ${hours()}:${minutes()}:${seconds()}
            </div>
         </div>
      </div>
      `;
   }

   const render = () => {
      renderSettings();
      renderContents();
   };

   render();
}

