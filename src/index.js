require('dotenv').config({path:'src/.env'})
const  express=require("express");
const mongoose=require('mongoose')
const routes=require("./routes/Route")
const app = express();
app.use(express.json());


app.use('/api', routes);


mongoose.connect(process.env.MONGO_URI,{}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
const PORT =process.env.PORT || 8080;
app.listen (PORT ,()=>{
    console.log (`server running on port ${PORT}`)
})
    
