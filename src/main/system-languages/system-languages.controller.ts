import { BaseController } from '../../common/base/base.controller';
import { Controller, Get } from '@nestjs/common';
import { SystemLanguagesService } from './system-languages.service';

@Controller('SystemLanguages')
export class SystemLanguagesController extends BaseController {
    constructor(protected readonly service: SystemLanguagesService){
        super(service);
    }
    @Get('load')
    async findall(): Promise<any> {
        return this.service.findAll();
    }
}
