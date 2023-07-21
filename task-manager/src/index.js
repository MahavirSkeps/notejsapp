const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter);
app.use(taskRouter)

// app.post('/users', (req, res)=>{
//     const user = new User(req.body)
//     user.save().then(()=>{
//         res.send(user)
//     }).catch((err)=>{
//         res.status(400)
//        res.send(err)
//     })
 
// })

app.listen(port, ( )=>{
    console.log("server is running at 3000 port", + port);
})
