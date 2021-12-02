const updateView = (newTitle, newContent) => {
    let title = document.querySelector('#new-note-title').innerText = newTitle.full_name;
    let content = document.querySelector('#new-note-content').innerText = newContent.description;
}

module.exports = updateView;