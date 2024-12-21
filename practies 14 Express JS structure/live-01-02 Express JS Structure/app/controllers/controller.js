// controlling all types of request and response

// Import config and utility
import {UPLOAD_FOLDER} from "../config/config.js";
import {moveFile} from "../utility/moveFile.js";

// create
export const createTask =  async (req, res) => {
    return res.json({message:'Task created successfully'});
}

// Read
export const readTask =  async (req, res) => {
    return res.json({message:'Task read successfully'});
}


// Update
export const updateTask =  async (req, res) => {
    return res.json({message:'Task update successfully'});
}


// Delete
export const deleteTask =  async (req, res) => {
    return res.json({message:'Task delete successfully'});
}


// -------Parameters--------------------------------
export const paramCreate = async (req,res)=>{
    // params
    let name = req.params.name;
    let age = req.params.age;

    // query
    let country = req.query.country;

    return res.json({name:name,age:age, country:country});
}


// ---------Json body----------------------------
export const jsonbody = async (req,res)=>{
    let body = req.body
    return res.json(body)
}


// ---------Form data ----------------------------
export const formData = async (req,res)=>{
    let form = req.body;
    return res.json(form)
}

// ---------file upload ----------------------------
export const fileUpload = async (req,res)=>{
    let myFile = req.files["file"];
    let myPath = UPLOAD_FOLDER(myFile.name);

    await moveFile(myFile,myPath);
    return res.json({message: "upload successfully", fileName: myFile.name});
}


//---------Request Header-------
export const reqHeaders = async (req,res)=>{
    let headers = req.headers;
    return res.json(headers);
}
