var express = require('express');
var router = express.Router();
const Book = require('../models/book')
const Chapter = require('../models/chapter')
const { Op } = require('sequelize');

//名字搜书
router.get('/getBookListByName/:name', async (req, res) => {
    const booklist = await Book.findAll({
        where: {
            name: {
                [Op.like]: '%' +req.params.name + '%'
            }
        }
    })
    res.send(booklist)
})

//id搜书
router.get('/getBookById/:id', async (req, res) => {
    const book = await Book.findOne({
        where: {
            bid: req.params.id
        }
    })
    res.send(book)
})

//类别搜书
router.get('/getBookByCategory/:name', async (req, res) => {
    const booklist = await Book.findAll({
        where: {
            category: req.params.name
        }
    })
    res.send(booklist)
})

//返回所有书籍
router.get('/getbooks', async (req, res) => {
    const booklist = await Book.findAll()
    res.send(booklist)
})

//返回所有书籍
router.get('/getHighScorebooks', async (req, res) => {
    const booklist = await Book.findAll({
        order: [
            ['score', 'DESC']
        ],
        limit: 3
    })
    res.send(booklist)
})

//书城更新书籍
router.post('/updatebook', async (req, res) => {
    await Book.update({
        name: req.body.name,
        author: req.body.author,
        category: req.body.category,
        img: req.body.img
    },{
        where: {
            bid: req.body.bid
        }
    })
    // res.send(booklist)
})

router.post('/createbook', async (req, res) => {
    await Book.create({
        name: req.body.name,
        author: req.body.author,
        img: req.body.img,
        info: req.body.info,
        category: req.body.category,
        score: 0,
    })
    // res.send(booklist)
})

router.post('/deletebook', async (req, res) => {
    await Book.destroy({
        where: {
            bid: req.body.bid
        }
    })
    // res.send(booklist)
})

module.exports = router;
