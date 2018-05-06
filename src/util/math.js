import n2f from 'num2fraction';

const cleanFractions = [
  .0625, .125, .1875,    // 1/16, 1/8, 3/16,
  .250, .3125, .375,     // 1/4, 5/16, 3/8,
  .4375, .5, .5625,       // 7/16, 1/2, 9/16
  .625, .6875, .75,      // 5/8, 11/16, 3/4,
  .8125, .875, .9375, 1   // 13/16, 7/8, 15/16, 1
];

const round = (value, decimals) => {
  // http://www.jacklmoore.com/notes/rounding-in-javascript/
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

const doMath = (startsize, hstmethod, calcType) => {
  if ( hstmethod === 2 ) {
    // Traditional: Add ⅞" to the finished size you want. The fraction ⅞" translates to 0.875.
    if (calcType === "start" ) {
      return startsize - 0.875;
    } else {
      return startsize + 0.875;
    }
  }

  if ( hstmethod === 4 ) {
    // Alternative: To make 4 HST units
    // note: To figure out the math, divide the unfinished HST size by 0.64.
    if (calcType === "start" ) {
      return (0.7071 * startsize) - 0.3535;
    } else {
      return startsize * 0.64;
    }
  }

  if ( hstmethod === 8 ){
    // Octo-Awesome Add .0875 and double it
    if (calcType === "start") {
      return (startsize / 2) - 0.875;
    } else {
      return (startsize * 2) + 0.875;
    }
  }

  return 0;
};

const toFraction = (size) => {
  let whole = Math.floor(size);
  let decimal = round(size - whole, 3);
  let matches = cleanFractions.filter(value => value <= decimal);
  let match = (matches.length == 0 ? 0 : matches[matches.length - 1]);
  let answer = whole + ' ' + n2f(match);   console.log(n2f(match));
  return answer;
};

export default { round, doMath, toFraction };
