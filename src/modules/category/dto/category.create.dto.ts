import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @Field({ nullable: false })
  name: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  @Field({ nullable: false })
  @IsNotEmpty()
  img: string;
}
