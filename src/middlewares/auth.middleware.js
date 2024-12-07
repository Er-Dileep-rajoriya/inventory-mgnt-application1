function auth(req, res, next) {
  if (!req.session.userEmail) {
    return res.redirect("/login"); // Redirect if the user is not authenticated
  }

  next(); // Proceed to the next middleware if authenticated
}

export default auth;
