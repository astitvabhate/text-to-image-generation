import FormData from "form-data";
import userModel from "../models/user_model.js";
import axios from "axios";

const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        
        // Validate input
        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide a valid prompt" 
            });
        }

        // If userId is provided, check user and credits
        let user = null;
        if (userId) {
            user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ 
                    success: false, 
                    message: "User not found" 
                });
            }
            
            if (user.creditBalance <= 0) {
                return res.status(402).json({ 
                    success: false, 
                    message: "Insufficient credits. Please purchase more credits to continue.", 
                    userBalance: user.creditBalance 
                });
            }
        }

        // Check if API key is configured
        if (!process.env.CLIPDROP_API_KEY) {
            return res.status(500).json({
                success: false,
                message: "API key not configured. Please contact administrator."
            });
        }

        // Prepare form data for clipboard API (exact format as shown)
        const form = new FormData();
        form.append('prompt', prompt.trim());

        // Make request to clipboard API
        const response = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            form,
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API_KEY,
                    ...form.getHeaders()
                },
                responseType: 'arraybuffer'
            }
        );

        // Convert array buffer to base64
        const buffer = Buffer.from(response.data);
        const base64Image = buffer.toString('base64');
        const imageUrl = `data:image/png;base64,${base64Image}`;

        // Deduct credit if user is authenticated
        if (user) {
            user.creditBalance -= 1;
            await user.save();
        }

        res.json({
            success: true,
            imageUrl: imageUrl,
            remainingCredits: user ? user.creditBalance : null,
            message: "Image generated successfully!"
        });

    } catch (error) {
        console.log("Error in generateImage:", error);
        
        if (error.response?.status === 401) {
            return res.status(401).json({ 
                success: false, 
                message: "API key is invalid or expired" 
            });
        }
        
        if (error.response?.status === 429) {
            return res.status(429).json({ 
                success: false, 
                message: "Rate limit exceeded. Please try again later." 
            });
        }
        
        res.status(500).json({ 
            success: false, 
            message: "Failed to generate image. Please try again." 
        });
    }
};

export { generateImage };
