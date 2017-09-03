const express = require("express");
const app = express();
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

app.listen(3000);

const fetchRequest = require("./request");

app.get("/", (req, res, next) => {
    url = "http://www.androidauthority.com";
    fetchRequest.scraper(url);
    setTimeout(() => {
        res.send("<center> <h1> Android Authority </h1> </center>");
    }, 10000);
});

app.get("/read", (req, res, next) => {
    res.sendFile(__dirname + "/news.html");
});
