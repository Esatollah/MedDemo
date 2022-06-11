const Pool = require("pg").Pool;
require("dotenv").config()

const devConfig = {
    user:process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
}

const proConfig = {
    connectionString: process.env.DATABASE_URL
}
const pool = new Pool(proConfig)

module.exports = pool;