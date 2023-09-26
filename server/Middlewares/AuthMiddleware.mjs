import User from "../Models/UserModel.mjs"; 
import jwt from "jsonwebtoken";

function userVerification(req, res){
  console.log("this is the cookie -> " + req.cookies.token)
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}

export default userVerification;