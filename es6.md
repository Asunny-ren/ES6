# ES6

* 兼容性[http://kangax.github.io/compat-table/es6/]

    IE 10+、 chrome 、Firefox 、移动端、 nodejs

==mark==
    
    1. 变量
    2. 函数
    3. 数组
    4. 字符串
    5. 面向对象
    6. promise
    7. generator
    8. 模块化
    

## 变量

``` hash
    var 
    可以重复声明
    无法限制修改
    没有块级作用域

    let 
    不能重复声明
    变量-可以修改
    块级作用域


    const
    不能重复声明
    常量-不可以修改
    块级作用域
```

## 函数

``` js
    function a () {

    }
```

## 箭头函数

``` js
    () => {

    }
```

如果只有一个参数, ()可以省略
如果只有一个return, {}可以省略


## 参数

> 收集剩余参数，rest parameter必须是最后一位

``` js
    let paramTest = (a, b, ...arguments) => {
        alert(a);
        alert(b);
        alert(arguments)
    }

    paramTest(1, 2, 4, 5, 7);

```

> 展开数组

``` js
    let arr1 = [1, 2, 3];
    let arr2 = [5, 6, 7];

    let arr = [...arr1, ...arr2];

    alert(arr);// [1, 2, 3, 5, 6, 7]
```

``` js
    let arr = [1, 2, 3];

    // ...arr 等价于

    // 1, 2, 3

    let show = (a, b, c) => {
        alert(a);
        alert(b);
        alert(c);
    }

    show(...arr);

```

> 特殊点

``` js
    let arr = [1, 2, 3];

    let a;

    a = ...arr; // error: Unexpexted token
    alert(a);
```

``` js
    let a = 1, 2, 3; //Unexpected number
    alert(a); 


    //  下面这种情况不会报错
    let a;
    a = 1, 2, 3;
    alert(a); // 1
```

``` js
    let show = (...args) => {
        fn(...args);
    }

    let fn = (a, b) => {
        alert(a + b);
    }

    show(1, 2); // 3 在ES6中变量和函数的调用必须在定义之后

```

### 默认参数

``` js
    let show = (a, b=5, c=6) => {
        console.log(a, b, c);
    }

    show(2); // 2 5 6


    show(2, 7, 8); // 2 7 8
```

## 解构赋值

 > 左右两边结构必须一样

 > 右边必须是个东西

 > 声明和赋值不能分开（必须在一句话中完成）

``` js
    let [a, b, c] = [1, 2, 3];
    console.log(a, b, c); // 1 2 3

    let [{a1, b1}, [n1, n2, n3], num , str] = [{a1: 2, b1: 3}, [4, 5, 6], 99 , 'abc'];

    console.log(a1, b1, n1, n2, n3, num, str) //2 3 4 5 6 99 'abc'
```

``` js
    let [obj, arr, num , str] = [{a1: 2, b1: 3}, [4, 5, 6], 99 , 'abc'];

    console.log(obj, arr ,num str) // {a1: 2, b1: 3} [4, 5, 6] 99 'abc'
```


## 数组

> map

``` js
    let arr = [12, 5, 8];

    let result = arr.map((item) => {
        return item * 2;
    })

    // 一个参数可以省略 ()
    // let result = arr.map(item => {
    //     return item * 2;
    // })

    // 一个return可以省略 {}和return,注意没有return
    // let result = arr.map(item => item * 2)

    alert(result); // Array [24, 10, 16],不改变原数组
```

> reduce

``` js
    let arr = [12, 133, 145, 1123];
    
    // tmp 是一个中间值， item当前值， index下标, 返回最终值
    let result = arr.reduce(function (tmp, item, index) {
        return tmp + item;
    })
    alert(result);
```


> filter

``` js
    let arr = [23,12,3,4,5,34,1233];

    let result = arr.filter(item => item%3 === 0);
    alert(result);
```

> forEach

``` js
    let arr = [12,23,123,1123];

    let result = arr.forEach((item, index) => {
        console.log(index + ': ' + item);
    }) 
```


## 字符串

> startsWith

``` js
    let str = 'https://www.baidu.com';

    str.startsWith('a'); // true
```

> endsWith

``` js
    let str = '';

    str.startsWith('a'); // true
```

> 字符串模版

``` js
    let a = `abc`;

    let b = 12;

    let str = `a${b}bc`; // a12bc

    let title  = 'title';

    let content = 'abc';


    // 可以折行。可以插值
    let str2 = `<div>
                <h1>${title}</h1>
                <p>${content}</p>
                </div>`;
```


## 面向对象

``` js
    // 原始写法
    function User (name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }

    User.prototype.showName = function () {
        console.log(this.name);
    }

    User.prototype.showPwd = function () {
        console.log(this.pwd);
    }

    var user = new User('rjd', 123456);
    user.showName();
    user.showPWd();


    // ES6写法
    class User {
        constructor(name, pwd) {
            this.name = name;
            this.pwd = pwd;
        }
        showName() {
            console.log(this.name);
        }
        showPwd() {
            console.log(this.pwd);
        }
    }

    let user = new User('rjd', 123456);
    user.showName();
    user.showPwd();
```

``` js
    // 面向对象继承，原始写法
    function User (name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }

    User.prototype.showName = function () {
        console.log(this.name);
    }

    User.prototype.showPwd = function () {
        console.log(this.pwd);
    }

    function vipUser(name, pwd, lvl) {
        User.call(this, name, pwd);

        this.lvl = lvl;
    }

    vipUser.prototype = new User();
    vipUser.prototype.constructor = vipUser;
    vipUser.prototype.showLvl = function () {
        console.log(this.lvl);
    }

    var vuser = new vipUser('rjd', 123456, 3);
    vuser.showName();
    vuser.showPwd();
    vuser.showLvl();


    // ES6写法，还是这种写法清晰明了简单
    class user {
        constructor(name, pwd) {
            this.name = name;
            this.pwd = pwd;
        }
        showName() {
            console.log(this.name);
        }
        showPwd() {
            console.log(this.pwd);
        }
    }

    class vipUser extends user {
        constructor(name, pwd, lvl) {
            // 超类
            super(name, pwd);

            this.lvl = lvl;
        }
        showLvl() {
            console.log(this.lvl);
        }
    }

    let vuser = new vipUser('rjd', 123456, 3);
    vuser.showName();
    vuser.showPwd();
    vuser.showLvl();
```

## JSON

``` js
    let json = {a: 1, b: 2};

    let str = 'http://www.baidu.com?data=' + encodeURIComponent(JSON.stringify(json));

    // encodeURIComponent()
    //可把字符串作为URI组件进行编码。其返回值URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
```

> 简写

``` js
    let a = 2;
    let b = 3;

    let json = {a, b, c: 12};

    console.log(json);
    // {a: 2, b: 3, c: 12}

    // 函数简写
    let obj = {
        a,
        show() {
            console.log(this.a);
        }
    }
```

## promise

``` js
    let p = new Promise((resolve, reject) {
        $.ajax({
            url: '1.txt',
            dataType: 'json',
            success(results) {
                resolve(results);
            },
            error(err) {
                reject(err);
            }
        })
    })

    p.then((res) => {
        console.log(res);
    },(err) => {
        console.warn(res);
    })

```

``` js
// 

    let p1 = new Promise((resolve, reject) {
        $.ajax({
            url: '1.txt',
            dataType: 'json',
            success(results) {
                resolve(results);
            },
            error(err) {
                reject(err);
            }
        })
    })

    let p2 = new Promise((resolve, reject) {
        $.ajax({
            url: '1.txt',
            dataType: 'json',
            success(results) {
                resolve(results);
            },
            error(err) {
                reject(err);
            }
        })
    })

    Promise.all([p1, p2])
        .then((res) => {
            let [res1, res2] = res;
        }, (err) => {
            console.log(err);
        })
```


``` js
    let createPromise = (url) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                dataType: 'json',
                success(res) {
                    resolve(res);
                },
                error(err) {
                    reject(err);
                }
            })
        })
    }

    Promise.all([
        createPromise(url1),
        createPromise(url2)
    ]).then((res) => {
        let [res1, res2] = res;
    }, (err) => {
        console.log(err);
    })
```

``` js
    // 较新版本的jquery
    let p = $.ajax({
        url: 'path',
        dataType: 'json'
    })

    console.log(p);
```

``` js
    Promise.all([
        $.ajax({url: 'path', dataType: 'json'}),
        $.ajax({url: 'path2', dataType: 'json'})
    ]).then((res) => {
        let [res1, res2] = res;
    }, (err) => {
        console.log(err);
    })
```


``` js
    // Promise.race()
    // 多个负载点，哪个快用哪个
    Promise.race([
        $.ajax({url: 'path1', dataType: 'json'}),
        $.ajax({url: 'path2', dataType: 'json'}),
        $.ajax({url: 'path3', dataType: 'json'}),
        $.ajax({url: 'path4', dataType: 'json'})
    ])
```


## generator

``` js

```