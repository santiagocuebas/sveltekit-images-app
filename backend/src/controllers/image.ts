
import { Result, ValidationError, validationResult } from 'express-validator';
import { HydratedDocument } from 'mongoose';
import fs from 'fs-extra';
import { Md5 } from 'ts-md5';
import { Direction, Image as ImageInterface, Errors } from '../types.js';
import { getErrorMessages } from '../libs/errorMessage.js';
import Image from '../models/Image.js';
import Comment from '../models/Comment.js';

export const image: Direction = async (req, res) => {
	const { imageId } = req.params;

	const image: HydratedDocument<ImageInterface> = await Image
		.findOne({ filename: { $regex: imageId } })
		.lean({ virtuals: true });

	if (image !== null) {
		image.views++;

		const comments = await Comment
			.find({ imageId: image._id })
			.sort({ createdAt: -1 })
			.lean();
		
		return res.json({ image, comments });
	}
		
	return res.json(image);
};

export const comment: Direction = async (req, res) => {
	const errors: Result<ValidationError> = validationResult(req);
	const image = await Image.findOne({ filename: {
		$regex: req.params.imageId
	} });

	if (errors.isEmpty() && image !== null) {
		const comment = new Comment(req.body);
		comment.imageId = image.id;
		comment.filename = image.filename;
		comment.gravatar = Md5.hashStr(comment.email);
		comment.createdAt = new Date();

		await comment.save();

		res.json(comment);
	} else {
		const message: Errors = getErrorMessages(errors.array());
		res.json(message);
	}
};

export const deleteImage: Direction = async (req, res) => {
	const { imageId } = req.params;

	const image = await Image.findOne({ filename: { $regex: imageId } });

	if (image !== null) {
		await fs.unlink(`./src/uploads/${image.filename}`);
		await Comment.deleteMany({ imageId: image._id });
		await image.remove();

		res.json({ url: '/' });
	}
};
