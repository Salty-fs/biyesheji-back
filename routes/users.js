var express = require('express');
var router = express.Router();
const User = require('../models/user')

// var mysql = require("../db/dbapi")

/* GET users listing. */
// router.get('/login', (req, res, next) => {
//   mysql.queryAll('user', results => {
//     res.send(results)
//   })
// });


//管理员可通过此查询单个用户数据
// router.post('/selectByArg', (req, res, next) => {
//   mysql.queryOne(req.body.table, req.body.col, req.body.arg, results => {
//     res.send(results)
//   })
//   // console.log(rep.body);
// })

router.get('/:id', async (req, res) => {
  const user = await User.findOne({
    where: {
      uid: req.params.id
    },
  })
  res.send(user)
})

router.post('/new', async (req, res) => {
  const user = await User.create({
    uid: req.body.uid,
    avator: req.body.avatarUrl,
    name: req.body.nickName,
  })
  // res.send()
})


module.exports = router;
