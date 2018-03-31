import hst from "../util/math.js";

const buildQuilt = () => {

  /* elems */
  let startBlockSize = document.querySelector("#block-size").value;
  let hstElem = document.querySelector("#hst-method-type").value;
  let resultParent = document.querySelector("#results");
  let message = document.createElement("p");

  /* reset previous messages */
  resultParent.innerHTML = "";

  if ( typeof hstElem == NaN | typeof startBlockSize == NaN ) {
    message.innerHTML = "Error occurred. Please check the form.";
  } else {
    let result = hst.doMath( parseInt(startBlockSize), parseInt(hstElem));
    let result2Frac = hst.toFraction(result);
    message.innerHTML = result2Frac + "&quot;";
  }

  resultParent.appendChild(message);
}

export default { buildQuilt };
