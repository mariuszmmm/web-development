import { htmlTags } from './HtmlTags/scriptHtmlTags.js';
import { terminal } from './Terminal/scriptTerminal.js';
import { positioning } from './Positioning/scriptPositioning.js';
import { clock } from './Clock/scriptClock.js';

const init = () => {
   console.log("start init")
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
         case "CSS Positioning": positioning();
            break;
         case "HTML Tags": htmlTags();
            break;
      };
   };

   buttons.forEach(button => {
      button.addEventListener("click", changeActiveButton);
   });


};

init();