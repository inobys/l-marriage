const mysql_config= require('../config/db/dbconfig');
const mysql = require('mysql');

const pool = mysql.createPool(mysql_config);

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            console.log('sql:',sql)
            if (error) {
                reject(error); // 如果发生错误，则拒绝 Promise
            } else {
                resolve(results); // 否则，解析 Promise 并返回查询结果
            }
        });
    });
};

// 导出查询函数
module.exports = query;

