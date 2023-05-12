var express = require('express');
var router = express.Router();
const { Op, fn } = require('sequelize');
const List = require('../models/list')
const sequelize = require('../db/db')

//收藏 uid bid
router.post('/collect', async (req, res) => {
    const list = await List.create({
        bid: req.body.bid,
        uid: req.body.uid
    })

    res.send(list)
})

//是否收藏 uid bid
router.post('/iscollect', async (req, res) => {
    const count = await List.findAll({
        attributes: [
            'list',
            [fn('COUNT', sequelize.col('*')), 'count'],
        ],
        where: {
            bid: req.body.bid,
            uid: req.body.uid
        }
    })

    // console.log(count)
    res.send(count)
})

//取消收藏
router.post('/decollect', async (req, res) => {
    const fin = await List.destroy({
        where: {
            bid: req.body.bid,
            uid: req.body.uid
        }
    })

    // console.log(fin);
    res.send({fin})
})

//id查收藏
router.get('/getCollectionListById/:id', async (req, res) => {
    const sql = 'SELECT book.bid, img, name, list.list FROM book INNER JOIN list ON list.uid=:uid AND list.bid=book.bid';
    const replacements = { uid: `${req.params.id}` };

    sequelize.query(sql, { replacements, type: sequelize.QueryTypes.SELECT })
    .then((results) => {
        console.log(results);
        res.send(results)
    })
    .catch((error) => {
        console.log(error);
    });
    // res.send(results)
})

module.exports = router;