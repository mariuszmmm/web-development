import { startPage } from '../StartPage/scriptStartPage.js';
import { terminal } from '../Terminal/scriptTerminal.js';
import { htmlTags } from '../HtmlTags/scriptHtmlTags.js';
import { sectionsHtml } from '../SectionsHtml/scriptSectionsHtml.js';
import { positioning } from '../Positioning/scriptPositioning.js';
import { flex } from '../Flex/scriptFlex.js';
import { grid } from '../Grid/scriptGrid.js';
import { arrays } from '../Arrays/scriptArrays.js';
import { transitionOpacityAnimation } from '../Animation/script.js';

const init = () => {
  const buttons = document.querySelectorAll('.js-buttonNav');

  transitionOpacityAnimation(() => startPage());
  const intervalClock = setInterval(startPage, 1000);

  const changeActiveButton = (event) => {
    clearInterval(intervalClock);
    buttons.forEach(button => {
      button.classList.remove('button--active');
    });
    event.target.classList.add('button--active');

    switch (event.target.innerText) {
      case "Terminal": transitionOpacityAnimation(() => terminal());
        break;
      case "HTML Sections": transitionOpacityAnimation(() => sectionsHtml());
        break;
      case "HTML Tags": transitionOpacityAnimation(() => htmlTags());
        break;
      case "CSS Positioning": transitionOpacityAnimation(() => positioning());
        break;
      case "CSS Flex": transitionOpacityAnimation(() => flex());
        break;
      case "CSS Grid": transitionOpacityAnimation(() => grid());
        break;
      case "JS Arrays": transitionOpacityAnimation(() => arrays());
        break;
    };
  };

  buttons.forEach(button => {
    button.addEventListener("click", changeActiveButton);
  });
};

init();
