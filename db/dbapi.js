// var pool = require('./mysql.js');
// var mysql = require("mysql");
// var api = {};

// pool = mysql.createPool(pool); 

// //查所有
// api.queryAll = (table, callkack) => {
//     pool.getConnection((err,connection) => {
//         connection.query(`select * from ${table};`, (err,rows) => {
//             if(err){
//                 console.log(err);
//             }
//             callkack(JSON.stringify(rows))
//             connection.release()
//         })
//     })
// }

// //查单个
// api.queryOne = (table, col, arg, callkack) => {
//     pool.getConnection((err, connection) => {
//         connection.query(`select * from ${table} where ${col} = ${arg};`, (err, rows) => {
//             if(err){
//                 console.log(err);
//             }
//             callkack(JSON.stringify(rows))
//             connection.release()
//         })
//     })
// }

// module.exports = api;