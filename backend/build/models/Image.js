import { Schema, model } from 'mongoose';
import MLV from 'mongoose-lean-virtuals';
import { extname } from 'path';
const ImageSchema = new Schema({
    title: { type: String, required: true, allowNull: false },
    description: String,
    filename: String,
    views: { type: Number, default: 0 },
    createdAt: Date
});
ImageSchema.plugin(MLV);
ImageSchema.virtual('uniqueId').get(function () {
    return this.filename.replace(extname(this.filename), '');
});
export const ImageModel = model('Image', ImageSchema);
