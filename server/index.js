const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
var router = express.Router(); 

app.listen(3001, function(){
    console.log('你的服务器在3001端口裸奔！');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true });
const db = mongoose.connection;
const Item = require('./items')

app.use(morgan('short'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/items', function(req, res) {
    Item.find().sort({'createdAt': -1}).exec(function(err, items) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ items: items})
    });
});

app.get('/figure', function(req, res) {
       res.json({ message: '***<没钱赚商店>收据*** {名称:可口可乐，数量:3瓶，单价:3.00(元)，小计:6.00(元)},{名称:羽毛球，数量:5个，单价:1.00(元)，小计:4.00(元)},{名称:苹果，数 :2 ，单价:5.50(元)， 计:11.00(元)} 总计:21.00(元) 节省:4.00(元)'
       })
});

app.get('/',function(req, res){
  res.send('Hello world!');
})