//  Crud create read and update
// const express = require('express')
// const mongodb =  require('mongodb') 

const {MongoClient, ObjectId} = require('mongodb')

// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1' 
const databaseName = 'task-manager'




MongoClient.connect(connectionURL, { useNewUrlParser:true }, (err, client)=>{
    if(err){
        console.log('Unable to Connect Database');
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany(
        {age:22},{

        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })


   
})

 