// path import
import * as path from 'node:path';

// -------Global Variable-----------

// MongoDB
export const MONGODB_CONNECTION="";

//  Token security code for authentication and expire time
export const JWT_SECRET = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

// Email verification or login formation
export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

// json file size
export const MAX_JSON_SIZE = "50mb";

// Security feature for url encoding
export const URL_ENCODED = true;

// user hit to the app per time
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed

// caching for request response
export const WEB_CACHE=false;


// storage upload path function
export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName);
}


// server port
export const PORT=8080