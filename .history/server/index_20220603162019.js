const express = require("express");
const app = express();
const pool = require("./db/index.js")
const cors = require("cors");
app.use(cors());
app.use(express.json())

//Backend Routes

// drug query

app.get("/api", async (req, res) => {
    try {
        const {drugsearch} = req.query;

        const result = await pool.query(`Select * from medikamente where name ilike $1 LIMIT 75`, [`${drugsearch}%`])
    res.json({
        meds: result.rows
    })
    } catch (e) {
        console.error(e)
    }
})

// Send order
app.post("/api", async (req, res) => {
    console.log("this is body")
    console.log(req.body)

    res.json({
        "gay":"lord"
    })
})

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});