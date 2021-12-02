const makeNewNote = (title, content, callback) => {
    const data = { title: title, content: content }
    fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({'title':`${title}`, 'content': `${content}`})
    })
    .then(response => response.json())
    .then(data => {
      console.log('New post:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  module.exports = makeNewNote;
