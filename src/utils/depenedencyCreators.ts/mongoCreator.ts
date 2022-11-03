import mongoose from 'mongoose';
import ActivityRepository from '../../api/activities/activities.repository';
import { DependencyCreator } from '../dependenciesControl/injectionContainer';

class MongoCreator implements DependencyCreator {
  private connectionString = process.env.MONGO || '';

  private connectToDb = async () => {
    /* eslint-disable no-console */
    await mongoose.connect(this.connectionString);
    console.log('connected to mongo');
  };

  public create = async () => {
    await this.connectToDb();

    const activityRepository = new ActivityRepository();
    return {
      ActivityRepository: activityRepository,
    };
  };
}

export default MongoCreator;
