const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const cors = require('cors')
const Explore  = require('./models/explore')
const Puja  = require('./models/puja')



const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
const PORT = 3300

connectDB()
app.post('/addexplore', async(req,res)=>{
    try{
        const newData = new Explore(req.body)
        newData.save()
        return res.json(await Explore.find())

    }catch(err){
        console.log(err.message)
    }

})

app.get('/getallexplore', async(req,res)=>{
    try{
        const allData = await Explore.find()
        return res.json(allData)
    }catch(err){
        console.log(err.message)
    }
})

app.post('/addpuja', async(req,res)=>{
    try{
        const newData = new Puja(req.body)
        newData.save()
        return res.json(await Puja.find())

    }catch(err){
        console.log(err.message)
    }

})
app.get('/getallpooja', async(req,res)=>{
    try{
        const allData = await Puja.find()
        return res.json(allData)
    }catch(err){
        console.log(err.message)
    }
})
app.get('/puja/:id', async(req,res)=>{
    const { id } = req.params;
    console.log(id)
    try{
        const data = await Puja.findById(id)
        return res.json(data)
    }catch(err){
        console.log(err.message)
    }
})



app.listen(PORT, ()=>{
    console.log(`server is running fine on  http://localhost:${PORT}`)
})

