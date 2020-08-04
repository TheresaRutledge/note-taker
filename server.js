const express = require('express');
const PORT = process.env.PORT || 3001;
const {notes} = require('./db/db.json');
const { networkInterfaces } = require('os');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const fs = require('fs');
const path = require('path');
const e = require('express');

//API to access existing notes
app.get('/api/notes',(req, res) => {
    res.json(notes);
});

//API to create new note
app.post('/api/notes',(req,res) =>{
  if(req.body.title){
    saveToNotes(req.body,notes);
    res.send(notes)
  } else {
      res.status(400).send('Must give note a title');
  }
});

//saves new note to db.json object
saveToNotes=(newNote, notesArray)=>{
    let id = notesArray.length+1;
    newNote.id = id;
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname,'./db/db.json'),JSON.stringify({notes: notesArray}),null,2);
    return networkInterfaces;
}
//route to landing page
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'./public/index.html'))
});

// route to notes page
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'));
})

app.listen(PORT,()=> {
    console.log(`Server now on ${PORT}`);
})