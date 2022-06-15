const mysql = require('serverless-mysql');
const dbConfig = require('../../migrate-config.json');

const db = mysql({
    config: {
        host: dbConfig.mysql.host,
        database: dbConfig.mysql.database,
        user: dbConfig.mysql.user,
        password: dbConfig.mysql.password,
        port:dbConfig.mysql.port
    }
});

exports.connect = db;

exports.query = async query => {
    try {
        const results = await db.query(query);
        await db.end();
        return results;
    } catch (error) {
        return { error }
    }
};