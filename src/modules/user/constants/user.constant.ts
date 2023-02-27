import { swaggerSchemaExample } from '../../../common/utils/swagger.util';

export const USER_CONST = {
  MODEL_NAME: 'user',
  MODEL_PROVIDER: 'USER_MODEL',
};

export const USER_TYPE = {
  USER_ADMIN: 'admin',
  USER_DRIVER: 'driver',
  USER_STAFF: 'staff',
};

export const USER_EXCEPTION_MESSAGE = {
  USER_NOT_FOUND: 'User is not existed',
  USER_ALREADY_EXISTS: 'User already exists',
};

export const USER_SWAGGER_RESPONSE = {
  GET_USER_SUCCESS: swaggerSchemaExample({
    example: {
      id: 1,
      phone_number: '0342817391',
      created_at: '2023-02-10T07:51:23.593Z',
      updated_at: '2023-02-10T07:51:23.593Z',
      deleted_at: null,
      password: 'null',
      type: 'admin',
      is_adminstrator: false,
      sid: 'asjjdashk',
      full_name: 'aaa',
      email: 'long@gmail.com',
      profile_img: 'asdasdasds',
      status: true,
      department_id: 1,
    },
    description: 'Get user success',
  }),

  CREATE_USER_SUCCESS: swaggerSchemaExample({
    example: {
      messsgae: 'user_created',
    },
    description: 'Create user success',
  }),
};
