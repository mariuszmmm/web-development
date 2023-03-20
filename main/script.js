import { startPage } from '../StartPage/scriptStartPage.js';
import { terminal } from '../Terminal/scriptTerminal.js';
import { htmlTags } from '../HtmlTags/scriptHtmlTags.js';
import { sectionsHtml } from '../SectionsHtml/scriptSectionsHtml.js';
import { positioning } from '../Positioning/scriptPositioning.js';

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

      switch (event.target.innerText) {
         case "Terminal": terminal();
            break;
         case "Sections HTML": sectionsHtml();
            break;
         case "HTML Tags": htmlTags();
            break;
         case "CSS Positioning": positioning();
            break;
      };
   };

   buttons.forEach(button => {
      button.addEventListener("click", changeActiveButton);
   });

};

init();