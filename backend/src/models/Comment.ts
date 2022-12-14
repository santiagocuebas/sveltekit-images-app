
import { Schema, model } from 'mongoose';
import { Comment } from '../types.js';

const commentSchema = new Schema<Comment>({
	imageId: { type: Schema.Types.ObjectId },
	email: String,
	name: String,
	gravatar: String,
	filename: String,
	comment: String,
	createdAt: Date
});

export default model('Comment', commentSchema);
