import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
class UserController {
  // getting the register view
  getRegisterView(req, res) {
    return res.render("register", {
      ErrorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  // register the user
  postRegisterUser(req, res) {
    UserModel.register(req.body);
    console.log("Registration is Success...");

    return res.render("login", {
      ErrorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  // getting the login view
  getLoginView(req, res) {
    return res.render("login", {
      ErrorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  // login-in the user
  loginUser(req, res) {
    const user = UserModel.login(req.body);

    if (user) {
      const Products = ProductModel.get();

      req.session.userEmail = req.body.email;
      return res.render("products", {
        Products,
        userEmail: req.session.userEmail,
      });
    }

    // invalid credientials
    return res.render("login", {
      ErrorMessage: "Invalid Credientials or Register First",
      userEmail: req.session.userEmail,
    });
  }

  // log-out the user
  logOut(req, res) {
    // destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log("Error in logout : ", err);
      } else {
        res.redirect("/login");
      }
    });
  }
}

export default UserController;
