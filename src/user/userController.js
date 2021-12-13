const User=require("./userModel");
exports.addUser=async(req,res)=>{
    try{
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send({message:"Successfully added user",newUser});
    }catch(error){
        console.log(error);
}
};