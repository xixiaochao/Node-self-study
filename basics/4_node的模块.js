//node 天生自带模块化；一个js文件就是一个模块；
// 核心模块   自定义模块  第三方模块；
let  a = 100;
//console.log(a);
/*(function (module,require,exports,__filename,__dirname) {
    let a = 100;
    require()
})();*/
// 把当前模块中的数据暴露出去，需要通过module来暴露；
function fn() {

}
// 把当前文件下数据暴露出去
/*module.exports.a = a;
module.exports.fn = fn;
module.exports = {
    a:a,
    fn:fn
}*/



//---------------------------------------------------------
// require : 导入模块；
// 在node中遇到导入的模块，会把导入的模块，从上到下执行；
let sum = require("./4_node的模块.js");
console.log(sum.a);