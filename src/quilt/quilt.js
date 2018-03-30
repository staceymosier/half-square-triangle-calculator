import hst from "../util/math.js";

const buildQuilt = () => {

  /* elems */
  let startBlockSize = document.getElementById("block-size").value;
  let hstElem = document.getElementById("hst-method-type").value;
  let resultParent = document.getElementById("results");

  /* math */
  let result = hst.doMath( parseInt(startBlockSize), parseInt(hstElem));
  let result2Frac = hst.toFraction(result);

  /* reset previous messages */
  resultParent.innerHTML = "";

  /* results */
  var message = document.createElement("p");
  message.innerHTML = "Your block finished size is " + result2Frac + " &quot;.";
  resultParent.appendChild(message);
}

export default { buildQuilt };
