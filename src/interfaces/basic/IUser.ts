export interface IPersonalInfo
{
    birthDate: Date;
    address: string;
}


export interface IUser
{
    userName: string;
    email: string;
    avatar?: string;
    personalInfo?: IPersonalInfo;
}

export function IsUser(payload: any): payload is IUser
{
    return payload
        && payload.userName
        && typeof payload.userName === 'string'
        && payload.email
        && typeof payload.email === 'string';
}
