
import Image from '../models/Image.js';

export const getImages = async () => {
	const images = await Image
		.find()
		.sort({ views: 1 })
		.limit(3)
		.lean({ virtuals: true });

	return images;
};
