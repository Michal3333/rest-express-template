import { Request, Response, NextFunction } from 'express';
import { withTryCatch } from './errorHandler.middleware';
import { RequestCheckConfig } from './middleware.types';

const checkRequestData = (config: RequestCheckConfig) => withTryCatch(async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (config.body) {
    req.body = await config.body.parseAsync(req.body);
  }
  if (config.params) {
    req.params = await config.params.parseAsync(req.params);
  }
  if (config.query) {
    req.query = await config.query.parseAsync(req.query);
  }
  next();
});

export default checkRequestData;
