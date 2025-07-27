import express from "express"
import {registerUser, loginUser, userCredits} from "../controllers/user_controller.js"
import verifyToken from "../middlewares/auth.js"

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/credits',verifyToken,  userCredits)

export default userRouter