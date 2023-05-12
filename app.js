var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*',function(req,res,next){//这里是设置请求头设置为可以跨域  不懂的朋友可以看看ajax的同源策略
    res.header('Access-Control-Allow-Origin','*');//*表示可以跨域任何域名都行（包括直接存在本地的html文件）出于安全考虑最好只设置 你信任的来源也可以填域名表示只接受某个域名
    res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type');//可以支持的消息首部列表
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');//可以支持的提交方式
    res.header('Content-Type','application/json;charset=utf-8');//响应头中定义的类型
    next();
});

// 解析post body的中间件
app.use(bodyParser.urlencoded({    
    extended: true
}));


app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
