import _ from 'lodash';
import greetings from './robot.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
document.write(greetings("Affirmative", "Dave"));
