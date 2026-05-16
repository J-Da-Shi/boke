import { Module } from '@nestjs/common'
import { DataModule } from '../data/data.module'
import { PostsController } from './posts.controller'

@Module({
  imports: [DataModule],
  controllers: [PostsController],
})
export class PostsModule {}
