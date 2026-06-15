import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    imageUrl: { type: String, default: null },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;
