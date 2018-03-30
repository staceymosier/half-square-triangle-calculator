import n2f from 'num2fraction';
import hst from "../util/math.js";

let rows = document.getElementById("row-count").value;
let bordersize = document.getElementById("border-size").value;
let columns = document.getElementById("column-count").value;
let blocksize = document.getElementById("block-size").value;
let quiltsize = document.getElementById("quilt-size").value;
let hstElem = document.getElementById("hst-method-type");
let resultElem = document.getElementById("results");

const buildQuilt = () => {
  let result = hst.doMath(blocksize, 2);
  let whole = Math.floor(result);
  let decimal = n2f(result - whole);
  let answer = whole + ' ' + decimal;
  resultElem.innerHTML = "Your block finished size is " + answer + "&quot;.";
}

// result
// let finish = 5;
// let starterSize = returnStarterSize(finish, 2);
// resultElem.innerHTML =  "To make 2 HSTs, your starter block size is " + starterSize + "\"";


export default { buildQuilt };
