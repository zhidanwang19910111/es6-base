/* 


    1. 函数默认值
        function fun(a,b) {
            var _b = b || 100  或者  var _b = b === undefined ? 100 : b;
        }

        ||
         V
         es6 变成  
         function(a, b =100){
             return a+b
         }
 
    2.  扩展运算  function func(a, ...rest){}  func(1,2,3,5)   rest = [2.3.5]

    3. 箭头函数
         var add = (a,b) => {return a+b}  变种 (a,b) => a+b  

         当返回一个对象时候   (a,b) => ({dan: 123}) 要用() 包一层

    4. 当参数只有一个的时候， 形参 可以省略括号

    5.  箭头函数中this 在创建时候就已将绑定了  
        而且不能修改 this 指向 ，
        函数内部没有 arguments 
        如果想拿到arguments 集合  可以用  ...rest 
        不能  new 成为构造函数

*/