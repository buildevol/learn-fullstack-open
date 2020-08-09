const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://thefullstackopen:${password}@nodetutorials.2otpd.mongodb.net/thefullstackopen?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "I love you",
//   date: new Date(),
//   important: true,
// });

// note.save().then((result) => {
//   console.log("Note saved");
//   mongoose.connection.close();
// });

Note.find({ important: true }).then((res) => {
  res.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
