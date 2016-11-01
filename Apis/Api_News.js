/**
 * Created by biles on 2016/11/1.
 */

const Router = require('koa-router');

const isValid = require('../Middlewares/Koa-Body-Valid');
const userAuth = require('../Middlewares/Koa-User-Auth');
const blogInfo = require('../Models/Blog_model');

let router = new Router().prefix('News');

router
    .get("/",userAuth, ctx => {
        ctx.body = "Hello! this's api"
    })
    .post("/",isValid(blogInfo),ctx => {
        let body = ctx.body;
        console.log("123");
    });

module.exports = router.routes();