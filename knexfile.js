require('dotenv').config()

const sharedConfig = {
  client: 'pg',
  migrations: {directory: './api/data/migrations'},
  seeds: {directory: './api/data/seeds'},
}

module.exports = {
  development: {
    client: 'sqlite3',
    migrations: {directory: './api/data/migrations'},
    connection: {
      filename: '.dev.sqlite3'
    },
    ...sharedConfig
  },

  staging: {
    client: 'postgres',
    connection: {
      database: 'african-marketplace',
      user: 'postgres',
      password: 'folpd2006'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...sharedConfig
  },

  production: {
    client: {
      client: 'postgres',
      connection: {
        database: 'african-marketplace',
        user: 'postgres',
        password: 'folpd2006'
      },
      ...sharedConfig
    },
  }
}
