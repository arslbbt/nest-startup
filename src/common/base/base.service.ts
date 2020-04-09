import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
    constructor(protected modelClass) { }

    async findAll(): Promise<any> {
        return this.modelClass.paginate({})
    }

    async findOne(id: string): Promise<any> {
        return await this.modelClass.findOne({ _id: id });
    }

    async create(Dto: any): Promise<any> {
        const createdModel = new this.modelClass(Dto);
        return await createdModel.save();
    }

    async update(id: any, Dto: any, returnType?: string): Promise<any> {
        returnType = returnType ? returnType : 'updated-doc';
        if (returnType === 'updated-doc') {
            return new Promise((resolve) => {
                this.modelClass.updateOne({ _id: id }, { ...Dto }, { upsert: true }).then(() => {
                    resolve(Dto);
                })
            });
        } else {
            return await this.modelClass.updateOne({ _id: id }, Dto, { upsert: true });
        }
    }

    async delete(id: any): Promise<any> {
        return await this.modelClass.deleteOne({ _id: id });
    }
}
