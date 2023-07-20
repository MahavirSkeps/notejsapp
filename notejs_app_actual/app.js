const yargs = require('yargs')
const notes = require('./notes')





yargs.command({
    command: 'add',
    describe: ' add a new note',
    builder:{
        title:  {
            describe: 'Note title',
            demandoption: true,
            type: 'string'
        },
        body: {
            describe:  'Note Body',
            demandoption: true,
            type: 'string'
        }
    },
    handler: function(argv){
    notes.addNote(argv.title, argv.body)   
    }

})
yargs.command({
    command: 'remove',
    describe: ' remove a new note',
    builder:{
        title:  {
            describe: 'Note title',
            demandoption: true,
            type: 'string'
        },
        // body: {
        //     describe:  'Note Body',
        //     demandoption: true,
        //     type: 'string'
        // }
    },
    handler: function(argv){
    notes.removeNote(argv.title)   
    }

})

yargs.command({
    command: 'list',
    describe: ' listing a new note',
    handler: function(){
        notes.listNotes();
    }

})

yargs.command({
    command: 'read',
    describe: ' read a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandoption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandoption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})


// yargs.parse()
// console.log(process.argv);
console.log(yargs.argv);


