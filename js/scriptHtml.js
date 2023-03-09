export const html = () => {

   const renderSettings = () => {
      const setingsElement = document.querySelector(".js-setings");

      setingsElement.innerHTML = "";
      setingsElement.innerHTML += `
         <div class="labelSetingsHtml">
         ${settingsLabelContainer()}
         </div>
      `;
   };

   const settingsLabelContainer = () => {
      let labelElement = "";
      labelElement += `
      <div class="styleContentsHtml strong">
         Structure Tags : 
         <button class="button js-propertyButton">
            example
         </button>
      </div>
            
      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;!DOCTYPE html&gt; &nbsp; → &nbsp; </span>
            specifies the document type and version of HTML
         </p>
         <p>
            <span class="strong"> &lt;html&gt; &nbsp; → &nbsp; </span>
            the root of an HTML document
         </p>
         <p>
            <span class="strong"> &lt;head&gt; &nbsp; → &nbsp; </span>
            metadata and other information about the HTML document
         </p>
         <p>
            <span class="strong"> &lt;meta&gt; &nbsp; → &nbsp; </span>
            metadata about an HTML document
         </p>
         <p>
            <span class="strong"> &lt;title&gt; &nbsp; → &nbsp; </span>
            the title of an HTML document
         </p>
         <p>
            <span class="strong"> &lt;link&gt; &nbsp; → &nbsp; </span>
            link to an external resource, such as a stylesheet
         </p>
         <p>
            <span class="strong"> &lt;body&gt; &nbsp; → &nbsp; </span>
            the visible content of the HTML document
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Container Tags : 
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;div&gt; &nbsp; → &nbsp; </span>
            division or section of an HTML document
         </p>
         <p>
            <span class="strong"> &lt;span&gt; &nbsp; → &nbsp; </span>
            small section of text within a larger document
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Form Tags : 
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;form&gt; &nbsp; → &nbsp; </span>
            form for user input
         </p>
         <p>
            <span class="strong"> &lt;input&gt; &nbsp; → &nbsp; </span>
            input field for user input
         </p>
         <p>
            <span class="strong"> &lt;select&gt; &nbsp; → &nbsp; </span>
            drop-down list
         </p>
         <p>
            <span class="strong"> &lt;option&gt; &nbsp; → &nbsp; </span> option in drop-down list
         </p>
         <p>
            <span class="strong"> &lt;textarea&gt; &nbsp; → &nbsp; </span> multi-line input control
         </p>
         <p>
            <span class="strong"> &lt;label&gt; &nbsp;  → &nbsp; </span>
            label for input element
         </p>
         <p>
            <span class="strong"> &lt;fieldset&gt; &nbsp;  → &nbsp; </span>
            a set of form controls
         </p>
         <p>
            <span class="strong"> &lt;legend&gt; &nbsp;  → &nbsp; </span>
            a caption for a &lt;fieldset&gt; element
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Semantic Tags : 
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;header&gt; &nbsp; → &nbsp; </span>
            header for document or section
         </p>
         <p>
            <span class="strong"> &lt;footer&gt; &nbsp; → &nbsp; </span>
            footer for document or section
         </p>
         <p>
            <span class="strong"> &lt;article&gt; &nbsp; → &nbsp; </span>
            article
         </p>
         <p>
            <span class="strong"> &lt;section&gt; &nbsp; → &nbsp; </span>
            section in document
         </p>
         <p>
            <span class="strong"> &lt;aside&gt; &nbsp; → &nbsp; </span>
            content aside from the content it is placed in
         </p>
         <p>
            <span class="strong"> &lt;nav&gt; &nbsp; → &nbsp; </span>
            set of navigation links
         </p>
         <p>
            <span class="strong"> &lt;main&gt; &nbsp; → &nbsp; </span>
            main content of a document
         </p>
      </div>
      
      <div class="styleContentsHtml strong">
         Text Formatting Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>
         
      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;h1&gt; to &lt;h6&gt; &nbsp; → &nbsp; </span> 
            heading
         </p>
         <p>
            <span class="strong"> &lt;p&gt; &nbsp; → &nbsp; </span>
            paragraph
         </p>
         <p>
            <span class="strong"> &lt;strong&gt; &nbsp; → &nbsp; </span>
            strong emphasis
         </p>
         <p>
            <span class="strong"> &lt;em&gt; &nbsp; → &nbsp; </span>
            emphasized text
         </p>
         <p>
            <span class="strong"> &lt;b&gt; &nbsp; → &nbsp; </span>
            bold text
         </p>
         <p>
            <span class="strong"> &lt;i&gt; &nbsp; → &nbsp; </span>
            italicized text tag
         </p>
         <p>
            <span class="strong"> &lt;br&gt; &nbsp; → &nbsp; </span>
            line break
         </p>
         <p>
            <span class="strong"> &lt;hr&gt; &nbsp; → &nbsp; </span>
            horizontal rule or line
         </p>
      </div>
      
      <div class="styleContentsHtml strong">
         List Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>
            
      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;ul&gt; &nbsp; → &nbsp; </span>
            unordered list 
         </p>
         <p>
            <span class="strong"> &lt;ol&gt; &nbsp; → &nbsp; </span>
            ordered list
         </p>
         <p>
            <span class="strong"> &lt;li&gt; &nbsp; → &nbsp; </span>
            list item 
         </p>
      </div>
      
      <div class="styleContentsHtml strong">
         Table Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>
            
      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;table&gt; &nbsp; → &nbsp; </span>
            table 
         </p>
         <p>
            <span class="strong"> &lt;tr&gt; &nbsp; → &nbsp; </span>
            table table row
         </p>
         <p>
            <span class="strong"> &lt;th&gt; &nbsp; → &nbsp; </span>
            table table header cell
         </p>
         <p>
            <span class="strong"> &lt;td&gt; &nbsp; → &nbsp; </span>
            table table data cell
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Multimedia Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;a&gt; &nbsp; → &nbsp; </span>
            hyperlink
         </p>
         <p>
            <span class="strong"> &lt;img&gt; &nbsp; → &nbsp; </span>
            image or picture
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Script and Style Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;script&gt; &nbsp; → &nbsp; </span>
            client-side script
         </p>
         <p>
            <span class="strong"> &lt;style&gt; &nbsp; → &nbsp; </span>
            style sheet for an HTML document
         </p>
      </div>

      <div class="styleContentsHtml strong">
         Button Tags :
         <button class="button js-propertyButton">
            example
         </button>
      </div>

      <div class="styleContentHtml">
         <p>
            <span class="strong"> &lt;button&gt; &nbsp; → &nbsp; </span>
            clickable button
         </p>
      </div>   
   `;

      return labelElement
   };

   const renderContents = () => {
      const contentsElement = document.querySelector(".js-contents");

      contentsElement.innerHTML = "";
   }

   const render = () => {
      renderSettings();
      renderContents();
   };

   render();

};