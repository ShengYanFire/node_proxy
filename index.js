/*
 * @Descripttion: 啦啦啦哈哈哈
 * @version: 
 * @Author: lsy
 * @Date: 2021-09-09 11:03:51
 * @LastEditors: lsy
 * @LastEditTime: 2021-09-24 09:48:23
 */
/* 引入express框架 */
const express = require('express');
const app = express();

/* 引入cors 实现跨域*/
const cors = require('cors');
app.use(cors());

// json申请
app.use(express.json())
// 表单申请
app.use(express.urlencoded({ extended: false }))

// 解决history模式下，刷新页面空白
var history = require('connect-history-api-fallback');
app.use('/', history({
    index: `/index.html`,
    verbose: false
}));
app.use('/', express.static('./public/dist/'))

global.app = app;

require("./src/plugins/index.js")
require("./src/database/index.js")

/* 监听端口 */
app.listen(3333, () => {
    console.log('listen:3333');
})

