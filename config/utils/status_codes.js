/**
 * 状态码
 *
 * */

module.exports = {
    SUCCESS: 200,
    PARAM_ERROR: 10001, //参数错误
    USER_ACCOUNT_ERROR: 20001, //账号或密码错误
    USER_LOGIN_ERROR: 30001, //用户未登录
    BUSINESS_ERROR: 40001, //业务请求失败
    AUTH_ERROR: 50001, //认证失败或TOKEN过期
    OTHER_ERROR: 99999, //其他错误
}