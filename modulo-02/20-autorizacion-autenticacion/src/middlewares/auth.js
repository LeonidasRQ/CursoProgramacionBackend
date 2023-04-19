function checkLogin(req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  next();
}

function checkLogged(req, res, next) {
  if (req.session.user) return res.redirect("/login");
  next();
}

function checkSession(req, res, next) {
  if (req.session.user) return res.redirect("/");
  next();
}

export { checkLogged, checkLogin, checkSession };
