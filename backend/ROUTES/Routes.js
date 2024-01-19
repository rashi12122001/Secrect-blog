import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../Maintainer/post-maintainer.js';
import { newComment, getComments, deleteComment } from '../Maintainer/comment-maintainer.js';
import { loginUser, signupUser, logoutUser } from '../Maintainer/user-maintainer.js';
import { authenticateToken, createNewToken } from '../Maintainer/jwt-maintainer.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

export default router;