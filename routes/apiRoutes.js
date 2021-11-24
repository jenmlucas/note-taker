const express = require("express");
const router = express.Router();
let noteContent  = require("../develop/db/db.json");
const {createNewNotes} = require("../lib/notes");

router.get("/notes", (req, res) => {
    res.json(noteContent);
});

router.post("/notes", (req, res) => {
    req.body.id = noteContent.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is missing information");

    } else {
    const newNotes = createNewNotes(req.body, noteContent)
    res.json(newNotes)
    }
});

router.delete("/notes", (req, res) => {
  
    
});


module.exports = router;
// gets and posts and delete 