import { Router } from 'express';
import createActivitiesRouter from './activities/activities.routes';

const createApi = () => {
  const router = Router();
  router.use('/activities', createActivitiesRouter());
  return router;
};

export default createApi;
