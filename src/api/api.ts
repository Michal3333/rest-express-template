import { Router } from 'express';
import ActivityRepositoryInterface from '../interfaces/ActivitiesRepository.interface';
import ActivityRepository from './activities/activities.repository';

import createActivitiesRouter from './activities/activities.routes';

const router = Router();
const dbRepository: ActivityRepositoryInterface = ActivityRepository;

router.use('/activities', createActivitiesRouter(dbRepository));

export default router;
