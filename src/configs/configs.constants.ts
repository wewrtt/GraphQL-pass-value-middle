import { config } from 'dotenv';
config();

export const databaseConfig = {
  type: process.env.DB_TYPE,
  database: process.env.MYSQL_DATABASE_NAME,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  synchronize: process.env.DB_SYNCHRONIZE,
};

export const appConfig = {
  port: process.env.PORT,
};

export const bcryptConfig = {
  saltRound: process.env.BCRYPT_SALT_ROUNDS as unknown as number,
};

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'test',
  expiresIn: process.env.JWT_EXPIRES_IN || 12,
};

export const facebookConfig = {
  id: process.env.FACEBOOK_ID,
  secret: process.env.FACEBOOK_SECRET,
};

export const googleConfig = {
  id: process.env.GOOGLE_ID,
  secret: process.env.GOOGLE_SECRET,
};

export const awsBucket = {
  avatarsCategory: process.env.AVATARCATEGORY,
  imgProduct: process.env.IMGPRODUCT,
}

