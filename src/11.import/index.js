/* 

    导出
    1. import { a } from ...   export { a=0 }

    2. export { a as newa }  import { newa }

    3. export var a = 20  import {n}

    4. export default 模块默认导出  除了指定导出的模块，还有默认导出的模块，可导出  变量  function object class

    导入

    1. import {a as newa}

    2. import * as tool 

    注意事项
    一个模块中导入了另一个模块， 导入模块中不能修改  被导入的js的常量， 但是可以暴露一些方法用于修改被导入的js 里面的常量

*/