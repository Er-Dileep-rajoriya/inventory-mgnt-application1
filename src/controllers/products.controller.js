import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let Products = ProductModel.get();

    console.log(Products);

    return res.render("products", {
      Products,
      userEmail: req.session.userEmail,
    });

    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }

  // method to show the add new product form
  getAddForm(req, res) {
    return res.render("new-product", {
      ErrorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  // method to submit the form and show the products view
  addNewProduct(req, res) {
    console.log(req.body);
    const imageUrl = "images/" + req.file.filename;
    let Products = ProductModel.add(req.body, imageUrl);

    return res.render("products", {
      Products,
      userEmail: req.session.userEmail,
    });
  }

  // method to get the view of update product
  getUpdateProductView(req, res) {
    const id = req.params.id;

    const productFound = ProductModel.getById(id);

    if (productFound) {
      return res.render("update-product", {
        product: productFound,
        ErrorMessage: null,
        userEmail: req.session.userEmail,
      });
    } else {
      return res.send("Product Not Found!");
    }
  }

  updateProduct(req, res) {
    let imageUrl = "images/" + req.file.filename;

    let Products = ProductModel.update(req.body, imageUrl);

    res.redirect("/");
    // return res.render("products", { Products });
  }

  // delete the product by their id
  getDeleteProduct(req, res) {
    const id = req.params.id;

    const Products = ProductModel.deleteById(id);

    return res.render("products", {
      Products,
      userEmail: req.session.userEmail,
    });
  }
}
