const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"The Pirate's Name is required ❌❌❌"],
        minlength:[3,"The Pirate's Name must be at least 3 characters ⛔⛔⛔"]
    },

    imageUrl:{
        type:String,
        required:[true,"The Image is required ❌❌❌"],
    },

    treasureChests:{
        type:Number,
        required:[true,"You have to specify the number of Treasure Chests ❌❌❌"],
    },

    catchPhrase:{
        type:String,
        required:[true,"You have to put a Catch Phrase ❌❌❌"],
        minlength:[8,"You must have a catch phrase ⛔⛔⛔"]
    },

    crewPosition:{
        type:String,
        required:[true,"You have to choose a position ❌❌❌"]

},

hook:{
    type:Boolean,
    default:true
},
eyePatch:{
    type:Boolean,
    default:true
},
pegLeg:{
    type:Boolean,
    default:true
}

}, {timestamps:true})

const Pirate = mongoose.model("Pirate",PirateSchema);
module.exports = Pirate;
