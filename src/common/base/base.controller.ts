import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class BaseController {

    constructor(protected readonly service){}

    /** Get All*/
    @UseGuards(JwtAuthGuard)
    @Get()
    async findall(@Query() query): Promise<any> {
        return this.service.findAll();
    }

    /** Get One*/
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id): Promise<any> {
        return this.service.findOne(id);
    }

    /** Create */
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() Dto: any): Promise<any> {
        return this.service.create(Dto);
    }

    /** Update */
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Body() Dto: any, @Param('id') id): string {
        return this.service.update(id, Dto);
    }

    /** Delete */
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id): string {
        return this.service.delete(id);
    }
}
