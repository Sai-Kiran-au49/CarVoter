const carModel = require('../models/carModels')

const {Router} = require('express')

const adminRouter = Router();

adminRouter.post('/cars', async (req,res)=>{
   const adminCars = await carModel.create(req.body)
   res.json(adminCars)
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
