/* eslint-disable no-console */
import * as dotenv from 'dotenv';
import createApp from './app';
import connectToDb from './utils/dbConnect';
import ActivityRepository from './api/activities/activities.repository';
import Container from './utils/dependencyInjection/injectionContainer';

dotenv.config();

const port = process.env.PORT || 5000;
const connectionString = process.env.MONGO || '';

const startServer = async () => {
  try {
    await connectToDb(connectionString);

    console.log('connected to DB');

    const activityRepository = new ActivityRepository();
    Container.register('ActivityRepository', activityRepository);

    const app = createApp();

    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
