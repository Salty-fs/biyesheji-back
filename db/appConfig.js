const AppConfig = {
    nodeEnv: process.env.NODE_ENV,
    nodeHost: process.env.SERVER_HOST,
    nodePort: process.env.SERVER_PORT,

    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbDialect: process.env.DB_DIALECT,

    dbPoolMax: parseInt(process.env.DB_POOL_MAX),
    dbPoolMin: parseInt(process.env.DB_POOL_MIN),
    dbPoolIdle: parseInt(process.env.DB_POOL_IDLE)
};

module.exports = AppConfig