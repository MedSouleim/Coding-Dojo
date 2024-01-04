const NotesController = require ('../controllers/note.controller');


module.exports = (app) =>{
    app.get('/api/notes',NotesController.findAllNotes);
    app.get('/api/notes/:id', NotesController.findOneSingleNote);
    app.post('/api/notes', NotesController.createNewNote);
    app.patch('/api/notes/:id', NotesController.updateExistingNote);
    app.delete('/api/notes/:id', NotesController.deleteAnExistingNote);
}