import { IPersonalInfoModel, IUserModel } from "./IModel";

export interface IPersonalInfo
{
    birthDate: IPersonalInfoModel['birthDate'],
    address: IPersonalInfoModel['address']
}


export interface IUser
{
    userName: IUserModel['userName'],
    email: IUserModel['userName'],
    avatar?: IUserModel['avatar'],
    personalInfo?: IPersonalInfo,
}

export function IsIUser(payload: any): payload is IUser
{
    return payload
    && payload.userName
    && typeof payload.userName === 'string'
    && payload.email
    && typeof payload.email === 'string';
}
