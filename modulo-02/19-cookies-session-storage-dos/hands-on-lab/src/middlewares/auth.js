function checkLogin(req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  next();
}

function checkLogged(req, res, next) {
  if (req.session.user) return res.redirect("/login");
  next();
}

export { checkLogged, checkLogin };
