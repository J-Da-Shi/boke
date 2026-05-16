import { Controller, Get } from '@nestjs/common'
import { DataService } from '../data/data.service'

@Controller('works')
export class WorksController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  listWorks() {
    return this.dataService.listWorks()
  }
}
