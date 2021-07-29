// const http = require("http");
const express = require("express");

const server = express();

const notes = [
  "I want to sleep",
  "I want to eat",
  "I want to make money",
  "I want to rest",
  "I want to buy ferarri",
  "I want to buy shawarma and dash a beggaar",
];

server.get("/", (req, res) => {
  // res.send({ name: "First App", message: "I'm rocking!!!" });
  res.send("<h1>Hello Bidmus</h1>");
});

server.get("/api/notes", (req, res) => {
  res.send({
    notes,
    total: notes.length,
  });
});

server.get("/api/notes/:index", (req, res) => {
  const index = parseInt(req.params.index);
  res.send(notes[index]);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
