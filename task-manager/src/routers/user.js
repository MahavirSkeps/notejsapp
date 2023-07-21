
const express = require('express')
const User = require('../models/user')
const router = new express.Router()


module.exports = router

router.post('/users', async (req, res)=>{
    const user = new User(req.body)
   ;
    try{
        await user.save();
        res.send(user)
    } catch(e){

        res.status(400).send("error aa gyabbahi");
        


    }
    // // user.save().then(()=>{
    // //     res.send(user)
    // }).catch((err)=>{
    //     res.status(400)
    //    res.send(err)
    // })
 
})
// app.get('/users', (req, res)=>{
//     User.find({}).then((users)=>{
//         res.send(users)

//     }).catch((e)=>{
//         res.status(500)
//         res.send(err)

//     })
// })
router.get('/users', async (req, res)=>{
    const users = User.find({});
    try{
        res.send( await users)
    }
    catch(e){
     return res.status(500).send(e)
    }
   
})
router.get('/users/:id', (req, res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            res.status(404).send("user not found")
        }
        res.send(user)

    }).catch((e)=>{
        res.status(500)
        res.send(e)
    })
   
})


router.patch('/users/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email','password','age']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({'error': 'invalid arguement'})
    }
    try{
        const user =await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!user)
        {
            return res.status(404).send('user not found')
        }
        res.send(user)

    }
    catch(e){
          res.send(e).status(400)
    }
})