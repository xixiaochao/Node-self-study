/**
 * Created by Administrator on 2018/8/23.
 */
//http 模块：用于服务器监听服务
let http=require("http");
/*http.createServer(function (req,res) {

}).listen(8000,function () {
    //端口：0-65535 Mac  要求3000以上
});
console.log(http);*/

//http.createServer:创建一个服务
let server=http.createServer(function (req,res) {
    //当客户端请求一次，这个函数会执行一次
    console.log("你访问了吗");
    res.end();
});

//用一个端口号监听这个服务
server.listen(8000,function () {
    console.log("监听成功！");
});