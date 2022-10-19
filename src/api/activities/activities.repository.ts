import { model, Schema } from 'mongoose';
import Activity from './activities.model';

const ActivitySchema = new Schema<Activity>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  comment: { type: String, required: false },
});

const ActivityModel = model<Activity>('Activity', ActivitySchema);

export const getAllActivities = async () => {
  const activities = await ActivityModel.find();
  return activities;
};

export const getActivityById = async (id: string) => {
  const activity = await ActivityModel.findById(id);
  return activity;
};

export const createActivities = async (activity: Activity) => {
  const result = await ActivityModel.create(activity);
  return result;
};
