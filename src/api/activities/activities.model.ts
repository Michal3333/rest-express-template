import { z } from 'zod';
import { Types } from 'mongoose';

const Activity = z.object({
  name: z.string().min(1),
  comment: z.string().min(1),
  value: z.number().min(1),
});

type Activity = z.infer<typeof Activity>;

export type ActivityWithId = Activity & {
  _id: Types.ObjectId
};

export default Activity;
