/**
 * Valid Post/Put Model
 * Create By Biless
 */

const controlUser = require("../Controls/Control-User");
const errorCode = require("../Utils/ErrorCode");

module.exports = async function (ctx, next) {
    if(ctx.basicAuth === undefined){
        throw errorCode(100002,'未找到BasicAuth标签');
    }

    const {name, pass} = ctx.basicAuth;
    let haveUser = await controlUser.GetUserInfo(name, pass);

    if (!haveUser) {
        throw errorCode(100002,"用户不存在");
    }
    await next();
};