require('../src/db/mongoose')

const User = require('../src/models/user')
const Task =  require('../src/models/task')


const updataeAgeAndCount=  async(id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age});
    console.log(user);
    const count = User.countDocuments({age});
    // console.log(count);
    return count;
}
// User.findByIdAndUpdate('64b9170495752c77f723786f',{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result);

// }).catch((e)=>{
//     console.log(e);
// })

updataeAgeAndCount('64b9170495752c77f723786f', 3).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
