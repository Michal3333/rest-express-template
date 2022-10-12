import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export type InnerFunction = (
  req: Request<any>,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export type RequestCheckConfig = {
  body?: AnyZodObject,
  params?: AnyZodObject,
  query?: AnyZodObject,
};
