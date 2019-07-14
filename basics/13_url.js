/**
 * Created by Administrator on 2018/8/23.
 */
let http=require("http");
let url=require("url");
http.createServer(function (req,res) {
    //当客户端请求几次，执行几次
    //req ：请求信息
    //res ：响应信息

    console.log(req);
}).listen(8080,function () {
    //这个函数
    console.log("监听成功~");
});