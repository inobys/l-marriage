// 用户登录
router.post('/login', async (ctx) => {
  let { username, password } = ctx.request.body
  let sql = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`
  let res = await query(sql)
  if (res.length) {
    ctx.body = {
      code: 200,
      message: '登录成功',
      data: res[0]
    }
  } else {
    ctx.body = {
      code: 500,
      message: '用户名或密码错误'
    }
  }
})

// 用户注册
router.post('/register', async (ctx) => {
  let { username, password } = ctx.request.body
  let sql = `SELECT * FROM user WHERE username = '${username}'`
  let res = await query(sql)
  if (res.length) {
    ctx.body = {
      code: 500,
      message: '用户名已存在'
    }
  } else {
    let sql = `INSERT INTO user (username, password) VALUES ('${username}', '${password}')`
    let res = await query(sql)
    if (res.affectedRows) {
      ctx.body = {
        code: 200,
        message: '注册成功'
      }
    } else {
      ctx.body = {
        code: 500,
        message: '注册失败'
      }
    }
  }
})

module.exports = router