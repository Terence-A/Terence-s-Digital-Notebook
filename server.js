// add Dependencies and modules
const express = require("express");
const port = process.env.PORT || 3001;
const path = require("path");
const app = express();
const fs = require("fs");
let data = require("./db/db.json");
const { v4: uuid } = require("uuid");
// console.log(data);

// use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//get req takes you to the notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// read api/notes  from db.json file
app.get("/api/notes", (req, res) => {
  fs.readFileSync("data");
  res.json(data);
});

// post api/notes, add to db.json along with id
app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;
  data.push({ title, text, id: uuid() });
  fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
  res.json(data);
});

// delete record by data id in db.json
app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((d) => d.id !== id);
  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.json(data);
});

//get req takes you to home page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// listen for server port
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
