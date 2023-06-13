const CarDetails  = require("../model/car");



module.exports.AddCar= async ( req,res )=>{
    
    console.log(req.body,req.session.userId)
    const{ name,cartype,model,milage,perKm,availableFrom,availableTill,description
        ,public_id,carDetails,Details} =req.body;
    
    let AdminId = req.session.adminId; 
    console.log("AdminId",AdminId);
    try{
        
        const car = await CarDetails.create({
            AdminId,
            name,
            cartype,
            model, 
            milage,
            perKm,
            availableFrom, 
            availableTill,
            description,
            images:public_id,
            carDetails,
            Details
        })
        res.status(201).json(car)
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}


module.exports.EditCar= async(req,res)=>{

    const {name} = req.body;
    let AdminId=req.session.adminId;

    try{
        const updatecar = await CarDetails.updateOne({AdminId,name},{$set:{model: 8}});
        res.status(201).json(updatecar)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err);
    }

}

module.exports.DeleteCar= async(req,res)=>{

    const {name}=req.body;
    let AdminId=req.session.adminId;

    try{
        const deletedcar = await CarDetails.deleteOne({AdminId,name});
        res.status(201).json(deletedcar)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err);
    }
    
}

module.exports.GetAllCar= async ( req,res )=>{

    
    
    try{
        
        const car = await CarDetails.find({})
        console.log("GetAllCar",car);
        res.status(201).json(car);
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}

module.exports.GetAdminCar= async ( req,res )=>{

    console.log(req.session.adminId)

    
    let AdminId = req.session.adminId; 
    try{

        console.log()
        
        const car = await CarDetails.find({AdminId})
        //console.log("car",car);
        res.status(201).json(car)
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}