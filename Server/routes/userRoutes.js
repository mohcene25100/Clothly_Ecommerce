import express from 'express';
import {userLogin, userRegister, banUser, getUserProfile, getUsers, deleteUser} from '../controllers/userController.js';
import {isAdmin, isAuthenticated, isBanned} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(isAuthenticated, isAdmin, getUsers);
router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
router.route('/profile').get(isAuthenticated, isBanned, getUserProfile);
router.route('/delete/:id').delete(isAuthenticated, isAdmin, deleteUser);



export default router;