import { model, Schema } from 'mongoose';
import Activity from './activities.model';
import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';

const ActivitySchema = new Schema<Activity>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  comment: { type: String, required: false },
});

class ActivityRepository implements ActivityRepositoryInterface {
  private activityModel = model<Activity>('Activity', ActivitySchema);

  public getActivityById = async (id: string) => {
    const activity = await this.activityModel.findById(id);
    return activity;
  };

  public getAllActivities = async () => {
    const activities = await this.activityModel.find();
    return activities;
  };

  public createActivities = async (activity: Activity) => {
    const result = await this.activityModel.create(activity);
    return result;
  };
}

export default ActivityRepository;
