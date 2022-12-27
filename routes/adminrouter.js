const carModel = require('../models/carModels')

const {Router, json, urlencoded} = require('express')

const adminRouter = Router();

adminRouter.post('/cars', async (req,res)=>{
   console.log("reqbody:", req.body);
   try{
      const adminCars = await carModel.create(req.body)
      res.json(adminCars)
   }catch(e){
      // console.log(Object.keys(e))
      
      console.log("errors");
      res.status(400).send('bad')
   }
})

// adminRouter.put('/cars/:name/:vote', async(req,res)=>{
//    const name = req.params.name
//    const votes = Number(req.params.vote) 
//    const adminUpdate = await carModel.findOne({Name: name})
//    adminUpdate.votes = votes
//    await adminUpdate.save();
//    res.send("Car Votes updated")   
// })


module.exports = adminRouter;
