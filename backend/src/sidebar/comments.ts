
import Comment from '../models/Comment.js';

export const getComments = async () => {
	const comments = await Comment
		.find()
		.sort({ createdAt: -1 })
		.limit(5);

	return comments;
};
