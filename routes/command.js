var express = require('express');
var router = express.Router();
const Command = require('../models/command')
const User = require('../models/user')
const { Op } = require('sequelize');
const sequelize = require('../db/db')

// User.hasMany(Command)
// Command.belongsTo(User)

//id获取评论目录
router.get('/getBookCommandById/:id', async (req, res) => {
    const [results, metadata] = await sequelize.query(`SELECT * from  command INNER JOIN user ON command.uid=user.uid and command.bid=${req.params.id}`);

    // console.log(results)

    res.send(metadata)
})

//新增评论
router.post('/new', async (req, res) => {
    // const [results, metadata] = await sequelize.query(`SELECT * from  command INNER JOIN user ON command.uid=user.uid and command.bid=${req.params.id} `);
    const command = await Command.create({
        uid: req.body.uid,
        bid: req.body.bid,
        score: req.body.score,
        command: req.body.value,
        // time: Date.now()
    })
    // console.log(results)

    res.send(command)
})

module.exports = router;