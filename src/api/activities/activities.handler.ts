import { Request, Response } from 'express';
import ParamsWithId from '../../interfaces/paramsWithId';
import Activity, { ActivityWithId } from './activities.model';
import * as ActivityRepository from './activities.repository';

export const findAll = async (
  req: Request,
  res: Response<ActivityWithId[]>,
) => {
  const activities = await ActivityRepository.getAllActivities();
  res.json(activities);
};

export const findOne = async (
  req: Request<ParamsWithId>,
  res: Response<Activity | null>,
) => {
  const activity = await ActivityRepository.getActivityById(req.params.id);
  res.json(activity);
};

export const createOne = async (
  req: Request<{}, {}, Activity>,
  res: Response<ActivityWithId>,
) => {
  const result = await ActivityRepository.createActivities(req.body);
  res.json(result);
};
