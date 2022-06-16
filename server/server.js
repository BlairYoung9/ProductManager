const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8001;
const DB = "products_db";

//middleware
app.use(cors(), express.json(), express.urlencoded({extended: true}));

//database connection
require("./config/mongoose.config")(DB);

//connect the routes
require("./routes/product.routes")(app);

app.listen(PORT, () => {
    console.log(`**** server up on ${PORT} ****`)
})