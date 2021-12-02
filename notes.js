const getNote = (newTitle, newContent) => {
    const data = { title: newTitle, content: newContent }
        fetch('http://localhost:3000/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
        })  
        .then(response => response.json())
        .then(data => {
        console.log('New post:', data);
        });
}

module.exports = getNote;