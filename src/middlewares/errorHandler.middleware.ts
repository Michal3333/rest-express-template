import { Request, Response, NextFunction } from 'express';
import { InnerFunction } from './middleware.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};

export const withTryCatch = (
  innerFunction: InnerFunction,
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await innerFunction(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default errorHandler;
