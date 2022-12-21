import {
  BaseEntity as TypeOrmBaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class BaseEntity extends TypeOrmBaseEntity {
  @ApiProperty({ example: 11213213123, description: 'The id of the product' })
  @Field((type) => Int)
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  @Field()
  deletedAt: Date;

  @Column({ nullable: true })
  @Field()
  createdBy: string;

  @Column({ nullable: true })
  @Field()
  updateBy: string;
}
