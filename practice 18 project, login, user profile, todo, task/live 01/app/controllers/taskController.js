import tasksModel from "../models/TasksModel.js";
import mongoose from "mongoose";


// -------Create task----------
export const createTask = async(req, res) => {
   try{
       let reqBody = req.body;
       let user_id = req.headers['user_id'];
       reqBody.user_id = user_id;
       await tasksModel.create(reqBody);
       return res.json({status: "success", message:"task created", title: reqBody.title});
   }catch(err){
       res.json({status: "fail", message: "error from task create controller"});
   }
}

export const readTask = async(req, res) => {
    try{
        let user_id = req.headers['user_id'];
        let data = await tasksModel.find({"user_id": user_id});
        return res.json({status: "success", message:"task read", data:data});
    }catch(err){
        return res.json({status: "fail", message: "error from read task controller"});
    }
}

export const updateTask = async(req, res) => {
    try{
        let task_id = req.params.task_id;
        let status = req.params.status;
        await tasksModel.updateOne({"_id": task_id},{$set: {"status": status}})
        let des = await tasksModel.findOne({ "_id": task_id }).select({ "description": 1 });
        return res.json({status: "success", message:"task updated", task_status: status, description: des});
    }catch (e) {
        return res.json({status: "fail", message: "error from update task controller"});
    }


}


export const taskListByStatus = async(req, res) => {
    try{
        let user_id = req.headers['user_id'];
        let status = req.params.status;
        let data = await tasksModel.find({user_id:user_id, status:status})
        return res.json({status: "success", message:"task list", data:data});
    }catch (e) {
        return res.json({status: "fail", message: "error from task list controller"});
    }
}

export const deleteTask = async(req, res) => {
    try{
        let user_id = req.headers['user_id']
        let task_id= req.params.task_id;
        await tasksModel.deleteOne({"_id": task_id, "user_id":user_id})
        return res.json({status: "success", message:"task deleted"});
    }catch(e){
        return res.json({status: "fail", message: "error from delete task controller"});
    }
}



export const countTask = async(req, res) => {
   try{
       // convert id as object id for aggregation
       let objectID = mongoose.Types.ObjectId
       let user_id = req.headers['user_id'];
       let user_oid =new objectID(user_id);

       let data = await tasksModel.aggregate([
           {
               $match: {
                   "user_id": user_oid
               }
           },
           {
               $group: {
                   _id: "$status", // Group by status
                   total_count: { $count: {} } // Count the documents in each group
               }
           },
           {
               $project: {
                   status_label: "$_id", // Rename _id to status_label
                   total_count: 1, // Keep the count field
                   _id: 0 // Exclude the original _id field
               }
           }
       ]);

       return res.json({status:"success", message:"count task count", data:data});
   }
   catch(e){
       return res.json({status: "fail", message: "error from count task controller", err: e.toString()});
   }

}
