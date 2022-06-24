const express = require("express");
const productRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const Product = require("../models/Products");

productRouter.post(
  "/newproduct",
  passport.authenticate("admin-rule", { session: false }),
  (req, res) => {
    const { category, title, description, price } = req.body;
    const newProduct = new Product({
      category,
      title,
      description,
      price,
    });
    newProduct.save((err) => {
      if (err) {
        res.status(500).json({
          message: { msgBody: "An error occured when trying to add a product", msgError: true },
        });
      } else {
        res.status(201).json({
          message: {
            msgBody: "Successfully added new product",
            msgError: false,
          },
        });
      }
    });
  }
);

productRouter.get("/allproducts", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "An error occured when trying to get all products", msgError: true },
      });
    } else {
      res.status(200).json({
        products,
        message: { msgBody: "Successfully got all products", msgError: true },
      });
    }
  });
});

productRouter.get("/:id", (req, res) => {
  Product.findById({_id: req.params.id}, (err, products) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "An error occured when trying to get a product", msgError: true },
      });
    } else {
      res.status(200).json({
        products,
        message: { msgBody: "Successfully got the product", msgError: true },
      });
    }
  });
});

productRouter.get("/category/:category", (req, res) => {
  Product.find({category: req.params.category}, (err, products) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: "An error occured when trying to get this category!", msgError: true },
      });
    } else {
      res.status(200).json({
        products,
        message: { msgBody: "Successfully got the products in this category!", msgError: true },
      });
    }
  });
});

productRouter.put(
  "/updateproducts/:id",
  passport.authenticate("admin-rule", { session: false }),
  (req, res) => {
    const { category, title, description, price } = req.body;
    Product.findByIdAndUpdate(
      { _id: req.params.id },
      { category, title, description, price },
      (err) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "An error occured when trying to update product", msgError: true },
          });
        } else {
          res.status(200).json({
            message: {
              msgBody: "Updated",
              msgError: false,
            },
          });
        }
      }
    );
  }
);

productRouter.delete(
  "/deleteproduct/:id",
  passport.authenticate("admin-rule", { session: false }),
  (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({
          message: { msgBody: "An error occured when trying to delete a product", msgError: true },
        });
      } else {
        res.status(200).json({
          message: {
            msgBody: "Deleted",
            msgError: false,
          },
        });
      }
    });
  }
);

module.exports = productRouter;
