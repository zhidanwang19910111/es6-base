/* 

 1.判断一个数据类型是否有 iterator 遍历接口方法

 var a = [1,2,3]
 a[Symbol.iterator]

 2. 遍历接口 keys()方法的实现 ， 手写  

 3. 提供接口的目的： 只要数据结构有遍历接口，就可以把数据遍历出来

    function iterator( obj ) {
        obj.index = -1;
        obj.index++;
        return {
            next: function(){
                return obj.index < obj.length ? {
                    value: obj.index,
                    done: false
                }
                : {
                    value: undefined,
                    done: true
                }
            }
        }
    }


    4.  数组，类数组，set , map   部署了iterator遍历接口 可以用 for of 循环
*/