const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = {rejectUnauthorized: false}
}

const sharedConfig = {
    client: 'pg',
    migrations: {directory: './api/data/migrations'},
    seeds: {directory: './api/data/seeds'},
}

module.exports = {
    development: {
        ...sharedConfig, //we want to use the same sharedConfig in the 3 different types of db, so we use the spread operator
        connection: process.env.DEV_DATABASE_URL,
    },
    testing: {
        ...sharedConfig,
        connection: process.env.TESTING_DATABASE_URL,
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: {min: 2, max: 10},
    },
}