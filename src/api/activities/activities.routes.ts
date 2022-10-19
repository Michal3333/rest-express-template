import { Router } from 'express';
import ParamsWithId from '../../interfaces/paramsWithId';
import checkRequestData from '../../middlewares/checkRequestData.middleware';
import { withTryCatch } from '../../middlewares/errorHandler.middleware';
import * as ActivityHandler from './activities.handler';
import Activity from './activities.model';

const router = Router();

router.get('/', withTryCatch(ActivityHandler.findAll));
router.get('/:id', checkRequestData({ params: ParamsWithId }), withTryCatch(ActivityHandler.findOne));
router.put('/', checkRequestData({ body: Activity }), withTryCatch(ActivityHandler.createOne));
export default router;
