const { Router } = require("express");
const { addUser ,listUsers,deleteUser,updateUser, findUser,checkUser,checkUserByEmail} = require("./userController");
const {hashPassword}=require("../middleware");
const userRouter = Router();
userRouter.post("/user",hashPassword, addUser);
userRouter.get("/login",checkUser)
userRouter.get("/loginEmail",checkUserByEmail)
userRouter.get("/listuser",listUsers);
userRouter.get("/user",findUser);
userRouter.put("/user",updateUser);
userRouter.delete("/user",deleteUser);

module.exports = userRouter;