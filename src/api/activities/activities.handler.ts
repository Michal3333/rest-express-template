import { Request, Response } from 'express';
import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';
import ParamsWithId from '../../interfaces/paramsWithId';
import { injectable, inject } from '../../utils/dependencyInjection/injectionDecorator';
import Activity, { ActivityWithId } from './activities.model';

@injectable()
class ActivityHandler {
  private activityRepository: ActivityRepositoryInterface;

  constructor(
  @inject('ActivityRepository') activityRepository?: ActivityRepositoryInterface,
  ) {
    if (!activityRepository) {
      throw Error('No UserRepository provided or injected.');
    }
    this.activityRepository = activityRepository;
  }

  public findAll = async (
    req: Request,
    res: Response<ActivityWithId[]>,
  ) => {
    const activities = await this.activityRepository.getAllActivities();
    res.json(activities);
  };

  public findOne = async (
    req: Request<ParamsWithId>,
    res: Response<Activity | null>,
  ) => {
    const activity = await this.activityRepository.getActivityById(req.params.id);
    res.json(activity);
  };

  public createOne = async (
    req: Request<{}, {}, Activity>,
    res: Response<ActivityWithId>,
  ) => {
    const result = await this.activityRepository.createActivities(req.body);
    res.json(result);
  };
}

export default ActivityHandler;
