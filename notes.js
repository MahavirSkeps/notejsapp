// const chalk  = require('chalk')
const { log } = require('console')
const fs = require('fs')


const getNotes = function(){
    return 'your Notes'
}

const addNote = function (title, body){
const notes = loadNotes()
const duplicateNote = notes.find((note)=> note.title === title)
const duplicateNotes = notes.filter( function(note){
return note.title == title
})
// console.log("duplicate nodes", duplicateNotes);
if(!duplicateNote){
    notes.push({
        title:title,
        body: body
    })
    
    saveNotes(notes);
    console.log("New Note Added");s
}
else{
    console.log("Note Title Taken")
}
}

const removeNote = function(title){
     const notes = loadNotes()
     const notesToKeep = notes.filter(function(note){
       return note.title != title
     })
     saveNotes(notesToKeep)
}


const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')  
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    }
    catch(e){
       return[]
    }
}

const listNotes=()=>{
   const notes = loadNotes()
   console.log("your notes")
   notes.forEach(note=> {
    console.log(note.title);
   });
}

const  readNote = (title)=>{
const notes = loadNotes()
const note = notes.find((note)=> note.title === title)
if (note){
    console.log(note.title)
    console.log(note.body)
}
else
console.log("note not fond")

}
const saveNotes = function(notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
 
}


module.exports ={
    getNotes:  getNotes,
    addNote : addNote ,
    removeNote: removeNote  ,
    listNotes: listNotes,
    readNote: readNote
}