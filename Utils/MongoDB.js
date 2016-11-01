/**
 * Create MongoDB Connection
 *
 */

const config = require("../config.js");
const mongoClient = require("mongodb").MongoClient;


module.exports = mongoClient.connect(config.mongo + config.mongoDbName, {
    server: {
        poolSize: config.mongoPoolSize
    }
});