var express = require('express');
var router = express.Router();
const Chapter = require('../models/chapter')
const List = require('../models/list')
const { Op, fn } = require('sequelize');
const sequelize = require('../db/db')

//id搜书目录
router.get('/getBookChapterMuLvById/:id', async (req, res) => {
    const MuLvlist = await Chapter.findAll({
        attributes: ['list', 'name', 'info'],
        where: {
            bid: req.params.id
        },
        order: [
            ['list']
        ]
    })
    res.send(MuLvlist)
})

//书号和章节号查章节内容
router.get('/getBookChapterInfo', async (req, res) => {
    let uid = req.query.uid
    let bid = req.query.bid
    let seq = req.query.list

    const count = await List.findAll({
        attributes: [
            [fn('COUNT', sequelize.col('*')), 'count'],
        ],
        where: {
            bid: bid,
            uid: uid
        }
    })
    const relcount = count[0].dataValues.count

    if (relcount != 0) {
        const [results, metadata] = await sequelize.query(`SELECT name,info from chapter INNER JOIN list ON list.bid=chapter.bid and list.uid='${uid}' and chapter.bid=${bid} and chapter.list=${seq}`)
        // console.log(1)
        res.send(results)
    } else {
        const [results, metadata] = await sequelize.query(`SELECT name,info from chapter where bid=${bid} and list=${seq}`)
        // console.log(2)
        res.send(results)
    }

})

//新增chapter
router.post('/new', async (req, res) => {
    const chapter = await Chapter.create({
        name: req.body.name,
        bid: req.body.bid,
        list: req.body.list,
        info: req.body.info,
        // time: Date.now()
    })
    res.send(chapter)
})

router.post('/update', async (req, res) => {
    const chapter = await Chapter.update({
        name: req.body.name,
        info: req.body.info,
    },{
        where: {
            list: req.body.list,
            bid: req.body.bid
        }
    })
    res.send(chapter)
})

router.post('/delete', async (req, res) => {
    await Chapter.destroy({
        where: {
          bid: req.body.bid,
          list: req.body.list
        }
    });
    // res.sendStatus(chapter)
})

module.exports = router;