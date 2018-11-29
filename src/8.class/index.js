/* 

没有es6之前用的 是构造函数方法创造对象，

    1.函数方法创建对象属性时候，用this ，加到实例对象上， class 用 constructor 方式模拟对象的属性

    2. 静态方法  需要加 static  ,静态属性 直接在  person 类上直接加  Person.。。就可以了

    3. class 继承 用 class coder extends Person ,但是需要注意 coder 的属性继承过来了，
    如果想增加一些属性的话就得用  super()方法，并在方法中方法中传入Person需要传入的参数

    4. coder 继承了 Person 之后，属性，方法， 静态方法都是继承下来了，如果想修改实例方法，就同名修改父级方法，不会影响到父级


*/