import { startPage } from '../StartPage/scriptStartPage.js';
import { terminal } from '../Terminal/scriptTerminal.js';
import { htmlTags } from '../HtmlTags/scriptHtmlTags.js';
import { inputsHtml } from '../InputsHtml/scriptInputsHtml.js';
import { sectionsHtml } from '../SectionsHtml/scriptSectionsHtml.js';
import { positioning } from '../Positioning/scriptPositioning.js';
import { flex } from '../Flex/scriptFlex.js';
import { grid } from '../Grid/scriptGrid.js';
import { arrays } from '../Arrays/scriptArrays.js';
import { opacityAnimation } from '../Animation/scriptAnimation.js';
{
  const init = () => {
    const buttons = document.querySelectorAll(".js-buttonNav");
    const mainContainerElement = document.querySelector(".js-mainContainer");

    opacityAnimation(() => startPage(), mainContainerElement);
    const intervalClock = setInterval(startPage, 1000);

    const changeActiveButton = (event) => {
      clearInterval(intervalClock);
      buttons.forEach(button => {
        button.classList.remove('button--active');
      });
      event.target.classList.add('button--active');

      switch (event.target.innerText) {
        case "Terminal": opacityAnimation(() => terminal(), mainContainerElement);
          break;
        case "HTML Tags": opacityAnimation(() => htmlTags(), mainContainerElement);
          break;
        case "HTML Inputs": opacityAnimation(() => inputsHtml(), mainContainerElement);
          break;
        case "HTML Sections": opacityAnimation(() => sectionsHtml(), mainContainerElement);
          break;
        case "CSS Positioning": opacityAnimation(() => positioning(), mainContainerElement);
          break;
        case "CSS Flex": opacityAnimation(() => flex(), mainContainerElement);
          break;
        case "CSS Grid": opacityAnimation(() => grid(), mainContainerElement);
          break;
        case "JS Arrays": opacityAnimation(() => arrays(), mainContainerElement);
          break;
      };
    };

    buttons.forEach(button => {
      button.addEventListener("click", changeActiveButton);
    });
  };

  init();
}