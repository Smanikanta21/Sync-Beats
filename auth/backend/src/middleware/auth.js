import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function authmiddleware(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "No token provided"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        console.error(err);
        return res.status(403).json({message: "Invalid token"});
    }
}
