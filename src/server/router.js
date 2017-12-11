var express = require("express");
var router = express.Router();
var crud = require("./crud.js");
var path_url = require("./api.js");
var student = require("./data/student.json");
var img = require("./data/img.json");


router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

// 注册
router.post(path_url.reg, function(req, res) {
	// 接受参数
	var username = req.body.username;
	var password = req.body.password;
	var sql = "insert into user values (null,?,?)";
	var insertArr = [username, password];
	crud.sqlCRUD(sql, insertArr, function(result) {
		if (result.affectedRows) {
			res.json(200, {
				msg: "success"
			});
		} else {
			res.json(200, {
				msg: "注册失败"
			})
		}

	})
});

// 登录
router.post(path_url.login, function(req, res) {

	var username = req.body.username;
	var password = req.body.password;
	// 当前的一条数据
	var sql = "select * from user where username=? and password=?";
	var selectArr = [username, password];
	crud.sqlCRUD(sql, selectArr, function(result) {
		if (result.length > 0) {
			res.json(200, result);
		} else {
			res.json(200, {
				msg: "用户名密码错误",
				code: "400"
			})
		}

	})
});


// 修改  ? 课下练习
router.get(path_url.reset, function(req, res) {
	var sql = "update user set username='ice',age=30,job='jike' where id=3";
	crud.sqlCRUD(sql, null, function(result) {
		if (result) {
			res.json(200, result);
		} else {
			res.json(200, {
				msg: "error"
			})
		}

	})
});

router.get(path_url.stuinfo, function(req, res) {
	res.json(200, student);
});

router.get("/currentimg", function(req, res) {
	res.json(200, img);
})


module.exports = router;