const express = require("express");
const app = express();
const pool = require("./db/index.js")
app.use(cors());
app.use(express.json())


app.listen(5000, () => {
    console.log("Listening on Port 5000");
});