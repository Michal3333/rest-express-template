import { Router } from 'express';
import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';
import ParamsWithId from '../../interfaces/paramsWithId';
import checkRequestData from '../../middlewares/checkRequestData.middleware';
import { withTryCatch } from '../../middlewares/errorHandler.middleware';
import Activity from './activities.model';
import createActivityHandler from './activities.handler';

const createActivitiesRouter = (dbRepository: ActivityRepositoryInterface) => {
  const router = Router();
  const activityHandler = createActivityHandler(dbRepository);

  router.get('/', withTryCatch(activityHandler.findAll));
  router.get('/:id', checkRequestData({ params: ParamsWithId }), withTryCatch(activityHandler.findOne));
  router.put('/', checkRequestData({ body: Activity }), withTryCatch(activityHandler.createOne));
  return router;
};

export default createActivitiesRouter;
