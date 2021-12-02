const getNotes = require('./notes');
const getNote = require('./notes');

const newTitle = document.querySelector('#new-note-title')
const newContent = document.querySelector('#new-note-content')

const button = document.querySelector('#submit-note');

button.addEventListener("click", () => {
    getNote(newTitle.value, newContent.value);
});

