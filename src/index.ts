/* eslint-disable no-console */
import * as dotenv from 'dotenv';
import createApp from './app';
import Container from './utils/dependenciesControl/injectionContainer';
import MongoCreator from './utils/depenedencyCreators.ts/mongoCreator';

dotenv.config();

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await Container.initDependencyContainer(new MongoCreator());
    const app = createApp();

    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
