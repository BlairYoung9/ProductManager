const Product = require("../models/product")

module.exports = {

    //READ ALL
    findAll: (req,res) => {
        Product.find()
            .then(allProducts => res.json({products: allProducts}))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //CREATE
    create: (req,res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //READ ONE
    findOne: (req,res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //UPDATE
    update: (req,res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch(err => res.json({message: "error res", error : err}))
    },

    //DELETE
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "error res", error : err}))
    }

}