const chalk = require("chalk");
const yargs = require('yargs');
const getNotes = require("./notes");

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("Listing notes!");
  },
});

yargs.command({
  command: "read",
  describe: "Read note",
  handler: function () {
    console.log("Read a note!");
  },
});

console.log(yargs.argv);
