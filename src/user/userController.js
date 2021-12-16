const User=require("./userModel");
exports.addUser=async(req,res)=>{
    try{
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send({message:"Successfully added user",newUser});
    }catch(error){
        console.log(error);
        res.status(500).send({message:"Unsuccessful, please check again"});
}
};
exports.listUsers=async(req,res)=>{
    try{
        console.log(await User.find({}));
        const users = await User.find();
        res.status(200).send({message:"Users list",users});
    }catch(error){
        console.log(error)
    }
};
exports.findUser=async(req,res)=>{
    try{      
        console.log(req.body);       
         const found=await User.find(req.body)         
        res.status(200).send({message:"Details of requested name",found});
        console.log(found);        
    }catch(error){
        console.log(error)
    }
};

exports.updateUser=async(req,res)=>{
    try{ console.log(req.body.filter,req.body.newdata)  
                  
    const update=await User.findOneAndUpdate(req.body.filter,req.body.newdata,{new:true})
    console.log(update)
    console.log(update.email)
    res.status(200).send({message:"Updated:",update});
    }         
    catch(error){
                console.log(error);
            }
        };

exports.deleteUser=async(req,res) =>{
    try{const deleted=req.body;
        await User.deleteOne(deleted);
        console.log(`${deleted.userName} has been deleted`)
        res.status(200).send({message: `Deleted:`,deleted})
    }
 catch(error) {
    console.log(error)
}   } 

    
