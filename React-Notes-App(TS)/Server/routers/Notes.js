const express = require("express");
const router = express.Router();




router.post("/postNote", (req, res) => {
  const {} = req.body;



  return res.send("Add note");
});


router.put("/updateNote:_noteObjectId", (req, res) => {
  const {} = req.body;


  return res.send("Signup");
});


router.delete("/deleteNote:_noteObjectId", (req, res) => {
  const {} = req.body;



  return res.send("Delete");
});


router.get("/getAllNotes:_userObjectId", (req, res) => {

    
  return res.send("Get Notes");
});

module.exports = router;
