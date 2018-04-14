// Update with your config settings.
const database = require('./database/config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : database.user,
      password : database.password,
      database : database.database,
      charset: 'utf8'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
