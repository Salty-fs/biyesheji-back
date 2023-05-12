var express = require('express');
var router = express.Router();
var usersRouter = require("./users")
var bookRouter = require("./book")
var chapterRouter = require("./chapter")
var commandRouter = require("./command")
var listRouter = require("./list")
var advertiseRouter = require("./advertise")

/* GET home page. */
router.use('/user',usersRouter);
router.use('/book',bookRouter),
router.use('/chapter',chapterRouter)
router.use('/command',commandRouter)
router.use('/list',listRouter)
router.use('/advertise',advertiseRouter)

module.exports = router;
