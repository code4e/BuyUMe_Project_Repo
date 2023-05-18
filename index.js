const express = require("express");
const port = 3010;
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/mongoose');

app.use("/", require("./routes/index"));

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
