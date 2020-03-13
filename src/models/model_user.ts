import { Schema, model } from 'mongoose';

const userSchema: Schema = new Schema(
    {
        uid: String,
        email: String,
        avatar: String,
        personal_info: String,
        user_name: String
    })



export const userModel = model('SerialFavorit', userSchema, 'collection_users');
// export const userModel = model('SerialFavorit', userSchema, 'collection_users');
