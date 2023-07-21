
const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

module.exports = router

router.get('/task', (req, res)=>{
    Task.find({}).then((task)=>{
        res.send(task)

    }).catch((e)=>{
        res.status(500)
        res.send(err)

    })
})
router.get('/task/:id', (req, res)=>{
    const _id = req.params.id
    Task.findById(_id).then((task)=>{
        if(!task){
            res.status(404).send("task not found")
        }
        res.send(task)

    }).catch((e)=>{
        res.status(500)
        res.send(e)
    })
   
})
router.post('/task', (req, res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch((err)=>{
        res.status(400)
       res.send(err)
    })
})

router.patch('/task/:id', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({'error': 'invalid arguement'})
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!task)
        {
            return res.status(404).send('task not found')
        }
        res.send(task)

    }
    catch(e){
          res.send(e).status(400)
    }

})
