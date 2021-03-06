import { Schema, model, Model, Document, SchemaDefinition } from 'mongoose';
import { IUserModel } from '../interfaces/models/IModelUser';



const definition: SchemaDefinition =
{
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: String,
    personalInfo:
    {
        birthDate: { type: Date, default: Date.now() },
        adress: String
    }
};

const userSchema: Schema<IUserModel> = new Schema(definition);

export const userModel: Model<IUserModel, {}> = model<IUserModel>('UsersCollection', userSchema, 'collection_users');
