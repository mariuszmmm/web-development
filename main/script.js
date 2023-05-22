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

  const setFadeTime = (callback) => {
    settingsElement.classList.add("hidden")
    outputElement.classList.add("hidden")
    setTimeout(() => {
      callback();
      settingsElement.classList.remove("hidden")
      outputElement.classList.remove("hidden")
    }, 250);
  };

  setFadeTime(() => startPage());
  const intervalClock = setInterval(startPage, 1000);

  const changeActiveButton = (event) => {
    clearInterval(intervalClock);
    buttons.forEach(button => {
      button.classList.remove('button--active');
    });
    event.target.classList.add('button--active');

    switch (event.target.innerText) {
      case "Terminal": setFadeTime(() => terminal());
        break;
      case "HTML Sections": setFadeTime(() => sectionsHtml());
        break;
      case "HTML Tags": setFadeTime(() => htmlTags());
        break;
      case "CSS Positioning": setFadeTime(() => positioning());
        break;
      case "CSS Flex": setFadeTime(() => flex());
        break;
      case "CSS Grid": setFadeTime(() => grid());
        break;
      case "JS Arrays": setFadeTime(() => arrays());
        break;
    };
  };

  buttons.forEach(button => {
    button.addEventListener("click", changeActiveButton);
  });
};

init();
