/**
 * Created by bileskou on 2016/10/29.
 */
const os = require('os');
const cluster = require('cluster');
const Koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const basicAuth = require('koa-ctx-basic-auth');
const errorLog = require('./Middlewares/Koa-Error-Log');
const config = require('./config');

const apiRouter = require('./Utils/Api-Router');
const app = new Koa();

basicAuth(app);

app
    .use(cors())
    .use(errorLog)
    .use(async(ctx, next)=> {
        if (!ctx.request.type) {
            ctx.request.header["content-type"] = 'application/json';
        }
        await next();
    })
    .use(async(ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    })
    .use(bodyParser())
    .use(apiRouter);


if (config.debug || !cluster.isMaster) {
    app.listen(config.port);
    console.log(config.appName + ' is start with port ' + config.port);
} else {
    for (let i = 0; i < os.cpus().length * 0.5; i++) {
        cluster.fork()
    }
    cluster.on("online", worker => console.log(`Worker ${worker.process.pid} online.`));
    cluster.on("message", message => console.log(message));
    cluster.on("exit", (worker, signal) => {
        console.log(`Worker ${worker.process.pid} died (signal: ${signal}). Restarting...`);
        cluster.fork()
    })
}

