/**
 * Created by jac on 2016/11/1.
 */
module.exports = {
    fromUserId: {type: String, match: /^[a-zA-Z0-9]+$/},//付款账号
    toUserId: {type: String, required: true, match: /^[a-zA-Z0-9]+$/},//收款账号
    helpPlanId: {type: String, required: true},//互助计划oid
    helpPlanPrice: {type: Number, required: true},//金额
    state: {type: String, required: true, enum: ["planning", "complete", "canceled"]},//订单状态
    payMode: {type: String, enum: ["alipay", "wechat"]},//支付供应商
    payId: {type: String},//支付商对应支付记录单号
    payDetails: {type: String},//支付商对应支付说明
    postTime: {type: Date} //交易时间
};