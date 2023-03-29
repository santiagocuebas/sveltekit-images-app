import { Result, ValidationError, validationResult } from 'express-validator';
import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { Direction, Errors } from '../types.js';
import { randomFilename } from '../libs/randomFilename.js';
import { getErrorMessages } from '../libs/errorMessage.js';
import { ImageModel } from '../models/Image.js';
import { getSidebar } from '../sidebar/index.js';

export const index: Direction = async (_req, res) => {
	const images = await ImageModel
		.find()
		.sort({ createdAt: -1 })
		.limit(3)
		.lean({ virtuals: true });

	const { stats, viewedImages, recentComments } = await getSidebar();

	return res.json({ images, stats, viewedImages, recentComments });
};

export const upload: Direction = async (req, res) => {
	const errors: Result<ValidationError> = validationResult(req);
	const file = req.file;

	if (file !== undefined) {
		const tempPath: string = file.path;
		if (errors.isEmpty()) {
			const ext: string = extname(file.originalname).toLowerCase();
			const imgUrl: string = await randomFilename();
			const targetPath: string = resolve(`uploads/${imgUrl + ext}`);

			await fs.rename(tempPath, targetPath);

			const image = await new ImageModel({
				title: req.body.title,
				description: req.body.description,
				filename: imgUrl + ext,
				createdAt: new Date()
			}).save();

			return res.json('/gallery/' + image.uniqueId);
		}

		await fs.unlink(tempPath);
		const message: Errors = getErrorMessages(errors.array());
		return res.json(message);
	}

	const message: Errors = getErrorMessages(errors.array());
	return res.json(message);
};

export const gallery: Direction = async (_req, res) => {
	const images = await ImageModel
		.find()
		.sort({ createdAt: -1 })
		.lean({ virtuals: true });

	return res.json({ images });
};
