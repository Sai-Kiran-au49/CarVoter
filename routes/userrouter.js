const { Router  } = require("express");

const userModel = require("../models/UserModel");

const {updateVotes} = require('../routes/carrouter')

const userRouter = Router();

const authMiddleware = require("../MiddleWares/authMiddleware");


userRouter.use(authMiddleware);


userRouter.get("/", async (req, res) => {
  const userData = await userModel.findOne({ email: req.email } ,{email:0, password:0,__v:0,phone:0,_id:0});
  res.json(userData);
});

userRouter.put("/", async (req, res) => {
  const userData = await userModel.updateOne({ email: req.email },{$set:{ name : req.body.name , email : req.body.email}});
  
  if(req.body.email){
    const token = jwt.sign({ email }, process.env.secret, {
      expiresIn: "1d",
    });
    res.cookie("jwt", token);
  }
  res.status(200).json({ msg: "Profile data updated" });
});

userRouter.post("/submit", async (req, res) => {
  console.log(req.body);
  const votedData = await userModel.updateOne(
    { email: req.email },
    { $set: { votes: req.body } }
  );
  await updateVotes(req.body)
  res.json({ msg: "Thanks for Voting" });
 
});

userRouter.get("/votes", async (req, res) => {
  const votedUser = await userModel.findOne(
    { email: req.email },
    { email: 0, password: 0, phone: 0, email: 0 }
  );
  res.json(votedUser);
});

module.exports = userRouter;
