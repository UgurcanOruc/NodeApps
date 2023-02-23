const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ugurcan:15935713579@cluster0.tggomuo.mongodb.net/task-manager-api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);