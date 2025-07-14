import ky from 'ky';

import { env } from '@/config/environment';

const API_URL = env.API_BASE_URL;

export const api = ky.create({
  prefixUrl: API_URL,
});
