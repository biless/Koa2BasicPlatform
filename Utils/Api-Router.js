/**
 * Created by biles on 2016/11/1.
 */

const Router = require('koa-router');
const router = new Router();
let apiPrefix = router.prefix('/api');

// Map Router
apiPrefix.use(require('../Apis/Api_News'));


module.exports = apiPrefix.routes();