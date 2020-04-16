const knex = require('knex');
const knex_configuration = require('../../knexfile')


const connection = knex(knex_configuration.development);

module.exports = connection;