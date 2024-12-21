// import npm package
import express from "express";
import authMiddleware from "../app/middlewares/authMiddleware.js";

// Router method assign
const router = express.Router();

// function import from controllers folder
import * as taskController from "../app/controllers/controller.js";
import * as featureController from "../app/controllers/FeaturesController.js";
import {jsonbody} from "../app/controllers/controller.js";
import {feature} from "../app/controllers/FeaturesController.js"; // '*' means receive the all exported things


// Create Route
router.post("/createTask",taskController.createTask);

// Read Route
router.get("/readTask",taskController.readTask);

// Update Route
router.put("/updateTask",taskController.updateTask);

// Delete Route
router.delete("/deleteTask",taskController.deleteTask);

// ------parameters api------------
router.post("/paramCreate/:name/:age",taskController.paramCreate);
// -------------------------------------


// ------Json body-------------------------------
router.post("/jsonbody", taskController.jsonbody)
// -------------------------------------

// -------Form data------------------------------
router.post("/formData", taskController.formData);
// -------------------------------------

// -------File Upload------------------------------
router.post("/upload",taskController.fileUpload);
// -------------------------------------

// --------Request Headers-----------------------------
router.post('/reqHeaders', taskController.reqHeaders);
// -------------------------------------

// --------Token encode-----------------------------
router.post("/tokenencoder",featureController.TokenEncode )
// -------------------------------------

// --------Token decode-----------------------------
router.post("/tokendecoder",featureController.TokenDecode )
// -------------------------------------

// ---------Auto Email send----------------------------
router.post('/autoemailsend', featureController.Email)
// -------------------------------------


// ---------Middleware execution for authentication----------------------------
router.post('/middleware', authMiddleware,featureController.feature)
// -------------------------------------

// ----------Cooke create---------------------------
router.get('/createcookie', featureController.CreateCookies)
// -------------------------------------

// ----------Cooke remove---------------------------
router.get('/removecookie', featureController.RemoveCookies)
// -------------------------------------

// export the above api routers to the main js file app.js
export default router;  // default: you can import this through any name
