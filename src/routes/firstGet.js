const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx) => {
    //send json
    ctx.body = {
        message: "Hello 2048 DCC!"
    }
})

module.exports = router;
