import jsonWebToken  from "jsonwebtoken"

const verifyJwt = (req, res, next) => {
    //code to get token from postman
    const authHeader =req.headers.authorization || req.headers.Authorization
    if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(401)
    const token = authHeader.split(' ')[1]
//code to verify token
    jsonWebToken.verify(
        token,
        process.env.ACCESS_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403)
            req.user = decoded
            next()
        }
    )
}
export default verifyJwt