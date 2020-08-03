const express = require('express');
const app = express();
const {notes} = require('./db/db.json');


app.get('/api/notes',(req, res) => {
    res.send(notes);
})

app.listen(3001,()=> {
    console.log('Server now on 3001');
})