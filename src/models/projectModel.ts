import { Schema, model, Model, Document, SchemaDefinition } from 'mongoose';
import { IUserModel } from '../interfaces/models/IModelUser';
import { IProjectModel } from '../interfaces/models/IModelProject';



const definition: SchemaDefinition =
{
    projectName: { type: String, required: true },
    clientName: { type: String, required: true },
    members: { type: Array, required: true }
};

const projectSchema: Schema<IUserModel> = new Schema(definition);

export const projectModel: Model<IProjectModel, {}> = model<IProjectModel>('ProjectsCollection', projectSchema, 'collection_project');
