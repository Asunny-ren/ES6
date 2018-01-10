const koa = require('koa');
const mysql = require('koa-mysql');

let db = mysql.createPool({
    host: 'localhost',
    user: '******',
    password: '******',
    database: 'myDatabase'
});

let server = new koa();


// v3版本已经抛抛弃了generator

server.use(function* () {
    let data = yield db.query(`SELECT * FROM mytable`);

    this.body = data;
})

server.listen('8080');