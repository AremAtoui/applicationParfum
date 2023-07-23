const express = require("express");
const Parfum = require("../models/Parfum");


const parfumRouter = express.Router();

//add parfum
parfumRouter.post("/add", async (req, res) => {
  try {
    let newparfum = new Parfum(req.body);
    let result = await  newparfum.save();
    res.send({ parfum: result, msg: "parfum is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all parfums
parfumRouter.get("/", async (req, res) => {
  try {

    let result = await Parfum.find();
    res.send({ parfums: result, msg: "all parfums" });
  } catch (error) {
    console.log(error);
  }
});
//delete parfum
parfumRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Parfum.findByIdAndDelete(req.params.id);
    res.send({ msg: "parfum is deleted" });
  } catch (error) {
    console.log(error);
  }
});
// update hotel
parfumRouter.put("/:id", async (req, res) => {
  try {
    let result = await Parfum.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "parfum is updated" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = parfumRouter;