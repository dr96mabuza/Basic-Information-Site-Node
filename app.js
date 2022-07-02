#!/usr/bin/env node

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "/index.html"),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    );
  } else if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "/about.html"),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    );
  } else if (req.url === "/contact") {
    fs.readFile(
      path.join(__dirname, "public", "/contact-me.html"),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    );
  } else {
    fs.readFile(
      path.join(__dirname, "public", "/404.html"),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    );
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
