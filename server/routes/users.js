const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Items = require("../models/Items")

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});



router.patch("/me", (req, res, next)=>{
  User.findByIdAndUpdate(req.session.currentUser)
  .then((userDoc)=>{
    res.status(200).json(userDoc)
  })
  .catch((error)=>{
    console.log("err", error);
    res.status(500).json(error);
  })
});


router.get("/me", (req, res, next)=>{
  User.findById(req.session.currentUser)
  .then((userDoc)=>{
    res.status(200).json(userDoc)
  })
  .catch((error)=>{
    console.log("err", error);
    res.status(500).json(error);
  })
});

router.get("/me/items", (req, res, next)=>{
  User.findById(req.session.currentUser)
  .then((userDoc)=>{
    res.status(200).json(userDoc)
  })
  .catch((error)=>{
    console.log("err", error);
    res.status(500).json(error);
  })
})



module.exports = router;
