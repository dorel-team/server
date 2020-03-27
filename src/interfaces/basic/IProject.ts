export interface IProject
{
    projectName: string;
    clientName: string;
    members: string[];
}


export function IsProject(payload: any): payload is IProject
{
    return payload
        && payload.projectName
        && typeof payload.projectName === 'string'
        && payload.clientName
        && typeof payload.clientName === 'string'
        && payload.members
        && Array.isArray(payload.members);
}
