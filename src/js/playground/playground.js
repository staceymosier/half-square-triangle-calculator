import {html, render} from 'lit-html';

const playAreaTemplate = () => html`<div>This is the playground area template</div>`;

let playarea = document.querySelector('#playground-area');

const play = () => {
  render(playAreaTemplate(), playarea);
}

export default { play };
