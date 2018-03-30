const doMath = (finish, hstmethod) => {

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

  return 0;
}

export default { doMath };
