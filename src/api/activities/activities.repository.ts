import { model, Schema } from 'mongoose';
import Activity from './activities.model';
import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';

const ActivitySchema = new Schema<Activity>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  comment: { type: String, required: false },
});

export const ActivityModel = model<Activity>('Activity', ActivitySchema);

const ActivityRepository: ActivityRepositoryInterface = {
  getAllActivities: async () => {
    const activities = await ActivityModel.find();
    return activities;
  },

  getActivityById: async (id: string) => {
    const activity = await ActivityModel.findById(id);
    return activity;
  },

  createActivities: async (activity: Activity) => {
    const result = await ActivityModel.create(activity);
    return result;
  },
};

export default ActivityRepository;
