const express = require("express");
const port = process.env.PORT || 3001;
const path = require("path");
const app = express();
const fs = require("fs");
const data = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//get req takes you to the notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// app.get("/api/notes", (req, res) => {});

app.get("/api/notes", (req, res) => {
  console.log(data);
});

app.post("/api/notes", (req, res) => {
  res.send("response sent");
  //   res.readFile(path.join(__dirname, "db/db.json"));
  //   fs.writeFile("/db/db.json", "utf8");
});

//get req takes you to home page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
