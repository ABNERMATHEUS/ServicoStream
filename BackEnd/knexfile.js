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
      host:  process.env.HOST_NAME || 'ec2-34-200-72-77.compute-1.amazonaws.com', 
      database: process.env.DATA_BASE || 'dfpavul55fich8',
      user:     process.env.USER || 'gskhdkkijhfrlh' ,
      password: process.env.PASSWORD || '979793cd1ce9b2441fac38bedbed2357c720c8758b6695ae350b9c5d77e7e0aa',
      searchPath: ['knex', 'public'],
      
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
