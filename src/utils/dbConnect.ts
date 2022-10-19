import mongoose from 'mongoose';

const connectToDb = async (connectionString: string) => {
  await mongoose.connect(connectionString);
};

export default connectToDb;
