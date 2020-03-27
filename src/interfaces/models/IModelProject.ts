import { Document } from 'mongoose';
import { IUser, IPersonalInfo } from '../basic/IUser';

export interface IPersonalInfoModel
{
    birthDate: IPersonalInfo['birthDate'],
    address: IPersonalInfo['address']
}
export interface IPersonalInfoModel
{
    birthDate: Date;
    address: string;
}


// note that these interfaces must be based on IUser, IProjects, etc.
export interface IUserModel extends Document
{
    userName: IUser['userName'];
    email: IUser['userName'];
    avatar?: IUser['avatar'];
    personalInfo?: IPersonalInfoModel;
}


export interface IProjectModel extends Document
{
    userName: string;
    email: string;
    avatar?: string;
    personalInfo?: IPersonalInfoModel;
}

