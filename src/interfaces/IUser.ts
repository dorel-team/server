
export interface IPersonalInfo
{
    birthDate:Date,
    adress:string
}


export interface IUser
{
    uid: string,
    user_name: string,
    email: string,
    avatar?: string,
    personal_info?: IPersonalInfo,
}