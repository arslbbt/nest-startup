import { Document } from 'mongoose';

export interface Users extends Document {
    password: string;
    email: string;
}