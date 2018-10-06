import hst from "../util/math.js";

const calculateSquares = (startSize, hstElem, calcType) => {
  // calculating the results
  let result = hst.doMath( parseFloat(startSize), parseInt(hstElem), calcType);
  let result2Frac = hst.toFraction(result);
  return result2Frac;
}

const writeResults = (hstElem, result, resultParent, calcType, totalStartSize) => {
  // presenting the results
  let message = document.createElement("p");
  let value = "<span class=\"math tag is-size-4\">" + result + "&quot;</span>";
  let startValue = "<span class=\"math tag is-size-4\">" + hst.toFraction(totalStartSize) + "&quot;</span>"
  resultParent.innerHTML = "";
  if (calcType === "start") {
    message.innerHTML = "You will make [" + parseInt(hstElem) + "] " + value + " blocks<br/> when you start with " + startValue + " blocks.";
  } else {
    message.innerHTML = "You will need to start at " + value + "<br/> to make [" + parseInt(hstElem) + "] " + startValue + " blocks.";
  }
  resultParent.appendChild(message);
  return;
}

const buildQuilt = () => {
  let calcType = document.querySelector('input[name="calc-direction"]:checked').value;
  let startSize = document.querySelector('input[name="block-size"]').value;
  let startSizeFrac = document.querySelector('select[name="block-size-frac"]').value;
  let totalStartSize = startSize + startSizeFrac;
  let hstElem = document.querySelector("#hst-method-type").value;
  let resultParent = document.querySelector("#hst-results");
  let result = calculateSquares( totalStartSize, hstElem, calcType);
  writeResults(hstElem, result, resultParent, calcType, totalStartSize);
}

export default { buildQuilt };
