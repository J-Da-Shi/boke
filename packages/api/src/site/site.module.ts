import { Module } from '@nestjs/common'
import { DataModule } from '../data/data.module'
import { SiteController } from './site.controller'

@Module({
  imports: [DataModule],
  controllers: [SiteController],
})
export class SiteModule {}
