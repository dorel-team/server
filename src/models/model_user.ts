import { Schema, model, Model, Document, SchemaDefinition } from 'mongoose';
import { IUserModel } from '../interfaces/IModel';



const definition: SchemaDefinition =
{
    uid: String,
    email: String,
    avatar: String,
    userName: String,
    personalInfo:
    {
        birthDate: { type: Date, default: Date.now() },
        adress: String
    }
};

const userSchema: Schema<IUserModel> = new Schema(definition);



export const userModel: Model<IUserModel, {}> = model<IUserModel>('SerialFavorit', userSchema, 'collection_users');

// export const userModel = model('SerialFavorit', userSchema, 'collection_users');

