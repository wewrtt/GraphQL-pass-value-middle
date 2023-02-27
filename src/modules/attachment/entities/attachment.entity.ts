import { Column, Entity } from 'typeorm';
import { ATTACHMENT_TYPE, ATTACHMENT_CONST } from '../constants/attachment.constant';
import { BaseEntity } from '../../../database/base/entity.base';

@Entity({ name: ATTACHMENT_CONST.MODEL_NAME })
export class AttachmentEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  name: string;

  @Column({ length: 255, default: null })
  key: string;

  @Column({ length: 255, default: ATTACHMENT_TYPE.OTHER })
  type: string;
}
