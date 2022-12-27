const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const {} = req.body;
  return res.send("Login");
});


router.post("/signup", (req, res) => {
    const {} = req.body;
  return res.send("Signup");
});

module.exports = router;
