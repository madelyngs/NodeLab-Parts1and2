const fs = require("fs");
const path = require("path");
const request = require("request");
let alien = [];
let dataPath = path.join(__dirname, "./popular-articles.json");
request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) throw err;

  JSON.parse(body).data.children.forEach(ween => {
    alien.push({
      author: ween.data.author,
      url: ween.data.url,
      title: ween.data.title
    });
    console.log(alien);
  });
  fs.writeFile(dataPath, JSON.stringify(alien), err => {
    if (err) throw err;
    console.log("Got it");
  });
});
