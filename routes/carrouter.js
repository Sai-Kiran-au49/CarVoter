const carModel = require("../models/carModels");

const { Router } = require("express");
const carRouter = Router();

const authMiddleware = require("../MiddleWares/authMiddleware");

carRouter.get("/info", async (req, res) => {
  const carsData = await carModel.find().limit(3);
  res.json(carsData);
});

carRouter.use(authMiddleware);

carRouter.get("/to_vote", async (req, res) => {
  const carsData = await carModel.find({ votable: true });
  res.json(carsData);
});

carRouter.get("/votes", async (req, res) => {
  const carVotes = await carModel.find({ votable: true }, { image: 0, model:0, _id : 0, __v:0,votable:0});
  res.json(carVotes);
});

async function updateVotes(votes) {
  // object
  for (let vote of votes) {
    console.log(vote.modelId);
    const car = await carModel.findOne({ Name: vote.modelId });
    console.log(car);
    car.votes += vote.votes;
    await car.save();
  }
}

module.exports = { carRouter, updateVotes };



