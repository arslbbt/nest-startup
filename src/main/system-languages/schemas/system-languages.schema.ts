import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const SystemLanguagesSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    description: String
});

SystemLanguagesSchema.plugin(mongoosePaginate);
