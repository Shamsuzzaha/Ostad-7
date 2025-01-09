import {DecodeToken} from "../utility/tokenUtility.js";

export default (req, res, next) => {
    let token = req.headers['token'];
    let decoded = DecodeToken(token);
    // console.log(decoded);
    if (decoded===null) {
        return res.status(401).send('No token provided');
    }else{
        // console.log(decoded.email);
        let email = decoded.email;
        let user_id = decoded.user_id;

        // adding with headers
        req.headers.email = email
        req.headers.user_id = user_id;
        next();
    }
}


