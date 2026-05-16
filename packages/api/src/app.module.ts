import { Module } from '@nestjs/common'
import { DataModule } from './data/data.module'
import { PostsModule } from './posts/posts.module'
import { SiteModule } from './site/site.module'
import { WorksModule } from './works/works.module'

@Module({
  imports: [DataModule, PostsModule, SiteModule, WorksModule],
})
export class AppModule {}
