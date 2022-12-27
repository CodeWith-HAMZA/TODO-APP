const express = require("express");
const router = express.Router();




router.post("/composeNote", (req, res) => {
  const {} = req.body;



  return res.send("Add note");
});


router.put("/updateNote:_id", (req, res) => {
  const {} = req.body;


  return res.send("Signup");
});


router.delete("/deleteNote:_id", (req, res) => {
  const {} = req.body;



  return res.send("Delete");
});


router.get("/getAllNotes", (req, res) => {

    
  return res.send("Get Notes");
});

module.exports = router;
