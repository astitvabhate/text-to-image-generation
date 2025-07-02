import userModel from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) =>{
    try {
        const{name,email,password} = req.body;

        if (!name || !email || !password){
            return res.status(400).json({success: false, message: "All fields are required"})
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
            return res.status(400).json({success: false, message: "User already exists"})
        }else{

            const newUser = new userModel(userData);
            const user = await newUser.save();

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)

            res.json({
                success: true, 
                token, 
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    creditBalance: user.creditBalance
                }
            })

        }

    }catch(error){
       console.log("error in registerUser", error);
       res.status(500).json({success: false, message: error.message})
       
    }
}


const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({success: false, message: "Email and password are required"})
        }
        
        const user = await userModel.findOne({
            email
        })

        if (!user){
            return res.status(404).json({success: false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)
            res.json({
                success: true, 
                token, 
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    creditBalance: user.creditBalance
                }
            })

        }else{
            return res.status(400).json({success: false, message: "Invalid credentials"})
        }

    } catch (error) {
        console.log("error in loginUser", error);
        res.status(500).json({success: false, message: error.message})
    }
}

const userCredits = async (req, res) =>{
    try {
        const {userId} = req.body
        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(404).json({success: false, message: "User not found"})
        }
        res.json({success: true, user: {name: user.name , credit: user.creditBalance}})
    } catch (error) {
        console.log("error in userCredits", error);
        res.status(500).json({success: false, message: error.message})
    }
}


export {registerUser, loginUser, userCredits}
