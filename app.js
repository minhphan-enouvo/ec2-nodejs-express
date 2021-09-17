const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Minh Phan</h1>");
});

app.get("/products", (req, res) => {
  res.send([{ id: 1, name: "product_1", id: 2, name: "product_2" }]);
});

app.listen(port);
