import express from "express";
import ProductController from "./src/controllers/products.controller.js";
import UserController from "./src/controllers/user.controller.js";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import bodyParser from "body-parser";
import addValidateFormData from "./src/middlewares/validation-add.middleware.js";
import updateValidateFormData from "./src/middlewares/validation-update.middleware.js";
import validateUserRegister from "./src/middlewares/validate-register.middleware.js";
import validateUserLogin from "./src/middlewares/validate-login.middleware.js";
import auth from "./src/middlewares/auth.middleware.js";
import { fileUpload } from "./src/middlewares/file-upload.middleware.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import lastVisit from "./src/middlewares/lastVisit.middleware.js";

const server = express();

server.use(
  session({
    secret: "DILEEPRAJORIYA",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

server.use(cookieParser());
server.use(lastVisit);

server.use(express.static("public"));

// setup the ejs view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayout);

server.use(express.static("src/views"));

// setup the bodyparser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// create an instance of ProductController
const productController = new ProductController();
const userController = new UserController();

server.get("/register", userController.getRegisterView);
server.post("/register", validateUserRegister, userController.postRegisterUser);

server.get("/login", userController.getLoginView);
server.post("/login", validateUserLogin, userController.loginUser);
server.get("/logout", userController.logOut);

server.get("/", auth, productController.getProducts);
server.get("/new", auth, productController.getAddForm);
server.get("/update-product/:id", auth, productController.getUpdateProductView);
server.post(
  "/",
  auth,
  fileUpload.single("imageUrl"),
  addValidateFormData,
  productController.addNewProduct
);
server.post(
  "/update-product",
  auth,
  fileUpload.single("imageUrl"),
  updateValidateFormData,
  productController.updateProduct
);
server.post("/delete-product/:id", auth, productController.getDeleteProduct);

server.listen(3100, () => {
  console.log("Server is listening on pert 3400");
});
