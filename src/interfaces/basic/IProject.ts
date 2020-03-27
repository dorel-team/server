export interface IProject
{
    projectName: string;
    clientName: string;
    members: string[];
}

export function IsProject(payload: any): payload is IProject
{
    return payload
    && payload.userName
    && typeof payload.userName === 'string'
    && payload.email
    && typeof payload.email === 'string';
}
