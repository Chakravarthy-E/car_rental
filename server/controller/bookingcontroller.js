const CarbookingDetails = require("../model/Booking")



module.exports.Addtocart = async (req,res)=>{


    console.log(req.body,req.session.userId)
    const{ carid,name,type,image,currentDate,currentTime,model,
        origin,destination,startdate,enddate} =req.body;
    
    let userid= req.session.userId; 
    try{
        
        const car = await CarbookingDetails.create({

            userid,
            carid,
            name,
            model,
            image,
            origin,
            destination,
            startdate,
            enddate,
            bookingdate:currentDate,
            bookingtime:currentTime,

            
        })
        res.status(201).json(car)
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}



module.exports.Editcart = async (req,res)=>{


    console.log(req.body,req.session.userId)
    const{ carid,name,type,image,currentDate,currentTime,model,
        origin,destination,startdate,enddate} =req.body;
    
    let userid= req.session.userId; 
    try{
        
        const car = await CarbookingDetails.updateOne({carid},{$set:{
            name,origin,destination
        }})
        res.status(201).json(car)
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}


module.exports.Deletecart = async (req,res)=>{


    console.log(req.body,req.session.userId)
    const{ carid,name,type,image,currentDate,currentTime,model,
        origin,destination,startdate,enddate} =req.body;
    
    let userid= req.session.userId; 
    try{
        
        const car = await CarbookingDetails.deleteOne({carid})
        res.status(201).json(car)
    }
    catch(err){
            console.log(err)
            res.status(400).send(err);
    }
}