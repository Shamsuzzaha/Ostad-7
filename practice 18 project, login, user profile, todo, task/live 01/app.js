// --------Import---------------

// importing npm package
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import fileUpload from "express-fileupload"

// path related
import * as path from "path";

// importing from local file
// api import
import router from "./routes/api.js"
// global variable import
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js"
import {login} from "./app/controllers/userController.js";


// app assign with express
const app = express();



// ---------USE------------

// Global Application Middleware
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE})); //json file size limit
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp())
app.use(helmet())
app.use(cookieParser())
app.use(fileUpload())


// Rate Limiter
const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)


// Web Caching
app.set('etag',WEB_CACHE)




// MongoDB connection
mongoose.connect(MONGODB_CONNECTION,{autoIndex:true})
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch(()=>{
        console.log("mongodb disconnected")
    })


// Set API Routes
app.use("/api",router)


// Set Application Storage
app.use(express.static('storage'))  // storage folder location



//------------RUN-----------------
// Run Your Express Back End Project

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})



