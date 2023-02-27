import { config } from 'dotenv';
config();

export const NODE_ENV = process.env.NODE_ENV;

export const JWT_CONFIG = {
  SALT_ROUNDS: +process.env.SALT_ROUNDS || 12,
  SECRET: process.env.TOKEN_SECRET,
  EXPIRED_IN: process.env.TOKEN_EXPIRED_IN,
  REFRESH_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_EXPIRED_IN: process.env.REFRESH_TOKEN_EXPIRED_IN,
};

export const DATABASE_CONFIG = {
  TYPE: process.env.DB_TYPE || 'mysql',
  HOST: process.env.DB_HOST || 'localhost',
  PORT: +process.env.DB_PORT || 3306,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
};

export const REDIS_CONFIG = {
  REDIS_URI: process.env.REDIS_URI,
};

export const MINIO_S3_CONFIG = {
  ACCESS_KEY_ID: process.env.MINIO_ACCESS_KEY_ID || '',
  SECRET_KEY: process.env.MINIO_SECRET_KEY || '',
  API_PATH: process.env.MINIO_API_PATH || '',
  BUCKET: process.env.MINIO_BUCKET || '',
};

export const METADATA_CONFIG = {
  DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD || '',
};
