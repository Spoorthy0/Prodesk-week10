import Post from '../models/Post.js';
import { uploadToCloudinary } from '../middleware/upload.js';

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate('authorId', 'name email');
        res.json(posts);
    } catch (err) { next(err); }
};

export const getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('authorId', 'name email');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) { next(err); }
};

export const createPost = async (req, res, next) => {
    try {
        const { title, content, authorId } = req.body;
        let imageUrl = null;

        if (req.file && process.env.CLOUDINARY_CLOUD_NAME) {
            imageUrl = await uploadToCloudinary(req.file.buffer);
        }

        const post = await Post.create({ title, content, authorId: authorId || null, imageUrl });
        await post.populate('authorId', 'name email');
        res.status(201).json({ message: 'Post created', data: post });
    } catch (err) { next(err); }
};

export const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post updated', data: post });
    } catch (err) { next(err); }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted' });
    } catch (err) { next(err); }
};

export const getTopRecentPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .limit(3)
            .populate('authorId', 'name email');
        res.json(posts);
    } catch (err) { next(err); }
};
