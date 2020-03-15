import {Document} from 'mongoose';

export interface IPersonalInfoModel
{
    birthDate: Date,
    address: string
}


export interface IUserModel extends Document
{
    userName: string,
    email: string,
    avatar?: string,
    personalInfo?: IPersonalInfoModel,
}