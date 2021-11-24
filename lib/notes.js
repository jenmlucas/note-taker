const fs = require("fs");
const path = require("path");


const createNewNotes = (body, noteArr) => {
    const notes = body;
    noteArr.push(notes);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"), 
        JSON.stringify(noteArr, null, 2)
        );
    return notes;
};

module.exports= {createNewNotes};