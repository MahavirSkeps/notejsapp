const fs = require("fs")
// const book ={
// title: 'Ego is the enemy',
// author: 'mahavir'
// }

// const bookJSON =JSON.stringify(book)
// console.log(bookJSON);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)



data.name = 'mahavir'
data.age = '21'
data.planet = 'pluto'
console.log(data);

const userJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json',userJSON)

//  fs.writeFileSync('1-json.json',bookJSON)

// const parseddata = JSON.parse(bookJSON)
// console.log(parseddata.author)