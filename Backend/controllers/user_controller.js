import userModel from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) =>{
    try {
        const{name,email,password} = req.body;

        if (!name || !email || !password){
            return res.status(400).json({message: "details missing"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name , 
            email,
            password: hashedPassword
        }
        
        //already exist user 
        const existingUser = await userModel.findOne({
            email
        })
        if (existingUser){
            return res.json({success: false, message: "User already exists"})
        }else{

            const newUser = new userModel(userData);
            const user = await newUser.save();

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)

            res.json({success : true, token, user: {name: user.name}})

        }

    }catch(error){
       console.log("error in registerUser", error);
       res.json({success: false, message: error.message})
       
    }
}


const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({
            email
        })

        if (!user){
            return res.json({success: false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)
            res.json({success : true, token, user: {name: user.name}})

        }else{
            return res.status(400).json({message: "Invalid credentials"})
        }

    } catch (error) {
        console.log("error in loginUser", error);
        res.json({success: false, message: error.message})
    }
}

const userCredits = async (req, res) =>{
    try {
        const {userId} = req.body
        const user = await userModel.findById(userId)
        res.json({success: true, user: {name: user.name}})
    } catch (error) {
        console.log("error in userCredits", error);
        res.json({success: false, message: error.message})
    }
}


export {registerUser, loginUser, userCredits}
