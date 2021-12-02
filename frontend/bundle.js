(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notes.js
  var require_notes = __commonJS({
    "notes.js"(exports, module) {
      var getNotes = (newTitle, newContent, callback) => {
        fetch("http://127.0.0.1:5500/frontend/index.html", {
          method: "POST",
          body: JSON.stringify({
            "title": `${newTitle}`,
            "content": `${newContent}`
          })
        }).then((submit) => submit.json()).then((callback2) => {
          console.log("New post:", callback2);
        });
      };
      module.exports = getNotes;
    }
  });

  // updateView.js
  var require_updateView = __commonJS({
    "updateView.js"(exports, module) {
      var updateView2 = (newTitle, newContent) => {
        let title = document.querySelector("#new-note-title").innerText = newTitle.full_name;
        let content = document.querySelector("#new-note-content").innerText = newContent.description;
      };
      module.exports = updateView2;
    }
  });

  // index.js
  var newNote = require_notes();
  var updateView = require_updateView();
  var button = document.querySelector("#submit-note");
  button.addEventListener("click", () => {
    let newTitle = updateView.title;
    let newContent = updateView.content;
    newNote(newTitle, newContent, (data) => {
      updateView(data);
    });
  });
})();
