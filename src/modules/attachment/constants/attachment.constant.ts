import { swaggerSchemaExample } from '../../../common/utils/swagger.util';

export const ATTACHMENT_CONST = {
  MODEL_NAME: 'attachment',
  MODEL_PROVIDER: 'ATTACHMENT_MODEL',
};

export enum ATTACHMENT_TYPE {
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
  HEIC = 'heic',
  WEBP = 'webp',
  GIF = 'gif',
  OTHER = 'other',
}

export const ATTACHMENT_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample({
    example: {
      data: {
        key: 'uploader/attachment/edbb4d5a-d4b2-4a41-834c-094bc6b35566/mty2njkzmte1mtezng_original.jpg',
        author: '18',
        original_name: 'Screenshot 2022-08-19 170603.png',
        type: 'avatar',
        deleted_at: null,
        id: '24',
        created_at: '2022-10-28T04:25:51.205Z',
        updated_at: '2022-10-28T04:25:51.205Z',
      },
    },
    description: 'API for health check',
  }),

  GET_LIST_SUCCESS: swaggerSchemaExample({
    example: {
      data: [
        {
          id: '4',
          created_at: '2022-10-28T06:24:50.839Z',
          updated_at: '2022-10-28T06:24:50.839Z',
          deleted_at: null,
          original_name: 'picture3.jpg',
          key: 'uploader/attachment/8af3abfb-0b7a-4367-a662-7de459f677e4/mty2njkzodi5madq1mw_original.jpg',
          type: 'thumbnail',
          author: '3',
        },
      ],
      total: 1,
      page: 1,
      pageSize: 20,
      totalPage: 1,
    },
    description: 'Get list success',
  }),

  BAD_REQUEST_EXCEPTION: swaggerSchemaExample({
    example: {
      message: 'bad exception',
      code: 'sys00001',
      statusCode: 400,
    },
    description: 'bad request exception',
  }),

  UPDATE_SUCCESS: swaggerSchemaExample({
    example: {
      data: {
        success: true,
      },
    },
    description: 'Update success',
  }),

  DELETE_SUCCESS: swaggerSchemaExample({
    example: {
      data: {
        success: true,
      },
    },
    description: 'Delete success',
  }),
};
