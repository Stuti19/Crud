const mongoose=require("mongoose")
const DB="mongodb+srv://stutib19:Netflix123@cluster0.axlfy3g.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));