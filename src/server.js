const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const articlesEndpoints = [];

request.get(
  "https://api.smarkets.com/v3/events/?state=upcoming&type=",
  (err, res) => {
    const regex = new RegExp(/'(.*?)'/g);
    const values = res.body.match(regex);
    values.map(item =>
      articlesEndpoints.push(item.replace(/[^A-Z_\d\s]/gi, ""))
    );

    articlesEndpoints.forEach(name => {
      app.get(`/${name}`, (req, res, next) => {
        request(
          `https://api.smarkets.com/v3/events/?state=upcoming&type=${name}`,
          (error, response, body) => {
            if (!error && response.statusCode == 200) {
              res.send({ data: JSON.parse(body) });
            }
          }
        );
      });
    });
  }
);

app.get("/events", (req, res, next) => {
  res.send({ data: articlesEndpoints });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
