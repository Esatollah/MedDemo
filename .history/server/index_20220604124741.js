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
    try {
        const body = req.body;
        console.log(body.fname)
        await pool.query(`Insert into Bestellungen (ODate, Anmerkung, Vorname, Nachname, vpin, vbday) 
            values ($1, $2, $3, $4, $5, $6)`,['1994-05-11', req.body.anmerkungen, req.body.fname, req.body.lname, req.body.vpin, req.body.vbday])

        for (let i =0; i<req.body.drugs.length; i++)
        {
            console.log(i);
        }

    } catch (err) {
        console.error(err)
    }
})

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});