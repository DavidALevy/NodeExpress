const User = require("./userModel");
const bcrypt = require("bcrypt");
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({
            message: "Successfully added user",
            newUser
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Name/email already exists, please check again"
        });
    }
};
exports.listUsers = async (req, res) => {
    try {
        console.log(await User.find({}));
        const users = await User.find();
        res.status(200).send({
            message: "Users list",
            users
        });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Error"
        });
    }
};
exports.findUser = async (req, res) => {
    try {
        console.log(req.body);
        const found = await User.find(req.body);
        console.log(found);
        if(found.length>0)
        {return  res.status(200).send({
            message: "Details of requested name",found
        })}
        else {return res.status(200).send({message: "Data not found"})  }      
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Error"
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        console.log(req.body.filter, req.body.newdata)
        const update = await User.findOneAndUpdate(req.body.filter, req.body.newdata, {
            new: true
        })
        console.log(update);
        if (update ===null)
       { return  res.status(200).send({message:"Data not found"})}
        else {return   res.status(200).send({
            message: "Updated:",
            update
        });}
        
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Error"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleted = req.body;
        const deleteOb=  await User.deleteOne(deleted);
        if(deleteOb.deletedCount==1)
        {console.log(`${deleted} has been deleted`)
         res.status(200).send({ message: `Deleted:`, deleted })}
        else  {return res.status(400).send({message:"Data does not exist"})}
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Error"
        });
    }
};

exports.checkUser = async (req, res) => {
    try {
        const info = await User.find({
            username: req.body.username
        });
        const match = await bcrypt.compare(req.body.password, info[0].password);
        if (match) {
            return res.status(200).send({
                message: "Successful login, user info:", info
            })
        } else {
            console.log("Incorrect password")
            return res.status(400).send({
                message: "Incorrect password"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Error"
        });
    }
};
exports.checkUserByEmail = async (req, res) => {
    try {
        const info = await User.find({
            email: req.body.email
        });
        const match = await bcrypt.compare(req.body.password, info[0].password);
        if (match) {
            return res.status(200).send({
                message: "Successful login, user info:", info
            })
        } else {
            console.log("Incorrect password")
            return res.status(400).send({
                message: "Incorrect password"
            });
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Error"
        });
    }
};