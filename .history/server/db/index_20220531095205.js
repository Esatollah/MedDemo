const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "deje",
    host: "localhost",
    database: "med",
    port: 5432
})

module.exports = pool;