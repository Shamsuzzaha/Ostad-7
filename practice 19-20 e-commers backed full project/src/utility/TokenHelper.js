const jwt=require('jsonwebtoken');
const {TOKEN_EXPIRATION} = require("../config/config");

// Token Encode function-------
exports.EncodeToken=(email,user_id)=>{
    let KEY="123-ABC-XYZ";
    let EXPIRE={expiresIn: TOKEN_EXPIRATION}
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

// ------Token decode function--
exports.DecodeToken=(token)=>{
    try {
        let KEY="123-ABC-XYZ";
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}