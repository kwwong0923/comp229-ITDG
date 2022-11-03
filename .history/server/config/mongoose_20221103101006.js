const mongoose = require("mongoose");

// set up for MongoDB

module.exports = function()
{
    const db = mongoose.connect(process.env.DB_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=>
        {
            console.log("connected to MongoDB Atlas")
        })
        .catch((e)=>
        {
            console.log("Failed to connect to MongoDB Atlas");
            console.log(e);
        })
}