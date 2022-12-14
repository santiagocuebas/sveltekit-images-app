
import { Schema, model } from 'mongoose';
import MLV from 'mongoose-lean-virtuals';
import { extname } from 'path';
import { Image } from '../types.js';

const imageSchema = new Schema<Image>({
	title: { type: String, required: true, allowNull: false },
	description: String,
	filename: String,
	views: { type: Number, default: 0 },
	createdAt: Date
});

imageSchema.plugin(MLV);

imageSchema.virtual('uniqueId').get(function (this: { filename: string }): string {
	return this.filename.replace(extname(this.filename), '');
});

export default model('Image', imageSchema);
