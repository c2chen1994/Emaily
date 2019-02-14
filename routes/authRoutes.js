const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user ? req.user : { warning: "You have logged out!" });
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user ? req.user : { warning: "You have not signed in!" });
  });
};
