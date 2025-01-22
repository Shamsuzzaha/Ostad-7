const nodemailer=require('nodemailer');
const {EMAIL_FROM} = require("../config/config");

// ---------Email Send function----------
const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{
     // transporter function
     let  transport= nodemailer.createTransport({
            host:"mail.teamrabbil.com",
            port:25,
            secure:false,
            auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
            tls:{rejectUnauthorized:false}
        })

    // Sender details
    let mailOption={
         from:EMAIL_FROM,
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;