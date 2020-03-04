import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { Cat } from './cat.model';
import { CatsService } from './cats.service';

@Crud({
  model: {
    type: Cat,
  },
})
@ApiTags('Books')
@Controller('cats')
export class CatsController {
  constructor(private readonly service: CatsService) {}
}
