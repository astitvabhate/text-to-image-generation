import FormData from "form-data";
import userModel from "../models/user_model.js";
import axios from "axios";
import { response } from "express";

const genrateImage = async (req, res) => {
    
    try {
        const {userId , prompt } = req.body
        const user = await userModel.findById(userId)

        if (!user) {
            return res.json({success: false, message: "User not found"})
        }
        if (!prompt || prompt.length === 0) {
            return res.json({success: false, message: "Proper Prompt is required"})
        }

        if (user.creditBalance === 0 || user.creditBalance < 0 ) {
            return res.json({success: false, message: "Insufficient credits", userBalance: user.creditBalance})
        }
            // yeh line comment kiya hai kyunki mujhe nahi pata yeh kya hai
            // i need to understand after this comment
        const FormData = new FormData()
        FormData.append("prompt", prompt)
        const {data} = await axios.post
        ("https://clipdrop-api.co/text-to-image/v1", 
            FormData,
            { headers: {'x-api-key': YOUR_API_KEY,},  responseType: 'arraybuffer'},
        ) 

    } catch (error) {
        console.log("error in genrateImage", error);
        res.json({success: false, message: error.message})
    }
}
