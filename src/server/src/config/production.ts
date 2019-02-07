export default {
    mysql: {
        host: process.env.DB_HOST,
        database: process.env.DB_SCHEMA,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },  auth: {
        secret: process.env.SECRET
    }, twilio: {
        TWILIO_ACCOUNT_SID: process.env.SID,
        TWILIO_AUTH_TOKEN: process.env.TWILIO_TOKEN,
        TWILIO_PHONE_NUMBER: process.env.NUMBER
    }
};