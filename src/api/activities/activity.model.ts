import { z } from 'zod';

const Activity = z.object({
  name: z.string().min(1),
  value: z.number().min(1),
});

type Activity = z.infer<typeof Activity>;

export default Activity;
