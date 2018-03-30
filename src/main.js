import form from './form/form.js';
import quilt from './quilt/quilt.js';

form.buildForm();

let button = document.querySelector("#hst-go");
button.addEventListener("click", ()=> {
  console.log('Updating quilt!');
  quilt.buildQuilt();
});
