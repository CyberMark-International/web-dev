import htmlImg from '../img/html1.png';
import htmlImg2 from '../img/html2.png';
import htmlImg3 from '../img/html3.png';
import htmlImg4 from '../img/html4.png';
const HTML = () => {
    return (
      <div>
        <h1>HTML Coding Standards</h1>
        <h2>Validation</h2>
        <p>All HTML pages should be verified against <a href="https://validator.w3.org/" target="blank" rel="noreferrer">the W3C validator</a> to ensure that the markup is well formed. This in and of itself is not directly indicative of good code, but it helps to weed out problems that are able to be tested via automation. It is no substitute for manual code review. (For other validators, see <a href="https://codex.wordpress.org/Validating_a_Website#HTML_-_Validation">HTML Validation</a> in the Codex.)</p>
        <h2>Self-closing Elements</h2>
        <p>All tags must be properly closed. For tags that can wrap nodes such as text or other elements, termination is a trivial enough task. For tags that are self-closing, the forward slash should have exactly one space preceding it:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span> <span className="token punctuation">/&gt;</span></span></code></pre>
        <p>rather than the compact but incorrect:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">/&gt;</span></span></code></pre>
        <p>The W3C specifies that a single space should precede the self-closing slash (<a href="https://w3.org/TR/xhtml1/#C_2">source</a>).</p>
        <h2>Attributes and Tags</h2>
        <p>All tags and attributes must be written in lowercase. Additionally, attribute values should be lowercase when the purpose of the text therein is only to be interpreted by machines. For instances in which the data needs to be human readable, proper title capitalization should be followed.</p>
        <p>For machines:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>meta</span> <span className="token attr-name">http-equiv</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>content-type<span className="token punctuation">"</span></span> <span className="token attr-name">content</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text/html; charset=utf-8<span className="token punctuation">"</span></span> <span className="token punctuation">/&gt;</span></span></code></pre>
        <p>For humans:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>http://example.com/<span className="token punctuation">"</span></span> <span className="token attr-name">title</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Description Here<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Example.com<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span></code></pre>
        <h2>Quotes</h2>
        <p>According to the W3C specifications for XHTML, all attributes must have a value, and must use double- or single-quotes (<a href="https://www.w3.org/TR/xhtml1/#h-4.4">source</a>). The following are examples of proper and improper usage of quotes and attribute/value pairs.</p>
        <p>Correct:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>email<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>disabled<span className="token punctuation">"</span></span> <span className="token punctuation">/&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">'</span>text<span className="token punctuation">'</span></span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">'</span>email<span className="token punctuation">'</span></span> <span className="token attr-name">disabled</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">'</span>disabled<span className="token punctuation">'</span></span> <span className="token punctuation">/&gt;</span></span></code></pre>
        <p>Incorrect:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code className="language-html" lang="html"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span>text</span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span>email</span> <span className="token attr-name">disabled</span><span className="token punctuation">&gt;</span></span></code></pre>
        <p>In HTML, attributes do not all have to have values, and attribute values do not always have to be quoted. While all of the examples above are valid HTML, <em>failing to quote attributes can lead to security vulnerabilities</em>. Always quote attributes.</p>
        <h2>Indentation</h2>
        <p>As with PHP, HTML indentation should always reflect logical structure. Use tabs and not spaces.</p>
        <p>When mixing PHP and HTML together, indent PHP blocks to match the surrounding HTML code. Closing PHP blocks should match the same indentation level as the opening block.</p>
        <p>Correct:</p>
        <img src={htmlImg} alt="indentation image"/>
        <h2>IDs vs. Classes</h2>
        <p>HTML elements can be identified by using the id and class attributes. An ID is a unique identifier for that particular element; no other element on the page should use the same ID.</p>
        <p>This uniqueness allows <code className='d-inline-block'>&lt;label&gt;</code> elements to associate themselves with a particular input and URLs to jump to a particular scroll position on a page. Classes are not unique. The same class can be used on multiple elements within a page, and a single element can have more than one class, in a space delimited list.</p>
        <img src={htmlImg2} alt="html class image"/>
        <p>When coming up with names for an ID or class, we use the following:</p>
        <ul>
          <li>IDs: camelCase</li>
          <li>Classes: snake_case</li>
        </ul>
        <h2>Anchors &amp; Links</h2>
        <p>All links should point to absolute or relative URLs with user-readable content. Do not link to XML or JSON resources that are designed to be Ajaxed by JavaScript instead of navigated to directly, and do not put JavaScript in an anchor's href attribute like javascript:loadPage(2);. This allows search engines to index the content, allows the user to open the links in a new tab or window, and means the links will still work when JavaScript is broken, disabled, or not supported. This will require that the back-end be able to return a full HTML page for each important content state (e.g. sorting a table column).</p>
        <h2>Paragraphs</h2>
        <p>Avoid using <code className='d-inline-block'>&lt;br&gt;</code> tags to separate paragraphs or lines of text. Use <code className='d-inline-block'>&lt;p&gt;</code> instead with proper opening and closing elements.</p>
        <h2>Tables</h2> 
        <p>Tables should not be used for page layout; only use them when you need to display tabular data. Tables provide an important semantic association (used mostly by screen readers for the sight-impaired) between row/column headers and their data, so use <code className='d-inline-block'>&lt;table&gt;</code> rather than other elements when displaying multiple records of data.</p>
        <p>The <code className='d-inline-block'>&lt;caption&gt;</code> element is the recommended way to describe a table for both sighted and sight-impaired users, though this can also be done less semantically in the normal page text around the table. Use the <code className='d-inline-block'>&lt;thead&gt;</code> and <code className='d-inline-block'>&lt;tbody&gt;</code> elements to denote which row contains column headers so when a user prints the website and the table runs onto another page, browsers can display the <code className='d-inline-block'>&lt;thead&gt;</code> on each page for easier readability. Remember to use the scope attribute on the <code className='d-inline-block'>&lt;th&gt;</code> element to indicate whether the header applies to the row or column.</p>
        <img src={htmlImg2} alt="tables image"/>
        <h2>Forms</h2>
        <p>For both semantic and functional reasons, we make full use of the <code className='d-inline-block'>&lt;form&gt;</code> tag for all sections requiring user input. All form action attributes should point to URLs with user-readable content, so they will still work if the form is submitted by the user before JavaScript has loaded on a page, or if JavaScript is broken, disabled, or not supported. This will require that the back-end be able to return a full HTML page for form submission (e.g. registering a new user, editing the quantity in a shopping cart).</p>
        <p>Do not nest the HTML form element tag.</p>
        <h2>Input Labels</h2>
        <p>All input fields should be associated with a <code className='d-inline-block'>&lt;label&gt;</code> element. The for attribute of the <code className='d-inline-block'>&lt;label&gt;</code> element should contain the ID of the corresponding input field. This means the input field will receive focus when a user clicks the label and also enables screen readers for sight-impaired users to read out an appropriate description of the input field.</p>
        <img src={htmlImg3} alt="input image"/>
      </div>
    );
  };
    
  export default HTML;