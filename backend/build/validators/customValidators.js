import { extname } from 'path';
import { Ext } from '../enums.js';
const isUndefined = (param) => {
    return param !== undefined;
};
const isValidExtension = (param) => {
    const ext = extname(param).toLowerCase();
    const values = Object.values(Ext);
    return values.includes(ext);
};
export const imageValidator = (_value, { req }) => {
    const file = req.file;
    if (!isUndefined(file) && !isValidExtension(file.originalname)) {
        return false;
    }
    return true;
};
