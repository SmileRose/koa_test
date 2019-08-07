const mysql = require('mysql')
const pool = mysql.createPool({
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "oi5394OIZ@",
    "database": "phpcmsv9"
})//数据库连接配置

const query = (sql,callback)=>{
    return new Promise((resolve, reject)=>{
        pool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql, val, (err,rows)=> {
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                        connection.release();
                    }
                });
            }
        });
    })
}
exports.query = query;
