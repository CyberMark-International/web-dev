import css1 from '../img/css1.JPG';
import css3 from '../img/css3.JPG';
import css4 from '../img/css4.JPG';
import css5 from '../img/css5.JPG';
import css6 from '../img/css6.JPG';
const CSS = () => {
    return (
      <div>
        <h1>CSS Code Standards</h1>
        <p>Like any coding standard, the purpose of the CSS Coding Standards is to create a baseline for collaboration and review. Files within a project should appear as though created by a single entity. Above all else, create code that is readable, meaningful, consistent, and beautiful.</p>
        <h2>Structure</h2>
        <p>Try to segment code in logical ways:</p>
        <ul>
          <li>Separate page grids and containers from the content.</li>
          <li>Create baseline components which may be extended by other styles.</li>
        </ul>
        <p>Baseline components should rarely be modified directly.</p>
        <p>More specifically, you may have:</p>
        <ul>
          <li>Core brand styles.</li>
          <li>Basic typography or default HTML rules.</li>
          <li>Site-wide styles.</li>
          <li>Distinct sections of the site.</li>
          <li>Micro-sites and landing pages.</li>
          <li>Components, widgets, or re-usable modules.</li>
        </ul>
        <p>Basic rules for formatting CSS files:</p>
        <ul>
          <li>Use tabs, not spaces, to indent each property.</li>
          <li>Add two blank lines between sections and one blank line between blocks in a section.</li>
          <li>Each selector should be on its own line, ending in either a comma or an opening curly brace. Property-value pairs should be on their own line, with one tab of indentation and an ending semicolon. The closing brace should be flush left, using the same level of indentation as the opening selector.</li>
          <li>Use a new line for every selector and every declaration.</li>
          <li>Use a single space before the opening brace in a set of rules. </li>
          <li>Quote attribute values in selectors</li>
          <li>Use one level of indentation for each declaration.</li>
          <li>IDs: camelCase</li>
          <li>Classes: snake_case</li>
          <li>The closing brace of declaration goes in the same column as the first character of the set of rules.</li>
          <li>Use a single blank line between sets of rules.</li>
        </ul>
        <p>Inside sets of rules or style declarations: </p>
        <ul>
          <li>Add a single space between the property and value, for example: <code className="d-inline-block">prop: value; and not prop:value;</code>.</li>
          <li>Use double quotes for quoted values</li>
          <li>Always include a semi-colon at the end of the last declaration.</li>
          <li>Use shorthand if you can, like: <code className="d-inline-block">padding: 15px 0;</code> and not <code className="d-inline-block">padding: 15px 0px 15px 0px;</code></li>
          <li>When allowed, use 0 without units.</li>
        </ul>
        <img src={css1} alt="css image" />
        <h2>Properties</h2>
        <p>Similar to selectors, properties that are too specific will hinder the flexibility of the design. Less is more. Make sure you are not repeating styling or introducing fixed dimensions (when a fluid solution is more acceptable).</p>
        <ul>
          <li>Properties should be followed by a colon and a space.</li>
          <li>All properties and values should be lowercase, except for font names and vendor-specific properties.</li>
          <li>Use hex code for colors, or <code className="d-inline-block">rgba()</code> if opacity is needed. Avoid RGB format and uppercase, and shorten values when possible: <code className="d-inline-block">#fff</code> instead of <code  className="d-inline-block">#FFFFFF</code>.</li>
          <li>Use shorthand, except when overriding styles, for <code  className="d-inline-block">background</code>, <code  className="d-inline-block">border</code>, <code  className="d-inline-block">font</code>, <code  className="d-inline-block">list-style</code>, <code  className="d-inline-block">margin</code>, and <code  className="d-inline-block">padding</code> values as much as possible. </li>
        </ul>
        <img src={css3} alt="css image 3" />
        <h2>Vendor Prefixes</h2>
        <img src={css4} alt="css image 4" />
        <h2>Values</h2>
        <p>There are numerous ways to input values for properties. Follow the guidelines below to help us retain a high degree of consistency.</p>
        <ul>
          <li>Space before the value, after the colon.</li>
          <li>Do not pad parentheses with spaces.</li>
          <li>Always end in a semicolon.</li>
          <li>Use double quotes rather than single quotes, and only when needed, such as when a font name has a space or for the values of the <code  className="d-inline-block">content</code> property.</li>
          <li>Font weights should be defined using numeric values (e.g. <code  className="d-inline-block">400</code> instead of <code  className="d-inline-block">normal</code>, <code  className="d-inline-block">700</code> rather than <code  className="d-inline-block">bold</code>).</li>
          <li>0 values should not have units unless necessary, such as with <code  className="d-inline-block">transition-duration</code>.</li>
          <li>Line height should also be unit-less, unless necessary to be defined as a specific pixel value. This is more than just a style convention, but is worth mentioning here.</li>
          <li>Use a leading zero for decimal values, including in <code  className="d-inline-block">rgba()</code>.</li>
          <li>Multiple comma-separated values for one property should be separated by either a space or a newline. For better readability newlines should be used for lengthier multi-part values such as those for shorthand properties like <code  className="d-inline-block">box-shadow</code> and <code  className="d-inline-block">text-shadow</code>, including before the first value. Values should then be indented one level in from the property.</li>
          <li>Lists of values within a value, like within <code  className="d-inline-block">rgba()</code>, should be separated by a space.</li>
        </ul>
        <img src={css5} alt="css image 5" />
        <img src={css6} alt="css image 6" />
        <h2>Media Queries</h2>
        <p>Media queries allow us to gracefully degrade the DOM for different screen sizes. If you are adding any, be sure to test above and below the break-point you are targeting.</p>
        <ul>
          <li>It is generally advisable to keep media queries grouped by media at the bottom of the stylesheet.</li>
          <li>Rule sets for media queries should be indented one level in.</li>
        </ul>
        <p>Example of CyberMark media queries:</p>
        <pre className="wp-block-code language-html" tabindex="0"><code>@media only screen and (max-width : 1199px) &#10100;<br/>&#10101;</code></pre>
        <pre className="wp-block-code language-html" tabindex="0"><code>@media only screen and (max-width : 991px) &#10100;<br/>&#10101;<br/></code></pre>
        <pre className="wp-block-code language-html" tabindex="0"><code>@media only screen and (max-width : 768px) &#10100;<br/>&#10101;<br/></code></pre>
        <pre className="wp-block-code language-html" tabindex="0"><code>@media only screen and (max-width : 575px) &#10100;<br/>&#10101;<br/></code></pre>
        <pre className="wp-block-code language-html" tabindex="0"><code>@media only screen and (max-width : 480px) &#10100;<br/>&#10101;<br/></code></pre>

        <h2>Best Practices</h2>
        <p>Stylesheets tend to grow in length and complexity, and as they grow the chance of redundancy increases. By following some best practices we can help our CSS maintain focus and flexibility as it evolves:</p>
        <ul>
          <li>If you are attempting to fix an issue, attempt to remove code before adding more.</li>
          <li>Magic Numbers are unlucky. These are numbers that are used as quick fixes on a one-off basis. Example: <code  className="d-inline-block">.box &#10100; margin-top: 37px &#10101;</code>.</li>
          <li>DOM will change over time, target the element you want to use as opposed to “finding it” through its parents. Example: Use <code  className="d-inline-block">.highlight</code> on the element as opposed to <code  className="d-inline-block">.highlight a</code> (where the selector is on the parent)</li>
          <li>Know when to use the <code  className="d-inline-block">height</code> property. It should be used when you are including outside elements (such as images). Otherwise use <code  className="d-inline-block">line-height</code> for more flexibility.</li>
          <li>Do not restate default property and value combinations (for instance <code  className="d-inline-block">display: block;</code> on block-level elements).</li>
        </ul>
      </div>
    );
  };
    
  export default CSS;