const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

exports.scraper = (url) => {
    request(url, (error, response, data) => {
        if (error) {
            console.log(error);
        } else {
            const $ = cheerio.load(data);
            const articleTitle = $('.article-title');
            let titleArray = [];
            articleTitle.each(function () {
                titleArray.push($(this).text());
            });
            const titles = "<center><h3>" + titleArray.join('<br><br>') + "<center><h3>";
            fs.writeFile("news.html", titles, (error) => {
                console.log(error);
            });
        }
    });
}