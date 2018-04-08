/* collapse section */
const toggleState = (elem, stateA, stateB) => {
  let state = elem.dataset.state;
  if (state === stateA) {
    elem.dataset.state = stateB;
  } else {
    elem.dataset.state = stateA;
  }
}

export default { toggleState };
