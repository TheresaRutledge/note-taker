const express = require('express');
const PORT = process.env.PORT || 3001;
const {notes} = require('./db/db.json');
const { networkInterfaces } = require('os');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fs = require('fs');
const path = require('path');

//API to access existing notes
app.get('/api/notes',(req, res) => {
    console.log(notes);
    res.json(notes);
});

//API to create new note
app.post('/api/notes',(req,res) =>{
    console.log(notes);
    saveToNotes(req.body,notes);
    res.send(notes)
});

//saves new note to db.json object
saveToNotes=(newNote, notesArray)=>{
    let id = notesArray.length;
    newNote.id = id;
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname,'./db/db.json'),JSON.stringify({notes: notesArray}),null,2);
    return networkInterfaces;
}

app.listen(PORT,()=> {
    console.log(`Server now on ${PORT}`);
})