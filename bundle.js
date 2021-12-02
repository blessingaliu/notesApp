(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // makeNewNote.js
  var require_makeNewNote = __commonJS({
    "makeNewNote.js"(exports, module) {
      var makeNewNote2 = (title2, content2, callback) => {
        const data = { "title": `${title2}`, "content": `${content2}` };
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log("New post:", data2);
        }).catch((error) => {
          console.error("Error:", error);
        });
      };
      module.exports = makeNewNote2;
    }
  });

  // index.js
  var makeNewNote = require_makeNewNote();
  var button = document.querySelector("#click-btn");
  var title = document.querySelector("#note-title");
  var content = document.querySelector("#note-content");
  button.addEventListener("click", () => {
    makeNewNote(title.value, content.value);
  });
})();
