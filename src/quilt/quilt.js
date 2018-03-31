import hst from "../util/math.js";

const buildQuilt = () => {

  // form/doc input
  let startSize = document.querySelector("#block-size").value;
  let hstElem = document.querySelector("#hst-method-type").value;
  let resultParent = document.querySelector("#hst-results");
  let message = document.createElement("p");

  // calculating the results
  let result = hst.doMath( parseInt(startSize), parseInt(hstElem));
  let result2Frac = hst.toFraction(result);

  // presenting the results
  resultParent.innerHTML = "";
  message.innerHTML = result2Frac + "&quot;";
  resultParent.appendChild(message);
}

export default { buildQuilt };
