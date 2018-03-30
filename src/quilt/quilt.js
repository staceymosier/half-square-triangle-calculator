import hst from "../util/math.js";

let rows = document.getElementById("row-count").value;
let bordersize = document.getElementById("border-size").value;
let columns = document.getElementById("column-count").value;
let blocksize = document.getElementById("block-size").value;
let quiltsize = document.getElementById("quilt-size").value;
let hstMethodType = document.getElementById("hst-method-type");
let hstMethodTypeValue = hstMethodType.options[e.selectedIndex].value;
let resultElem = document.getElementById("results");

const buildQuilt = () => {
  let result = hst.doMath(blocksize, hstMethodTypeValue);
  resultElem.innerHTML = "Your block starter size is " + result + ".";
}

// result
// let finish = 5;
// let starterSize = returnStarterSize(finish, 2);
// resultElem.innerHTML =  "To make 2 HSTs, your starter block size is " + starterSize + "\"";


export default { buildQuilt };
