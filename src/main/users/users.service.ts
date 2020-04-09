import { BaseService } from '../../common/base/base.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users';
import { PaginateModel } from 'mongoose';

@Injectable()
export class UsersService extends BaseService {
    constructor (@InjectModel('Users') protected readonly model:PaginateModel<Users>){
        super(model);
    }    
    
    async findByEmail(email: string): Promise<Users | undefined> {
        return this.model.findOne({"email": email});
    }
}
