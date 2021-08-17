const express = require("express");
const router = express.Router();
const Items = require("../models/Items");
const User = require("../models/User")

router.get("/", (req, res, next)=>{
    Items.find()
    .then((itemsDoc)=>{res.status(200).json(itemsDoc)})
    .catch((error)=>{
        console.log("err", error);
        res.status(500).json(error);
      })
});

router.get("/:id", (req, res, next)=>{
    Items.findById(req.params.id)
    .then((itemsDoc)=>{res.status(200).json(itemsDoc)})
    .catch((error)=>{
        console.log("err", error);
        res.status(500).json(error);
      })
});

router.post("/", (req, res, next)=>{
    Items.create(req.session.currentUser)
    .then((itemsDoc)=>{res.status(201).json(itemsDoc)})
    .catch((error)=>{
        console.log("err", error);
        res.status(500).json(error);
      })
});

router.patch("/:id", (req, res, next)=>{
    Items.findByIdAndUpdate(req.session.currentUser)
    .then((itemsDoc)=>{res.status(201).json(itemsDoc)})
    .catch((error)=>{
        console.log("err", error);
        res.status(500).json(error);
      })
});

router.delete("/:id", (req, res, next)=>{
    Items.findByIdAndDelete(req.session.currentUser)
    .then((itemsDoc)=>{res.status(201).json(itemsDoc)})
    .catch((error)=>{
        console.log("err", error);
        res.status(500).json(error);
      })
});




module.exports =router;