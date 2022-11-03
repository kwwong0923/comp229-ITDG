// require modules
const app = require("./server/config/express");
const mongoose = require("./server/config/mongoose");

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"))

