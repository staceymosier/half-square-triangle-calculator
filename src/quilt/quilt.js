import hst from "../util/math.js";

const calculateSquares = (startSize, hstElem, calcType) => {
  // calculating the results
  let result = hst.doMath( parseFloat(startSize), parseInt(hstElem), calcType);
  let result2Frac = hst.toFraction(result);
  return result2Frac;
}

const writeResults = (hstElem, result, resultParent, calcType) => {
  // presenting the results
  let message = document.createElement("p");
  let value = parseInt(hstElem) + " <strong>" + result + "&quot;</strong>";
  resultParent.innerHTML = "";
  if (calcType === "start") {
    message.innerHTML = "You will make " + value + "blocks.";
  } else {
    message.innerHTML = "You will need to start at " + value + " to make your blocks.";
  }
  resultParent.appendChild(message);
  return;
}

const buildQuilt = () => {
  let calcType = document.querySelector('input[name="calc-direction"]:checked').value;
  let startSize = document.querySelector("#block-size").value;
  let hstElem = document.querySelector("#hst-method-type").value;
  let resultParent = document.querySelector("#hst-results");
  let result = calculateSquares(startSize, hstElem, calcType);
  writeResults(hstElem, result, resultParent, calcType);
}

export default { buildQuilt };
