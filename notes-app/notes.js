const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
  saveNotes(notesToKeep);
};

const listNotes = () => {
  console.log(chalk.inverse("YOUR NOTES"));
  const notes = loadNotes();
  notes.forEach((notes) => {
    console.log(notes.title);
  });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.blue.inverse(note.title));
        console.log(chalk.blue.inverse(note.body));
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};
