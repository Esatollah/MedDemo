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

        const result = await pool.query(`Select * from medikamente where name ilike $1`, [`${drugsearch}%`])
        console.log(result.rows)
        console.log("here")
    res.json({
        meds: result.rows
    })
    } catch (e) {
        console.error(e)
    }
})

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});