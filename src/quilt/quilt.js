import hst from "../util/math.js";

function round(value, decimals) {
  // http://www.jacklmoore.com/notes/rounding-in-javascript/
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// reference
// 1/16, 1/8, 3/16, 1/4, 5/16, 3/8, 7/16, 1/2
// 9/16, 5/8, 11/16, 3/4, 13/16, 7/8, 15/16, 1

const buildQuilt = () => {

  /* elems */
  let startBlockSize = document.getElementById("block-size").value;
  let hstElem = document.getElementById("hst-method-type").value;
  let resultParent = document.getElementById("results");

  /* math */
  let result = hst.doMath( parseInt(startBlockSize), parseInt(hstElem));
  let rounded = round(result, 3);
  let result2Frac = hst.toFraction(rounded);

  /* reset previous messages */
  resultParent.innerHTML = "";

  /* results */
  var message = document.createElement("p");
  message.innerHTML = result2Frac + "&quot; (" + result + ")";
  resultParent.appendChild(message);
}

export default { buildQuilt };
