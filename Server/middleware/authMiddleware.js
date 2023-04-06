import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const isAuthenticated = asyncHandler(async(req, res, next) => {
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
        } catch (error) {
            res.status(401).json("Not authorized, token failed!");
        }
    }
    if(!token) {
        res.status(401).json({error: "Not Authorized, there is no token!"});
    }
    next();
});

export const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({error: "Not authorized as an admin!"});
    }

}

export const isBanned = (req, res, next) => {
    if(req.user && !req.user.isBanned) {
        next();
    } else {
        res.status(403).json({error: "Sorry, Access Forbidden!"});
    }
}