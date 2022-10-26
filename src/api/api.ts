import { Router } from 'express';
import ActivityRepositoryInterface from '../interfaces/ActivitiesRepository.interface';
import createActivitiesRouter from './activities/activities.routes';

const createApi = (dbRepository: ActivityRepositoryInterface) => {
  const router = Router();
  router.use('/activities', createActivitiesRouter(dbRepository));
  return router;
};

export default createApi;
