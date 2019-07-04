const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])//Be Careful with this
//knex.on('query', query => console.log(query));//Enable for query debug
module.exports = knex