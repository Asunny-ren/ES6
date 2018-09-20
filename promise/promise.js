// pending（进行中）、fulfilled（已成功）、rejected（已失败）
let promise = new Promise((resolve, reject) => {
    // some code
    if('success'){
        resolve(value);
    }else{
        reject(error);
    }
})

promise.then((value) => {
    // success
}, (error) => {
    // error
})