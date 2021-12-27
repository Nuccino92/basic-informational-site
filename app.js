const express = require("express");

const app = express();

// listen for requests, also returns instance of a server like http.createServer in node
app.listen(8080);

app.get("/", (req, res) => {
  //infers things such as header/status code so we dont need to manually set them
  //   res.send("<p>home page</p>");
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //infers things such as header/status code so we dont need to manually set them
  //   res.send("<p>about page</p>");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  //infers things such as header/status code so we dont need to manually set them
  //   res.send("<p>about page</p>");
  res.sendFile("./contact-me.html", { root: __dirname });
});

// redirects
app.get("/contact-us", (req, res) => {
  res.redirect("/contact");
});

// 404 page
//use fires for every request for server, but only if it reaches this point. So we put this at the bottom.
app.use((req, res) => {
  // we have to add the status method with 404 or else it will have a status of 300 indicating that everything is fine.
  // so for this we must manually set the status
  res.status(404).sendFile("./404.html", { root: __dirname });
});

// to run server, in terminal: nodemon app.js
