import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common'
import { DataService } from '../data/data.service'

@Controller('posts')
export class PostsController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  listPosts(@Query('search') search?: string, @Query('category') category?: string, @Query('tag') tag?: string) {
    return this.dataService.listPosts({ search, category, tag })
  }

  @Get(':slug')
  getPost(@Param('slug') slug: string) {
    const post = this.dataService.getPost(slug)
    if (!post) {
      throw new NotFoundException(`Post "${slug}" was not found`)
    }

    return post
  }
}
