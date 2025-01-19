// -------import-----------
const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");
const {MONGODB_STRING, MONGODB_OPTION, JSON_SIZE, RATE_LIMIT_TIME, TIME_LIMIT_INTERVAL} = require("./src/config/config");


//-------- MongoDB connection--------
mongoose.connect(MONGODB_STRING,MONGODB_OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

//---------- use packages--------
app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: JSON_SIZE}));
app.use(express.urlencoded({ limit: JSON_SIZE, extended: true }));

//Request Limit
const limiter= rateLimit({windowMs:RATE_LIMIT_TIME,max:TIME_LIMIT_INTERVAL})
app.use(limiter)

app.set('etag', false);
app.use("/api/v1",router)


// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

module.exports=app;