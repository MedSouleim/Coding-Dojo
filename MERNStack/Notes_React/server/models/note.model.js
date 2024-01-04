const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , '{PATH} is required'],
        minLength : [3, '{PATH} must be at least 3 chars'],
        trim : true,
    },
    content : {
        type : String,
        trim : true,
        required : [true, '{PATH} is required'],
        minLength : [3, '{PATH} must be at least 3 chars'],
    },
    isImportant :{
        type : Boolean,
        default : false,
    },
},
{timestamps : true}
);

module.exports = mongoose.model('Note', NoteSchema);