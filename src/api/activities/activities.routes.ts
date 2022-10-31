import { Router } from 'express';
import ParamsWithId from '../../interfaces/paramsWithId';
import checkRequestData from '../../middlewares/checkRequestData.middleware';
import { withTryCatch } from '../../middlewares/errorHandler.middleware';
import Activity from './activities.model';
import ActivityHandler from './activities.handler';

const createActivitiesRouter = () => {
  const router = Router();
  const activityHandler = new ActivityHandler();

  router.get('/', withTryCatch(activityHandler.findAll));
  router.get('/:id', checkRequestData({ params: ParamsWithId }), withTryCatch(activityHandler.findOne));
  router.put('/', checkRequestData({ body: Activity }), withTryCatch(activityHandler.createOne));
  return router;
};

export default createActivitiesRouter;
