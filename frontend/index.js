const newNote = require('./notes');
const updateView = require('./updateView');

const button = document.querySelector('#submit-note');

button.addEventListener("click", () => {
    let newTitle = updateView.title;
    let newContent = updateView.content;
    newNote(newTitle, newContent, (data) => {
        updateView(data);
    })
});

