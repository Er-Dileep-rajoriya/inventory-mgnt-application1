import { body, validationResult } from "express-validator";

async function validateUserLogin(req, res, next) {
  const rules = [
    body("email").isEmail().withMessage("Email is Required!"),
    body("password")
      .isFloat({ gt: 3 })
      .withMessage("Password is Required and must be at least 3 Digit Long."),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));

  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.render("login", {
      ErrorMessage: validationErrors.array()[0].msg,
      userEmail: req.session.userEmail,
    });
  }

  next();
}

export default validateUserLogin;
