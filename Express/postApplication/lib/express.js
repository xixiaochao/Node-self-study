//这是一个路由规则的窗口
let router = [{
    path:'*',//这个路由规则可以匹配所有的路径
    method:'*',//这个路由规则可言匹配所有的方法
    handler(req,res){
        res.end(`Cannot ${req.method} ${req.url}`)
    }
}];
const http = require('http');
function createApplication(){
    return {
        get(path,handler){
            router.push({
                path,
                handler,
                method:'get'
            })
        },
        listen(){
            let server = http.createApplication(function(req,res){
                let {pathname} = url.parse(req.url,true);
                for(let i = 1;i<router.length;i++){
                    let {path,method,handler} = router[i];
                    if(pathname == path && method == req.method.toLowerCase()){
                        return handler(req,res)
                    }
                }
                router[0].handler(req,res);
            });
            server.listen.apply(server,arguments);
        }
    } 
}
module.exports = createApplication;