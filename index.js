// localhost:8080 - should take users the index.html

// localhost:8080/about - should take users to about.html

// localhost:8080/contact-me - should take users to contact-me.html

// 404.html should display any time the user tries to got o a page not listed above

const http = require("http");
const fs = require("fs");

// req - has info about the request, like requested url. so if they went about page we know from req.request types like GET req, POST req, DEL req among other things
// req.url, req.method
// res - object we use to send reponse to user
const server = http.createServer((req, res) => {
  // this function fires everyime a request comes in and sends request the homepage

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path = "./index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = "./about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path = "./contact-me.html";
      res.statusCode = 200;
      break;
    //this is a redirect.
    case "/contact-us":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      res.end();
    default:
      path = "./404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      //end ends the repsonse sending all the code to the browser
      res.end(data);
    }
  });
});

//8080 - the port number, you could put any in. localhost- the host name, could could put any in but the default value is itself localhost
server.listen(8080, "localhost", () => {
  //this function fires when we start listening
  console.log("listening for requests on port 8080");
});
