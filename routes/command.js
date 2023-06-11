var express = require('express');
var router = express.Router();
const Command = require('../models/command')
const User = require('../models/user')
const Book = require('../models/book')
const { Op, fn, col } = require('sequelize');
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
    const avagescore = await Command.findOne({
        attributes: [[fn('AVG', col('score')),'avg']],
        where: {
            bid: req.body.bid
        } 
    });
    await Book.update({ score: Number(avagescore.dataValues.avg).toFixed(1) },{
        where: {
            bid: req.body.bid
        } 
    });
    // console.log(avagescore.dataValues.avg)

    res.send(command)
})

router.post('/delete', async (req, res) => {
    await Command.destroy({
        where: {
          cid: req.body.cid
        }
    });
    // res.sendStatus(chapter)
})
module.exports = router;