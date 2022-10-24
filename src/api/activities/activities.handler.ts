import { Request, Response } from 'express';
import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';
import ParamsWithId from '../../interfaces/paramsWithId';
import Activity, { ActivityWithId } from './activities.model';

const createActivityHandler = (dbRepository: ActivityRepositoryInterface) => ({
  findAll: async (
    req: Request,
    res: Response<ActivityWithId[]>,
  ) => {
    const activities = await dbRepository.getAllActivities();
    res.json(activities);
  },

  findOne: async (
    req: Request<ParamsWithId>,
    res: Response<Activity | null>,
  ) => {
    const activity = await dbRepository.getActivityById(req.params.id);
    res.json(activity);
  },

  createOne: async (
    req: Request<{}, {}, Activity>,
    res: Response<ActivityWithId>,
  ) => {
    const result = await dbRepository.createActivities(req.body);
    res.json(result);
  },

});

export default createActivityHandler;
