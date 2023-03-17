import { terminal } from '../Terminal/scriptTerminal.js';
import { htmlTags } from '../HtmlTags/scriptHtmlTags.js';
import { sectionsInHtml } from '../SectionsInHtml/scriptSectionsInHtml.js';
import { positioning } from '../Positioning/scriptPositioning.js';
import { clock } from '../Clock/scriptClock.js';

const init = () => {
   const buttons = document.querySelectorAll('.js-buttonNav');

   const intervalId = setInterval(clock, 100)
   const changeActiveButton = (event) => {
      clearInterval(intervalId)
      buttons.forEach(button => {
         button.classList.remove('button--active');
      });

      event.target.classList.add('button--active');

      switch (event.target.innerText) {
         case "Terminal": terminal();
            break;
         case "Sections HTML": sectionsInHtml();
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