import createApp from './app';
import connectToDb from './utils/dbConnect';
import ActivityRepositoryInterface from './interfaces/ActivitiesRepository.interface';
import ActivityRepository from './api/activities/activities.repository';

const port = process.env.PORT || 5000;
const connectionString = process.env.MONGO || '';

const startServer = async () => {
  try {
    await connectToDb(connectionString);
    /* eslint-disable no-console */
    console.log('connected to DB');

    const dbRepository: ActivityRepositoryInterface = ActivityRepository;
    const app = createApp(dbRepository);

    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
    });
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
  }
};

startServer();
