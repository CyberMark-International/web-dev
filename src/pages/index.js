import React from 'react';
  
const Home = () => {
  return (
    <div>
      <h2>CyberMark Web Development Standards </h2>
        <p>This document contains the guidelines and best practices for the front-end web development team at CyberMark.  </p>
        <p>Each item here represents either: </p>
        <ol>
            <li>A reminder to follow existing standards or industry conventions.</li> 
            <li>Guidance on what constitutes professional patterns and organization.</li> 
            <li>A decision we've made favoring one method over its alternatives. </li>
        </ol>
        <p>What this document is not is a series of explanations as to how front-end technologies work; a basic familiarity is assumed. It also does not provide evaluations of the pros and cons of various alternatives unless there is common confusion about which option is best; when appropriate we pick what we consider to be the best solutions and present them. Issues that don't yet have a clear solution are considered flexible and may or may not be listed. </p>
        <h3>Pillars of Front-end Development </h3>
        <p>Whenever possible, the front-end technology solutions produced shall adhere to industry best practices honoring as strict a separation of concerns as possible between: </p>
        <ol>
            <li>Semantic HyperText Markup Language (HTML) for structure.</li>
            <li>Cascading Style Sheets (CSS) for presentation.</li>
            <li>JavaScript (JS) for behavior and interaction.</li>
        </ol>
        <h3>General Standards </h3>
        <p>For any project: </p>
        <ol>
            <li>Consistency and conventions between team members is paramount. </li>
            <li>Solutions should be as simple and clear as possible. </li>
            <li>Solutions should serve a specific purpose. </li>
            <li>Clever code does not mean good code; readability is critical. </li> 
        </ol>
        <p>A key hallmark of professional code includes a notion that while we are writing code that must reach a desired goal, we are also creating code that must be read and understood by others. </p>
        <h3>Code Consistency </h3>
        <p>Usage of the same patterns is critical between team members so as to never cause confusion. </p>
        <p>It's worth establishing conventions at the project start or enabling automatic settings in the build or editor environments that might enforce particular rules. </p>
    
    </div>
  );
};
  
export default Home;