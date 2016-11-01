/**
 * Created by biles on 2016/11/1.
 */

const mongo = require("../Utils/MongoDB");

exports.GetUserInfo = async function (user, pass) {
    //用户名密码验证
    let db = await mongo;
    let data = await db.collection("Managers").find({userId: user, pwd: pass}).limit(1).toArray();
    if(data.length > 0) {
        return true;
    }
    return false;
};