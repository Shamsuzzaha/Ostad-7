import {DecodeToken, EncodeToken} from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";
import * as path from "node:path";

//-------------------------------------------
// // -------function token encoder with your email-----------
// export const TokenEncode=async (req, res) => {
//    let result= EncodeToken("shamsuzzahasumon@gmail.com",'123')
//     console.log(result)
//     res.json({token:result});
// }
//
// // ------token decode with your encrypted data
// export const TokenDecode=async (req, res) => {
//         let result= DecodeToken(`${TokenEncode.result}`)
//         res.json({token:result});
// }
//-------------------------------------------

// -----------Token-----------------------
let sharedToken = null;

// -------function token encoder with your email-----------
export const TokenEncode = async (req, res) => {
    sharedToken = EncodeToken("shamsuzzahasumon@gmail.com", '123');
    res.json({ token: sharedToken });
};

// ------token decode with your encrypted data
export const TokenDecode = async (req, res) => {
    if (!sharedToken) {
        return res.status(400).json({ error: "No token found. Encode a token first." });
    }
    const result = DecodeToken(sharedToken);
    res.json({ token: result });
};
// -----------------------------------------------------------------



// ---------E-mail auto send------------
export const Email=async (req, res) => {
        let EmailTo="shamsuzzahasumon@gmail.com"
        let EmailText=""
        let EmailSubject="Question"
        let EmailHTMLBody="Are you web developer?"
        let result= await EmailSend(EmailTo,EmailText,EmailSubject,EmailHTMLBody)
        res.json({emailStatus:result});
}




// ---------Feature after autMmiddleWare--------------------------
export const feature=async(req,res)=>{
    res.json({time:Date.now(),from:"FeatureController",status:"Check console log and compare the time value, which is executed first?"});
}


// ----------Cookies create -----------
export const CreateCookies=async (req,res)=>{
    let cookieOptions={
        expires:new Date(Date.now() + 1000), httpOnly:true, sameSite:true,
    }

    let data="shamsuzzahasumon@gmail.com"
    let cookieName="E-mail"

    res.cookie(cookieName,data,cookieOptions)

    res.json({status:"Cookie has been created as cookieName: "+ cookieName});
}

// -------------Cookies Remove------------
export const RemoveCookies=async (req,res)=>{
    let cookieOptions={expires:new Date(Date.now() - 1000), httpOnly:true, sameSite:true,}
    let data=""
    let cookieName="E-mail"
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"Cookie is successfully deleted"});
}











