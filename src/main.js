// https://use.fontawesome.com/releases/v5.0.6/js/all.js
// ga UA-42436380-3
// https://www.googletagmanager.com/gtag/js?id=UA-42436380-3

import form from './js/form/form-select-lists';
import quilt from './js/quilt/quilt.js';

form.buildForm();
let button = document.querySelector("#hst-go");
button.addEventListener("click", ()=> {
  quilt.buildQuilt();
});
