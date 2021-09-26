/*
 * @Descripttion: 啦啦啦哈哈哈
 * @version: 
 * @Author: lsy
 * @Date: 2021-09-23 11:18:48
 * @LastEditors: lsy
 * @LastEditTime: 2021-09-23 14:45:14
 */
var mysql = require("mysql");

global.pool = mysql.createPool({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "root",
    database: "test"
})
