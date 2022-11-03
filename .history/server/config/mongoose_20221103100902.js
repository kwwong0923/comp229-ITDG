const mongoose = require("mongoose");

// set up for MongoDB

module.exports = function()
{
    const db = mongoose.connect(process.env.DB_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(())
}