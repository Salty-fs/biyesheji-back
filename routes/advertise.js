var express = require('express');
var router = express.Router();
const Advertise = require('../models/advertise')
// const Chapter = require('../models/chapter')
const { Op } = require('sequelize');
const sequelize = require('../db/db')

//首页轮播展示
router.get('/getAdvertise', async (req, res) => {
    const booklist = await Advertise.findAll({})
    // console.log(booklist)
    res.send(booklist)
})

//管理员获取
router.get('/opGetAdvertise', async (req, res) => {
    const [results, metadata] = await sequelize.query(`
    SELECT DISTINCT advertise.img, book.bid, book.name
    FROM advertise
    JOIN book ON advertise.bid = book.bid;
    `)
    
    // console.log(booklist.data)
    res.send(results)
})

router.post('/updateAD', async (req, res) => {
    await Advertise.update({
        img: req.body.img,
    },{
        where: {
            bid: req.body.bid
        }
    })
    
    // console.log(booklist.data)
    // res.send(results)
})

router.post('/deleteAD', async (req, res) => {
    await Advertise.destroy({
        where: {
          bid: req.body.bid,
        }
    });
    // res.sendStatus(chapter)
})

router.post('/newAd', async (req, res) => {
    await Advertise.create({
        bid: req.body.bid,
        img: req.body.img
    });
    // res.sendStatus(chapter)
})




module.exports = router;
