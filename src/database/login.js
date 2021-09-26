/*
 * @Descripttion: 啦啦啦哈哈哈
 * @version: 
 * @Author: lsy
 * @Date: 2021-09-23 13:45:27
 * @LastEditors: lsy
 * @LastEditTime: 2021-09-24 14:23:23
 */

global.app.post('/api/login', (req, res) => {
    let sql = `SELECT uid,username,realname FROM user where username='${req.body.userName}' and password='${req.body.password}';`
    global.pool.getConnection((err, conn) => {
        if (err) {
            console.log("err", err);
        }
        conn.query(sql, (er, result) => {
            if (er) {
                console.log("err", er);
            }
            res.json({
                code: 200,
                message: '成功',
                data: result
            });
            conn.release();
        })
    })
})
