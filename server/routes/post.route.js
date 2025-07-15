import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import {
  createPost, getPosts, getPostById, updatePost, deletePost
} from '../controllers/post.controller.js';

const router = express.Router();

router.post('/', upload.single('image'), createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', upload.single('image'), updatePost);
router.delete('/:id', deletePost);

export default router;
