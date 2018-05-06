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
  { text: "0", value: "" },
  { text: "1/16", value: ".0625" },
  { text: "1/8", value: ".125" },
  { text: "3/16", value: ".1875" },
  { text: "1/4", value: ".250" },
  { text: "5/16", value: ".3125" },
  { text: "3/8", value: ".375" },
  { text: "7/16", value: ".4375" },
  { text: "1/2", value: ".5" },
  { text: "9/16", value: ".5625" },
  { text: "5/8", value: ".625" },
  { text: "11/16", value: ".6875" },
  { text: "3/4", value: ".75" },
  { text: "13/16", value: ".8125" },
  { text: "7/8", value: ".875" },
  { text: "15/16", value: ".9375" },
]

const buildForm = () => {
  selector.build(quiltsizes, quiltsize);
  selector.build(hstMethods, hstMethodType);
  selector.build(fractions, blockSizeFrac);
}

export default { buildForm };
