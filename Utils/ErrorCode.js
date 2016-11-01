/**
 * Created by biles on 2016/11/1.
 */

module.exports = function (statusCode, ErrorMsg) {
    const error = new Error(ErrorMsg);
    error.statusCode = statusCode;
    return error;
};