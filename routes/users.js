const router = require('koa-router')()
const query = require('../lib/connector')

router.prefix('/users')

router.get('/',async  function (ctx, next) {
  ctx.body = await query('SELECT * FROM users')
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
