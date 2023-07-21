

const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("Numbers must be non negetaive")
            }
            resolve(a+b)
        },1000)
    })
}

const doWork = async ()=>{
   const sum =  await add(1,98);
   const sum2 = await add(sum, 2);
   const sum3 = await add(-2, sum2);
   return sum3;
}

doWork().then((res)=>{
    console.log('result', res);
}).catch((e)=>{
    console.log(e);
})