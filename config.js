module.exports = {
    mongoPoolSize: 10,
    mongoDbName: "Jinju",
    mongo: 'mongodb://192.168.2.5:27017/',//使用mongodb数据库
    debug: true,//生产环境下需设置为false
    port: 8080,//本服务端口
    v: '1.0.0',
    appName: 'JinjuSnsSystem',
    whitelist: ['0.0.0.0/0', '::ffff:127.0.0.1']//ip白名单，'0.0.0.0/0'开头为禁用此功能
};