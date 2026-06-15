import { Router } from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost, getTopRecentPosts } from '../controllers/postController.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.get("/posts/top-recent", getTopRecentPosts);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", upload.single('image'), createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
