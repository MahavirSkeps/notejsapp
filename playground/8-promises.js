// const { rejects } = require("assert");

// const doWorkPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve([7,4,1]);
//         reject('Things went wrong')
//     },2000)

// })

// doWorkPromise.then((res)=>{
//     console.log('Succes!', res);
// }).catch((err)=>{
//     console.log('Error', err);
// })

const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

add(1,4).then((sum)=>{

    console.log(sum);
    add(sum, 5).then((sum2)=>{
        console.log(sum2);
    }).catch((e)=>{
        console.log(e);
    })
}).catch((e)=>{
    console.log(e);
})


add(1,1).then(
    (sum)=>{
        return add(sum, 4)
    }
).then((sum2)=>{
    console.log(sum2);
}).catch((e)=>{
    console.log(e);
})