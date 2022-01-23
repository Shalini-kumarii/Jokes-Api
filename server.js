const express = require("express");
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

// 1. connect mongodb by requiring the file here
require("./config/mongoose.config");
// 2. create mongoose schema
// 3. use mongoose model to make CRUD functions -> controller
// 4. create routes to execute the functions to the db

// const AllMyUserRoutes = require("./routes/user.routes");
// AllMyUserRoutes(app);
require("./routes/user.routes")(app);


app.listen(PORT, () => console.log(`server up on PORT: ${PORT}`));