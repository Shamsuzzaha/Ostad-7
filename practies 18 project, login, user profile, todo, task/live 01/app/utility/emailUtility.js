import nodemailer from 'nodemailer'
import {EMAIL_HOST,EMAIL_PORT, EMAIL_PASSWORD,EMAIL_USER,MAIL_ENCRYPTION} from '../config/config.js'

const EmailSend=async(EmailTo,EmailText,EmailSubject,EmailHTMLBody)=>{

    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: true,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
        tls:{
            rejectUnauthorized: false,
        }
    })

    const mailOptions = {
         from: EMAIL_USER,
         to:EmailTo,
         subject: EmailSubject,
         text: EmailText,
         html:EmailHTMLBody
    }

    try {
        await transporter.sendMail(mailOptions);
        return "Your Email has been sent to:"+ EmailTo + ", with the message:"+ EmailText;
    }catch(err){
        return "Error: Something went wrong";
    }


}

export default EmailSend