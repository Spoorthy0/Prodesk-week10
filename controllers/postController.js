import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('authorId', 'name email');
    res.json(posts);
};

export const getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('authorId', 'name email');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
};

export const createPost = async (req, res) => {
    const { title, content, authorId } = req.body;
    const post = await Post.create({ title, content, authorId });
    res.status(201).json({ message: 'Post created', data: post });
};

export const updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post updated', data: post });
};

export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted' });
};

export const getTopRecentPosts = async (req, res) => {
    const posts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .populate('authorId', 'name email');
    res.json(posts);
};
