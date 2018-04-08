import form from './form/form.js';
import quilt from './quilt/quilt.js';
import toggle from './util/toggler.js';

form.buildForm();

let button = document.querySelector("#hst-go");
button.addEventListener("click", ()=> {
  quilt.buildQuilt();
});

let collapseElem = document.querySelector(".hst-instructions");
let collapseParent = document.querySelector("#hst-instructions");
collapseElem.addEventListener("click", ()=> {
   toggle.toggleState(collapseElem, "on", "off");
   toggle.toggleState(collapseParent, "open", "closed");
});
