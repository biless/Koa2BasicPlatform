/**
 * Created by biles on 2016/11/1.
 */
const errors = {
    '100001': { code:401,msg:'Un Basic Authentication'},
    '100002': { code:401,msg:'Un Find User'},

    '100010': '模型不匹配'
};

module.exports = async function (ctx, next) {
    try {
        await next();
    } catch (err) {

        let errorStatus = errors[err.statusCode];

        if (typeof(errorStatus) !== "object") {
            let errorMsg = errorStatus || '未知错误';
            ctx.body = {ok: 0, err: errorMsg};
        } else {
            ctx.throw(errorStatus.code,errorStatus.msg);
        }
    }
};