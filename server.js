const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Running on PORT ${process.env.PORT || 3000}`)
);
