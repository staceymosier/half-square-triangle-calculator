
/* populate select list with default lists */
function buildList(arr, parent){
  arr.forEach(option =>
    parent.add(
      new Option(option.text, option.value, option.selected)
    )
  );
}

/* set up quilt size */
let quiltsizes = [
  { text: "Twin", value: [63, 87] },
  { text: "Twin XL", value: [63, 92] },
  { text: "Full", value: [ 78, 87] },
  { text: "Queen", value: [ 84, 92], selected: true },
  { text: "King", value: [102, 92] },
  { text: "California King", value: [ 96,96] }
];

/* method to make 2 or 4 HST */
let hstMethods = [
  { text: "Make 2 HSTs with 2 blocks", value: 2 },
  { text: "Make 4 HSTs with 2 blocks", value: 4 },
  { text: "Make 8 HSTs with 2 blocks", value: 8 }
]

/* user input for quilt */
let blocksize = document.getElementById("block-size");
let quiltsize = document.getElementById("quilt-size");
let hstMethodType = document.getElementById("hst-method-type");
let bordersize = document.getElementById("border-size");
let columns = document.getElementById("column-count");
let rows = document.getElementById("row-count");

// Traditional: Add ⅞" to the finished size you want. The fraction ⅞" translates to 0.875.
// calculating block size
let hst2_finished;
let hs2_total = hs2_finished + 0.875;

// Alternative: To make 4 HST units
let hst4_finished;
let hs4_total = (0.7071 * hs4_finished) - 0.3535;
