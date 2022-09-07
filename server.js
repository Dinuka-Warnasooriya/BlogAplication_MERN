const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

//import routes
const postRoutes = require('./routes/posts')


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000
const DB_URL ='mongodb+srv://Dinuka:dinuka@cluster0.lmf46j3.mongodb.net/?retryWrites=true&w=majority'

//set up DB connection
mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("DB Connection error",err)
})

//Port setup
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})

