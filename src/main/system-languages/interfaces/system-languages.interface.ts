import { Document } from 'mongoose';

export interface SystemLanguages extends Document {
    id?: string;
    name: string;
    description?: string;
    qty: number;
}
