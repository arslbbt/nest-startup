import { BaseController } from '../../common/base/base.controller';
import { Controller } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController extends BaseController {
    constructor(protected readonly itemsService: ItemsService){
        super(itemsService);
    }
}
