import usersModel from "../models/UsersModel.js";
import {EncodeToken} from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";

// -------Registration-------
export const registration = async(req, res) => {
    try{
        let reqbody = req.body;
        await usersModel.create(reqbody)
        return res.json({status: "success", message:"user registration successful"});
    }catch(err){
        return res.json({status: "fail", message: "error from registration controller", error:err.toString()});
    }
}

// ------Login controler.........
export const login = async(req, res) => {
    try{
        let reqbody = req.body;
        let data= await usersModel.findOne(reqbody)
        if(data===null){
            res.status(400).send({message:"user not found"});
        }else {
        //     create token
        let token = EncodeToken(data['email'], data['_id'])
            res.json({status: "success",message:"user login success", token: token});
        }
    }catch(err){
        return res.json({status: "fail", message:err.toString()});
    }
}


// --------Profile details controller...........
export const profileDetails = async(req, res) => {
try{
    let user_id = req.headers["user_id"];
    let data = await usersModel.findOne({"_id": user_id});
    return res.json({status: "success", message:"user profileDetails success", data:data});
}
catch(err){
    return res.json({status: "fail", message: "error from profile details controller" , error: err.toString()});
}
}

// -----------Profile Update----------
export const profileUpdate = async(req, res) => {
    try{
        let user_id = req.headers["user_id"];
        let reqbody = req.body;
        await usersModel.updateOne({"_id":user_id},reqbody)
        let data = await usersModel.findOne({"_id": user_id});
        return res.json({status: "success",message:"user update success", data:data});
    }catch (e){
        return res.json({status: "fail",location: "profile update controller ", message:err.toString()});
    }
}

// -------------Email verification------
export const emailVerification = async(req, res) => {
    let email = req.params.email;
    let data = await usersModel.findOne({email:email})
    if(data===null){
        res.status(400).send({message:"email not found"});
    }else{
     try{
         let code = Math.floor(100000+Math.random()*900000);
         let EmailTo = data['email'];
         let EmailText = "Your email verification code is: " + code;
         let EmailSubject = "Task Manager Email Verification";
         await EmailSend(EmailTo, EmailText, EmailSubject);

         await usersModel.updateOne({"email":email},{"otp":code})
         return res.json({status: "success",message:"email verification success", check:"Check your email"});
     }
     catch (e){
         return res.json({status: "fail",message:err.toString(), from: "email verification controller"});
     }
    }
}

export const codeVerification = async(req, res) => {
   try{
       let email = req.params.email;
       let code = req.params.code;
       let data = await usersModel.findOne({email:email, otp:code})
       if (data===null){
           res.status(400).send({message:"email or code incorrect"});
       }else{
           res.status(200).send({status: "success",message:"code verification success"});
       }
   }
    catch(err){
           return res.json({status: "fail",message:err.toString(), from: "code verification controller"});
    }
}

export const resetPassword = async(req, res) => {
  try{
      let reqBody = req.body
      let data = await usersModel.findOne({email:reqBody['email'], otp: reqBody['otp']})
      if(data===null){
          res.status(400).send({message:"email or otp not found"});
      }else{
          await usersModel.updateOne({email:reqBody['email'],otp:reqBody['otp']}, {otp:"", password:reqBody['password']})
          return res.json({status: "success",message:"password reset success"});
      }
  }catch (e) {
      return res.json({status: "fail",message:err.toString(), from: "password reset controller"});
  }
}

