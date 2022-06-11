const express = require("express");
const app = express();
const pool = require("./db/index.js")
const cors = require("cors");
app.use(cors());
app.use(express.json())

//Backend Routes

// drug query

app.post("/api", async(req, res) => {
    try {
        res.json(req.body);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});