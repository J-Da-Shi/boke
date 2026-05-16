import { Module } from '@nestjs/common'
import { DataModule } from '../data/data.module'
import { WorksController } from './works.controller'

@Module({
  imports: [DataModule],
  controllers: [WorksController],
})
export class WorksModule {}
