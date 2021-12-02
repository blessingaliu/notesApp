// const newNote = (newTitle, newContent) => {
//     const newDiv = document.createElement('div')
//     const newId = document.querySelectorAll('.post').length + 1;

//     newDiv.innerText = `${newTitle}: ${newContent}`;
//     newDiv.className = 'post';
//     newDiv.id = 'post-' + newId;
//     document.body.appendChild(newDiv);
// };

const getNotes = (newTitle, newContent, callback) => {
 fetch('http://127.0.0.1:5500/frontend/index.html', {
        method: 'POST',
        body: JSON.stringify({
            "title": `${newTitle}`,
            "content": `${newContent}`
        }),
})  .then(submit => submit.json())
    .then(callback => {
       console.log('New post:', callback);
   });
}

module.exports = getNotes;