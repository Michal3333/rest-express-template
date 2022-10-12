import { Request, Response } from 'express';
import ParamsWithId from '../../interfaces/paramsWithId';
import Activity from './activity.model';

export const findAll = async (
  req: Request,
  res: Response<Activity[]>,
) => {
  res.json([]);
};

export const findOne = async (
  req: Request<ParamsWithId>,
  res: Response<Activity>,
) => {
  res.json({
    name: 'test',
    value: 1,
  });
};
