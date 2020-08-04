const express = require('express');
const PORT = process.env.PORT || 3001;
const {notes} = require('./db/db.json');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/api/notes',(req, res) => {
    res.json(notes);
});

app.post('/api/notes',(req,res) =>{
    saveToNotes(req.body);
    res.send(notes)
});


saveToNotes=(newNote)=>{
    notes.push(newNote);
}

app.listen(PORT,()=> {
    console.log(`Server now on ${PORT}`);
})