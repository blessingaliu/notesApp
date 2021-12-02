(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notes.js
  var require_notes = __commonJS({
    "notes.js"(exports, module) {
      var getNote2 = (newTitle2, newContent2) => {
        const data = { title: newTitle2, content: newContent2 };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ data })
        }).then((response) => response.json()).then((data2) => {
          console.log("New post:", data2);
        });
      };
      module.exports = getNote2;
    }
  });

  // index.js
  var getNotes = require_notes();
  var getNote = require_notes();
  var newTitle = document.querySelector("#new-note-title");
  var newContent = document.querySelector("#new-note-content");
  var button = document.querySelector("#submit-note");
  button.addEventListener("click", () => {
    getNote(newTitle.value, newContent.value);
  });
})();
