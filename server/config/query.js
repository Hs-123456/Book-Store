const Pool = require('pg').Pool
const dbpool = new Pool({
  user: 'postgres',
  host: '135.181.90.75',
  database: 'postgres',
  password: 'securedaccess',
  port: 5432,
})




module.exports = dbpool;