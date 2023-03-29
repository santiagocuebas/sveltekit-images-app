import { validationResult } from 'express-validator';
import fs from 'fs-extra';
import { Md5 } from 'ts-md5';
import { getErrorMessages } from '../libs/errorMessage.js';
import { ImageModel } from '../models/Image.js';
import { CommentModel } from '../models/Comment.js';
export const image = async (req, res) => {
    const image = await ImageModel
        .findOneAndUpdate({ filename: { $regex: req.params.imageId } }, { $inc: { views: 1 } })
        .lean({ virtuals: true });
    if (image !== null) {
        image.views++;
        const comments = await CommentModel
            .find({ imageId: image._id })
            .sort({ createdAt: -1 })
            .lean();
        return res.json({ image, comments });
    }
    return res.json(image);
};
export const comment = async (req, res) => {
    const errors = validationResult(req);
    const image = await ImageModel.findOne({ filename: {
            $regex: req.params.imageId
        } });
    if (errors.isEmpty() && image !== null) {
        const comment = await new CommentModel({
            imageId: image.id,
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            filename: image.filename,
            gravatar: Md5.hashStr(req.body.email),
            createdAt: new Date()
        }).save();
        return res.json(comment);
    }
    const message = getErrorMessages(errors.array());
    return res.json(message);
};
export const deleteImage = async (req, res) => {
    const image = await ImageModel.findOne({
        filename: { $regex: req.params.imageId }
    });
    if (image !== null) {
        await fs.unlink(`./uploads/${image.filename}`);
        await CommentModel.deleteMany({ imageId: image._id });
        await image.deleteOne();
        return res.json({ url: '/' });
    }
    return res.json({});
};
