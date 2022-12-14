
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

export declare type Direction = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void;

export declare interface File {
  fieldname: string,
  originalname: string,
  encoding: string,
  mimetype: string,
  destination: string,
  filename: string,
  path: string,
  size: number
}

export declare interface Image {
	title: string,
	description: string,
	filename: string,
	views: number,
  createdAt: Date,
  uniqueId: string
}

export declare interface Comment {
	imageId: Types.ObjectId,
	email: string,
	name: string,
  filename: string;
	gravatar: string,
	comment: string,
	createdAt: Date
}

export declare interface Errors {
  [index: string]: string;
}
