
import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
	imageCtrl as image,
	homeCtrl as home
} from '../controllers/index.js';
import { schemaUploads, schemaComment } from '../validators/schemasValidators.js';

const router = Router();

router.get('/index', home.index);

router.post(
	'/upload',
	checkSchema(schemaUploads),
	home.upload
);

router.get('/gallery', home.gallery);

router.get('/gallery/:imageId', image.image);

router.post(
	'/:imageId/comment',
	checkSchema(schemaComment),
	image.comment
);

router.delete('/:imageId', image.deleteImage);

export default router;