require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    corsWhiteList: process.env.CORS_WHITE_LIST.split(' '),
    sizeFile: process.env.SIZE_FILE,
};

module.exports = { config };