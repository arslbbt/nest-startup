import { BaseService } from '../../common/base/base.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { PaginateModel } from 'mongoose';

@Injectable()
export class ItemsService extends BaseService {
    constructor (@InjectModel('Item') protected readonly itemModel:PaginateModel<Item>){
        super(itemModel);
    }    
}
