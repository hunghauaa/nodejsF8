const jwt = require('jsonwebtoken')
module.exports = function verifyToken(req, res,next){
    const bearerToken = req.headers['authorization']
    const token = bearerToken && bearerToken.split(' ')[1]
    if(token == undefined){
        return res.sendStatus(401)
    }
    else{
        jwt.verify(token,'hunghauaa',(err,data)=>{
            if(err){
                return res.sendStatus(403)
            }
            else{
                next()
            }
        })
    }
}

