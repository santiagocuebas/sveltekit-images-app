import { validationResult } from 'express-validator';
import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { randomFilename } from '../libs/randomFilename.js';
import { getErrorMessages } from '../libs/errorMessage.js';
import { ImageModel } from '../models/Image.js';
import { getSidebar } from '../sidebar/index.js';
export const index = async (_req, res) => {
    // Find images
    const images = await ImageModel
        .find()
        .sort({ createdAt: -1 })
        .limit(3)
        .lean({ virtuals: true });
    // Find stats for the sidebar
    const { stats, viewedImages, recentComments } = await getSidebar();
    return res.json({ images, stats, viewedImages, recentComments });
};
export const upload = async (req, res) => {
    // Checking validation errors
    const errors = validationResult(req);
    const tempPath = req.file?.path;
    if (req.file !== undefined && errors.isEmpty()) {
        const ext = extname(req.file.originalname).toLowerCase();
        const imgUrl = await randomFilename();
        const targetPath = resolve(`uploads/${imgUrl + ext}`);
        // Rename target path
        await fs.rename(tempPath, targetPath);
        // Create a new image
        const image = await new ImageModel({
            title: req.body.title,
            description: req.body.description,
            filename: imgUrl + ext,
            createdAt: new Date()
        }).save();
        return res.json('/gallery/' + image.uniqueId);
    }
    // Generate message errors
    if (tempPath !== undefined)
        await fs.unlink(tempPath);
    const message = getErrorMessages(errors.array());
    return res.json(message);
};
export const gallery = async (_req, res) => {
    // Find images
    const images = await ImageModel
        .find()
        .sort({ createdAt: -1 })
        .lean({ virtuals: true });
    return res.json({ images });
};
