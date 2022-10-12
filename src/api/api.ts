import { Router } from 'express';
import activityRouter from './activities/activities.routes';

const router = Router();

router.use('/activities', activityRouter);

export default router;
