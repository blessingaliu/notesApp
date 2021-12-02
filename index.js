const makeNewNote = require('./makeNewNote');

const button = document.querySelector('#click-btn');
const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');

button.addEventListener('click', () => {

  makeNewNote(title.value, content.value);

});