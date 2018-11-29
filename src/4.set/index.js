/* 

    set 数据结构

    new Set

    1. size 方法
    2. add 方法
    3.返回值仍是一个set 方法
    4. delete方法 返回当前数组是否成功
    5. has 方法，判断某一个值存不存在， 返回true 或者false
    6. clear 方法， 清空

    7. forEach  方法， forEach(item, index, set) item 项，index 索引， set 返回数据本身

    8. keys() 方法 返回一个setIntator 对象   ，这个对象有next方法，返回的是 {value: value, done: false/true}  done表示是否遍历结束

    9. values() 方法 ，keys方法遍历的是项， values遍历的是 值

    10. entries 方法， 返回的是 {done: true/ false, value: [value, index]


    特点：
    只会保存唯一的一个值

    去重
    var arr = [1,2,3,4,5,6,1,2,4]

    var newArr = new Set(arr)
    将set结构变成数组  [...newArr]   或者用数组的 Array.from(newArr)  

*/