require('../src/db/mongoose')

const User = require('../src/models/user')
const Task =  require('../src/models/task')

// User.findByIdAndUpdate('64b9170495752c77f723786f',{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result);

// }).catch((e)=>{
//     console.log(e);
// })

Task.findByIdAndDelete('64b932faacd8fb6301790501').then((task)=>{
    console.log(task);
    return Task.countDocuments({completed: false}).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        res.send(e);
    })
})