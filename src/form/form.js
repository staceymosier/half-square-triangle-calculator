import selector from "../util/select.js";

/* user input for quilt */
let blocksize = document.getElementById("block-size");
let quiltsize = document.getElementById("quilt-size");
let hstMethodType = document.getElementById("hst-method-type");

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

const buildForm = () => {
  selector.build(quiltsizes, quiltsize);
  selector.build(hstMethods, hstMethodType);
}

export default { buildForm };
