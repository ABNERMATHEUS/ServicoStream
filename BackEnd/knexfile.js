// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '8.0.19',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'password',
      database : 'db_movies'
    }
  },

  

  production: {
    client: 'postgresql',
    connection: {
      host:  process.env.HOST_NAME || 'ec2-52-22-216-69.compute-1.amazonaws.com', 
      database: process.env.DATA_BASE || 'd5eprr0b3lq4lu',
      user:     process.env.USER || 'oscfilpwdsqhoh' ,
      password: process.env.PASSWORD || '8a056f8a9f3103fe542c64ebd442d11206285e122d8ade56d68c40edd31da1dc',
      searchPath: ['knex', 'public'],
      ssl: { rejectUnauthorized: false },
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'a',
      user:   'aa'  ,
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
