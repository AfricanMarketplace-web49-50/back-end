module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'BAZING!!!',
    environment: process.env.NODE_ENV || 'development',

}