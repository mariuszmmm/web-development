import { html } from './scriptHtml.js';
import { terminal } from './scriptTerminal.js';
import { positioning } from './scriptPositioning.js';

const init = () => {
   const buttons = document.querySelectorAll('.js-buttonRadio');

   const changeActiveButton = (event) => {
      buttons.forEach(button => {
         button.classList.remove('button--active');
      });

      event.target.classList.add('button--active');

      switch (event.target.innerText) {
         case "Terminal": terminal();
            break;
         case "CSS Positioning": positioning();
            break;
            case "HTML Tags": html();
            break;
      };
   };

   buttons.forEach(button => {
      button.addEventListener("click", changeActiveButton);
   });
};

init();