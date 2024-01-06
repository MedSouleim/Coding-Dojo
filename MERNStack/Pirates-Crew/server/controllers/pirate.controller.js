const Pirate = require('../models/pirate.model')

module.exports = {

    findAll : (req,res) => {
        Pirate.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE FROM FIND ALL ✅ :",dbResponse)
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR ❌ :",dbError)
            res.status(400).json(dbError)
        })
    },

    findOne:(req,res) => {
        Pirate.findById(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE FROM FIND ONE ✅ :",dbResponse)
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR ❌ :",dbError)
            res.status(400).json(dbError)
        })
    },
    
    create:(req,res) => {
        Pirate.create(req.body)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  ✅ :",dbResponse)
            res.status(201).json(dbResponse)
        })

        .catch(dbError => {
            console.log("DATABASE ERROR ❌ :",dbError.errors)
            res.status(400).json(dbError.errors)
        })
    },

    update:(req,res) => {
        Pirate.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  ✅ :",dbResponse)
            res.status(200).json(dbResponse.errors)
        })

        .catch(dbError => {
            console.log("DATABASE ERROR ❌ :",dbError)
            res.status(400).json(dbError)
        })
    },
    
    delete:(req,res) => {
        Pirate.findByIdAndDelete(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  ✅ :",dbResponse)
            res.status(200).json(dbResponse)
        })

        .catch(dbError => {
            console.log("DATABASE ERROR ❌ :",dbError)
            res.status(400).json(dbError)
        })
    }
    

}
