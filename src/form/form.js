import selector from "../util/select.js";

/* user input for quilt */
let blocksize = document.getElementById("block-size");
let quiltsize = document.getElementById("quilt-size");
let hstMethodType = document.getElementById("hst-method-type");
let blockSizeFrac = document.getElementById("block-size-frac");

/* set up quilt sizes */
let quiltsizes = [
  { text: "Twin", value: [63, 87] },
  { text: "Twin XL", value: [63, 92] },
  { text: "Full", value: [ 78, 87] },
  { text: "Queen", value: [ 84, 92], selected: true },
  { text: "King", value: [102, 92] },
  { text: "California King", value: [ 96,96] }
];

/* HST method */
let hstMethods = [
  { text: "Make 2 HSTs", value: 2 },
  { text: "Make 4 HSTs", value: 4, selected: true },
  { text: "Make 8 HSTs", value: 8 }
]

/* Clean Fraction */
let fractions = [
  { text: "", value: "0" },
  { text: ".0625", value: "1/16" },
  { text: ".125", value: "1/8" },
  { text: ".1875", value: "3/16" },
  { text: ".250", value: "1/4" },
  { text: ".3125", value: "5/16" },
  { text: ".375", value: "3/8" },
  { text: ".4375", value: "7/16" },
  { text: ".5", value: "1/2" },
  { text: ".5625", value: "9/16" },
  { text: ".625", value: "5/8" },
  { text: ".6875", value: "11/16" },
  { text: ".75", value: "3/4" },
  { text: ".8125", value: "13/16" },
  { text: ".875", value: "7/8" },
  { text: ".9375", value: "15/16" }
]

const buildForm = () => {
  selector.build(quiltsizes, quiltsize);
  selector.build(hstMethods, hstMethodType);
  selector.build(fractions, blockSizeFrac);
}

export default { buildForm };
