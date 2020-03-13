import { IPersonalInfoModel, IUserModel } from "./IModel";

export interface IPersonalInfo
{
    birthDate: IPersonalInfoModel['birthDate'],
    address: IPersonalInfoModel['address']
}


export interface IUser
{
    uid: IUserModel['uid'],
    userName: IUserModel['userName'],
    email: IUserModel['userName'],
    avatar?: IUserModel['avatar'],
    personalInfo?: IPersonalInfo,
}