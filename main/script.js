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
  const settingsElement = document.querySelector(".js-settingsContainer");
  const outputElement = document.querySelector(".js-outputContainer");

  transitionOpacityAnimation(() => startPage(), settingsElement, outputElement);
  const intervalClock = setInterval(startPage, 1000);

  const changeActiveButton = (event) => {
    clearInterval(intervalClock);
    buttons.forEach(button => {
      button.classList.remove('button--active');
    });
    event.target.classList.add('button--active');

    switch (event.target.innerText) {
      case "Terminal": transitionOpacityAnimation(() => terminal(), settingsElement, outputElement);
        break;
      case "HTML Sections": transitionOpacityAnimation(() => sectionsHtml(), settingsElement, outputElement);
        break;
      case "HTML Tags": transitionOpacityAnimation(() => htmlTags(), settingsElement, outputElement);
        break;
      case "CSS Positioning": transitionOpacityAnimation(() => positioning(), settingsElement, outputElement);
        break;
      case "CSS Flex": transitionOpacityAnimation(() => flex(), settingsElement, outputElement);
        break;
      case "CSS Grid": transitionOpacityAnimation(() => grid(), settingsElement, outputElement);
        break;
      case "JS Arrays": transitionOpacityAnimation(() => arrays(), settingsElement, outputElement);
        break;
    };
  };

  buttons.forEach(button => {
    button.addEventListener("click", changeActiveButton);
  });
};

init();
