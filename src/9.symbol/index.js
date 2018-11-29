/* 

symbol  数据类型

1.如何给object  加一个 symbol数据类型  可以用 var a = symbol('a') obj[a] = 1
2. 用 for in 遍历object 的时候  symbol 数据类型的是不会被遍历出来

3. 那如何找到symbol类型的属性  ，需要用到  Object.getOwnPropertySymbols(obj)

4. 不能转成 Number String 可以转成boolean 类型

*/
