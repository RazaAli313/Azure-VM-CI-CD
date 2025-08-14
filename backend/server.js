const  app =require('express')()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')


const MONGO_URI=process.env.MONGO_URI
const PORT=process.env.PORT
app.use(cors())

app.get('/',(req,res)=>{
    res.send(`Backend is running at ${PORT}`)
})

mongoose.connect(MONGO_URI)
.then(()=>
console.log("Mongo DB connected"))
.catch(error=>console.log("Error connecting MongoDB"))


app.listen(PORT,"0.0.0.0",()=>console.log(`Server is running at ${PORT}`))


