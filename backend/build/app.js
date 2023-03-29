import express from 'express';
import morgan from 'morgan';
import multer from 'multer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Global Variables
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
// Uploads Folder
app.use(multer({ dest: join(__dirname, '../uploads/temp') }).single('image'));
app.use('/uploads', express.static(join(__dirname, '../uploads')));
// Routes
app.use('/api', routes);
export default app;
