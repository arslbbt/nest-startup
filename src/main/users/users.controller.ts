import { BaseController } from '../../common/base/base.controller';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users1')
export class UsersController extends BaseController {
    constructor(protected readonly Service: UsersService){
        super(Service);
    }
}
