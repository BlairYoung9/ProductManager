const Product = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", Product.findAll)
    app.post("/api/products", Product.create)
    app.get("/api/products/:id", Product.findOne)
    app.put("/api/products/:id", Product.update)
    app.delete("/api/products/:id", Product.delete)
}
