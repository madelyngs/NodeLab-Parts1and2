const path = require("path");
const fs = require("fs");
let dataPath = path.join(__dirname, "../chirps.json");

let chirps = [
  {
    name: "Timothy Timmins",
    message: "srum daddy"
  },
  {
    name: "",
    message: "Are you ready for that PTA"
  },
  {
    name: "Phyliss",
    message: "stfu"
  },

  {
    name: "junie",
    message: "mow me"
  },

  {
    name: "gurbinfoxxxy12",
    message: "hello foxxy"
  }
];

fs.writeFile(dataPath, JSON.stringify(chirps), err => {
  if (err) throw err;
  console.log("Got it");
})
chirps.forEach(chirp=> console.log(chirp))
