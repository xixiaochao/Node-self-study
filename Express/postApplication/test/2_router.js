const express = require('express');
const app = express();
// next表示执行下一个
// 路径的分组
// restul 风格的API接口 GET /user | POST /user | DELETE /user | PUT /user
app.get('/',function(req,res,next){
    console.log(1);
    next();
},function(req,res,next){
    console.log(11);
    next();
}).get('/',function(req,res,next){
    console.log(2);
    next();
}).get('/',function(req,res,next){
    console.log(3);
    res.end('ok');
})
app.listen(3000);