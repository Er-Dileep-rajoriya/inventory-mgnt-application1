import { body, validationResult } from "express-validator";
async function validateUserRegister(req, res, next) {
  // create a rules
  const rules = [
    body("name").notEmpty().withMessage("Name is Required!"),
    body("email").isEmail().withMessage("Email is Required!"),
    body("password")
      .isFloat({ gt: 3 })
      .withMessage("Password is Required and must be at least 3 Digit Long."),
  ];

  // run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.render("register", {
      ErrorMessage: validationErrors.array()[0].msg,
      userEmail: req.session.userEmail,
    });
  }

  next();
}

export default validateUserRegister;
