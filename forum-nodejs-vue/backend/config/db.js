const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])//Be Careful with this
module.exports = knex