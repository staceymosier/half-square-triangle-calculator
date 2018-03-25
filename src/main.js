var SystemJS = require('systemjs');

SystemJS.import('./app/input.js').then(function (input) {
  console.log('loaded input');
});

SystemJS.import('./app/draw.js').then(function (draw) {
  console.log('loaded draw');
});

SystemJS.import('./app/data.js').then(function (data) {
  console.log('loaded data');
});

/*
buildList(qsizes, qsizeList);
*/
