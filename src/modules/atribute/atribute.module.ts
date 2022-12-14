import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configs/database/database.module';
import { AtributeProvider } from './atribute.provider';
import { AtributeRepository } from './atribute.repository';
import { AtributeService } from './atribute.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [AtributeService, AtributeRepository, ...AtributeProvider],
  exports: [AtributeService],
})
export class AtributeModule { }
