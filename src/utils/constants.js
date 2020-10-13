export const IS_DEV = process.env.NODE_ENV !== 'production';
export const BASE_URL = IS_DEV ? '/dev/api' : '/api';
