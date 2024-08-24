import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML =
  /*html*/
  `

  <main id="first_border"></main>
  <br>
  <hr>
  <section id="language-container">
  <a href="https://vitejs.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  </section>
  
  
  `;

setupCounter(document.querySelector("#counter"));
