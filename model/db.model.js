const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ansh:anshviyogi@cluster0.ujre40e.mongodb.net/?retryWrites=true&w=majority',(err,result)=>{
    if(err) console.log(err)
    else console.log("Database Connected")
})

module.exports = mongoose