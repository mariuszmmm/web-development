import { startPage } from '../StartPage/scriptStartPage.js';
import { terminal } from '../Terminal/scriptTerminal.js';
import { htmlTags } from '../HtmlTags/scriptHtmlTags.js';
import { sectionsHtml } from '../SectionsHtml/scriptSectionsHtml.js';
import { positioning } from '../Positioning/scriptPositioning.js';
import { flex } from '../Flex/scriptFlex.js';
import { grid } from '../Grid/scriptGrid.js';
import { arrays } from '../Arrays/scriptArrays.js';
const settingsElement = document.querySelector(".js-settingsContainer");
const outputElement = document.querySelector(".js-outputContainer");

const init = () => {
   const buttons = document.querySelectorAll('.js-buttonNav');

   startPage();
   const intervalClock = setInterval(startPage, 1000);
   const changeActiveButton = (event) => {
      clearInterval(intervalClock)
      buttons.forEach(button => {
         button.classList.remove('button--active');
      });

      event.target.classList.add('button--active');
      
     //  settingsElement.classList.add("transition");
       settingsElement.classList.add("hidden")

      switch (event.target.innerText) {
         case "Terminal":{ 
            setTimeout(()=>{
              terminal();
          settingsElement.classList.remove("hidden")
          }, 300);
         };
            break;
         case "HTML Sections":{
             setTimeout(() => {
               sectionsHtml();
               settingsElement.classList.remove("hidden")
             }, 300);
           }; 
            break;
         case "HTML Tags":{
             setTimeout(() => {
                htmlTags();
               settingsElement.classList.remove("hidden")
             }, 300);
           };
            break;
         case "CSS Positioning": positioning();
            break;
         case "CSS Flex": flex();
            break;
         case "CSS Grid": grid();
            break;
         case "JS Arrays": arrays();
            break;
      };
   };

   buttons.forEach(button => {
      button.addEventListener("click", changeActiveButton);
   });
};

init();
