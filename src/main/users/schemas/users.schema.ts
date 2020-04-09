import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const UsersSchema = new mongoose.Schema({
    email: String,
    password: String,
});

UsersSchema.plugin(mongoosePaginate);
