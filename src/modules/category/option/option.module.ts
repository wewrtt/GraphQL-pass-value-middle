import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configs/database/database.module';
import { OptionProvider } from './option.provider';
import { OptionRepository } from './option.repository';
import { OptionService } from './option.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [OptionService, OptionRepository, ...OptionProvider],
  exports: [OptionService],
})
export class OptionModule { }
