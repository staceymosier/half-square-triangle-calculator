import form from './js/form/form-select-lists';
import quilt from './js/quilt/quilt.js';

form.buildForm();
let button = document.querySelector("#hst-go");
button.addEventListener("click", ()=> {
  quilt.buildQuilt();
});
