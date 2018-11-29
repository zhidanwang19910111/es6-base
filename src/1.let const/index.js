// 变量i是var命令声明的，在全局范围内都有效，
//所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，
//而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。
//也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 5

var a =[];
for( var i = 0; i < 5; i++){
    a[i] = function(){
        console.log(i)
    }
}
for(var key of a){
    key()
} 

// es5 方式实现let const块级作用域 ， 实现的主要原理是用作用域保存变量
var a = [];
for( var i = 0; i < 5; i++){
    _loop(i)
}
console.log(a)

function _loop(i){
    a[i] = function(){
        console.log(i)
    }
}

for(var key of a){
    key()
}

// 下面的例子就是简单的let 实现方式

if( true ){
    let name ='123';
    console.log(name)
}
// 用ployfill 实现变成为

if( true ){
    (function(){
        var name ='123'
        console.log(name)
    })()
}

/* 
    总结：
    let const 与 var 有什么区别

        1. var 会变量提升
        2. let const 会产生暂时性死区（未声明前使用会报错）
        3. let const 相同作用域内不允许重复声明变量
        4. let const 使得javascript拥有了块级作用域
        5. 块级作用域内声明函数 ，应该用函数表达式， 而不是函数声明语句
        6. var 声明变量为顶级对象的 属性 var a === window.a  ,let const 声明变量不再为 顶级变量的属性了

    es6 声明变量的六种方法
        var , function, let, const, import , class

*/

