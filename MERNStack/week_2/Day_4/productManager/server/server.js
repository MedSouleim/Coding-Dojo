const express = require('express')
const cors = require('cors')
const app = express()



app.use(cors(),express.json(),express.urlencoded({extended : true}));

require('dotenv').config()
const PORT = process.env.PORT

require('../server/config/mongoose.config')
require('../server/routes/product.routes')(app);


app.listen(PORT, ()=> console.log(`Listenning on port ${PORT} for requests ✈️`));