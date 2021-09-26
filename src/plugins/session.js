/*
 * @Descripttion: 啦啦啦哈哈哈
 * @version: 
 * @Author: lsy
 * @Date: 2021-09-24 09:27:28
 * @LastEditors: lsy
 * @LastEditTime: 2021-09-24 09:51:56
 */

var cookieParser = require('cookie-parser');
var session = require('express-session');

global.app.use(cookieParser('sessiontest'));
global.app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));