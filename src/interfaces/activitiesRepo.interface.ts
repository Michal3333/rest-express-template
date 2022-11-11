import Activity, { ActivityWithId } from '../api/activities/activities.model';

export default interface ActivityRepositoryInterface {
  getAllActivities: () => Promise<ActivityWithId[]>,
  getActivityById: (id: string) => Promise<ActivityWithId | null>,
  createActivities: (activity: Activity) => Promise<ActivityWithId>,
}
