/* 
    任何解构赋值都是将等号右侧的变为数组或者对象 ，  如果为undefined，或者  null 都会报错
    1. 数组的解构赋值

        可以按照结构的对应关系 为变量赋值  
        解构的变量也可以赋默认值

    用途 
        1.数据交换
        【x,y】 = [y,x]

        2. 返回多个值

            function fun(params) {
                return [1,2,3]
            }
        3. 函数参数的定义
            
            function f([x,y,z]){}
            f([1,2,3])

        4. 提取json中的数据
            let { id, status, data: number } = jsonData;      
        
        5. 输入模块的指定方法

            const { SourceMapConsumer, SourceNode } = require("source-map");
*/
