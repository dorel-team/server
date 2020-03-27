import { Document } from 'mongoose';
import { IProject } from '../basic/IProject';

// export interface IPersonalInfoModel
// {
//     birthDate: IPersonalInfo['birthDate'],
//     address: IPersonalInfo['address']
// }


// note that these interfaces must be based on IUser, IProjects, etc.
export interface IProjectModel extends Document
{
    projectName: IProject['projectName'];
    clientName: IProject['clientName'];
    members: IProject['members'];
}
