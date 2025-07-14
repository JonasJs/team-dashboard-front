import { z } from 'zod';

export type Env = z.infer<typeof envSchema>;

export const envSchema = z.object({
  API_BASE_URL: z.string().default('http://localhost:3001'),
});

const _env = envSchema.safeParse({
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
});

if (!_env.success) {
  console.error('Invalid envrioment variables: ', _env.error);

  throw new Error('Invalid envrioment variables.');
}

export const env = _env.data;
