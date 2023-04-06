import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';


export const userLogin = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if(validPassword) {
            res.json({
                _id: user._id,
                userID: user.userID,
                username: user.userName,
                email: user.email,
                isAdmin: user.isAdmin,
                isBanned: user.isBanned,
                token: generateToken(user._id)
,
            });
        } else {
            res.status(401).json({error: 'Invalid E-mail or Password!'});
        }
    } else {
        res.status(400).json({error: "User not found!"});
    }
});


export const userRegister = asyncHandler(async function(req, res) {
    const {firstName, lastName, userName, email, password} = req.body;
    const userExists = await User.findOne({email});

    if(!userExists) {
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password
        });

        if(user) {
            res.status(201).json({
                _id: user._id,
                userID: user.userID,
                username: user.userName,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });

        } else {
            res.status(400).json({error: "Invalid User Data!"});
        }
    } else {
        res.json({error: "User already exists!"});
    }
});



export const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);
    if(user) {
       res.json({
           _id: user._id,
           firstame: user.firstName,
           lastname: user.lastName,
           username: user.userName,
           email: user.email,
           isAdmin: user.isAdmin
        });
    } else {
        res.status(404).json({error: "User Not Found!"});
    }

});


export const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(user) {
        await user.remove();
        res.json({message: "User has been deleted!"});
    } else {
        res.status(404).json({error: "User not found!"});
    }
});


export const banUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(user) {
        user.isBanned = true;
        res.json({message: "User has been banned!"});
    } else {
        res.status(404).json({error: "User not found!"});
    }
});


export const getUsers = asyncHandler(async(req, res) => {
    const user = await User.find({});
    res.json(users);
});