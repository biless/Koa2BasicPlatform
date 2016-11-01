/**
 * Use Promise to IsValid Lib
 */

const isValid = require('isvalid');

module.exports = function (data,schema) {
    return new Promise(function (resolve, reject) {
        isValid(data, schema, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
};