import jwt from "jsonwebtoken"

export const userAuth =(req, res, next)=> {
    const token = req.header('token')
    jwt.verify(token, process.env.JWT_KEY, async function(err, decoded) {
        if (err) {
            res.json({err})
        }
        else {
            req.userId = decoded.user._id
            next()
        }
    })
}

export const emailAuth = (req, res, next)=> {
    const { token } = req.params
    jwt.verify(token,process.env.JWT_KEY, async function (err, decoded) {
        if (err) {
            res.json({msg:err});
        }
        else {
            req.email = decoded.email
            next()
        }
    })
}