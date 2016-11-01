/**
 * Valid Post/Put Model
 * Create By Biless
 */

const isValid = require('../Utils/Promise-IsValid');
const errorCode = require("../Utils/ErrorCode");

module.exports = function isValidModel(schema) {
    return async function (ctx, next) {
        try {
            await isValid(ctx.request.body, schema);
        } catch (err) {
            throw errorCode(100010,err);
        }
        await next();
    }
};