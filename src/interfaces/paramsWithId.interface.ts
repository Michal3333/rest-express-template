import { z } from 'zod';

const ParamsWithId = z.object({
  id: z.string().min(1),
});
type ParamsWithId = z.infer<typeof ParamsWithId>;

export default ParamsWithId;
