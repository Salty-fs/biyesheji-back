var express = require('express');
var router = express.Router();
const Advertise = require('../models/advertise')
// const Chapter = require('../models/chapter')
const { Op } = require('sequelize');

//名字搜书
router.get('/getAdvertise', async (req, res) => {
    const booklist = await Advertise.findAll({})
    // console.log(booklist)
    res.send(booklist)
})



module.exports = router;
