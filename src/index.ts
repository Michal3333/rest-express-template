import app from './app';
import connectToDb from './utils/dbConnect';

const port = process.env.PORT || 5000;
const connectionString = process.env.MONGO || 'aa';

const startServer = async () => {
  try {
    await connectToDb(connectionString);
    /* eslint-disable no-console */
    console.log('connected to DB');
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
