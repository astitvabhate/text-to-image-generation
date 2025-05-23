import jwt from 'jsonwebtoken';

const verifyToken = async(req, res, next)=>{
    const {token} = req.headers;
    if(!token ){
        return res.status(401).json({success: false, message: "Not Authorized. Please login to continue"})
    }


    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!tokenDecoded){
            return res.json({success: false, message: "Not Authorized. Please login to continue"})
        }else{
            req.body.userId = tokenDecoded.id
            next()
        }

    } catch (error) {
        console.log("error in verifyToken", error);
        res.status(500).json({success: false, message: error.message})
        
    }
}

export default verifyToken;