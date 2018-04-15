import form from './form/form.js';
import quilt from './quilt/quilt.js';
import playground from './playground/playground.js';

form.buildForm();

let button = document.querySelector("#hst-go");
button.addEventListener("click", ()=> {
  quilt.buildQuilt();
});

playground.play();
