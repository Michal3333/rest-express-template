import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import createApi from './api/api';
import notFound from './middlewares/notFound.middleware';
import errorHandler from './middlewares/errorHandler.middleware';

const createApp = () => {
  const app = express();
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use('/api', createApi());
  app.use(notFound);
  app.use(errorHandler);
  return app;
};

export default createApp;
