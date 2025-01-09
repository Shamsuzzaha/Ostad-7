// import npm package
import express from "express";

// Authentication middleware
import authMiddleware from "../app/middlewares/authMiddleware.js";

// Router method assign
const router = express.Router();

// function import from controllers folder
import * as taskController from "../app/controllers/taskController.js";
import * as userController from "../app/controllers/userController.js";




// --------User Api-----------
router.post('/registration', userController.registration);
router.post('/login',userController.login);
router.get('/profiledetails',authMiddleware, userController.profileDetails);
router.put('/profileupdate',authMiddleware, userController.profileUpdate);
router.get('/emailverification/:email', userController.emailVerification);
router.post('/codeverification/:email/:code', userController.codeVerification);
router.post('/resetpassword', userController.resetPassword);



// ------Task api-------------
router.post("/createTask",authMiddleware,taskController.createTask);
router.get("/readTask",authMiddleware,taskController.readTask);
router.put("/updateTask/:task_id/:status",authMiddleware,taskController.updateTask);
router.get("/tasklistbystatus/:status",authMiddleware,taskController.taskListByStatus);
router.delete("/deletetask/:task_id",authMiddleware,taskController.deleteTask);
router.get("/counttask",authMiddleware,taskController.countTask);





// ------------------------------------
// export the above api routers to the main js file app.js
export default router;  // default: you can import this through any name
