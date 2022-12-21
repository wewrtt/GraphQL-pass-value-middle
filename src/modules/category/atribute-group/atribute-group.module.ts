import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/configs/database/database.module';
import { AtributeGroupProvider } from './atribute-group.provider';
import { AtributeGroupRepository } from './atribute-group.repository';
import { AtributeGroupService } from './atribute-group.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [AtributeGroupService, AtributeGroupRepository, ...AtributeGroupProvider],
  exports: [AtributeGroupService],
})
export class AtributeGroupModule { }
