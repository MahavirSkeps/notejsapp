const express = require('express')
const hbs = require('hbs')
const path = require('path')



const app = express()

// console.log(__dirname);
console.log(path.join(__dirname, '../public'));


// define paths for 
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//setup handlers

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title :"rendering view",
        name: 'mahavir'
    })
})

app.get('/help', (req, res)=>{

    res.render('help',{
        title :"rendering view help",
        name: 'mahavir'
    })
})
app.get('/about', (req, res)=>{
    res.render('about',{
        title :"rendering view about",
        name: 'mahavir'
    })
})

app.get('/weather', (req, res)=>{
    res.send('Hello Express weather')
})

app.get('/products', (req, res)=>{
    console.log(req.query);
    res.send(
        {produts : []

        }
    )
})

app.get('*', (req,res)=>{
    res.send('My 404 page')
})

app.listen(3000, ()=> {
    console.log("Server is running 3000");
})