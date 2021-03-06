const express = require("express");
const app = express();
const pool = require("./db/index.js")
const cors = require("cors");
require("dotenv").config();
const path = require("path");


app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production")
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 5000;
//Backend Routes

// drug query

app.get("/api", async (req, res) => {
    try {
        const { drugsearch } = req.query;

        const result = await pool.query(
            `Select * from medikamente where name ilike $1 LIMIT 75`, [`${drugsearch}%`])
        res.status(200).json({
            meds: result.rows
        })
    } catch (e) {
        console.error(e)
    }
})

// get orders

app.get("/api/orders", async (req, res) => {
    try {
        const result = await pool.query(
            "Select Bestellungen.OId, Vorname, Nachname, ODate, Name,Menge, Mengenart, Bestellung_anzahl, vpin, vbday, anmerkung\
            FROM Medikamente, Bestellungen, MB\
            Where MB.OId = Bestellungen.OId and MB.id = Medikamente.id")

        res.status(201).json({
            orders: result.rows
        })
    } catch (error) {
        console.error(error)
    }
})

// Send order
app.post("/api", async (req, res) => {
    try {
        const OId = await pool.query(`Insert into Bestellungen (ODate, Anmerkung, Vorname, Nachname, vpin, vbday) 
            values ($1, $2, $3, $4, $5, $6) returning OId`, [new Date().toISOString(), req.body.anmerkungen, req.body.fname, req.body.lname, req.body.vpin, req.body.vbday])

        for (let i = 0; i < Object.keys(req.body.drugs).length; i++) {
            await pool.query(`Insert into MB (id, OId, Bestellung_anzahl) values ($1, $2, $3)`, [req.body.drugs[i].id, OId.rows[0].oid, req.body.drugs[i].anzahl])
        }
        res.status(202);

    } catch (err) {
        console.error(err)
    }
});


app.delete("/api/orders/:oid", async (req, res) => {
    try {
        const { oid } = req.params;
        const result = await pool.query("Delete From Bestellungen Where OId = $1", [oid])
        res.status(203)
    } catch (error) {
        console.error(error)
    }
});

app.get("*", (req, res) => {
    res.status(204).sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log("Listening on Port 5000");
});