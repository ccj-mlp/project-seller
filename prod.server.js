var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();//在实例化express的后面开始编写测试数据的相关策略

var router = express.Router();// 生成express的路由实例

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);// 调用router

var appData = require('./data.json');// 引入测试数据
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();
//这里的意思是访问一个/seller链接,然后返回数据
apiRoutes.get('/seller', function (req, res) { // express的路由实例写法
	res.json({// 返回的是json数据,并且这里是res参数是代表response
		errno: 0,//设计返回的json数据的结构
		data: seller
	});
});

apiRoutes.get('/goods', function (req, res) {
	res.json({
		errno: 0,
		data: goods
	});
});

apiRoutes.get('/ratings', function (req, res) {
	res.json({
		errno: 0,
		data: ratings
	});
}); 

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});