import { Controller, Get } from '@nestjs/common'
import { DataService } from '../data/data.service'

@Controller('site')
export class SiteController {
  constructor(private readonly dataService: DataService) {}

  @Get('summary')
  getSummary() {
    return this.dataService.getSummary()
  }

  @Get('categories')
  listCategories() {
    return this.dataService.listCategories()
  }

  @Get('tags')
  listTags() {
    return this.dataService.listTags()
  }
}
