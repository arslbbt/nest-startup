import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const ItemSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    description: String
});

ItemSchema.plugin(mongoosePaginate);
