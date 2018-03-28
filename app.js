
/* populate select list with default lists */
function buildList(arr, parent){
  arr.forEach(option =>
    parent.add(
      new Option(option.text, option.value, option.selected)
    )
  );
}


function returnStarterSize(finish, hstmethod){

  if ( hstmethod === 2 ) {
    // Traditional: Add ⅞" to the finished size you want. The fraction ⅞" translates to 0.875.
    return finish + 0.875;
  }

  if ( hstmethod === 4 ) {
    // Alternative: To make 4 HST units
    // note: To figure out the math, divide the unfinished HST size by 0.64.
    return (0.7071 * finish) - 0.3535;
  }

  if ( hstmethod === 8 ){
    // Octo-Awesome Add .0875 and double it
    return (finish + 0.877) * 2;
  }

  return null;
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
let resultElem = document.getElementById("results");

// result
let finish = 5;
let starterSize = returnStarterSize(finish, 2);
resultElem.innerHTML =  "To make 2 HSTs, your starter block size is " + starterSize + "\"";
