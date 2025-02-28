const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://subodh:Subodh123@cluster0.3qz14.mongodb.net/E-comperf?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}