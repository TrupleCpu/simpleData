let move = false;


document.getElementById("input").addEventListener("keypress", (event) => {
   
  let inputVAL = event.target;

  if(inputVAL == ""){
     document.querySelector(".erase-letters button").style.display = "none"
  } else {
    document.querySelector(".erase-letters button").style.display = "block"
  }
})


function erase() {
 document.getElementById("input").value = document.getElementById("input").innerHTML = "";

}
 let header = document.querySelector(".header")
document.querySelector(".HTML-elements").addEventListener("click", () => {
    
 
   if(!move) {
       document.querySelector(".Elements-container").style.display = "none";
      document.querySelector(".HTML-elements p").innerHTML = '<i class="fa-solid fa-caret-right"></i>' + ' ' + 'Html elements'
   } else {
       document.querySelector(".Elements-container").style.display = "block";
       document.querySelector(".HTML-elements p").innerHTML = '<i class="fa-solid fa-caret-down"></i>' + ' ' + 'Html elements'

   } 
  move = !move;
 })

 function AhrefShow() {

  document.title = "<a>: The Anchor element"
    document.querySelector(".container-words").innerHTML = `
    <div class="title">
    <h1>< a >: The Anchor element</h1>
  </div>
  <div class="meaning">
    <p>The < a > HTML element (or anchor element), with its href attribute,
         creates a hyperlink to web pages, files, email addresses, 
         locations in the same page, or anything else a URL can address.
         <br>
         <br>
        Content within each < a > should indicate the link's 
         destination. If the href attribute is present,<br> pressing the enter key while focused on the < a > element will activate it.
        
        </p>
  </div>
  <div class="example">
    <h1>Example: </h1>
    <img src="Untitled.png" alt="">
  </div>
  <div class="Attributes">
    <h1>Attributes</h1>
    <p>This element's attributes include the global attributes.</p>
  </div>
  <div class="Attributes-list">
    <p>Causes the browser to treat the linked URL as a download. Can be used with or without a filename value:
        <ul>
            <li>Without a value, the browser will suggest a filename/extension, generated from various sources:</li>
            <ul class="secondUl">
                <li>The Content-Disposition HTTP header</li>
                <li>The final segment in the URL path</li>
                <li>The media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL)</li>
            </ul>
            <li>filename: defining a value suggests it as the filename. / and \ characters are converted to underscores (_). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.</li>
        </ul>
    </p>
  </div>
  <div class="Attributes">
    <h1>href</h1>
  </div>
  <div class="Attributes-list">
    <p>The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:
        <ul>
            <li>Sections of a page with document fragments</li>
            <li>Specific text portions with text fragments
            </li>
            <li>Pieces of media files with media fragments
            </li>
            <li>Telephone numbers with tel: URLs
            </li>
            <li>Email addresses with mailto: URLs
            </li>
            <li>While web browsers may not support other URL schemes, websites can with</li>
        </ul>
    </p>
  </div>
  <div class="Attributes">
    <h1>hreflang</h1>
  </div>
  <div class="Attributes-list">
    <p>Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global lang attribute.
    </p>
  </div>
  <div class="Attributes">
    <h1>ping</h1>
  </div>
  <div class="Attributes-list">
    <p>A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking.
    </p>
  </div>
    
    `
 }
 function areaShow() {
    
  document.querySelector(".container-words").innerHTML = `
  <div class="title">
  <h1>< area >: The Image Map Area element</h1>
</div>
<div class="meaning">
  <p>The < area > HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links.
       <br>
       <br>
       This element is used only within a < map > element.


      
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="area.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>alt</h1>
  <p>A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. This attribute is required only if the href attribute is used.</p>
</div>
<div class="Attributes-list">
  <p>coords</p>
  <p>The coords attribute details the coordinates of the shape attribute in size, shape, and placement of an < area >. This attribute must not be used if shape is set to default.
      <ul>
          <li>rect: the value is x1,y1,x2,y2. The value specifies the coordinates of the top-left and bottom-right corner of the rectangle. For example, in < area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla" > the coordinates are 0,0 and 253,27, indicating the top-left and bottom-right corners of the rectangle, respectively. </li>
          <li>circle: the value is x,y,radius. Value specifies the coordinates of the circle center and the radius. For example: < area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN" ></li>
          <li>poly: the value is x1,y1,x2,y2,..,xn,yn. Value specifies the coordinates of the edges of the polygon. If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon </li>
      </ul>
  </p>
  <p>The values are numbers of CSS pixels.</p>
</div>
<div class="Attributes">
<h1>href</h1>
</div>
<div class="Attributes-list">
<p>The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the < area >  element does not represent a hyperlink.
</p>
</div>
<div class="Attributes">
<h1>ping</h1>
</div>
<div class="Attributes-list">
<p>Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking.
</p>
</div>
  `
 }
 function addressShow() {
  document.title = "<address>: The Contact Address element "
    document.querySelector(".container-words").innerHTML = `
    <div class="title">
            <h1>< address >: The Contact Address element</h1>
          </div>
          <div class="meaning">
            <p>< address >: The Contact Address element
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="address.png" alt="">
            
            <p>
                The contact information provided by an < address > element's<br> contents can take whatever form is appropriate for the context, and may include any type of contact <br>information that is needed, such as a physical address, URL, email address, phone number, social media handle, <br>geographic coordinates, and so forth. The < address > element should include the name of the person, people, or <br>organization to which the contact information refers.
            </p>
            <br>
            <p>< address > can be used in a variety of contexts, such as <br>providing a business's contact information in the page header, or indicating the author of an article by including an < address > element within the < article >.</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element only includes the global attributes.</p>
          </div>
          <div class="Attributes-list">
           <h1>Usage notes</h1>
             <ul>
                <li>The < address > element can only be used to represent the contact information for its nearest < article > or < body > element ancestor.</li>
                <li>This element should not contain more information than the contact information, like a publication date (which belongs in a < time > element).</li>
                <li>Typically an < address > element can be placed inside the < footer > element of the current section, if any.</li>
             </ul>               
          </div>
    `
  
 }
 function AbbrShow() {
  document.title = "< abbr >: The Abbreviation element"

    document.querySelector(".container-words").
    


    innerHTML = `   
    <div class="title">
    <h1>< abbr >: The Abbreviation element</h1>
  </div>
  <div class="meaning">
    <p>The <abbr> HTML element represents an abbreviation or acronym.
         <br>
         <br>
         When including an abbreviation or<br> acronym, provide a full expansion of the term in plain text on first use, along with the <abbr> to mark up the abbreviation. This informs the user what the abbreviation or acronym means.
         <br>
         <br>
         <p>
         The optional title attribute can provide an expansion for the abbreviation or acronym when a full expansion is not present. This provides a hint to user agents on<br> how to announce/display the content while informing all users what<br> the abbreviation means. If present, title must contain this full description and nothing else.
        </p>
  </div>
  <div class="example">
    <h1>Example: </h1>
    <img src="abbr.png" alt="">
  </div>
   <div class="Attributes">
<h1>Attributes</h1>
</div>
<div class="Attributes-list">
<p>This element only supports the global attributes. The title attribute has a specific semantic meaning when used with the < abbr > element; it must contain a full human-readable description or expansion of the abbreviation. This text is often presented by browsers as a tooltip when the mouse cursor is hovered over the element.
</p>
<br>
<p>Each < abbr > element you use is independent of all others; providing a title for one does not automatically attach the same expansion text to others with the same content text.</p>
</div>
<div class="Attributes">
<h1>Usage notes</h1>
</div>
<div class="Attributes-list">
<h1>Typical use cases</h1>
<p>It's certainly not required that all abbreviations be marked up using < abbr >. There are, though, a few cases where it's helpful to do so:
<ul>
    <li>It's certainly not required that all abbreviations be marked up using < abbr >. There are, though, a few cases where it's helpful to do so:</li>
    <li>To define an abbreviation which may be unfamiliar to the reader, present the term using < abbr > and inline text providing the definition. Include a title attribute only when the inline expansion or definition is not available.
    </li>
    <li>The publication date and time of an <article> element can be described using the datetime attribute of a <t ime >  element.
    </li>
    <li>You can use < abbr > in concert with < dfn > to establish definitions for terms which are abbreviations or acronyms. See the example Defining an abbreviation below.
    </li>
</ul>
</p>
</div>
<div class="Attributes">
<h1>Grammar considerations</h1>
</div>
<div class="Attributes-list">
<p>In languages with grammatical number (that is, languages where the number of items affects the grammar of a sentence), use the same grammatical number in your title attribute as inside your < abbr > element. This is especially important in languages with more than two numbers, such as Arabic, but is also relevant in English.
</p>
</div>
    
    `
 }
 function articleShow() {
       
  
     document.title = "<article>: The Article Contents element "
     document.querySelector(".container-words").innerHTML = `
     <div class="title">
     <h1>< article >: The Article Contents element</h1>
   </div>
   <div class="meaning">
     <p>The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.       
         </p>
   </div>
   <div class="example">
     <h1>Example: </h1>
     <img src="article.png" alt="">
     <p>A given document can have multiple articles in it; for example, on a blog that shows the text of each article one after another as the reader scrolls, each post would be contained in an < article > element, possibly with one or more < section >s within.</p>
   </div>
   <div class="Attributes">
     <h1>Attributes</h1>
     <p>This element's attributes include the global attributes.</p>
   </div>
   <div class="Attributes-list">
    <h1>Usage notes</h1>
    <ul>
     <li>Each < article > should be identified, typically by including a heading (< h1 > - < h6 > element) as a child of the < article > element.</li>
     <li>When an < article > element is nested, the inner element represents an article related to the outer element. For example, the comments of a blog post can be < article > elements nested in the < article > representing the blog post.</li>
     <li>Author information of an  <article > element can be provided through the < address > element, but it doesn't apply to nested < article > elements.</li>
     <li>The publication date and time of an < article > element can be described using the datetime attribute of a < time > element.</li>
    </ul>
</div>
     `
 }
 function asideShow() {
  document.querySelector(".container-words").innerHTML = `
  <div class="title">
            <h1>< aside >: The Aside element</h1>
          </div>
          <div class="meaning">
            <p>The < aside > HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.      
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="aside.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element only includes the global attributes.</p>
          </div>
          <div class="Attributes-list">
            <h1>Usage notes</h1>
              <ul>
                 <li>Do not use the < aside > element to tag parenthesized text, as this kind of text is considered part of the main flow.</li>
              </ul>               
           </div>
  `
 }
 function audioShow() {

  document.title = "<audio>: The Embed Audio element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
    <h1>< audio >: The Embed Audio element</h1>
  </div>
  <div class="meaning">
    <p>The < audio > HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute<br> or the < source > element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
        </p>
  </div>
  <div class="example">
    <h1>Example: </h1>
    <img src="audio.png" alt="">
    <p>The above example shows simple usage of the < audio > element. In a similar manner to the < img > element, we include a path to the media<br> we want to embed inside the src attribute; we can include other attributes to specify information such as whether we want it<br> to autoplay and loop, whether we want to show the browser's default audio controls, etc.</p>
  </div>
  <div class="Attributes">
    <h1>Attributes</h1>
    <p>This element's attributes include the global attributes.</p>
  </div>
  <div class="Attributes">
    <h1>autoplay</h1>
    <p>A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.</p>
  </div>
  <div class="Attributes">
    <h1>controls</h1>
    <p>If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.</p>
  </div>
  <div class="Attributes">
    <h1>controlslist</h1>
    <p>The controlslist attribute, when specified, helps the browser select what controls to show for the audio element whenever the browser shows its own set of controls (that is, when the controls attribute is specified).

        The allowed values are nodownload, nofullscreen and noremoteplayback.</p>
  </div> 
  `
 }
 function bShow() {

  document.title = "<b>: The Bring ATtention to element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
    <h1>< b >: The Bring Attention To element</h1>
  </div>
  <div class="meaning">
    <p>The < b > HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use < b > for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the < strong > element.
        </p>
  </div>
  <div class="example">
    <h1>Example: </h1>
    <img src="b.png" alt="">
  </div>
  <div class="Attributes-list">
    <h1>Usage notes</h1>
    <ul>
    <li>Use the < b > for cases like keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced (but not including any special importance).</li>
    <li>Do not confuse the < b > element with the < strong >, < em >, or < mark > elements. The < strong > element represents text of certain importance, < em > puts some emphasis on the text and the <  > element represents text of certain relevance. The < b > element doesn't convey such special semantic information; use it only when no others fit.</li>
    <li>Similarly, do not mark titles and headings using the < b > element. For this purpose, use the h1 to h6 tags. Further, stylesheets can change the default style of these elements, with the result that they are not necessarily displayed in bold.</li>
    <li>It is a good practice to use the class attribute on the < b > element in order to convey additional semantic information as needed (for example < b class="lead"> for the first sentence in a paragraph). This makes it easier to manage multiple use cases of < b > if your stylistic needs change, without the need to change all of its uses in the HTML.</li>
    <li>Historically, the < b > element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the < b > element has been changed.</li>
    <li>Historically, the < b > element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the  < b > element has been changed.</li>
    </ul>
</div>
  `
 }
 function baseShow() {
  document.title = "<base>: The Document Base URL element ";
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< base >: The Document Base URL element</h1>
</div>
<div class="meaning">
  <p>The < base > HTML element specifies the base URL to use for all relative URLs in a document. There can be only one < base > element in a document.
      </p>
      <br>
      <p>The < base > HTML element specifies the base URL to use for all relative URLs in a document. There can be only one < base > element in a document.</p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>href</h1>
  <p>The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed.</p>
</div>
<div class="Attributes">
  <h1>target</h1>
  <p>A keyword or author-defined name of the default browsing context to show the results of navigation from <a >, <area >, or < form > elements without explicit target attributes. The following keywords have special meanings:
  <ul>
      <li>_self (default): Show the result in the current browsing context.</li>
      <li>_blank: Show the result in a new, unnamed browsing context.</li>
      <li>_parent: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self.</li>
      <li>_top: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self.</li>
  </ul>
  </p>
</div>
<div class="Attributes-list">
  <h1>Usage notes</h1>
  <ul>
  <li>Use the < b > for cases like keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced (but not including any special importance).</li>
  <li>Do not confuse the < b > element with the < strong >, < em >, or < mark > elements. The < strong > element represents text of certain importance, < em > puts some emphasis on the text and the <  > element represents text of certain relevance. The < b > element doesn't convey such special semantic information; use it only when no others fit.</li>
  <li>Similarly, do not mark titles and headings using the < b > element. For this purpose, use the h1 to h6 tags. Further, stylesheets can change the default style of these elements, with the result that they are not necessarily displayed in bold.</li>
  <li>It is a good practice to use the class attribute on the < b > element in order to convey additional semantic information as needed (for example < b class="lead"> for the first sentence in a paragraph). This makes it easier to manage multiple use cases of < b > if your stylistic needs change, without the need to change all of its uses in the HTML.</li>
  <li>Historically, the < b > element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the < b > element has been changed.</li>
  <li>Historically, the < b > element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the  < b > element has been changed.</li>
  </ul>
</div>
  
  `
 }
 function bdiShow() {
  document.title = "<bdi>: The Bidirectional Isolate element";
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< bdi >: The Bidirectional Isolate element</h1>
          </div>
          <div class="meaning">
            <p>The < bdi > HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.   
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="bdi.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>Like all other HTML elements, this element supports the global attributes, except that the dir attribute behaves differently than normal: it defaults to<br> auto, meaning its value is never inherited from the parent element. This means that unless you specify a value of either rtl or ltr for dir, the user agent<br> will determine the correct directionality to use based on the contents of the <bdi>.</p>
          </div>
  `
 }
 function bdoShow() {
   document.title = "<bdo>: The Bidirectional Text Override element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< bdo >: The Bidirectional Text Override element</h1>
          </div>
          <div class="meaning">
            <p>The < bdo > HTML element overrides the current directionality of text, so that the text within is rendered in a different direction. 
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="bdo.png" alt="">
            <p>The text's characters are drawn from the starting point in the given direction; the individual characters' orientation is not affected (so characters don't get drawn backward, for example).</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>dir</h1>
            <p>The direction in which text should be rendered in this element's contents. Possible values are:
            <ul>
                <li>ltr: Indicates that the text should go in a left-to-right direction.</li>
                <li>rtl: Indicates that the text should go in a right-to-left direction.</li>
            </ul>
            </p>
          </div>
  `
 }
 function blockquoteShow() {
  document.title = "<blockquote>: The Block Quotation element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< blockquote >: The Block Quotation element
            </h1>
          </div>
          <div class="meaning">
            <p>The < bdo > HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.  
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="blockquote.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>cite</h1>
            <p>A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>To change the indentation applied to the quoted text, use the CSS margin-left and/or margin-right properties, or the margin shorthand property.
            </p>
            <br>
            <p>To include shorter quotes inline rather than in a separate block, use the < q > (Quotation) element.

            </p>
          </div>
  `
 }
 function bodyShow() {

document.title = "<body>: The Document Body element"

  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< body >: The Document Body element
            </h1>
          </div>
          <div class="meaning">
            <p>The < body > HTML element represents the content of an HTML document. There can be only one < body > element in a document.
                </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>onafterprint</h1>
            <p>Function to call after the user has printed the document.</p>
          </div>
          <div class="Attributes">
            <h1>onbeforeprint</h1>
            <p>Function to call when the user requests printing of the document.
            </p>
          </div>
          <div class="Attributes">
            <h1>onbeforeunload
            </h1>
            <p>Function to call when the document is about to be unloaded.
            </p>
          </div>
          <div class="Attributes">
            <h1>onafterprint</h1>
            <p>Function to call after the user has printed the document.</p>
          </div>
          <div class="Attributes">
            <h1>onfocus</h1>
            <p>Function to call when the document receives focus.
            </p>
          </div>
          <div class="Attributes">
            <h1>onhashchange
            </h1>
            <p>Function to call when the fragment identifier part (starting with the hash ('#') character) of the document's current address has changed.
            </p>
          </div>
          <div class="Attributes">
            <h1>onlanguagechange</h1>
            <p>Function to call when the preferred languages changed.
            </p>
          </div>
          <div class="Attributes">
            <h1>onload
            </h1>
            <p>Function to call when the document has finished loading.
            </p>
          </div>
          <div class="Attributes">
            <h1>onmessage</h1>
            <p>Function to call when the document has received a message.
            </p>
          </div>
          <div class="Attributes">
            <h1>onoffline
            </h1>
            <p>Function to call when network communication has failed.
            </p>
          </div>
          <div class="Attributes">
            <h1>ononline</h1>
            <p>Function to call when network communication has been restored.
            </p>
          </div>
          <div class="Attributes">
            <h1>onpopstate</h1>
            <p>Function to call when the user has navigated session history.
            </p>
          </div>
          <div class="Attributes">
            <h1>onredo</h1>
            <p>Function to call when the user has moved forward in undo transaction history.
            </p>
          </div>
          <div class="Attributes">
            <h1>onresize</h1>
            <p>Function to call when the document has been resized.
            </p>
          </div>
          <div class="Attributes">
            <h1>onstorage</h1>
            <p>Function to call when the storage area has changed.
            </p>
          </div>
          <div class="Attributes">
            <h1>onredo</h1>
            <p>Function to call when the user has moved forward in undo transaction history.
            </p>
          </div>
          <div class="Attributes">
            <h1>onundo
            </h1>
            <p>Function to call when the user has moved backward in undo transaction history.


            </p>
          </div>
          <div class="Attributes">
            <h1>onunload
            </h1>
            <p>Function to call when the document is going away.
            </p>
          </div>
  
  `
 }
 function brShow() {

  document.title = "<br>: The Line Break element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< br >: The Line Break element
            </h1>
          </div>
          <div class="meaning">
            <p>The < br > HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

  
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="br.png" alt="">
            <br>
            <p>As you can see from the above example, a <br> element is included at each point where we want the text to break. The text after the <br> begins again at the start of the next line of the text block.</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>Styling with CSS</h1>
            <p>The < br > element has a single, well-defined purpose — to create a line break in a block of text. As such, it has no dimensions or visual output of its own, and there is very little you can do to style it.</p>
            <br>
            <p>You can set a margin on < br > elements themselves to increase the spacing between the lines of text in the block, but this is a bad practice — you should use the line-height property that was designed for that purpose.</p>
          </div>
  `
 }
 function buttonShow() {
    

  document.title = "<button>: The Button element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< button >: The Button element
            </h1>
          </div>
          <div class="meaning">
            <p>The < button > HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog. </p>
            <br>
            <br>
            <p>By default, HTML buttons are presented in a style resembling the platform the user agent runs on, but you can change buttons' appearance with CSS.
            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="button.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>autofocus</h1>
            <p>This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute.</p>
          </div>
          <div class="Attributes">
            <h1>disabled</h1>
            <p>This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.</p>
            <br>
            <p>Firefox, unlike other browsers, persists the dynamic disabled state of a < button > across page loads. To control this feature, use the autocomplete attribute.</p>
          </div>
          <div class="Attributes">
            <h1>form</h1>
            <p>The < form > element to associate the button with (its form owner). The value of this attribute must be the id of a < form > in the same document. (If this attribute is not set, the < button > is associated with its ancestor < form > element, if any.)</p>
            <br>
            <p>This attribute lets you associate < button > elements to < form >s anywhere in the document, not just inside a < form >. It can also override an ancestor < form > element.</p>
          </div>
          <div class="Attributes">
            <h1>formaction</h1>
            <p>The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.</p>
          </div>
  `
 }
 function canvasShow() {

  document.title = "<canvas>: The Graphics Canvas element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< canvas >: The Graphics Canvas element
  </h1>
</div>
<div class="meaning">
  <p>Use the HTML < canvas > element with either the canvas scripting API or the WebGL API to draw graphics and animations.
  </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>height</h1>
  <p>The height of the coordinate space in CSS pixels. Defaults to 150.
  </p>
</div>
<div class="Attributes">
  <h1>width</h1>
  <p>The width of the coordinate space in CSS pixels. Defaults to 300.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
</div>
<div class="Attributes">
  <h1>Alternative content</h1>
  <p>You should provide alternate content inside the < canvas > block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.</p>
</div>
<div class="Attributes">
  <h1>Required < /canvas > tag</h1>
  <p>Unlike the < img > element, the < canvas > element requires the closing tag (< /canvas >).
  </p>
</div>
<div class="Attributes">
  <h1>Sizing the canvas using CSS versus HTML</h1>
  <p>The displayed size of the canvas can be changed using CSS, but if you do this the image is scaled during rendering to fit the styled size, which can make the final graphics rendering end up being distorted.</p>
  <br>
  <p>It is better to specify your canvas dimensions by setting the width and height attributes directly on the < canvas > elements, either directly in the HTML or by using JavaScript.</p>
</div>
<div class="Attributes">
  <h1>Maximum canvas size</h1>
  <p>The maximum size of a < canvas > element is very large, but the exact size depends on the browser. The following is some<br> data we've collected from various tests and other sources (e.g. Stack Overflow):</p>
</div>
<div class="example">
  <img src="canvas.png" alt="">
</div>
</div>   
  `
 }
function captionShow() {

  document.title = "<caption>: The Table Caption element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< caption >: The Table Caption element
            </h1>
          </div>
          <div class="meaning">
            <p>The < caption > HTML element specifies the caption (or title) of a table.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="caption.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>Deprecated attributes</h1>
            <p>The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.</p>
          </div>
          <div class="Attributes">
            <h1>left</h1>
            <p>The caption is displayed to the left of the table.
            </p>
          </div>
          <div class="Attributes">
            <h1>top</h1>
            <p>The caption is displayed above the table.
            </p>
          </div>
          <div class="Attributes">
            <h1>right
            </h1>
            <p>The caption is displayed to the right of the table.
            </p>
          </div>
          <div class="Attributes">
            <h1>bottom</h1>
            <p>The caption is displayed below the table.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>If used, the < caption > element must be the first child of its parent < table > element.
            </p>
            <br>
            <p>When the < table > element that contains the < caption > is the only descendant of a < figure > element, you should use the < figcaption > element instead of < caption >.</p>
            <br>
            <p>A background-color on the table will not include the caption. Add a background-color to the < caption > element as well if you want the same color to be behind both.
            </p>
          </div>
  `
}
function citeShow() {

  document.title = "<cite>: The Citation element"
  document.querySelector(".container-words").innerHTML = `
  <div class="title">
            <h1>< cite >: The Citation element
            </h1>
          </div>
          <div class="meaning">
            <p>The < cite > HTML element is used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="cite.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>In the context of the < cite > element, a creative work that might be cited could be, for example, one of the following:</p>
            <ul>
                <li>A book</li>
                <li>A research paper
                </li>
                <li>An essay
                </li>
                <li>A poem
                </li>
                <li>A musical score
                </li>
                <li>A song
                </li>
                <li>A play or film script
                </li>
                <li>A film
                </li>
                <li>A television show
                </li>
                <li>A game
                </li>
                <li>A sculpture
                </li>
                <li>A painting
                </li>
                <li>A theatrical production
                </li>
                <li>A theatrical production
                </li>
                <li>An opera
                </li>
                <li>A musical
                </li>
                <li>An exhibition
                </li>
                <li>A legal case report
                </li>
                <li>A computer program
                </li>
                <li>A website
                </li>
                <li>A website
                </li>
                <li>A blog post or comment
                </li>
                <li>A forum post or comment
                </li>
                <li>A tweet
                </li>
                <li>A Facebook post
                </li>
                <li>A written or oral statement
                </li>
                <li>And so forth.
                </li>
            </ul>
            <br>
            <p>To include a reference to the source of quoted material which is contained within a < blockquote > or < q > element, use the cite attribute on the element.
            </p>
            <br>
            <p>Typically, browsers style the contents of a < cite > element in italics by default. To avoid this, apply the CSS font-style property to the < cite > element.

            </p>
          </div>
  `
}
function codeShow() {

  document.title = "<code>: The Inline Code element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< code >: The Inline Code element

            </h1>
          </div>
          <div class="meaning">
            <p>The < code > HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="code.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Notes</h1>
            <p>To represent multiple lines of code, wrap the < code > element within a < pre > element. The < code > element by itself only represents a single phrase of code or line of code.</p>
            <br>
            <p>A CSS rule can be defined for the code selector to override the browser's default font face. Preferences set by the user might take precedence over the specified CSS.
            </p>
          </div>
  `
}
function colShow() {
  document.title = "<col>: The Table Column element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< col> : The Table Column element
            </h1>
          </div>
          <div class="meaning">
            <p>The < col > HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a < colgroup > element.image.png
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="col.png" alt="">
            <p>< col > allows styling columns using CSS, but only a few properties will have an effect on the column</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>span</h1>
            <p>This attribute contains a positive integer indicating the number of consecutive columns the < col > element spans. If not present, its default value is 1.
            </p>
          </div>
          <div class="Attributes">
            <h1>Deprecated attributes</h1>
            <p>The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.
            </p>
          </div>
  `
}
function colgroupShow(){

  document.title = "<colgroup>: The Table Column Group element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< colgroup >: The Table Column Group element
  </h1>
</div>
<div class="meaning">
  <p>The < col > HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a < colgroup > element.


      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="colgroup.png" alt="">
  <p>< col > allows styling columns using CSS, but only a few properties will have an effect on the column</p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>span</h1>
  <p>This attribute contains a positive integer indicating the number of consecutive columns the < colgroup > element spans. If not present, its default value is 1.
  </p>
</div>
<div class="Attributes">
  <h1>Deprecated attributes</h1>
  <p>The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.
  </p>
</div>
  `
}
function dataShow() {

  document.title = "<data>: The Data element"
  document.querySelector(".container-words").innerHTML  = 
  `
  <div class="title">
            <h1>< data >: The Data element

            </h1>
          </div>
          <div class="meaning">
            <p>The < data > HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the < time > element must be used.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="data.png" alt="">
             <img src="data2.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>value
            </h1>
            <p>This attribute specifies the machine-readable translation of the content of the element.
            </p>
          </div>
  `
}
function datalistShow(){

  document.title = "<datalist>: The HTML Data List element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< datalist >: The HTML Data List element


            </h1>
          </div>
          <div class="meaning">
            <p>The < datalist > HTML element contains a set of < option > elements that represent the permissible or recommended options available to choose from within other controls.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="datalist.png" alt="">
            <p>To bind the < datalist > element to the control, we give it a unique identifier in the id attribute, and then add the list attribute to the < input > element with the same identifier as value. Only certain types of < input > support this behavior, and it can also vary from browser to browser.</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function ddShow() {

  document.title = "<dd>: The Description Details element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< dd >: The Description Details element



  </h1>
</div>
<div class="meaning">
  <p>The < dd > HTML element provides the description, definition, or value for the preceding term (< dt >) in a description list (< dl> ).
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="dd.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function delShow() {
  document.title = "<del>: The Deleted Text element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< del >: The Deleted Text element
            </h1>
          </div>
          <div class="meaning">
            <p>The < del > HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The < ins > element can be used for the opposite purpose: to indicate text that has been added to the document.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="del.png" alt="">
            <p>This element is often (but need not be) rendered by applying a strike-through style to the text.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>cite</h1>
            <p>A URI for a resource that explains the change (for example, meeting minutes).
            </p>
          </div>
          <div class="Attributes">
            <h1>datetime</h1>
            <p>This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Date strings. The format of the string if it includes both date and time is covered in Local date and time strings.
            </p>
          </div>
  `
}
function detailsShow() {

  document.title = "<details>: The Details disclosure element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< details >: The Details disclosure element

            </h1>
          </div>
          <div class="meaning">
            The < details > HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the < summary > element.
                </p>
                <br>
                <p>A disclosure widget is typically presented onscreen using a small triangle which rotates (or twists) to indicate open/closed status, with a label next to the triangle. The contents of the < summary > element are used as the label for the disclosure widget.

                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="details.png" alt="">
            <p>A < details > widget can be in one of two states. The default closed state displays only the triangle and the label inside < summary > (or a user agent-defined default string if no < summary >).
            </p>
            <br>
            <p>When the user clicks on the widget or focuses it then presses the space bar, it "twists" open, revealing its contents. The common use of a triangle which rotates or twists around to represent opening or closing the widget is why these are sometimes called "twisty".</p>
            <br>
            <p>You can use CSS to style the disclosure widget, and you can programmatically open and close the widget by setting/removing its open attribute. Unfortunately, at this time, there's no built-in way to animate the transition between open and closed.
            </p>
            <br>
            <p>By default when closed, the widget is only tall enough to display the disclosure triangle and summary. When open, it expands to display the details contained within.
            </p>
            <br>
            <p>Fully standards-compliant implementations automatically apply the CSS display: list-item to the <summary> element. You can use this to customize its appearance further</p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>open</h1>
            <p>This Boolean attribute indicates whether the details — that is, the contents of the < details > element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
            </p>
          </div>
  `
}
function dfnShow() {

  document.title = "<dfn>: The Definition element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< dfn >: The Definition element
            </h1>
          </div>
          <div class="meaning">
            The < dfn > HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor < p > element, the < dt >/< dd > pairing, or the nearest < section > ancestor of the < dfn > element, is considered to be the definition of the term.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="dfn.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
            <br>
            <p>The title attribute has special meaning, as noted below.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>There are some not-entirely-obvious aspects to using the <dfn> element. We examine those here.
            </p>
          </div>
          <div class="Attributes">
            <h1>Specifying the term being defined</h1>
            <p>The term being defined is identified following these rules:
            </p>
            <ol>
                <li>If the < dfn > element has a title attribute, the value of the title attribute is considered to be the term being defined. The element must still have text within it, but that text may be an abbreviation (perhaps using < abbr >) or another form of the term.</li>
                <li>If the < dfn > contains a single child element and does not have any text content of its own, and the child element is an < abbr > element with a title attribute itself, then the exact value of the < abbr > element's title is the term being defined.
                </li>
                <li>Otherwise, the text content of the < dfn > element is the term being defined.</li>
            </ol>
          </div>
          <div class="Attributes">
            <h1>Links to < dfn > elements</h1>
            <p>If you include an id attribute on the < dfn > element, you can then link to it using < a > elements. Such links should be uses of the term, with the intent being that the reader can quickly navigate to the term's definition if they're not already aware of it, by clicking on the term's link.
            </p>
          </div>
  `
}
function dialogShow() {

  document.title = "<dialog>: The Dialog element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< dialog >: The Dialog element
  </h1>
</div>
<div class="meaning">
  The < dialog >   HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
      </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>open</h1>
  <p>Indicates that the dialog is active and can be interacted with. When the open attribute is not set, the dialog shouldn't be shown to the user. It is recommended to use the .show() or .showModal() methods to render dialogs, rather than the open attribute. If a < dialog > is opened using the open attribute, it will be non-modal.
  </p>
</div>
<div class="Attributes">
  <h1>Accessibility considerations</h1>
  <p>The native HTML < dialog > element should be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose. Use the appropriate .showModal() or .show() method to render dialogs. If creating a custom dialog implementation, ensure all expected default behaviors are supported and proper labeling recommendations are followed.
  </p>
  <br>
  <p>When implementing a dialog, it is important to consider the most appropriate place to set user focus. Explicitly indicating the initial focus placement by use of the autofocus attribute will help ensure initial focus is set to the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, then if necessary authors may decide focusing the < dialog > element itself would provide the best initial focus placement. When using HTMLDialogElement.showModal() to open a < dialog >, focus is set on the first nested focusable element.
  </p>
  <br>
  <p>Ensure a mechanism is provided to allow users to close a dialog. The most robust way to ensure all users can close a dialog is to include an explicit button to do so. For instance, a confirmation, cancel or close button as appropriate. Additionally, for those using a device with a keyboard, the Escape key is commonly expected to close modal dialogs as well. By default, a < dialog > invoked by the showModal() method will allow for its dismissal by the Escape. A non-modal dialog does not dismiss via the Escape key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. If multiple modal dialogs are open, Escape should only close the last shown dialog. When using < dialog >, this behavior is provided by the browser.
  </p>
  <br>
  <p>The < dialog > element is exposed by browsers similarly to custom dialogs using the ARIA role="dialog" attribute. < dialog > elements invoked by the showModal() method will have an implicit aria-modal="true", whereas < dialog > elements invoked by the show() method, or rendered by use of the open attribute or changing the default display of a < dialog > will be exposed as [aria-modal="false"]. When implementing modal dialogs, everything other than the < dialog > and its contents should be rendered inert using the inert attribute. When using < dialog > along with the HTMLDialogElement.showModal() method, this behavior is provided by the browser.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
 <ul>
  <li>< form > elements can close a < dialog > if they have the attribute method="dialog" or if the button used to submit the form has formmethod="dialog" set. In this case, the state of the form controls are saved, not submitted, the < dialog > closes, and the returnValue property gets set to the value of the button that was used to save the form's state.
  </li>
  <li>The ::backdrop CSS pseudo-element can be used to style the backdrop that is displayed behind a < dialog > element when the dialog is displayed with HTMLDialogElement.showModal(). For example, to dim unreachable content behind the modal dialog.
  </li>
 </ul>
</div>
  `
}
function divShow() {
  document.title = "<div>: The Content Division element"

  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< div >: The Content Division element</h1>
          </div>
          <div class="meaning">
            <p>The < div > HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="div.png" alt="">
            <p>As a "pure" container, the < div > element does not inherently represent anything. Instead, it's used to group content so it can be easily styled using the class or id attributes, marking a section of a document as being written in a different language (using the lang attribute), and so on.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
        </div>
        <div class="Attributes">
          <ul>
            <li>The < div > element should be used only when no other semantic element (such as < article > or < nav >) is appropriate.
            </li>
          </ul>
        </div>
        <div class="Attributes">
            <h1>Accessibility concerns</h1>
            <p>The < div > element has an implicit role of generic, and not none. This may affect certain ARIA combination declarations that expect a direct descendant element with a certain role to function properly.
            </p>
        </div>
  `
}
function dlShow() {

  document.title = "<dl>: The Description List element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< dl >: The Description List element</h1>
</div>
<div class="meaning">
  <p>The < dl > HTML element represents a description list. The element encloses a list of groups of terms (specified using the < dt > element) and descriptions (provided by < dd > elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="dl.png" alt="">
  <img src="dl2.png   " alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function dtShow() {

  document.title = "<dt>: The Description Term element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< dt >: The Description Term element
            </h1>
          </div>
          <div class="meaning">
            <p>The < dt>  HTML element specifies a term in a description or definition list, and as such must be used inside a < dl > element. It is usually followed by a < dd ><br> element; however, multiple < dt > elements in a row indicate several terms that are all defined by the immediate next < dd > element.
                </p>
                <br>
                <p>The subsequent < dd>  (Description Details) element provides the definition or other related text associated with the term specified using < dt >.

                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="dt.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
  `
}
function emShow() {

  document.title = "<em>: The Emphasis element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< em >: The Emphasis element

            </h1>
          </div>
          <div class="meaning">
            <p>The < em > HTML element marks text that has stress emphasis. The < em > element can be nested, with each level of nesting indicating a greater degree of emphasis.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="em.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>The < em > element is for words that have a stressed emphasis compared to surrounding text, which is often limited to a word or words of a sentence and affects the meaning of the sentence itself.
            </p>
            <br>
            <p>Typically this element is displayed in italic type. However, it should not be used to apply italic styling; use the CSS font-style property for that purpose. Use the < cite > element to mark the title of a work (book, play, song, etc.). Use the < i >  element to mark text that is in an alternate tone or mood, which covers many common situations for italics such as scientific names or words in other languages. Use the < strong > element to mark text that has greater importance than surrounding text.
            </p>
          </div>
          <div class="Attributes">
            <h1>< i > vs. < em ></h1>
            <p>Some developers may be confused by how multiple elements seemingly produce similar visual results. <  > and < i > are a common example, since they both italicize text. What's the difference? Which should you use?
            </p>
            <br>
            <p>By default, the visual result is the same. However, the semantic meaning is different. The < em > element represents stress emphasis of its contents, while the < i > element represents text that is set off from the normal prose, such as a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. (The title of a work, such as the name of a book or movie, should use < cite >.)
            </p>
            <br>
            <p>This means the right one to use depends on the situation. Neither is for purely decorative purposes, that's what CSS styling is for.
            </p>
            <br>
            <p>An example for < em > could be: "Just do it already!", or: "We had to do something about it". A person or software reading the text would pronounce the words in italics with an emphasis, using verbal stress.
            </p>
            <br>
            <p>An example for < i > could be: "The Queen Mary sailed last night". Here, there is no added emphasis or importance on the word "Queen Mary". It is merely indicated that the object in question is not a queen named Mary, but a ship named Queen Mary. Another example for < i > could be: "The word the is an article".
            </p>
          </div>
  `
}
function embedShow() {

  document.title = "<embed> The Embed External Content element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< embed >: The Embed External Content element
  </h1>
</div>
<div class="meaning">
  <p>The < embed > HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="embeded.png" alt="">
<p>Keep in mind that most modern browsers have deprecated and removed support for browser plug-ins, so relying upon < embed > is generally not wise if you want your site to be operable on the average user's browser.
</p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>height</h1>
  <p>The displayed height of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.
  </p>
</div>
<div class="Attributes">
  <h1>src</h1>
  <p>The URL of the resource being embedded.
  </p>
</div>
<div class="Attributes">
  <h1>type</h1>
  <p>The displayed width of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
  <p>You can use the object-position property to adjust the positioning of the embedded object within the element's frame, and the object-fit property to control how the object's size is adjusted to fit within the frame.
  </p>
</div>
  `
}
function fieldsetShow() {

  document.title = "<fieldset>: The Field Set element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< fieldset >: The Field Set element
            </h1>
          </div>
          <div class="meaning">
            <p>The < fieldset > HTML element is used to group several controls as well as labels (< label >) within a web form.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="fieldset.png" alt="">
        <p>As the example above shows, the < fieldset > element provides a grouping for a part of an HTML form, with a nested < legend > element providing a caption for the < fieldset >. It takes few attributes, the most notable of which are form, which can contain the id of a < form > on the same page, allowing you to make the < fieldset > part of that < form > even if it is not nested inside it, and disabled, which allows you to disable the < fieldset > and all its contents in one go.


        </p>
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>disabled</h1>
            <p>If this Boolean attribute is set, all form controls that are descendants of the < fieldset >, are disabled, meaning they are not editable and won't be submitted along with the < form >. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the < legend > element won't be disabled.
            </p>
          </div>
          <div class="Attributes">
            <h1>form
            </h1>
            <p>This attribute takes the value of the id attribute of a < form > element you want the < fieldset > to be part of, even if it is not inside the form. Please note that usage of this is confusing — if you want the <  > elements inside the < fieldset > to be associated with the form, you need to use the form attribute directly on those elements. You can check which elements are associated with a form via JavaScript, using HTMLFormElement.elements.


            </p>
          </div>
          <div class="Attributes">
            <h1>name</h1>
            <p>The name associated with the group.
            </p>
          </div>
  `
}
function figcaptionShow(){

  document.title = "<figcaption>: The Figure Caption element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< figcaption >: The Figure Caption element

            </h1>
          </div>
          <div class="meaning">
            <p>The < igcaption > HTML element represents a caption or legend describing the rest of the contents of its parent < figure > element.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="figcaption.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
  `
}
function figureShow() {

  document.title = "<figure>: The Figure with Optional Caption element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< figure >: The Figure with Optional Caption element

  </h1>
</div>
<div class="meaning">
  <p>The < figure > HTML element represents self-contained content, potentially with an optional caption, which is specified using the < figcaption > element. The figure, its caption, and its contents are referenced as a single unit.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="figure.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
 <ul>
  <li>Usually a < figure > is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
  </li>
  <li>A caption can be associated with the < figure > element by inserting a < figcaption > inside it (as the first or the last child). The first < figcaption > element found in the figure is presented as the figure's caption.
  </li>
 </ul>
</div>
  `
}

function footerShow() {
  document.title = "<footer> - HTML element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< footer >
  </h1>
</div>
<div class="meaning">
  <p>The < footer > HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A < footer > typically contains information about the author of the section, copyright data or links to related documents.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="footer.png" alt="">
  <img src="footer2.png">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
 <ul>
  <li>Enclose information about the author in an < address > element that can be included into the < footer > element.
  </li>
  <li>When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page.
  </li>
  <li>
      The <f ooter > element is not sectioning content and therefore doesn't introduce a new section in the outline.

  </li>
 </ul>
</div>
  `
}
function formShow() {

  document.title = "<form>: The Form element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< form >: The Form element

            </h1>
          </div>
          <div class="meaning">
            <p>The < form > HTML element represents a document section containing interactive controls for submitting information.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="form.png" alt="">
            <p>It is possible to use the :valid and :invalid CSS pseudo-classes to style a < form > element based on whether the elements inside the form are valid.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>accept-charset
            </h1>
             <p>Space-separated character encodings the server accepts. The browser uses them in the order in which they are listed. The default value means the same encoding as the page. (In previous versions of HTML, character encodings could also be delimited by commas.)
             </p>
          </div>
          <div class="Attributes">
            <h1>autocomplete
            </h1>
             <p>Indicates whether input elements can by default have their values automatically completed by the browser. autocomplete attributes on form elements override it on < form >. Possible values:
             </p>
             <ul>
                <li>off: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see The autocomplete attribute and login fields.)
                </li>
                <li>on: The browser may automatically complete entries.</li>
             </ul>
          </div>
          <div class="Attributes">
            <h1>name</h1>
            <p>The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any.
            </p>
          </div>
  `
}
function h1Show() {

  document.title = "<h1>–<h6>: The HTML Section Heading elements"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< h1 >–< h6 >: The HTML Section Heading elements

  </h1>
</div>
<div class="meaning">
  <p>The < h1 > to < h6 > HTML elements represent six levels of section headings. < h1 > is the highest section level and < h6 > is the lowest.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="h1.png" alt="">
  <img src="h12.png">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element's attributes include the global attributes.</p>
</div>
<div class="Attributes">
  <h1>Usage notes
  </h1>
    <ul>
      <li>Heading information can be used by user agents to construct a table of contents for a document automatically.
      </li>
      <li>Do not use heading elements to resize text. Instead, use the CSS font-size property.
      </li>
      <li>Do not skip heading levels: always start from < h1 >, followed by < h2 > and so on.
      </li>
    </ul>
</div>    
<div class="Attributes">
  <h1>Avoid using multiple < h1 > elements on one page
  </h1>
 <p>While using multiple < h1 > elements on one page is allowed by the HTML standard (as long as they are not nested), this is not considered a best practice. A page should generally have a single < h1 > element that describes the content of the page (similar to the document's < title  element).
 <br>
 <br>
 Prefer using only one < h1 > per page and nest headings without skipping levels.
</p>
</div>
  `
}
function headShow() {
  
  document.title = "<head>: The Document Metadata (Header) element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< head >: The Document Metadata (Header) element
            </h1>
          </div>
          <div class="meaning">
            <p>The < head > HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="head.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
  `
}
function headerShow() {

  document.title = "<header> - HTML element"
  document.querySelector(".container-words").innerHTML = 
`
<div class="title">
<h1>< header >

</h1>
</div>
<div class="meaning">
<p>The < header > HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.


    </p>
</div>
<div class="example">
<h1>Example: </h1>
<img src="header.png" alt="">
</div>
<div class="Attributes">
<h1>Usage notes</h1>
<p>The < header > element has an identical meaning to the site-wide banner landmark role, unless nested within sectioning content. Then, the < header > element is not a landmark.</p>
<br>
<br>
<p>The < header > element can define a global site header, described as a banner in the accessibility tree. It usually includes a logo, company name, search feature, and possibly the global navigation or a slogan. It is generally located at the top of the page.
</p>
<br>
<br>
<p>Otherwise, it is a section in the accessibility tree, and usually contain the surrounding section's heading (an h1 – h6 element) and optional subheading, but this is not required.
</p>
</div>
<div class="Attributes">
<h1>Historical Usage</h1>
<p>The < header > element originally existed at the very beginning of HTML for headings. It is seen in the very first website. At some point, headings became < h1 > through < h6 >, allowing <     header > to be free to fill a different role.
</p>
</div>
<div class="Attributes">
<h1>Attributes</h1>
<p>This element's attributes include the global attributes.</p>
</div>
`
}
function hgroupShow() {
 
  document.title = "<hgroup> HTML element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< hgroup >


            </h1>
          </div>
          <div class="meaning">
            <p>The < hgroup > HTML element represents a heading and related content. It groups a single < h1 >–< h6 > element with one or more < p >.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="hgroup.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>The < hgroup > element allows the grouping of a heading with any secondary content, such as subheadings, an alternative title, or tagline. Each of these types of content represented as a < p > element within the < hgroup >.</p>
            <br>
            <br>
            <p>The < hgroup > itself has no impact on the document outline of a web page. Rather, the single allowed heading within the < hgroup > contributes to the document outline.
            </p>
          </div>
  `
}
function hrShow() {

  document.title = "<hr>: The Thematic Break (Horizontal Rule) element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< hr >: The Thematic Break (Horizontal Rule) element
            </h1>
          </div>
          <div class="meaning">
            <p>The < hr > HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="hr.png" alt="">
            <p>Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
  `
}
function htmlShow() {

  document.title = "< html >: The HTML Document / Root element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< html >: The HTML Document / Root element
            </h1>
          </div>
          <div class="meaning">
            <p>The < html > HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="html.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
          <div class="Attributes">
            <h1>xmlns
            </h1>
            <p>Specifies the XML Namespace of the document. Default value is "http://www.w3.org/1999/xhtml". This is required in documents parsed with XML parsers, and optional in text/html documents.
            </p>
          </div>
  `
}
function iShow() {

  document.title = "<i>: The Idiomatic Text element"
  document.querySelector(".container-words").innerHTML = 
 `
 <div class="title">
            <h1>< i >: The Idiomatic Text element

            </h1>
          </div>
          <div class="meaning">
            <p>The < i > HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the < i > naming of this element.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="i.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
        <div class="Attributes">
            <h1>Usage notes</h1>
            <ul>
                <li>Use the < i > element for text that is set off from the normal prose for readability reasons. This would be a range of text with different semantic meaning than the surrounding text. Among the use cases for the < i > element are spans of text representing a different quality or mode of text, such as:
                    <ul>
                        <li>Alternative voice or mood
                        </li>
                        <li>Taxonomic designations (such as the genus and species "Homo sapiens")
                        </li>
                        <li>Idiomatic terms from another language (such as "et cetera"); these should include the lang attribute to identify the language
                        </li>
                        <li>Technical terms
                        </li>
                        <li>Transliterations</li>
                        <li>Thoughts (such as "She wondered, What is this writer talking about, anyway?")
                        </li>
                        <li>Ship or vessel names in Western writing systems (such as "They searched the docks for the Empress of the Galaxy, the ship to which they were assigned.")
                        </li>
                    </ul>
                </li>
                   
                 <li>In earlier versions of the HTML specification, the < i > element was merely a presentational element used to display text in italics, much like the < b > element was used to display text in bold letters. This is no longer true, as these tags now define semantics rather than typographic appearance. A browser will typically still display the contents of the < i > element in italic type, but is, by definition, no longer required to do so. To display text in italic type, authors should use the CSS font-style property.
                </li>  
                <li>Be sure the text in question is not actually more appropriately marked up with another element.
                   <ul>
                    <li>Use < em > to indicate stress emphasis.
                    </li>
                    <li>Use < strong > to indicate importance, seriousness, or urgency.
                    </li>
                    <li>Use < mark > to indicate relevance.
                    </li>
                    <li>Use < cite > to mark up the name of a work, such as a book, play, or song.
                    </li>
                    <li>Use < dfn > to mark up the defining instance of a term.
                    </li>
                   </ul>
                </li> 
            </ul>
        </div>
 `
}
function iframeShow() {

  document.title = "<iframe>: The Inline Frame element"
  document.querySelector(".container-words").innerHTML = 
 `
 <div class="title">
 <h1>< iframe >: The Inline Frame element
 </h1>
</div>
<div class="meaning">
 <p>The < iframe > HTML element represents a nested browsing context, embedding another HTML page into the current one.
     </p>
</div>
<div class="example">
 <h1>Example: </h1>
 <img src="iframe.png" alt="">
<p>Each embedded browsing context has its own session history and document. The browsing context that embeds the others is called the parent browsing context. The topmost browsing context — the one with no parent — is usually the browser window, represented by the Window object.
</p>  
</div>
<div class="Attributes">
 <h1>Attributes</h1>
 <p>This element's attributes include the global attributes.</p>
</div>
 `
}
function imgShow() {
  document.title = "<img>: The Image Embed element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< img >: The Image Embed element

            </h1>
          </div>
          <div class="meaning">
            <p>The < img > HTML element embeds an image into the document.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="img.png" alt="">
        </div>
        <div class="Attributes">
            <p>The above example shows usage of the < img > element:
            </p>
            <ul>
                <li>The src attribute is required, and contains the path to the image you want to embed.
                </li>
                <li>The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.
                </li>
            </ul>
          </div>
          <div class="Attributes">
            <p>There are many other attributes to achieve various purposes:
            </p>
            <ul>
                <li>Referrer/CORS control for security and privacy: see crossorigin and referrerpolicy.
                </li>
                <li>Use both width and height to set the intrinsic size of the image, allowing it to take up space before it loads, to mitigate content layout shifts.
                </li>
                <li>Responsive image hints with sizes and srcset (see also the < picture > element and our Responsive images tutorial).
                </li>
            </ul>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element's attributes include the global attributes.</p>
          </div>
  `
}
function inputShow() {
  document.title = "<input>: The Input (Form Input) element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< input >: The Input (Form Input) element

            </h1>
          </div>
          <div class="meaning">
            <p>The < input > HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The < input > element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="input.png" alt="">
        </div>
          <div class="Attributes">
            <h1>< input > types</h1>
            <p>How an < input > works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is text.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>The < input > element is so powerful because of its attributes; the type attribute, described with examples above, being the most important. Since every < input > element, regardless of type, is based on the HTMLInputElement interface, they technically share the exact same set of attributes. However, in reality, most attributes have an effect on only a specific subset of input types. In addition, the way some attributes impact an input depends on the input type, impacting different input types in different ways.
            </p>
            <br>
            <br>
            <p>This section provides a table listing all the attributes with a brief description. This table is followed by a list describing each attribute in greater detail, along with which input types they are associated with. Those that are common to most or all input types are defined in greater detail below. Attributes that are unique to particular input types—or attributes which are common to all input types but have special behaviors when used on a given input type—are instead documented on those types' pages.
            </p>
          </div>
  `
}
function insShow(){

  document.title = "<ins> - HTML element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< ins > 

  </h1>
</div>
<div class="meaning">
  <p>The < ins > HTML element represents a range of text that has been added to a document. You can use the < del > element to similarly represent a range of text that has been deleted from the document.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="ins.png" alt="">
  <img src="ins2.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>cite</h1>
  <p>This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.
  </p>
</div>
<div class="Attributes">
  <h1>datetime
  </h1>
  <p>This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Format of a valid date string. The format of the string if it includes both date and time is covered in Format of a valid local date and time string.
  </p>
</div>
  `
}
function kbdShow(){

  document.title = "<kbd>: The Keyboard Input element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< kbd >: The Keyboard Input element

            </h1>
          </div>
          <div class="meaning">
            <p>The < kbd > HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a < kbd > element using its default monospace font, although this is not mandated by the HTML standard.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="kbd.png" alt="">
            <p>< kbd > may be nested in various combinations with the < samp > (Sample Output) element to represent various forms of input or output based on visual cues.
            </p>
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>Other elements can be used in tandem with <kbd> to represent more specific scenarios:
            </p>
            <ul>
                <li>Nesting a < kbd > element within another <  > element represents an actual key or other unit of input as a portion of a larger input. See Representing keystrokes within an input below.
                </li>
                <li>Nesting a < kbd > element inside a < samp > element represents input that has been echoed back to the user by the system. </li>
                <li>Nesting a < samp > element inside a < kbd > element, on the other hand, represents input which is based on text presented by the system, such as the names of menus and menu items, or the names of buttons displayed on the screen.</li>
            </ul>
          </div>
  `
}
function labelShow(){

  document.title = "<label>: The Label element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< label >: The Label element

  </h1>
</div>
<div class="meaning">
  <p>The < label > HTML element represents a caption for an item in a user interface.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="label.png" alt="">
</div>
<div class="Attributes">
  <p>Associating a < label > with a form control, such as < input > or < textarea > offers some major advantages:
  </p>
  <ul>
      <li>The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means that, for example, a screen reader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.
      </li>
      <li>When a user clicks or touches/taps a label, the browser passes the focus to its associated input (the resulting event is also raised for the input). That increased hit area for focusing the input provides an advantage to anyone trying to activate it — including those using a touch-screen device.
      </li>
  </ul>
</div>
<div class="Attributes">
  <p>To explicitly associate a < label > element with an < input > element, you first need to add the id attribute to the < input > element. Next, you add the for attribute to the < label > element, where the value of for is the same as the id in the < input > element.
  </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function legendShow(){
  document.title = "<legend>: The Field Set Legend element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< legend >: The Field Set Legend element


            </h1>
          </div>
          <div class="meaning">
            <p>The < legend > HTML element represents a caption for the content of its parent < fieldset >.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="legend.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function liShow(){
  document.title = "<li>: The List Item element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< li >: The List Item element

  </h1>
</div>
<div class="meaning">
  <p>The < li > HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (< ol >), an unordered list (< ul >), or a menu (< menu >). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="li.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>value</h1>
  <p>This integer attribute indicates the current ordinal value of the list item as defined by the < ol > element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (< ul >) or for menus (< menu >).


  </p>
</div>
  `
}
function linkShow() {

  document.title = "<link>: The External Resource Link element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< link >: The External Resource Link element


            </h1>
          </div>
          <div class="meaning">
            <p>The < link > HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="link.png" alt="">
        </div>
        <div class="Attributes">
            <p>This simple example provides the path to the stylesheet inside an href attribute, and a rel attribute with a value of stylesheet. The rel stands for "relationship", and is one of the key features of the < link > element — the value denotes how the item being linked to is related to the containing document.
            </p>
          </div>
          <div class="Attributes">
            <p>The sizes attribute indicates the icon size, while the type contains the MIME type of the resource being linked. These provide useful hints to allow the browser to choose the most appropriate icon available.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function mainShow(){

  document.title = "<main> - HTML element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< main >
            </h1>
          </div>
          <div class="meaning">
            <p>The < main > HTML element represents the dominant content of the < body > of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="main.png" alt="">
        </div>
        <div class="Attributes">
            <p>A document mustn't have more than one < main > element that doesn't have the hidden attribute specified.
            </p>
          </div>
          <div class="example">
            <img src="main2.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <p>The content of a < main > element should be unique to the document. Content that is repeated across a set of documents or document sections such as sidebars, navigation links, copyright information, site logos, and search forms shouldn't be included unless the search form is the main function of the page.
            </p>
            <br>
            <br>
            <p>< main > doesn't contribute to the document's outline; that is, unlike elements such as < body >, headings such as h2, and such, < main > doesn't affect the DOM's concept of the structure of the page. It's strictly informative.
            </p>
          </div>    
  `
}
function mapShow(){

  document.title = "<map>: The Image Map element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< map >: The Image Map element

  </h1>
</div>
<div class="meaning">
  <p>The < map > HTML element is used with < area > elements to define an image map (a clickable link area).


      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="map.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>name</h1>
  <p>The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be equal to the value of the name attribute of another<br> < map > element in the same document. If the id attribute is also specified, both attributes must have the same value.

  </p>
</div>    
  `
}
function markShow(){

  document.title = "<mark>: The Mark Text element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< mark >: The Mark Text element


  </h1>
</div>
<div class="meaning">
  <p>The < mark > HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="mark.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
  <p>Typical use cases for < mark > include:
  </p>
  <ul>
      <li>When used in a quotation (< q >) or block quote (< blockquote >), it generally indicates text which is of special interest but is not marked in the original source material, or material which needs special scrutiny even though the original author didn't think it was of particular importance. Think of this like using a highlighter pen in a book to mark passages that you find of interest.
      </li>
      <li>Otherwise, < mark > indicates a portion of the document's content which is likely to be relevant to the user's current activity. This might be used, for example, to indicate the words that matched a search operation.
      </li>
      <li>Don't use < mark > for syntax highlighting purposes; instead, use the < span > element with appropriate CSS applied to it.
      </li>
  </ul>
</div>    
  `
}
function menuShow(){

  document.title = "<menu>: The Menu element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< menu >: The Menu element


  </h1>
</div>
<div class="meaning">
  <p>The < menu > HTML element is described in the HTML specification as a semantic alternative to < ul >, but treated by browsers (and exposed through the accessibility tree) as no different than < ul >. It represents an unordered list of items (which are represented by < li > elements).


      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="menu.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
  <p>The < menu > and < ul > elements both represent an unordered list of items. The key difference is that < ul > primarily contains items for display, while < menu > was intended for interactive items. The related < menuitem > element has been deprecated.
  </p>
</div>    
  `
}
function metaShow(){

  document.title = "<meta>: The metadata element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< meta >: The metadata element
            </h1>
          </div>
          <div class="meaning">
            <p>The < meta > HTML element represents metadata that cannot be represented by other HTML meta-related elements, like < base >, < link >, < script >, < style > or < title >.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="meta.png" alt="">
        </div>
        <div class="Attributes">
            <p>The type of metadata provided by the  <meta > element can be one of the following:
            </p>
            <ul>
                <li>If the name attribute is set, the < meta > element provides document-level metadata, applying to the whole page.
                </li>
                <li>If the http-equiv attribute is set, the < meta > element is a pragma directive, providing information equivalent to what can be given by a similarly-named HTTP header.
                </li>
                <li>If the charset attribute is set, the < meta > element is a charset declaration, giving the character encoding in which the document is encoded.
                </li>
                <li>If the itemprop attribute is set, the < meta > element provides user-defined metadata.
                </li>
            </ul>
          </div>    
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function meterShow(){

  document.title = "<meter>: The HTML Meter element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< meter >: The HTML Meter element

            </h1>
          </div>
          <div class="meaning">
            <p>The < meter > HTML element represents either a scalar value within a known range or a fractional value.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="meter.png" alt="">
            <img src="meter2.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>value
            </h1>
            <p>The current numeric value. This must be between the minimum and maximum values (min attribute and max attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the min attribute and max attribute, the value is equal to the nearest end of the range.
            </p>
          </div>
          <div class="Attributes">
            <h1>min
            </h1>
            <p>The lower numeric bound of the measured range. This must be less than the maximum value (max attribute), if specified. If unspecified, the minimum value is 0.
            </p>
          </div>
          <div class="Attributes">
            <h1>max</h1>
            <p>The upper numeric bound of the measured range. This must be greater than the minimum value (min attribute), if specified. If unspecified, the maximum value is 1.
            </p>
          </div>
          <div class="Attributes">
            <h1>low
            </h1>
            <p>The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (min attribute), and it also must be less than the high value and maximum value (high attribute and max attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
            </p>
          </div>
          <div class="Attributes">
            <h1>high</h1>
            <p>The lower numeric bound of the high end of the measured range. This must be less than the maximum value (max attribute), and it also must be greater than the low value and minimum value (low attribute and min attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the high value is equal to the maximum value.
            </p>
          </div>
          <div class="Attributes">
            <h1>optimum
            </h1>
            <p>This attribute indicates the optimal numeric value. It must be within the range (as defined by the min attribute and max attribute). When used with the low attribute and high attribute, it gives an indication where along the range is considered preferable. For example, if it is between the min attribute and the low attribute, then the lower range is considered preferred. The browser may color the meter's bar differently depending on whether the value is less than or equal to the optimum value.
            </p>
          </div>
  `
}
function navShow(){

  document.title = "<nav>: The Navigation Section element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< nav >: The Navigation Section element


            </h1>
          </div>
          <div class="meaning">
            <p>The < nav > HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="nav.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes
            </h1>
           <ul>
            <li>It's not necessary for all links to be contained in a < nav > element. < nav > is intended only for a major block of navigation links; typically the < footer > element often has a list of links that don't need to be in a < nav > element.
            </li>
            <li>A document may have several < nav > elements, for example, one for site navigation and one for intra-page navigation. aria-labelledby can be used in such case to promote accessibility
            </li>
            <li>User agents, such as screen readers targeting disabled users, can use this element to determine whether to omit the initial rendering of navigation-only content.
            </li>
           </ul>
          </div>
  `
}
function noscriptShow(){

  document.title = "<noscript>: The Noscript element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< noscript >: The Noscript element
            </h1>
          </div>
          <div class="meaning">
            <p>The < noscript > HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="noscript.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function objectShow(){

  document.title = "<object>: The External Object element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< object >: The External Object element

            </h1>
          </div>
          <div class="meaning">
            <p>The < object > HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="object.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>data</h1>
            <p>The address of the resource as a valid URL. At least one of data and type must be defined.
            </p>
          </div>
          <div class="Attributes">
            <h1>form
            </h1>
            <p>The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a < form > element in the same document.
            </p>
          </div>
          <div class="Attributes">
            <h1>width
            </h1>
            <p>The width of the display resource, in CSS pixels. — (Absolute values only. NO percentages)
            </p>
          </div>
          <div class="Attributes">
            <h1>height
            </h1>
            <p>The height of the displayed resource, in CSS pixels. — (Absolute values only. NO percentages)
            </p>
          </div>
          <div class="Attributes">
            <h1>usemap</h1>
            <p>A hash-name reference to a < map > element; that is a '#' followed by the value of a name of a map element.
            </p>
          </div>
          <div class="Attributes">
            <h1>name</h1>
            <p>The name of valid browsing context (HTML5), or the name of the control (HTML 4).
            </p>
          </div>
          <div class="Attributes">
            <h1>type</h1>
            <p>The content type of the resource specified by data. At least one of data and type must be defined.


            </p>
          </div>
  `
}
function olShow(){

  document.title = "<ol>: The Ordered List element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< ol >: The Ordered List element


            </h1>
          </div>
          <div class="meaning">
            <p>The < ol > HTML element represents an ordered list of items — typically rendered as a numbered list.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="object.png" alt="">
        </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>reversed</h1>
            <p>This Boolean attribute specifies that the list's items are in reverse order. Items will be numbered from high to low.
            </p>
          </div>
          <div class="Attributes">
            <h1>start
            </h1>
            <p>An integer to start counting from for the list items. Always an Arabic numeral (1, 2, 3, etc.), even when the numbering type is letters or Roman numerals. For example, to start numbering elements from the letter "d" or the Roman numeral "iv," use start="4".
            </p>
          </div>
          <div class="Attributes">
            <h1>type
            </h1>
            <p>Sets the numbering type:
            </p>
            <ul>
                <li>a for lowercase letters
                </li>
                <li>A for uppercase letters
                </li>
                <li>i for lowercase Roman numerals
                </li>
                <li>I for uppercase Roman numerals
                </li>
                <li>1 for numbers (default)
                </li>
            </ul>
            <p>The specified type is used for the entire list unless a different type attribute is used on an enclosed < li > element.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes
            </h1>
            <p>Typically, ordered list items display with a preceding marker, such as a number or letter.
            </p>
            <br>
            <br>
            <p>The < ol > and < ul > elements may nest as deeply as desired, alternating between < ol > and < ul > however you like.
            </p>
            <br>
            <br>
            <p>The < ol > and < ul > elements both represent a list of items. The difference is with the < ol > element, the order is meaningful. For example:

                <ul>
                    <li>Steps in a recipe
                    </li>
                    <li>Turn-by-turn directions
                    </li>
                    <li>The list of ingredients in decreasing proportion on nutrition information labels
                    </li>
                </ul>
            </p>
            <br>
            <br>
            <p>To determine which list to use, try changing the order of the list items; if the meaning changes, use the < ol > element — otherwise you can use < ul >.
            </p>
          </div>
  `
}
function optgroupShow(){

  document.title = "<optgroup>: The Option Group element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< optgroup >: The Option Group element



  </h1>
</div>
<div class="meaning">
  <p>The < optgroup > HTML element creates a grouping of options within a < select > element.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="optgroup.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>disabled</h1>
  <p>If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.
  </p>
</div>
<div class="Attributes">
  <h1>label
  </h1>
  <p>The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.
  </p>
</div>
  `
}
function optionShow(){

  document.title = "<option>: The HTML Option element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< option >: The HTML Option element
  </h1>
</div>
<div class="meaning">
  <p>The < option > HTML element is used to define an item contained in a < select >, an < optgroup >, or a < datalist > element. As such, < option > can represent menu items in popups and other lists of items in an HTML document.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="option.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>disabled</h1>
  <p>If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled < optgroup > element.
  </p>
</div>
<div class="Attributes">
  <h1>label
  </h1>
  <p>This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.
  </p>
</div>
<div class="Attributes">
  <h1>selected
  </h1>
  <p>If present, this Boolean attribute indicates that the option is initially selected. If the < option > element is the descendant of a < select > element whose multiple attribute is not set, only one single < option > of this < select > element may have the selected attribute.
  </p>
</div>
<div class="Attributes">
  <h1>value
  </h1>
  <p>The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.
  </p>
</div>
  `
}
function outputShow(){
  document.title = "<output>: The Output element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< output >: The Output element

            </h1>
          </div>
          <div class="meaning">
            <p>The < output > HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
                </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>for
            </h1>
            <p>A space-separated list of other elements' ids, indicating that those elements contributed input values to (or otherwise affected) the calculation.
            </p>
          </div>
          <div class="Attributes">
            <h1>form
            </h1>
            <p>The < form > element to associate the output with (its form owner). The value of this attribute must be the id of a < form > in the same document. (If this attribute is not set, the < output > is associated with its ancestor < form > element, if any.)
            </p>
            <br>
            <br>
            <p>This attribute lets you associate < output > elements to < form >s anywhere in the document, not just inside a < form >. It can also override an ancestor < form > element.
            </p>
          </div>
          <div class="Attributes">
            <h1>name
            </h1>
            <p>The element's name. Used in the form.elements API.
            </p>
            <br>
            <br>
           <p>The < output > value, name, and contents are NOT submitted during form submission.
           </p>
          </div>
  `
}
function pShow(){
  document.title = "<p>: The Paragraph element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< p >: The Paragraph element


  </h1>
</div>
<div class="meaning">
  <p>The < p > HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
      </p>
      <br>
      <br>
      <p>Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing < /p > tag. See "Tag omission" below.

  </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="p.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
} 
function pictureShow(){

  document.title = "<picture>: The Picture element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< picture >: The Picture element



  </h1>
</div>
<div class="meaning">
  <p>The < picture > HTML element contains zero or more < source > elements and one < img > element to offer alternative versions of an image for different display/device scenarios.


      </p>
      <br>
      <br>
      <p>The browser will consider each child < source > element and choose the best match among them. If no matches are found—or the browser doesn't support the < picture > element—the URL of the < img > element's src attribute is selected. The selected image is then presented in the space occupied by the < img >  element.
  </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="picture.png" alt="">
</div>
<div class="Attributes">
  <p>To decide which URL to load, the user agent examines each < source >'s srcset, media, and type attributes to select a compatible image that best matches the current layout and capabilities of the display device.
  </p>
</div>
<div class="Attributes">
  <p>The < img> element serves two purposes:
  </p>
  <ol>
      <li>It describes the size and other attributes of the image and its presentation.
      </li>
      <li>It provides a fallback in case none of the offered < source > elements are able to provide a usable image.
      </li>
  </ol>
</div>
<div class="Attributes">
  <p>Common use cases for < picture >:
  </p>
  <ul>
      <li>Art direction. Cropping or modifying images for different media conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).
      </li>
      <li>Offering alternative image formats, for cases where certain formats are not supported.
      </li>
      <li>Saving bandwidth and speeding page load times by loading the most appropriate image for the viewer's display.
      </li>
  </ul>
  <p>If providing higher-density versions of an image for high-DPI (Retina) display, use srcset on the < img > element instead. This lets browsers opt for lower-density versions in data-saving modes, and you don't have to write explicit media conditions.
  </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function preShow(){

  document.title = "<pre>: The Preformatted Text element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< pre >: The Preformatted Text element
  </h1>
</div>
<div class="meaning">
  <p>The < pre > HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="pre.png" alt="">
</div>
<div class="Attributes">
  <p>If you have to display reserved characters such as < , >, &, and " within the < pre > tag, the characters must be escaped using their respective HTML entity.

  </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function progressShow(){

  document.title = "<progress>: The Progress Indicator element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< progress >: The Progress Indicator element

  </h1>
</div>
<div class="meaning">
  <p>The < progress > HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="progress.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>max
  </h1>
  <p>This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0 and be a valid floating point number. The default value is 1.
  </p>
  </div>
<div class="Attributes">
  <h1>value
  </h1>
  <p>This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0 and be a valid floating point number. The default value is 1.
  </p>
  </div>
  `
}
function qShow(){
  document.title = "<q>: The Inline Quotation element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< q >: The Inline Quotation element


  </h1>
</div>
<div class="meaning">
  <p>The < q > HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the < blockquote > element.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="q.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>cite
  </h1>
  <p>The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
  </p>
  </div>
  `
}
function rpShow(){

  document.title = "<rp>: The Ruby Fallback Parenthesis element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< rp >: The Ruby Fallback Parenthesis element



  </h1>
</div>
<div class="meaning">
  <p>The < rp > HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the < ruby > element. One < rp > element should enclose each of the opening and closing parentheses that wrap the < rt > element that contains the annotation's text.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="rp.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes
  </h1>
     <ul>
      <li>Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwanese bopomofo characters. The < rp > element is used in the case of lack of < ruby > element support; the < rp > content provides what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses.
      </li>
     </ul>
  </div>
  `
}
function rtShow(){

  document.title = "<rt>: The Ruby Text element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< rt >: The Ruby Text element
            </h1>
          </div>
          <div class="meaning">
            <p>The < rt > HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The < rt > element must always be contained within a <  > element.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="rt.png" alt="">
            <br>
            <br>
            <p>See the article about the < ruby > element for more examples.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function rubyShow(){

  document.title = "<ruby>: The Ruby Annotation element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< ruby >: The Ruby Annotation element
  </h1>
</div>
<div class="meaning">
  <p>The < ruby > HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
      </p>
      <br>
      <br>
      <p>The term ruby originated as a unit of measurement used by typesetters, representing the smallest size that text can be printed on newsprint while remaining legible.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="ruby.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function sShow(){

  document.title = "<s>: The Strikethrough element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< s >: The Strikethrough element

            </h1>
          </div>
          <div class="meaning">
            <p>The < s > HTML element renders text with a strikethrough, or a line through it. Use the  < s > element to represent things that are no longer relevant or no longer accurate. However, < s > is not appropriate when indicating document edits; for that, use the < del > and < ins > elements, as appropriate.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="s.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function sampShow(){

  document.title = "<samp>: The Sample Output element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< samp >: The Sample Output element


            </h1>
          </div>
          <div class="meaning">
            <p>The < samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="samp.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>You can use a CSS rule to override the browser's default font face for the < samp > element; however, it's possible that the browser's preferences may take precedence over any CSS you specify.
            </p>
          </div>
  `
}
function scriptShow(){

  document.title = "<script>: The Script element"
  document.querySelector(".container-words").innerHTML = 
`
<div class="title">
            <h1>< script >: The Script element
            </h1>
          </div>
          <div class="meaning">
            <p>The < script > HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The < script > element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="script.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>async
            </h1>
            <p>For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
            </p>
            <br>
            <br>
            <p>For module scripts, if the async attribute is present then the scripts and all their dependencies will be executed in the defer queue, therefore they will get fetched in parallel to parsing and evaluated as soon as they are available.
            </p>
            <br>
            <br>
            <p>This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. defer has a similar effect in this case.
            </p>
            <br>
            <br>
            <p>This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.
            </p>
          </div>
          <div class="Attributes">
            <h1>crossorigin
            </h1>
            <p>Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.
            </p>
          </div>
          <div class="Attributes">
            <h1>defer
            </h1>
            <p>This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
            </p>
            <br>
            <br>
            <p>Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
            </p>
            <br>
            <br>
            <p>Scripts with the defer attribute will execute in the order in which they appear in the document.
            </p>
            <br>
            <br>
            <p>This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.

            </p>
          </div>
`
}
function sectionShow(){
  document.title = "<section>: The Generic Section element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< section >: The Generic Section element

            </h1>
          </div>
          <div class="meaning">
            <p>The < section > HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="section.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>As mentioned above, < section > is a generic sectioning element, and should only be used if there isn't a more specific element to represent it. As an example, a navigation menu should be wrapped in a < nav > element, but a list of search results or a map display and its controls don't have specific elements, and could be put inside a < section >.
            </p>
            <br>
            <br>
            <p>Also consider these cases:
            </p>
            <br>
            <br>
            <ul>
                <li>If the contents of the element represent a standalone, atomic unit of content that makes sense syndicated as a standalone piece (e.g. a blog post or blog comment, or a newspaper article), the < article > element would be a better choice.
                </li>
                <li>If the contents represent useful tangential information that works alongside the main content, but is not directly part of it (like related links, or an author bio), use an < aside >.
                </li>
                <li>If the contents represent the main content area of a document, use < main >.
                </li>
                <li>If you are only using the element as a styling wrapper, use a < div > instead.
                </li>
            </ul>
            <br>
            <br>
            <p>To reiterate, each < section > should be identified, typically by including a heading (h1 - h6 element) as a child of the < section > element, wherever possible. See below for examples of where you might see a < section > without a heading.

            </p>
          </div>
  `
}
function selectShow(){

  document.title = "<select>: The HTML Select element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< select >: The HTML Select element
            </h1>
          </div>
          <div class="meaning">
            <p>The < select > HTML element represents a control that provides a menu of options.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="select.png" alt="">
          </div>
          <div class="Attributes">
           <p>The above example shows typical < select > usage. It is given an id attribute to enable it to be associated with a < label > for accessibility purposes, as well as a name attribute to represent the name of the associated data point submitted to the server. Each menu option is defined by an < option > element nested inside the < select >.</p>
           <br>
           <br>
           <p>Each < option > element should have a value attribute containing the data value to submit to the server when that option is selected. If no value attribute is included, the value defaults to the text contained inside the element. You can include a selected attribute on an < option > element to make it selected by default when the page first loads.
           </p>
           <br>
           <br>
           <p>The < select > element has some unique attributes you can use to control it, such as multiple to specify whether multiple options can be selected, and size to specify how many options should be shown at once. It also accepts most of the general form input attributes such as required, disabled, autofocus, etc.
           </p>
           <br>
           <br>
           <p>You can further nest < option > elements inside < optgroup > elements to create separate groups of options inside the dropdown.
           </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function slotShow(){

  document.title = "<slot>: The Web Component Slot element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< slot >: The Web Component Slot element

  </h1>
</div>
<div class="meaning">
  <p>The < slot > HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
      </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>name
      </h1>
  <p>The slot's name.
  </p>
  <br>
  <br>
  <p><i>A named slot is a < slot > element with a name attribute.
  </i></p>
</div>
  `
}
function smallShow() {

  document.title = "<small>: the side comment element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< small >: the side comment element


  </h1>
</div>
<div class="meaning">
  <p>The < small > HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="small.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function sourceShow(){

  document.title = "<source>: The Media or Image Source element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< source >: The Media or Image Source element
  </h1>
</div>
<div class="meaning">
  <p>The < source > HTML element specifies multiple media resources for the < picture >, the < audio > element, or the < video > element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="source.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function spanShow(){

  document.title = "<span>: The Content Span element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< span >: The Content Span element

            </h1>
          </div>
          <div class="meaning">
            <p>The < span > HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. < span > is very much like a <  > element, but < div > is a block-level element whereas a < span > is an inline element.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="span.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function strongShow(){

  document.title = "<strong>: The Strong Importance element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< strong >: The Strong Importance element


            </h1>
          </div>
          <div class="meaning">
            <p>The < strong > HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="strong.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>The < strong > element is for content that is of "strong importance," including things of great seriousness or urgency (such as warnings). This could be a sentence that is of great importance to the whole page, or you could merely try to point out that some words are of greater importance compared to nearby content.
            </p>
            <br>
            <br>
            <p>Typically this element is rendered by default using a bold font weight. However, it should not be used to apply bold styling; use the CSS font-weight property for that purpose. Use the < b > element to draw attention to certain text without indicating a higher level of importance. Use the < em > element to mark text that has stress emphasis.
            </p>
            <br>
            <br>
            <p>Another accepted use for < strong > is to denote the labels of paragraphs which represent notes or warnings within the text of a page.
            </p>
          </div>
          <div class="Attributes">
            <h1>< b > vs. < strong ></h1>
            <p>It is often confusing to new developers why there are so many ways to express the same thing on a rendered website. < b > and < strong > are perhaps one of the most common sources of confusion, causing developers to ask "Should I use <  > or < strong >? Don't they both do the same thing?"
            </p>
            <br>
            <br>
            <p>Not exactly. The < strong > element is for content that is of greater importance, while the < b > element is used to draw attention to text without indicating that it's more important.
            </p>
            <br>
            <br>
            <p>It may help to realize that both are valid and semantic elements in HTML and that it's a coincidence that they both have the same default styling (boldface) in most browsers (although some older browsers actually underline < strong >). Each element is meant to be used in certain types of scenarios, and if you want to bold text for decoration, you should instead actually use the CSS font-weight property.
            </p>
            <br>
            <br>
            <p>The intended meaning or purpose of the enclosed text should be what determines which element you use. Communicating meaning is what semantics are all about.
            </p>
          </div>
          <div class="Attributes">
            <h1>< em > vs. < strong ></h1>
            <p>Adding to the confusion is the fact that while HTML 4 defined < strong > as indicating a stronger emphasis, HTML 5 defines < strong > as representing "strong importance for its contents." This is an important distinction to make.
            </p>
            <br>
            <br>
            <p>While < em > is used to change the meaning of a sentence as spoken emphasis does ("I love carrots" vs. "I love carrots"), < strong > is used to give portions of a sentence added importance (e.g., "Warning! This is very dangerous.") Both <  > and < em > can be nested to increase the relative degree of importance or stress emphasis, respectively.

            </p>
          </div>
  `
}
function styleShow(){

  document.title = "<style>: The Style Information element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< style >: The Style Information element
  </h1>
</div>
<div class="meaning">
  <p>The < style > HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the < style > element.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="style.png" alt="">
</div>
<div class="Attributes">
  <p>The < style > element must be included inside the < head > of the document. In general, it is better to put your styles in external stylesheets and apply them using < link > elements.


  </p>
</div>
<div class="Attributes">
  <p>If you include multiple < style > and < link > elements in your document, they will be applied to the DOM in the order they are included in the document — make sure you include them in the correct order, to avoid unexpected cascade issues.

  </p>
</div>
<div class="Attributes">
  <p>In the same manner as < link > elements, < style > elements can include media attributes that contain media queries, allowing you to selectively apply internal stylesheets to your document depending on media features such as viewport width.


  </p>
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function subShow(){
  
  document.title = "<sub>: The Subscript element"
   
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< sub >: The Subscript element
            </h1>
          </div>
          <div class="meaning">
            <p>The < sub > HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="sub.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>The < sub > element should be used only for typographical reasons—that is, to change the position of the text to comply with typographical conventions or standards, rather than solely for presentation or appearance purposes.
            </p>
            <br>
            <br>
            <p>For example, using < sub > to style the name of a company which uses altered baselines in their wordmark would not be appropriate; instead, CSS should be used. For example, you could use the vertical-align property with a declaration like vertical-align: sub or, to more precisely control the baseline shift, vertical-align: -25%.
            </p>
            <br>
            <br>
            <p>Appropriate use cases for < sub>  include (but aren't necessarily limited to):
            </p>
            <ul>
                <li>Marking up footnote numbers. </li>
                <li>Marking up the subscript in mathematical variable numbers (although you may also consider using a MathML formula for this)</li>
                <li>Denoting the number of atoms of a given element within a chemical formula (such as every developer's best friend, C 8 H 10 N 4 O 2 , otherwise known as "caffeine").</li>
            </ul>
          </div>
  `
}
function summaryShow(){

  document.title = "<summary>: The Disclosure Summary element"
  document.querySelector(".container-words").innerHTML = `
  
  <div class="title">
            <h1>< summary >: The Disclosure Summary element

            </h1>
          </div>
          <div class="meaning">
            <p>The < summary > HTML element specifies a summary, caption, or legend for a < details > element's disclosure box. Clicking the < summary > element toggles the state of the parent < details > element open and closed.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="summary.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>The < summary > element's contents can be any heading content, plain text, or HTML that can be used within a paragraph
            </p>
            <br>
            <br>
            <p>A < summary >  element may only be used as the first child of a < details > element. When the user clicks on the summary, the parent < details > element is toggled open or closed, and then a toggle event is sent to the < details > element, which can be used to let you know when this state change occurs.
            </p>
          </div>
          <div class="Attributes">
            <h1>Default label text</h1>
            <p>If a < details > element's first child is not a < summary > element, the user agent will use a default string (typically "Details") as the label for the disclosure box.
            </p>
          </div>
          <div class="Attributes">
            <h1>Default style</h1>
            <p>Per the HTML specification, the default style for < summary > elements includes display: list-item. This makes it possible to change or remove the icon displayed as the disclosure widget next to the label from the default, which is typically a triangle.
            </p>
            <br>
            <br>
            <p>You can also change the style to display: block to remove the disclosure triangle.
            </p>
            <br>
            <br>
            <p>For Webkit-based browsers, such as Safari, it is possible to control the icon display through the non-standard CSS pseudo-element ::-webkit-details-marker. To remove the disclosure triangle, use summary::-webkit-details-marker { display: none }.
            </p>
          </div>
  `
}
function supShow(){
 
   document.title = "<sup>: The Superscript element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< sup >: The Superscript element
  </h1>
</div>
<div class="meaning">
  <p>The < sup > HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="sup.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
  <p>The < sup > element should only be used for typographical reasons—that is, to change the position of the text to comply with typographical conventions or standards, rather than solely for presentation or appearance purposes.
  </p>
  <br>
  <br>
  <p>For example, to style the wordmark of a business or product which uses a raised baseline should be done using CSS (most likely vertical-align) rather than < sup >. This would be done using, for example, vertical-align: super or, to shift the baseline up 50%, vertical-align: 50%.
  </p>
  <br>
  <br>
  <p>Appropriate use cases for < sup > include (but aren't necessarily limited to):
  </p>
  <ul>
      <li>Displaying exponents, such as "x 3 ." It may be worth considering the use of MathML for these, especially in more complex cases.</li>
      <li>Displaying superior lettering, which is used in some languages when rendering certain abbreviations. For example, in French, the word "mademoiselle" can be abbreviated "M lle "; this is an acceptable use case.</li>
      <li>Representing ordinal numbers, such as "4 th " instead of "fourth." See Ordinal numbers for examples.
      </li>

  </ul>
</div>
  `
}
function tableShow(){

  document.title = "<table>: The Table element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< table >: The Table element

            </h1>
          </div>
          <div class="meaning">
            <p>The < table > HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="table.png" alt="">
            <img src="table2.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function tbodyShow() {

  document.title = "<tbody>: The Table Body element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
  <h1>< tbody >: The Table Body element


  </h1>
</div>
<div class="meaning">
  <p>The < tbody > HTML element encapsulates a set of table rows (< tr > elements), indicating that they comprise the body of the table (< table >).
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="tbody.png" alt="">
</div>
<div class="Attributes">
  <p>The < tbody > element, along with its related < thead> and < tfoot > elements, provide useful semantic information that can be used when rendering for either screen or printer.


  </p>
</div>
<div class="example">
  <img src="tbody2.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function tdShow() {

  document.title = "<td>: The Table Data Cell element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< td >: The Table Data Cell element



  </h1>
</div>
<div class="meaning">
  <p>The < td > HTML element defines a cell of a table that contains data. It participates in the table model.
      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="td.png" alt="">
</div>    
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function templateShow(){

  document.title = "<template>: The Content Template element"
  
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< template >: The Content Template element




            </h1>
          </div>
          <div class="meaning">
            <p>The < template > HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
                </p>
                <br>
                <br>
                <p>Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the < template > element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.
                </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>The only standard attributes that the < template > element supports are the global attributes.
            </p>
            <br>
            <br>
            <p>In Chromium-based browsers, the < template > element also supports a non-standard shadowrootmode attribute, as part of an experimental "Declarative Shadow DOM" proposal. In supporting browsers, a < template > element with the shadowrootmode attribute is detected by the HTML parser and immediately applied as the shadow root of its parent element. shadowrootmode can take a value of open or closed; these are equivalent to the open and closed values of the Element.attachShadow() mode option.
            </p>
            <br>
            <br>
            <p>Also, the corresponding HTMLTemplateElement interface has a standard content property (without an equivalent content/markup attribute), which is a read-only DocumentFragment containing the DOM subtree which the template represents. Note that directly using the value of the content property could lead to unexpected behavior; for details, see the Avoiding DocumentFragment pitfall section below.
            </p>
          </div>
  `
}
function textareaShow(){

  document.title = "<textarea>: The Textarea element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< textarea >: The Textarea element
            </h1>
          </div>
          <div class="meaning">
            <p>The < textarea > HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="textarea.png" alt="">
          </div>
          <div class="Attributes">
            <p>The above example demonstrates a number of features of < textarea >:
            </p>
            <ul>
                <li>An id attribute to allow the < textarea > to be associated with a < label > element for accessibility purposes
                </li>
                <li>A name attribute to set the name of the associated data point submitted to the server when the form is submitted.
                </li>
                <li>rows and cols attributes to allow you to specify an exact size for the < textarea > to take. Setting these is a good idea for consistency, as browser defaults can differ.
                </li>
                <li>Default content entered between the opening and closing tags. < textarea > does not support the value attribute.
                </li>
            </ul>
            <p>The < textarea > element also accepts several attributes common to form < input >s, such as autocomplete, autofocus, disabled, placeholder, readonly, and required.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function tfootShow(){

  document.title = "<tfoot>: The Table Foot element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< tfoot >: The Table Foot element

            </h1>
          </div>
          <div class="meaning">
            <p>The < tfoot > HTML element defines a set of rows summarizing the columns of the table.
                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="tfoot.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function thShow(){
  document.title = "<th>: The Table Header element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< th >: The Table Header element


            </h1>
          </div>
          <div class="meaning">
            <p>The < th > HTML element defines a cell as the header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.


                </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="th.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function theadShow(){
  document.title = "<thead>: The Table Head element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< thead >: The Table Head element



  </h1>
</div>
<div class="meaning">
  <p>The < thead > HTML element defines a set of rows defining the head of the columns of the table.




      </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="thead.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function timeShow(){

  document.title = "<time>: The (Date) Time element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< time >: The (Date) Time element



  </h1>
</div>
<div class="meaning">
  <p>The < time > HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
      </p>
      <br>
      <br>
      <p>It may represent one of the following:
      </p>
      <ul>
          <li>A time on a 24-hour clock.
          </li>
          <li>A precise date in the Gregorian calendar (with optional time and timezone information).
          </li>
          <li>A valid time duration.</li>
      </ul>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="time.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function titleShow(){

  document.title = "<title>: The Document Title element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< title >: The Document Title element



  </h1>
</div>
<div class="meaning">
  <p>The < title > HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.</p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="title.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
<div class="Attributes">
  <h1>Usage notes</h1>
  <p>The < title > element is always used within a page's < head > block.
  </p>
</div>
  `
}
function trShow(){
  document.title = "<tr>: The Table Row element"

  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< tr >: The Table Row element



            </h1>
          </div>
          <div class="meaning">
            <p>The < tr > HTML element defines a row of cells in a table. The row's cells can then be established using a mix of < td > (data cell) and < th > (header cell) elements.
            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="tr.png" alt="">
          </div>
          <div class="Attributes">
          <p>To provide additional control over how cells fit into (or span across) columns, both <  > and < td > support the colspan attribute, which lets you specify how many columns wide the cell should be, with the default being 1. Similarly, you can use the rowspan attribute on cells to indicate they should span more than one table row.
          </p>
          <br>
          <br>
            <p>This can take a little practice to get right when building your tables. We have some examples below, but for more examples and an in-depth tutorial, see the HTML tables series in our Learn web development area, where you'll learn how to use the table elements and their attributes to get just the right layout and formatting for your tabular data.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function trackShow(){

  document.title = "<track>: The Embed Text Track element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
  <h1>< track >: The Embed Text Track element




  </h1>
</div>
<div class="meaning">
  <p>The < track > HTML element is used as a child of the media elements, < audio > and < video >. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
  </p>
</div>
<div class="example">
  <h1>Example: </h1>
  <img src="track.png" alt="">
  <img src="track2.png" alt="">
</div>
<div class="Attributes">
  <h1>Attributes</h1>
  <p>This element includes the global attributes.
  </p>
</div>
  `
}
function   uShow(){

  document.title = "<u>: The Unarticulated Annotation (Underline) element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< u >: The Unarticulated Annotation (Underline) element





            </h1>
          </div>
          <div class="meaning">
            <p>The < u > HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="u.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
            <p>Along with other pure styling elements, the original HTML Underline (< u >) element was deprecated in HTML 4; however, < u > was restored in HTML 5 with a new, semantic, meaning: to mark text as having some form of non-textual annotation applied.
            </p>
          </div>
  `
}
function ulShow(){

  document.title = "<ul>: The Unordered List element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< ul >: The Unordered List element
            </h1>
          </div>
          <div class="meaning">
            <p>The < ul > HTML element represents an unordered list of items, typically rendered as a bulleted list.
            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="ul.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
  `
}
function varShow(){

  document.title = "<var>: The Variable element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< var >: The Variable element

            </h1>
          </div>
          <div class="meaning">
            <p>The < var > HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="var.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>This element includes the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Usage notes</h1>
          </div>
          <div class="Attributes">
            <h1>Related elements</h1>
            <p>Other elements that are used in contexts in which < var > is commonly used include:
            </p>
            <ul>
                <li>< code >: The HTML Code element</li>
                <li>< kbd >: The HTML Keyboard input element</li>
                <li>< samp >: The HTML Sample Output element
                </li>
            </ul>
            <br>
            <p>
                If you encounter code that is mistakenly using < var > for style purposes rather than semantic purposes, you should either use a < span > with appropriate CSS or, an appropriate semantic element among the following:

            </p>
            <ul>
                <li>< em ></li>
                <li>< i ></li>
                <li>< q ></li>
            </ul>
          </div>
  `
}
function videoShow(){
  document.title = "<video>: The Video Embed element"
  document.querySelector(".container-words").innerHTML = 
  `
  <div class="title">
            <h1>< video >: The Video Embed element


            </h1>
          </div>
          <div class="meaning">
            <p>The < video > HTML element embeds a media player which supports video playback into the document. You can use < video > for audio content as well, but the < audio > element may provide a more appropriate user experience.

            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="video.png" alt="">
          </div>
          <div class="Attributes">
          <p>The above example shows simple usage of the < video > element. In a similar manner to the < img > element, we include a path to the media we want to display inside the src attribute; we can include other attributes to specify information such as video width and height, whether we want it to autoplay and loop, whether we want to show the browser's default video controls, etc.
          </p>
          <br>
          <br>

            <p>The content inside the opening and closing < video>< /video > tags is shown as a fallback in browsers that don't support the element.
            </p>
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>Like all other HTML elements, this element supports the global attributes.
            </p>
          </div>
  `
}
function wbrShow(){

  document.title = "<wbr>: The Line Break Opportunity element"
  document.querySelector(".container-words").innerHTML =
  `
  <div class="title">
            <h1>< wbr >: The Line Break Opportunity element



            </h1>
          </div>
          <div class="meaning">
            <p>The < wbr > HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.



            </p>
          </div>
          <div class="example">
            <h1>Example: </h1>
            <img src="wbr.png" alt="">
          </div>
          <div class="Attributes">
            <h1>Attributes</h1>
            <p>Like all other HTML elements, this element supports the global attributes.
            </p>
          </div>
          <div class="Attributes">
            <h1>Notes</h1>
            <br>
            <p>On UTF-8 encoded pages, < wbr > behaves like the U+200B ZERO-WIDTH SPACE code point. In particular, it behaves like a Unicode bidi BN code point, meaning it has no effect on bidi-ordering: < div dir=rtl>123,< wbr >456< /div > displays, when not broken on two lines, 123,456 and not 456,123.
            </p>
            <br>
            <br>
            <p>For the same reason, the < wbr > element does not introduce a hyphen at the line break point. To make a hyphen appear only at the end of a line, use the soft hyphen character entity ( &shy;) instead.
            </p>
            </div>
  `
}

document.querySelector(".Elements").addEventListener("click", () => {
  
   document.documentElement.scrollTop = 0;
})
document.getElementById("wbr").addEventListener("click", wbrShow);
document.getElementById("video").addEventListener("click", videoShow);
document.getElementById("var").addEventListener("click", varShow);
document.getElementById("ul").addEventListener("click", ulShow);
document.getElementById("u").addEventListener("click", uShow);
document.getElementById("track").addEventListener("click", trackShow);
document.getElementById("tr").addEventListener("click", trShow);
document.getElementById("title").addEventListener("click", titleShow);
document.getElementById("time").addEventListener("click", timeShow);
document.getElementById("thead").addEventListener("click", theadShow);
document.getElementById("th").addEventListener("click", thShow);
document.getElementById("tfoot").addEventListener("click", tfootShow);
document.getElementById("textarea").addEventListener("click", textareaShow);
document.getElementById("template").addEventListener("click", templateShow);
document.getElementById("td").addEventListener("click", tdShow);
document.getElementById("tbody").addEventListener("click", tbodyShow);
document.getElementById("table").addEventListener("click", tableShow);
document.getElementById("sup").addEventListener("click", supShow);
document.getElementById("summary").addEventListener("click", summaryShow);
document.getElementById("sub").addEventListener("click", subShow);
document.getElementById("style").addEventListener("click", styleShow);
document.getElementById("strong").addEventListener("click", strongShow);
document.getElementById("span").addEventListener("click", spanShow);
document.getElementById("source").addEventListener("click", sourceShow);
document.getElementById("small").addEventListener("click", smallShow);
document.getElementById("slot").addEventListener("click", slotShow);
document.getElementById("select").addEventListener("click", selectShow);
document.getElementById("section").addEventListener("click", sectionShow);
document.getElementById("script").addEventListener("click", scriptShow);
document.getElementById("samp").addEventListener("click", sampShow);
document.getElementById("s").addEventListener("click", sShow);
document.getElementById("ruby").addEventListener("click", rubyShow);
document.getElementById("rt").addEventListener("click", rtShow);
document.getElementById("rp").addEventListener("click", rpShow);
document.getElementById("q").addEventListener("click", qShow);
document.getElementById("progress").addEventListener("click", progressShow);
document.getElementById("pre").addEventListener("click", preShow);
document.getElementById("picture").addEventListener("click", pictureShow);
document.getElementById("p").addEventListener("click", pShow);
document.getElementById("output").addEventListener("click", outputShow);
document.getElementById("option").addEventListener("click", optionShow);
document.getElementById("optgroup").addEventListener("click", optgroupShow);
document.getElementById("ol").addEventListener("click", olShow);
document.getElementById("object").addEventListener("click", objectShow);
document.getElementById("noscript").addEventListener("click", noscriptShow);
document.getElementById("nav").addEventListener("click", navShow);
document.getElementById("meter").addEventListener("click", meterShow);
document.getElementById("meta").addEventListener("click", metaShow);
document.getElementById("menu").addEventListener("click", menuShow);
document.getElementById("mark").addEventListener("click", markShow);
document.getElementById("map").addEventListener("click", mapShow);
document.getElementById("main").addEventListener("click", mainShow);
document.getElementById("link").addEventListener("click", linkShow);
document.getElementById("li").addEventListener("click", liShow);
document.getElementById("legend").addEventListener("click", legendShow);
document.getElementById("label").addEventListener("click", labelShow);
document.getElementById("kbd").addEventListener("click", kbdShow);
document.getElementById("ins").addEventListener("click", insShow);
document.getElementById("inputs").addEventListener("click", inputShow);
document.getElementById("img").addEventListener("click", imgShow);
document.getElementById("iframe").addEventListener("click", iframeShow)
document.getElementById("i").addEventListener("click", iShow);
document.getElementById("html").addEventListener("click", htmlShow)
document.getElementById("hr").addEventListener("click", hrShow)
document.getElementById("hgroup").addEventListener("click", hgroupShow);
document.getElementById("header").addEventListener("click", headerShow)
document.getElementById("head").addEventListener("click", headShow);
document.getElementById("h1").addEventListener("click", h1Show)
document.getElementById("form").addEventListener("click", formShow)
document.getElementById("footer").addEventListener("click", footerShow);
document.getElementById("figure").addEventListener("click", figureShow)
document.getElementById("figcaption").addEventListener("click", figcaptionShow)
document.getElementById("fieldset").addEventListener("click", fieldsetShow)
document.getElementById("embeded").addEventListener("click", embedShow)
document.getElementById("em").addEventListener("click", emShow)
document.getElementById("dt").addEventListener("click", dtShow);
document.getElementById("dl").addEventListener("click", dlShow)
document.getElementById("div").addEventListener("click", divShow)
document.getElementById("dialog").addEventListener("click", dialogShow);
document.getElementById("dfn").addEventListener("click", dfnShow);
document.getElementById("details").addEventListener("click", detailsShow)
document.getElementById("del").addEventListener("click", delShow)
document.getElementById("dd").addEventListener("click", ddShow);
document.getElementById("datalist").addEventListener("click", datalistShow);
document.getElementById("data").addEventListener("click", dataShow);
document.getElementById("colgroup").addEventListener("click", colgroupShow)
document.getElementById("col").addEventListener("click", colShow);
document.getElementById("code").addEventListener("click", codeShow);
document.getElementById("cite").addEventListener("click", citeShow)
document.getElementById("caption").addEventListener("click", captionShow)
 document.getElementById("canvas").addEventListener("click", canvasShow);
 document.getElementById("button").addEventListener("click", buttonShow);
 document.getElementById("br").addEventListener("click", brShow)
 document.getElementById("body").addEventListener("click", bodyShow)
 document.getElementById("blockquote").addEventListener("click", blockquoteShow)
 document.getElementById("bdo").addEventListener("click", bdoShow);
 document.getElementById("bdi").addEventListener("click", bdiShow)
 document.getElementById("base").addEventListener("click", baseShow)
 document.getElementById("b").addEventListener("click", bShow);
 document.getElementById("audio").addEventListener("click", audioShow)
 document.getElementById("aside").addEventListener("click", asideShow);
 document.getElementById("article").addEventListener("click", articleShow)
 document.getElementById("Ahref").addEventListener("click", AhrefShow)
 document.getElementById("Abbr").addEventListener("click", AbbrShow)
 document.getElementById("address").addEventListener("click", addressShow)
 document.getElementById("area").addEventListener("click", areaShow)





 document.getElementById("input").addEventListener("keypress", (event) => {

 
  let inputValue = document.getElementById("input").value;

  inputValue = inputValue.toLowerCase();
  if(event.keyCode === 13){
        event.preventDefault();
        document.documentElement.scrollTop = 0;
        if(inputValue === "href") {
          AhrefShow();
         }  else if  (inputValue === "a") {
          AhrefShow();
         } else if (inputValue === "ahref") {
          AhrefShow();
         } else if (inputValue === "abbr") {
          AbbrShow();
         } else if (inputValue === "address") {
          addressShow();
         } else if (inputValue === "add") {
          addressShow();
        } else if (inputValue === "area") {
          areaShow();
        }
          else if (inputValue === "article"){
          articleShow();
         } else if (inputValue === "ar") {
          articleShow();
         } else if (inputValue === "aside"){
          asideShow();
         } else if (inputValue === "audio") {
          audioShow();
         } else if (inputValue === "b"){
        bShow();
         } else if (inputValue === "base") {
          baseShow();
         } else if (inputValue === "bdi") {
          bdiShow();
         } else if (inputValue === "bdo") {
          bdoShow();
         } else if (inputValue === "block") {
          blockquoteShow();
         }else if (inputValue === "blockquote") {
          blockquoteShow();
         } else if (inputValue === "quote") {
          blockquoteShow();
         } else if (inputValue === "body"){
          bodyShow();
         } else if (inputValue === "br" ){
          brShow();
        } else if (inputValue === "button") {
           buttonShow();
        } else if (inputValue === "canvas") {
          canvasShow();
        } else if (inputValue === "caption") {
          captionShow()
        } else if (inputValue === "cap") {
          captionShow()
        } else if (inputValue === "cite") {
          citeShow(); 
        } else if (inputValue === "code"){
          codeShow();
        } else if (inputValue === "col"){
          colShow();
        } else if (inputValue === "colgroup"){
          colgroupShow();
        } else if (inputValue === "data") {
          dataShow();
        } else if (inputValue === "datalist"){
          datalistShow();
        } else if (inputValue === "dd") {
          ddShow();
        } else if (inputValue === "del") {
          delShow();
        } else if (inputValue === "details"){
          detailsShow();
        } else if (inputValue === "dfn"){
          dfnShow();
        } else if (inputValue === "dialog") {
          dialogShow();
        } else if (inputValue === "div") {
          divShow();
        } else if (inputValue === "dl"){
          dlShow();
        } else if (inputValue === "dt") {
          dtShow();
        } else if (inputValue === "em") {
          emShow();
        } else if (inputValue === "embed"){
          embedShow();
        } else if (inputValue === "fieldset"){
          fieldsetShow();
        } else if (inputValue === "figcaption"){
          figcaptionShow();
        } else if (inputValue === "figure") {
          figureShow();
        } else if(inputValue === "footer") {
          footerShow();
        } else if (inputValue === "form") {
          formShow();
        } else if (inputValue === "h1") {
        h1Show();
        } else if (inputValue === "head"){
          headShow();
        } else if (inputValue === "header"){
          headerShow();
        } else if (inputValue === "hgroup"){
          hgroupShow();
        } else if (inputValue === "hr"){
          hrShow();
        } else if (inputValue === "html"){
          htmlShow();
        } else if (inputValue === "i"){
          iShow();
        } else if (inputValue === "iframe"){
          iframeShow();
        } else if (inputValue === "img"){
          imgShow();
        } else if (inputValue === "input"){
          inputShow();
        } else if (inputValue === "ins"){
          insShow();
        } else if (inputValue === "kbd"){
          kbdShow();
        } else if (inputValue === "label"){
          labelShow();
        } else if (inputValue === "legend"){
          legendShow();
        } else if (inputValue === "li"){
          liShow();
        } else if (inputValue === "link"){
          linkShow();
        } else if (inputValue === "main"){
          mainShow();
        } else if (inputValue === "map"){
          mapShow();  
        } else if (inputValue === "mark"){
          markShow();
        } else if (inputValue === "menu"){
          menuShow();
        } else if (inputValue === "meta"){
          metaShow();
        } else if (inputValue === "meter"){
          meterShow();
        } else if(inputValue === "nav"){
          navShow();
        } else if (inputValue === "noscript"){
          noscriptShow();
        } else if (inputValue === "object"){
          objectShow();
        } else if (inputValue === "ol"){
          olShow();
        } else if (inputValue === "optgroup"){
          optgroupShow();
        } else if (inputValue == "option"){
          optionShow();
        } else if (inputValue === "output"){
          outputShow();
        } else if (inputValue === "p") {
          pShow();
        } else if (inputValue === "picture"){
          pictureShow();
        } else if (inputValue === "pre"){
          preShow();
        } else if (inputValue === "progress"){
          progressShow();
        } else if (inputValue === "q"){
          qShow();
        } else if (inputValue === "rp"){
          rpShow();
        } else if (inputValue === "rt"){
          rtShow();
        } else if (inputValue === "ruby"){
          rubyShow();
        } else if (inputValue === "s"){
          sShow();
        } else if (inputValue === "samp"){
          sampShow();
        } else if (inputValue === "script"){
          scriptShow();
        } else if (inputValue === "section"){
          sectionShow();
        } else if (inputValue === "select"){
          selectShow();
        } else if (inputValue === "slot"){
          slotShow();
        } else if (inputValue === "small"){
          smallShow();
        } else if (inputValue === "source"){
          sourceShow();
        } else if (inputValue === "span"){
          spanShow();
        } else if (inputValue === "strong"){
          strongShow();
        } else if (inputValue === "style"){
          styleShow();
        } else if (inputValue === "sub"){
          subShow();
        } else if (inputValue === "summary"){
          summaryShow();
        } else if (inputValue === "sup"){
          supShow();
        } else if (inputValue === "table"){
          tableShow();
        } else if (inputValue === "tbody"){
          tbodyShow();
        } else if (inputValue === "td"){
          tdShow();
        } else if (inputValue === "template"){
          templateShow();
        } else if (inputValue === "textarea"){
          textareaShow();
        } else if (inputValue === "tfoot"){
          tfootShow();
        } else if (inputValue === "th"){
          thShow();
        } else if (inputValue === "thead"){
          theadShow();
        } else if (inputValue === "time"){
          timeShow();
        } else if (inputValue === "title"){
          titleShow();
        } else if (inputValue === "tr"){
          trShow();
        } else if (inputValue === "track"){
          trackShow();
        } else if (inputValue === "u"){
          uShow();
        } else if (inputValue === "ul"){
          ulShow();
        } else if (inputValue === "var"){
          varShow();
        } else if (inputValue === "video"){
          videoShow();
        } else if (inputValue === "wbr"){
          wbrShow();
        }
          
         else {
            document.title = "HTML - Not Found!"
           document.querySelector(".container-words").innerHTML = `
           <div class="Not-Found">
           <img src="magnifying_glass-removebg-preview.png" alt="">
           <h1>Element not found</h1>
       </div>
           `
         }
    }
 })

 