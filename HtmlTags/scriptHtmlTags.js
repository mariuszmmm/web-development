export const htmlTags = () => {

   const renderSettings = () => {
      const settingsElement = document.querySelector(".js-settingsContainer");

      settingsElement.innerHTML = "";
      settingsElement.innerHTML += `
         <div class="settingsContents settingsContents--HtmlTags">
         ${settingsLabelContainer()}
         </div>
      `;
   };

   const settingsLabelContainer = () => {
      let labelElement = "";
      labelElement += `
      <div class="settingsHeader settingsHeader--HtmlTags">
         Structure Tags : 
      </div>
         
      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;!DOCTYPE html&gt; &nbsp; → &nbsp; </span>
               specifies the document type and version of HTML
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;html&gt; &nbsp; → &nbsp; </span>
               the root of an HTML document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;head&gt; &nbsp; → &nbsp; </span>
               metadata and other information about the HTML document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;meta&gt; &nbsp; → &nbsp; </span>
               metadata about an HTML document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;title&gt; &nbsp; → &nbsp; </span>
               the title of an HTML document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;link&gt; &nbsp; → &nbsp; </span>
               link to an external resource, such as a stylesheet
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;body&gt; &nbsp; → &nbsp; </span>
               the visible content of the HTML document
            </p>
         </div>
         <button id="StructureTagsButton" class="button  js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Container Tags : 
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;div&gt; &nbsp; → &nbsp; </span>
               division or section of an HTML document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;span&gt; &nbsp; → &nbsp; </span>
               small section of text within a larger document
            </p>
         </div>
         <button id="ContainerTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>   

      <div class="settingsHeader settingsHeader--HtmlTags">
         Form Tags : 
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;form&gt; &nbsp; → &nbsp; </span>
               form for user input
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;input&gt; &nbsp; → &nbsp; </span>
               input field for user input
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;select&gt; &nbsp; → &nbsp; </span>
               drop-down list
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;option&gt; &nbsp; → &nbsp; </span> 
               option in drop-down list
            </p>
            <p class="settingsParagraph">
            <span class="strong"> &lt;textarea&gt; &nbsp; → &nbsp; </span>
               multi-line input control
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;label&gt; &nbsp;  → &nbsp; </span>
               label for input element
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;fieldset&gt; &nbsp;  → &nbsp; </span>
               set of form controls
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;legend&gt; &nbsp;  → &nbsp; </span>
               caption for a &lt;fieldset&gt; element
            </p>
         </div>
         <button id="FormTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Semantic Tags : 
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;header&gt; &nbsp; → &nbsp; </span>
               header for document or section
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;footer&gt; &nbsp; → &nbsp; </span>
               footer for document or section
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;article&gt; &nbsp; → &nbsp; </span>
               article
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;section&gt; &nbsp; → &nbsp; </span>
               section in document
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;aside&gt; &nbsp; → &nbsp; </span>
               content aside from the content it is placed in
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;nav&gt; &nbsp; → &nbsp; </span>
               set of navigation links
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;main&gt; &nbsp; → &nbsp; </span>
               main content of a document
            </p>
         </div>
         <button id="SemanticTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Text Formatting Tags :
      </div>
         
      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;h1&gt; to &lt;h6&gt; &nbsp; → &nbsp; </span> 
               heading
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;p&gt; &nbsp; → &nbsp; </span>
               paragraph
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;strong&gt; &nbsp; → &nbsp; </span>
               strong emphasis
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;em&gt; &nbsp; → &nbsp; </span>
               emphasized text
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;b&gt; &nbsp; → &nbsp; </span>
               bold text
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;i&gt; &nbsp; → &nbsp; </span>
               italicized text tag
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;br&gt; &nbsp; → &nbsp; </span>
               line break
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;hr&gt; &nbsp; → &nbsp; </span>
               horizontal rule or line
            </p>
         </div>
         <button id="TextFormattingTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         List Tags :
      </div>
         
      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;ul&gt; &nbsp; → &nbsp; </span>
               unordered list 
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;ol&gt; &nbsp; → &nbsp; </span>
               ordered list
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;li&gt; &nbsp; → &nbsp; </span>
               list item 
            </p>
         </div>
         <button id="ListTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Table Tags :
      </div>
            
      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;table&gt; &nbsp; → &nbsp; </span>
               table 
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;tr&gt; &nbsp; → &nbsp; </span>
               table row
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;th&gt; &nbsp; → &nbsp; </span>
               table header cell
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;td&gt; &nbsp; → &nbsp; </span>
               table data cell
            </p>
         </div>
         <button id="TableTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Multimedia Tags :
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;a&gt; &nbsp; → &nbsp; </span>
               hyperlink
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;img&gt; &nbsp; → &nbsp; </span>
               image or picture
            </p>
         </div>
         <button id="MultimediaTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Script and Style Tags :
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;script&gt; &nbsp; → &nbsp; </span>
               client-side script
            </p>
            <p class="settingsParagraph">
               <span class="strong"> &lt;style&gt; &nbsp; → &nbsp; </span>
               style sheet for an HTML document
            </p>
         </div>
         <button id="ScriptAndStyleTagsButton" class="button js-exampleButton">
            example
         </button>
      </div>

      <div class="settingsHeader settingsHeader--HtmlTags">
         Button Tags :
      </div>

      <div class="settingsContainer settingsContainer--HtmlTags">
         <div>
            <p class="settingsParagraph">
               <span class="strong"> &lt;button&gt; &nbsp; → &nbsp; </span>
               clickable button
            </p>
         </div>
         <button id="ButtonTagsButton" class="button js-exampleButton">
            example
         </button> 
      </div>  
   `;

      return labelElement
   };

   const onClick = ({ target }) => {

      switch (target.id) {
         case "StructureTagsButton":
            renderExample();
            renderOutput();
            break
         case "ContainerTagsButton":
            renderExample();
            renderOutput();
            break
      }
   };

   const bindButtons = () => {
      const buttonElements = document.querySelectorAll(".js-exampleButton");

      buttonElements.forEach((button) => {
         button.addEventListener("click", onClick)
      })
   };

   const renderExample = () => {
      const contentsElement = document.querySelector(".js-outputContainer");

      contentsElement.innerHTML = "";
      contentsElement.innerHTML += `
         <div class="outputContents">
            <div class="outputLabel">HTML :</div>
            
         </div>
         `;
   }

   const renderOutput = () => {
      const contentsElement = document.querySelector(".js-outputContainer");

      contentsElement.innerHTML += `
         <div class="outputContents">
            <div class="outputLabel">OUTPUT :</div>
      
         </div>
         `;
   }

   const renderContents = () => {
      const contentsElement = document.querySelector(".js-outputContainer");
      renderExample();
      renderOutput();
   };

   const render = () => {
      renderSettings();
      bindButtons();
      renderContents();
   };

   render();
};