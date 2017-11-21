const settings = require("./settings"); // settings.json

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user:     settings.username,
      password: settings.password
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
      database: settings.database,
      user:     settings.username,
      password: settings.password
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
