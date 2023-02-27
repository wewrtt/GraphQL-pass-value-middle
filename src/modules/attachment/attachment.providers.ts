import { DataSource } from 'typeorm';
import { ATTACHMENT_CONST } from './constants/attachment.constant';
import { AttachmentEntity } from './entities/attachment.entity';

export const attachmentProviders = [
  {
    provide: ATTACHMENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(AttachmentEntity),
    inject: ['DATA_SOURCE'],
  },
];
