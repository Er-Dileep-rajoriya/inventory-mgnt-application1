import { body, validationResult } from "express-validator";

const addValidateFormData = async (req, res, next) => {
  // step 1) setup the rules or define the ruls
  const rules = [
    body("name").notEmpty().withMessage("Name is Required!"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a Positive Value!"),
    // body("imageUrl").isURL().withMessage("image Url is Required!"),
    body("imageUrl").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("File is Required!");
      }
      return true;
    }),
  ];

  // step 2) run those rules which we have defined above
  await Promise.all(rules.map((rule) => rule.run(req)));

  // step 3) find the errors if there is any error
  let validationErrors = validationResult(req);
  console.log(validationErrors);
  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      ErrorMessage: validationErrors.array()[0].msg,
      userEmail: req.session.userEmail,
    });
  }

  next();

  //   const { name, price, desc, imageUrl } = req.body;
  //   let errorMessage;

  //   if (!name || name.trim() == "") {
  //     errorMessage = "Name is Required!";
  //   }

  //   if (!price || price <= 0) {
  //     errorMessage = "Price is required or must be greater than 0.";
  //   }

  //   if (!desc) {
  //     errorMessage = "Description is Required!";
  //   }

  //   try {
  //     new URL(imageUrl);
  //   } catch (err) {
  //     errorMessage = "Invalid Image Url!";
  //   }

  //   // if there is any error message
  //   if (errorMessage) {
  //     return res.render("new-product", { ErrorMessage: errorMessage });
  //   }

  //   next();
};

export default addValidateFormData;
